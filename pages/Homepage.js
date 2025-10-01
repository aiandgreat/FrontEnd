import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from '../styles';

export default function Homepage({navigation}){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.imgLogo} />
            <Text style={styles.title}> Welcome to UA SERP!</Text>

            <View style={styles.buttonContainer}>
                <Button color='#50C878'
                 title="Register" 
                 onPress={() => navigation.navigate('Register')}/>
            </View>
        </View>
    )
}