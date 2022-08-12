import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {

  
  return (
    <div>
        <Main/>
        <Row rowID='1' title='Last Seen' fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title=' Recomanded Movies' fetchURL={requests.requestPopular}/>
        <Row rowID='3' title='New Movies' fetchURL={requests.requestTopRated}/>

    </div>
  )
}

export default Home