import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from '../assets/icons/back.svg';

export default function VolunteerScreen({ navigation }) {
  const brandGreen = '#00B140';
  const [vehicle, setVehicle] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                      <BackIcon height={26} width={26}/>
                   </TouchableOpacity>
          <Text style={styles.headerTitle}>Join as Volunteer</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.introSection}>
            <Text style={styles.mainHeading}>Become a Food Hero</Text>
            <Text style={styles.subHeading}>Help us transport surplus food from events to those in need.</Text>
          </View>

          {/* Full Name */}
          <View style={styles.section}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput 
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#999"
            />
          </View>

          {/* Phone Number */}
          <View style={styles.section}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput 
              style={styles.input}
              placeholder="+91 00000 00000"
              keyboardType="phone-pad"
              placeholderTextColor="#999"
            />
          </View>

          {/* Vehicle Type Selection */}
          <View style={styles.section}>
            <Text style={styles.label}>What do you have for transport?</Text>
            <View style={styles.chipContainer}>
              {['Two Wheeler', 'Car', 'Van/SUV', 'No Vehicle'].map((item) => (
                <TouchableOpacity 
                  key={item} 
                  style={[styles.chip, vehicle === item && { borderColor: brandGreen, backgroundColor: '#E8F5E9' }]}
                  onPress={() => setVehicle(item)}
                >
                  <Text style={[styles.chipText, vehicle === item && { color: brandGreen }]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Availability */}
          <View style={styles.section}>
            <Text style={styles.label}>When are you usually free?</Text>
            <TextInput 
              style={[styles.input, styles.textArea]}
              placeholder="e.g. Weekends after 8 PM, or Weekdays during lunch hours"
              multiline
              numberOfLines={3}
              placeholderTextColor="#999"
            />
          </View>

          {/* Preferred Area */}
          <View style={styles.section}>
            <Text style={styles.label}>Preferred Service Area</Text>
            <TextInput 
              style={styles.input}
              placeholder="e.g. South Delhi, Indiranagar, etc."
              placeholderTextColor="#999"
            />
          </View>

          {/* Terms Checklist (Visual Only) */}
          <View style={styles.agreementRow}>
            <Text style={styles.agreementText}>
              I agree to maintain food hygiene standards during transport.
            </Text>
          </View>

        </ScrollView>

        {/* Submit Button */}
        <View style={styles.footer}>
          <TouchableOpacity style={[styles.submitButton, { backgroundColor: brandGreen }]}>
            <Text style={styles.submitButtonText}>Register as Volunteer</Text>
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  scrollContent: {
    padding: 20,
  },
  introSection: {
    marginBottom: 30,
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
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
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
  },
  chipText: {
    fontWeight: '600',
    color: '#555',
    fontSize: 14,
  },
  agreementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
  },
  agreementText: {
    fontSize: 13,
    color: '#666',
    flex: 1,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  svgPlaceholderSmall: {
    width: 24,
    height: 24,
    backgroundColor: '#EEE',
    borderRadius: 6,
  },
});