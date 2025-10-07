import {View, Text, FlatList} from 'react-native'
import axios from "axios";
import {useState, useEffect} from "react";
import styles from '../styles';

export default function ViewUserListPage(){
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    },[]
    );
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
                </View>
            )}/>
        </View>
    )
}