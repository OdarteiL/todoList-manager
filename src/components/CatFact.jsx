import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function CatFact() {

    const [fact, setFact] = useState('')
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect (() => {
        axios.get('https://catfach.ninja/facts')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

  return (
    <>
        !hasError ?
        <h1>{fact}</h1>
        :
        null
    </>
  )
}
