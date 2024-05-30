import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

const Status = () => {
    return (
        <View>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.circleCard, styles.cardElevated]}>
                    <Entypo name='plus' size={40} color={'#075e54'} />
                </View>
                <View style={[styles.imageCircleCard,]}>
                    <ImageBackground source={require('../assets/images/pp1.jpeg')}
                        style={styles.statusImage} >
                        <View style={styles.greenDot}></View>
                    </ImageBackground>
                </View>
                <View style={[styles.imageCircleCard]}>
                    <ImageBackground source={require('../assets/images/pp2.jpg')}
                        style={styles.statusImage} />
                </View>
                <View style={[styles.imageCircleCard]}>
                    <ImageBackground source={require('../assets/images/pp5.jpg')}
                        style={styles.statusImage} >
                        <View style={styles.greenDot}></View>
                    </ImageBackground>
                </View>
                <View style={[styles.imageCircleCard]}>
                    <ImageBackground source={require('../assets/images/pp4.jpeg')}
                        style={styles.statusImage} />
                </View>
                <View style={[styles.imageCircleCard]}>
                    <ImageBackground source={require('../assets/images/pp3.jpg')}
                        style={styles.statusImage} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Status

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 15
    },
    circleCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
        margin: 5,
        borderRadius: 40,
        borderStyle: 'solid'
    },
    imageCircleCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
        margin: 5,
        borderWidth: 3,
        borderColor: "#075e54",
        borderRadius: 40,
        borderStyle: 'dashed'
    },
    cardElevated: {
        backgroundColor: '#d7fad9',
        elevation: 4,
        shadowOffset: {
            height: 1,
            width: 1
        },
        // shadowColor: '#333',
        shadowOpacity: 1
    },
    statusImage: {
        height: 75,
        width: 75,
        resizeMode: 'cover',
        borderRadius: 75 / 2,
        overflow: 'hidden'
    },
    greenDot: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: '#075e54',
        alignSelf: 'flex-end',
        bottom: -54,
        right: 4,
    },
})