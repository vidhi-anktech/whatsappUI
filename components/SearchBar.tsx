import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <AntDesign name="search1" size={22} />
            <Text style={styles.searchTxt}>Search</Text>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#fff",
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    searchTxt: {
        paddingHorizontal: 12,
        fontSize: 15
    },
})