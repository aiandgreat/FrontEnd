import {View, Text, Button, Image, Alert} from 'react-native';
import axios from "axios";
import styles from '../styles';

export default function ReviewPage({route, navigation}){
    const {formData} = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/registration/api/register/", formData);
            Alert.alert("Success", "User registered successfully");
            navigation.getBack();

        }catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));

        }
    };
    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.imgLogo} />
            <View style={styles.userInfoContainer}>
            <Text style={styles.title}>Review Information</Text>
            <Text style={styles.userInfo}>First Name: {formData.first_name}</Text>
            <Text style={styles.userInfo}>Last Name: {formData.last_name}</Text>
            <Text style={styles.userInfo}>Email: {formData.email}</Text>
            <Text style={styles.userInfo}>Password: {formData.password}</Text>
            <Text style={styles.userInfo}>Gender: {formData.gender}</Text>

            <View>
            <Button
            color='#50C878'
            title="Go back to edit" 
            onPress={() => navigation.goBack()}/>
            
            <Button
            color='#50C878'
            title="Submit" 
            onPress={handleSubmit}/>
            </View>
            </View>

            

        </View>
    )
}