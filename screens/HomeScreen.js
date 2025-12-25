import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FoodIcon from '../assets/icons/foodicon.svg';

// Placeholder for your other SVGs
import DonateIcon from '../assets/icons/donate.svg';
import VolunteerIcon from '../assets/icons/volunteer.svg';
// import BellIcon from '../assets/icons/bell.svg';

export default function HomeScreen({ navigation }) {
    const brandGreen = '#00B140';

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <FoodIcon height={35} width={35} />
                    <Text style={[styles.logoText, { color: brandGreen }]}>anumodna</Text>
                </View>
                {/* <TouchableOpacity style={styles.iconButton}>
           REPLACE WITH <BellIcon /> 
          <View style={styles.svgPlaceholder} />
        </TouchableOpacity> */}
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>

                {/* Impact Summary Card */}
                <View style={[styles.impactCard, { backgroundColor: brandGreen }]}>
                    <Text style={styles.impactTitle}>Meals Shared Today</Text>
                    <Text style={styles.impactNumber}>1,284</Text>
                    <Text style={styles.impactSubtitle}>From 12 local events</Text>
                </View>

                {/* Action Grid */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>I want to...</Text>
                    <View style={styles.actionGrid}>

                        <TouchableOpacity style={styles.actionButton} onPress={()=>navigation.navigate('Donate')}>
                            <View style={[styles.iconCircle, { backgroundColor: '#E8F5E9' }]}>

                                <View style={[styles.svgPlaceholder, { backgroundColor: brandGreen, alignItems: 'center', justifyContent: 'center' }]}>
                                    <DonateIcon height={15} width={15} />

                                </View>
                            </View>
                            <Text style={styles.actionLabel}>Donate Food</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.actionButton} onPress={()=>navigation.navigate('Volunteer')}>
                            <View style={[styles.iconCircle, { backgroundColor: '#E3F2FD' }]}>
                                <View style={[styles.svgPlaceholder, { backgroundColor: '#2196F3', alignItems: 'center', justifyContent: 'center' }]}>
                                    <VolunteerIcon height={15} width={15} />

                                </View>
                            </View>
                            <Text style={styles.actionLabel}>Volunteer</Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        height: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    logoText: {
        fontSize: 26,
        fontWeight: '800',
        letterSpacing: -1,
        textTransform: 'lowercase',
    },
    svgPlaceholder: {
        width: 24,
        height: 24,
        borderRadius: 4,
        backgroundColor: '#CCC', // Just to show where the SVG goes
    },
    impactCard: {
        margin: 20,
        padding: 24,
        borderRadius: 24,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#00B140',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
    },
    impactTitle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        opacity: 0.9,
        textTransform: 'uppercase',
    },
    impactNumber: {
        color: '#fff',
        fontSize: 48,
        fontWeight: '900',
        marginVertical: 4,
    },
    impactSubtitle: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.8,
    },
    section: {
        paddingHorizontal: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: 16,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    actionGrid: {
        flexDirection: 'row',
        gap: 16,
    },
    actionButton: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 24,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    iconCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    actionLabel: {
        fontWeight: '700',
        color: '#333',
        fontSize: 15,
    },
    eventCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 18,
        borderWidth: 1,
        borderColor: '#EEE',
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#222',
    },
    eventMeta: {
        fontSize: 13,
        color: '#777',
        marginTop: 6,
    },
    tag: {
        backgroundColor: '#E8F5E9',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        marginTop: 12,
    },
    tagText: {
        color: '#00B140',
        fontSize: 12,
        fontWeight: '800',
    }
});