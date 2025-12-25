import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from '../assets/icons/back.svg';
import LocationIcon from '../assets/icons/location.svg';
import CameraIcon from '../assets/icons/camera.svg';

export default function DonateScreen({ navigation }) {
  const brandGreen = '#00B140';
  const [occasion, setOccasion] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
             <BackIcon height={26} width={26}/>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Donate Surplus Food</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <View style={{marginBottom:10, }}>
            <Text style={{color:'#737373bb'}}>Your details will be anonymous (other user cannot see)</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>What was the occasion?</Text>
            <View style={styles.chipContainer}>
              {['Wedding', 'Party', 'Meeting', 'Other'].map((item) => (
                <TouchableOpacity 
                  key={item} 
                  style={[styles.chip, occasion === item && { borderColor: brandGreen, backgroundColor: '#E8F5E9' }]}
                  onPress={() => setOccasion(item)}
                >
                  <Text style={[styles.chipText, occasion === item && { color: brandGreen }]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Food Details */}
          <View style={styles.section}>
            <Text style={styles.label}>Food Details</Text>
            <TextInput 
              style={[styles.input, styles.textArea]}
              placeholder="e.g. 5kg Veg Biryani, 20 Rotis, Pasta (approx 15 plates)"
              multiline
              numberOfLines={4}
              placeholderTextColor="#999"
            />
          </View>

          {/* Quantity & Time */}
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Feeds approx.</Text>
              <TextInput 
                style={styles.input}
                placeholder="20 People"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>
            <View style={{ width: 20 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Shelf Life (Hrs)</Text>
              <TextInput 
                style={styles.input}
                placeholder="4 Hours"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          {/* Location Info */}
          <View style={styles.section}>
            <Text style={styles.label}>Pickup Address</Text>
            <View style={styles.locationInputContainer}>
              <TextInput 
                style={[styles.input, { flex: 1, marginBottom: 0 }]}
                placeholder="Enter event venue or address"
                placeholderTextColor="#999"
              />
              <TouchableOpacity style={{backgroundColor:'#00B140', borderRadius:6, height:30, width:25, alignItems:'center', justifyContent:'center'}}>
               <LocationIcon height={10} width={10} /> 
                
              </TouchableOpacity>
            </View>
          </View>

          {/* Photo Upload Placeholder */}
          <View style={styles.section}>
            <Text style={styles.label}>Add Photos (Optional)</Text>
            <TouchableOpacity style={styles.uploadBox}>
              
              <View style={styles.svgPlaceholderLarge}>
                <CameraIcon height={24} width={24} />
              </View>
              <Text style={styles.uploadText}>Tap to upload food photos</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

        {/* Submit Button */}
        <View style={styles.footer}>
          <TouchableOpacity style={[styles.submitButton, { backgroundColor: brandGreen }]}>
            <Text style={styles.submitButtonText}>Confirm Donation</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  scrollContent: {
    padding: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    height: 4,
    gap: 8,
    marginBottom: 25,
  },
  progressLine: {
    borderRadius: 2,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
  },
  chipText: {
    fontWeight: '600',
    color: '#666',
  },
  locationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  locationPin: {
    padding: 10,
  },
  uploadBox: {
    height: 120,
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    marginTop: 8,
    color: '#999',
    fontSize: 13,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 2,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  svgPlaceholderSmall: {
    width: 20,
    height: 20,
    backgroundColor: '#CCC',
    borderRadius: 4,
  },
  svgPlaceholderLarge: {
    width: 40,
    height: 40,
    backgroundColor: '#DDD',
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center'
  },
});