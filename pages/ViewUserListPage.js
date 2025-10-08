import {View, Text, FlatList, Button, Alert} from 'react-native'
import axios from "axios";
import {useState, useEffect} from "react";
import styles from '../styles';

export default function ViewUserListPage({navigation}){
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.20.118:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },[]
    );

    const handleEdit = (user) => {
        navigation.navigate("EditUser",{user});
    }
    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete?"
            (
                {text: "Cancel", style:"cancel"},
                {
                    text: "Delete",
                    style: "destructive",
                    onPress:() => {
                        axios.delete(`http://192.168.20.118:8000/registration/api/users/${id}/`)
                        .then(() => {
                            Alert.alert("Success", "User Deleted Successfully")
                        })
                        .catch((err) => {
                            console.error(err);
                            Alert.alert("Error", "Failed to delete user");
                        });
                    },
                }
            )
        );
    };
    return (
        <View>
            <Text style={styles.title}> Registered Users</Text>
            <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Text style={styles.cardText}>First Name: {item.first_name}</Text>
                    <Text style={styles.cardText}>Last Name: {item.last_name}</Text>
                    <Text style={styles.cardText}>Email: {item.email}</Text>
                    <View style={styles.buttonRow}>
                        <Button style={styles.buttonContainer} title="Edit" onPress={() => handleEdit(item)}/>
                        <Button style={styles.buttonContainer} title="Delete" onPress={() => handleDelete(item.id)}/>
                    </View>
                </View>
            )}/>
        </View>
    )
}