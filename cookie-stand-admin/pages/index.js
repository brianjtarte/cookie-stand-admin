import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { useState } from 'react';
import { hours } from '../data'

export default function Home() {

    const [cookieStoreData, setCookieStoreData] = useState([]);

    function handleCreate(event) {
        event.preventDefault();

        const cookieStoreList = {
            location:event.target.location.value,
            minCustPerHour:event.target.minCustPerHour.value,
            maxCustPerHour:event.target.maxCustPerHour.value,
            avgCookiesPerSale:event.target.avgCookiesPerSale.value,
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
            // customerPerHour: [],
            id: cookieStoreData.length,

        };

        setCookieStoreData([...cookieStoreData, cookieStoreList]);

        //     function getRandomCustomer(minCustPerHour, maxCustPerHour){
        //      let randomNumber = Math.floor(Math.random() * (maxCustPerHour - minCustPerHour + 1) + minCustPerHour);
        //     return randomNumber;
        // }
        //
        //     function renderCustomerPerHour(minCustPerHour, maxCustPerHour){
        //         let num = getRandomCustomer(minCustPerHour, maxCustPerHour)
        //         hours.map ((time) => (time = cookieStoreList.customerPerHour.push(num)))
        //     }
        //
        //     function renderCookiesSold(){
        //         cookieStoreList.customerPerHour.map(x => )
        //     }
    }

  return (
    <div className='bg-bodyColor'>
        <Head>
            <title>Cookie Stand Admin</title>
        </Head>
        <Header />
        <Main handleCreate={handleCreate} cookieStoreData={cookieStoreData} hours={hours} />
        <Footer locationData={cookieStoreData.length} />



    </div>
  )
}
