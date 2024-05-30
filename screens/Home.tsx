import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../components/AppBar'
import Status from '../components/StatusComponent'
import SearchBar from '../components/SearchBar'
import Chats from '../components/Chats'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppBar />
            <Status />
            <SearchBar />
            <Chats />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#E9EAEC'
    }
})