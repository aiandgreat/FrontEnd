import {View, Text, Button, TextInput, Image} from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles';

export default function EditUserPage({route, navigation}){
    const {user} = route.params;

    const [firstname, setFirstName] = useState(user.first_name);
    const [lastname, setLastName] = useState(user.last_name);
    const [user_email, setUserEmail] = useState(user.email);
    const [user_gender, setUserGender] = useState(user.gender);
    const [user_password, setUserPassword] = useState(user.password);

    const handleUpdate = () => {
        if (!firstname || !lastname || !user_email || !user_gender || !user_password){
            window.alert("Error", "Please fill up all required fields");
            return;
        }

        axios.put(`http://192.168.30.231:8000/registration/api/users/${user.id}/`, {
            first_name: firstname,
            last_name: lastname,
            email: user_email,
            gender: user_gender,
            password: user_password,
        })
        .then(() => {
            window.alert("Success", "User updated successfully!");
            navigation.goBack();
        })
        .catch((error) => {
            console.error(error);
            window.alert("Error", "Failed to update");
        })
    };
    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.imgLogo} />
            <View style={styles.userInfoContainer}>
            <Text style={styles.title}>Edit User</Text>

            <TextInput style={styles.userInfo} value={firstname} onChangeText={setFirstName}/>
            <TextInput style={styles.userInfo} value={lastname} onChangeText={setLastName}/>
            <TextInput style={styles.userInfo} value={user_email} onChangeText={setUserEmail}/>
            <TextInput style={styles.userInfo} value={user_gender} onChangeText={setUserGender}/>
            <TextInput style={styles.userInfo} value={user_password} onChangeText={setUserPassword}/>

            <View style={styles.EditUserButtonContainer}>
            <View style={styles.EditUserButton}>
                <Button color='#50C878' title="Update Record" onPress={handleUpdate}/>
            </View>
            </View>
            </View>
        </View>
    )
}