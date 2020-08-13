import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'
import { round } from 'react-native-reanimated'
const SearchBar = ({searchTerm, onSearchTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput 
        placeholder='Search'
        style={styles.inputStyle}
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onTermSubmit}
        autoCapitalize = 'none'
        autoCorrect = {false}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize:18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,

    }
})

export default SearchBar