import {View, Text, FlatList, Button, Image, ScrollView} from 'react-native'
import axios from "axios";
import {useState, useEffect} from "react";
import styles from '../styles';

export default function ViewUserListPage({navigation}){
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.30.231:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },[]
    );

const handleEdit = (user) => {
    navigation.navigate("EditUser", { user });
};

const handleDelete = (id) => {
    axios.delete(`http://192.168.30.231:8000/registration/api/users/${id}/`)
        .then(() => {
            console.log("User Deleted Successfully");
            setUsers(prev => prev.filter(user => user.id !== id));
        })
        .catch((err) => {
            console.error("Failed to delete user:", err);
        });
};
    return (
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.imgLogo} />
        <View style={styles.userInfoContainer}>
      <Text style={styles.title}>Registered Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>First Name: {item.first_name}</Text>
            <Text style={styles.cardText}>Last Name: {item.last_name}</Text>
            <Text style={styles.cardText}>Email: {item.email}</Text>
            <View style={styles.buttonRow}>
              <View style={styles.buttonContainer}>
                <Button title="Edit" onPress={() => handleEdit(item)} color="#50C878" />
              </View>
              <View style={styles.buttonContainer}>
                <Button title="Delete" onPress={() => handleDelete(item.id)} color="#ff4d4d" />
              </View>
            </View>
          </View>
        )}
      />
      </View>
    </View>
  );
}