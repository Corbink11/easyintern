import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import email from 'react-native-email';

const SupportScreen = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleEmail = () => {
        const to = ['corbinkennedy82@gmail.com']; //using personal email for now, will change before deploying to app store
        email(to, {
            subject: 'Support Request from EasyIntern User',
            body: `User Email: ${emailAddress}\n\nMessage: ${message}`
        }).catch(console.error);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Need Help?</Text>
            <Text style={styles.label}>Your Email:</Text>
            <TextInput
                style={styles.input}
                value={emailAddress}
                onChangeText={setEmailAddress}
                placeholder="Enter your email"
                placeholderTextColor="#888"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text style={styles.label}>Your Message:</Text>
            <TextInput
                style={[styles.input, styles.inputMulti]}
                value={message}
                onChangeText={setMessage}
                placeholder="Describe your issue or feedback"
                placeholderTextColor="#888"
                multiline={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleEmail}>
                <Text style={styles.buttonText}>Send Email</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#FFF',
        alignSelf: 'stretch', //stretches to match the input width
        marginBottom: 5,
        textAlign: 'left' //allign text to the left
    },
    input: {
        width: '100%', //Make input take the full width of the container
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 10,
        color: '#FFF',
        backgroundColor: '#222',
        marginBottom: 15,
    },
    inputMulti: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        width: '100%', // Make button take the full width of the container
        alignItems: 'center', // Center text inside the button
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }
});
export default SupportScreen;