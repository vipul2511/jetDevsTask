/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Splash(props) {
    const [loading, setloading] = useState('');
    useEffect(() => {
        load()
    }, [])
    // to show loader on splash screen
    const showLoading = () => {
        setloading(true)

    }
    // here it checks whether user is previously logged in or not.
    const load = () => {
        showLoading();
        const timeoutHandle = setTimeout(() => {
            AsyncStorage.getItem('@is_login').then((isLogin) => {
                if (isLogin == undefined || isLogin == "0") {
                    props.navigation.navigate('Login')
                } else if (isLogin == "1") {
                    props.navigation.navigate('Tab')
                }
            });
        }, 2000);
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 17 }}>APP Logo</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 35, textAlign: 'center' }}>Jet Devs</Text>
            {loading == true ? (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#1976D2" />
                </View>
            ) : null}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Splash;
