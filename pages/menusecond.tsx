import { NextPage } from 'next'
import React from 'react'
import MenuSecond from '../components/Pages/MenuSecond'
import Head from 'next/head'

const menusecond : NextPage = () => {
    return (
        <>
            <Head>
                <title>Second Menu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MenuSecond />
        </>
    )
}

export default menusecond
