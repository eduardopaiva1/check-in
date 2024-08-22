'use client'

import CheckInForm from '@/components/CheckInForm'
import HeaderBox from '@/components/HeaderBox'
import Head from 'next/head'
import React from 'react'

const Home = () => {
    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Bem vindo"
              user={'Eduardo'}
              subtext="Minha página Braba!"
            />
            <div>
              <Head>
                <title>Check-In App</title>
              </Head>
              <main>
                <CheckInForm />
              </main>
            </div>
          </header>
        </div>
      </section>
  )
}

export default Home