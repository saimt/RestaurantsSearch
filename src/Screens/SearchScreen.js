import React, { useState } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../Components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../Components/ResultsList'
const SearchScreen = () => {
    
    const [searchTerm, setSearchTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    
    return (
        <>
            <SearchBar 
            searchTerm={searchTerm} 
            onSearchTermChange={setSearchTerm}
            onTermSubmit = {() => searchApi(searchTerm)}
            />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* <Text>We have found {results.length} results</Text> */}
        <ScrollView style={{backgroundColor:'white'}}>
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
            <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
            <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    }
})

export default SearchScreen