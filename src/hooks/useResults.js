import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default() => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (terminology) => {
        console.log('hello')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: terminology,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            // handle error using state
            setErrorMessage('Something went wrong')
        }   
    }

    // for one time call. like viewdidLoad
    useEffect(() => {
        searchApi('indian')
    }, [])

    return [searchApi, results, errorMessage]
}