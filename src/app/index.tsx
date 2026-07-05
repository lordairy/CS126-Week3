// Week 6 Laboratory
// Interactive Greeting & Counter App

import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const message =
    count > 0
      ? `${name || 'Student'}, you tapped ${count} time${
          count > 1 ? 's' : ''
        }! 🎉`
      : 'Tap the + button to start!';

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
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

          <Text style={styles.name}>
            {name === '' ? 'Lord Cañete' : name}
          </Text>

          <Text style={styles.greeting}>
            {name === ''
              ? '👋 Please enter your name.'
              : `👋 Hello, ${name}!`}
          </Text>

          <Text style={styles.course}>
            🎨 BS Multimedia Arts
          </Text>

          <Text style={styles.bio}>
            ✨ Hi! I'm Yen, a Multimedia Arts student who loves drawing,
            makeup, storytelling, and creating digital content.
            {'\n\n'}
            I'm currently learning React Native and exploring mobile app
            development while improving my skills in design and creativity.
          </Text>

          <Text style={styles.counter}>
            Counter: {count}
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setCount(count + 1)}
            >
              <Text style={styles.buttonText}>＋</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setCount(count - 1)}
            >
              <Text style={styles.buttonText}>－</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => setCount(0)}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.message}>
            {message}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
  },

  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
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
    width: 150,
    height: 150,
    borderRadius: 75,
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
    fontSize: 16,
    marginBottom: 20,
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
  },

  greeting: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 15,
    color: '#388E3C',
    fontWeight: '600',
    textAlign: 'center',
  },

  course: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },

  bio: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: '#444',
    marginBottom: 20,
  },

  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 15,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#66BB6A',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 10,
  },

  resetButton: {
    backgroundColor: '#EF5350',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  message: {
    fontSize: 17,
    textAlign: 'center',
    color: '#2E7D32',
    fontWeight: '600',
  },
});