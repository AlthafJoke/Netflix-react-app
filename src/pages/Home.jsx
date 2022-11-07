import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main/>
        {/* <Row title='Latest' fetchURL={requests.requestLatest}/> */}
        <Row rowID="1" title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID="2" title='Top rated' fetchURL={requests.requestToprated}/>
        <Row rowID="3" title='Up comming' fetchURL={requests.requestUpcomming}/>

    </div>
  )
}

export default Home