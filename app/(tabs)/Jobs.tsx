import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const JobsScreen = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_ID = 'b981b9e2'; //api id for displaying jobs
  const API_KEY = '**********************'; //api key
  const API_URL = `************************************************`; //api root url and endpoint

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setJobs(json.results);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const renderJobItem = ({ item }: {item: any}) => (
    <TouchableOpacity style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobInfo}>{item.company.display_name} - {item.location.display_name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#1E90FF" />
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderJobItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1c1c1e', //darker background
  },
  listContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  jobItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#404040', 
    backgroundColor: '#28282b', 
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff', 
  },
  jobInfo: {
    fontSize: 14,
    color: '#d1d1d6', 
  }
});

export default JobsScreen;
