import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const userInfo = {
    name: 'Corbin Kennedy',
    jobsInterestedIn: ['Software Engineer', 'Product Manager', 'Data Scientist'],
    university: 'California State University, Fullerton',
    gender: 'Male'
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>User Profile</Text>
        </View>
        <View style={styles.section}>
          <Icon name="person" size={30} color="#FFF" />
          <Text style={styles.info}>Name: {userInfo.name}</Text>
        </View>
        <View style={styles.section}>
          <Icon name="work" size={30} color="#FFF" />
          <Text style={styles.info}>Jobs Interested In: {userInfo.jobsInterestedIn.join(', ')}</Text>
        </View>
        <View style={styles.section}>
          <Icon name="school" size={30} color="#FFF" />
          <Text style={styles.info}>University: {userInfo.university}</Text>
        </View>
        <View style={styles.section}>
          <Icon name="wc" size={30} color="#FFF" />
          <Text style={styles.info}>Gender: {userInfo.gender}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  info: {
    fontSize: 18,
    color: '#FFF',
    marginLeft: 10,
  }
});

export default ProfileScreen;