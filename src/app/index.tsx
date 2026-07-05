// July 5, 2026
// Week 4 Activity - Created a personal profile card using View, Text, Image, and StyleSheet.

import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.profileImage}
        />

        <Text style={styles.name}>Lord Cañete</Text>

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