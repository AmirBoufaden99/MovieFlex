import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import FilmsList from '../components/filmsList'


export default function Home() {
    return (
      <div>
          <Header />
          <FilmsList />
          <Footer />
      </div>
    )
  }
  