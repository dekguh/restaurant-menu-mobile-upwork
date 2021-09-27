import type { NextPage } from 'next'
import Head from 'next/head'
import MenuFirst from '../components/Pages/MenuFirst'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuFirst />
    </>
  )
}

export default Home
