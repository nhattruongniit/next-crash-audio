import React from 'react'

// components
import Meta from './Meta'
import Header from './Header'
import Nav from './Nav'

// styles
import styles from '../styles/Layout.module.css'

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
    
  )
}

export default Layout
