import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    // Dummy data for profile information
    const profileData = {
        firstName: 'Gabriel',
        lastName: 'Akoi',
        username: 'johndoe123',
        email: 'john.doe@example.com',
        gender: 'Male',
        address: '123 Main Street, Cityville',
        phone: '123-456-7890',
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                {<Image
                    source={require('../assets/user.png')} // Replace with the path to your image
                    style={styles.profileImage}
                    resizeMode="cover"
                /> }
                <Text style={styles.label}>{profileData.firstName} {profileData.lastName}</Text>
            </View>

            <View style={styles.profileOption}>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('editProfileStack')}
                >
                    <AntDesign name="user" size={24} color="black" />
                    <Text style={styles.optionLabel}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    // onPress={() => navigation.navigate('')}
                >
                    <MaterialIcons name="logout" size={24} color="black" />
                    <Text style={styles.optionLabel}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBox: {
        backgroundColor: '#00B251',
        alignItems: "center",
        justifyContent: 'center',
        padding: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: '45%',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    profileOption: {
        paddingTop: 50,
        paddingHorizontal: 30,
        gap: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#eee',
        padding: 15,
        gap: 15,
    },
});

export default ProfileScreen;
