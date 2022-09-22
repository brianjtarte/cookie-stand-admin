import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
    <body className='bg-bodyColor'>
        <Head>
            <title>Cookie Stand Admin</title></Head>
        <Header />
        <Main />

        </body>
        <Footer />

    </div>
  )
}
