import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react';

export default function Home() {

    const [cookieStoreData, setCookieStoreData] = useState("")

    function handleCreate(event) {
        event.preventDefault();
        const cookieStoreList = {
            "location": event.target.location.value,
            "minCustPerHour": event.target.minCustPerHour.value,
            "maxCustPerHour": event.target.maxCustPerHour.value,
            "avgCookiesPerSale": event.target.avgCookiesPerSale.value
        }
        const stringifyData=JSON.stringify(cookieStoreList)
        setCookieStoreData(stringifyData)
    }

  return (
    <div className='bg-bodyColor'>

            {/*<title>Cookie Stand Admin</title>*/}


        <Header />
        <Main handleCreate={handleCreate} cookieStoreData={cookieStoreData} />
        <Footer />



    </div>
  )
}
