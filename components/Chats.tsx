import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactList from './ContactList'

const Chats = () => {
    return (
        <ScrollView style={styles.container}>
            <ContactList />
        </ScrollView>
    )
}

export default Chats

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})