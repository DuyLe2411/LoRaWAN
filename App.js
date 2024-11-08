import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Agri4Life</Text>
      </View>

      {/* Body with ScrollView */}
      <ScrollView style={styles.body}>
        {/* Environmental Index Section */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.indexContainer}>
          {[
            { title: 'Temperature', data: '25°C', icon: '🌡️' },
            { title: 'Humidity', data: '60%', icon: '💧' },
            { title: 'Light', data: '1000', icon: '🔆' },
            { title: 'Soil Humidity', data: '70%', icon: '🌱' },
            { title: 'Battery', data: '100%', icon: '🔋' },
          ].map((item, index) => (
            <View key={index} style={styles.indexItem}>
              <Text style={styles.indexIcon}>{item.icon}</Text>
              <Text style={styles.indexTitle}>{item.title}</Text>
              <Text style={styles.indexData}>{item.data}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Plant Status Section */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Plant Current Status</Text>
          <Text style={styles.statusData}>Healthy</Text>
          <Image 
            source={require('./assets/icon.png')}
            style={styles.imageLeaf}
          />
        </View>

        {/* Canopy Status Section */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Canopy Current Status</Text>
          <Text style={styles.statusData}>Open</Text>
        </View>

        {/* System Control Buttons */}
        <View style={styles.systemButton}>
          <Text style={styles.statusTitle}> System Control </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.onButton]}>
              <Text style={styles.buttonText}>ON</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.offButton]}>
              <Text style={styles.buttonText}>OFF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Irrigation Machine Control Buttons */}
        <View style={styles.systemButton}>
          <Text style={styles.statusTitle}> Irrigation Machine Control </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.onButton]}>
              <Text style={styles.buttonText}>RUN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.offButton]}>
              <Text style={styles.buttonText}>STOP</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.statusTitle}> CHIA HÀNH LÝ !!!!</Text>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4CAF50',
    marginBottom: 15
  },
  headerText: { fontSize: 25, fontWeight: 'bold', color: '#fff', marginTop: 25},

  body: { flex: 1, padding: 16 },

  indexContainer: { 
    flexDirection: 'row', 
    marginBottom: 25,
    backgroundColor: '#fffb0012',
    padding: 15,
    borderRadius: 8
  },
  indexItem: { alignItems: 'center', marginRight: 16 },
  indexIcon: { fontSize: 32 },
  indexTitle: { fontSize: 16, fontWeight: 'bold' },
  indexData: { fontSize: 14, color: '#555', marginTop: 4 },

  statusContainer: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  statusTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, alignSelf: 'center' },
  statusData: { fontSize: 16, color: '#4CAF50', fontWeight: '600', marginBottom: 15 },
  closeCapony: {fontSize: 16, color: '#FF5252', fontWeight: '600', marginBottom: 15},
  imageLeaf: {alignSelf: 'center', resizeMode: 'contain', height: 100},

  systemButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginBottom: 15,
  },
  buttonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    marginTop: 5
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  onButton: { backgroundColor: '#4CAF50' },
  offButton: { backgroundColor: '#FF5252' },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
});

