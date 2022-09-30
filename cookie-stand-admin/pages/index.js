import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { useState } from 'react';
import { hours } from '../data';
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';


export default function Home() {

    const { user, login, logout } = useAuth();

    function loginHandler(newUser) {
        login(newUser.username, newUser.password);
    }

    const [cookieStoreData, setCookieStoreData] = useState([]);

    function handleCreate(event) {
        event.preventDefault();

        const cookieStoreList = {
            location:event.target.location.value,
            minCustPerHour:event.target.minCustPerHour.value,
            maxCustPerHour:event.target.maxCustPerHour.value,
            avgCookiesPerSale:event.target.avgCookiesPerSale.value,
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
            id: cookieStoreData.length,
        };

        setCookieStoreData([...cookieStoreData, cookieStoreList]);

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
