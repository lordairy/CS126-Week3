// July 5, 2026
// Week 5 Activity - Updated the profile card using useState and TextInput.

import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('Lord Cañete');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.profileImage}
        />

        <TextInput
          style={styles.input}
          placeholder="Type your name here..."
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.course}>🎨 BS Multimedia Arts</Text>

        <Text style={styles.bio}>
          ✨ Hi! I'm Yen, a Multimedia Arts student who loves drawing,
          makeup, storytelling, and creating digital content.
          {"\n\n"}
          I'm currently learning React Native and exploring mobile app
          development while improving my skills in design and creativity.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    width: 340,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
  },

  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: '#66BB6A',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#66BB6A',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },

  course: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    fontWeight: '600',
  },

  bio: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 24,
  },
});