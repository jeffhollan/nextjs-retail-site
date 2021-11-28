import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import SiteBanner from '../components/SiteBanner'
import MainCard from '../components/MainCard'
import Carousel from '../components/Carousel'
import Promotions from '../components/Promotions'
import Categories from '../components/Categories'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Sample retail site for plants." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Evergreen Plants</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <SiteBanner />
        <MainCard />
        <Carousel />
        <Promotions />
        <Categories />
      </main>

      <Footer />
    </div>
  )
}
