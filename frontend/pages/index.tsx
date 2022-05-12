import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from './index.module.css'
import { Greet } from '../wailsjs/wailsjs/go/main/App'

const Home: NextPage = () => {
  const [name, setName] = useState('')
  const [result, setResult] = useState('Please enter your name below 👇')

  return (
    <div className={styles['app-container']}>
      <Head>
        <title>Wails + Next.js</title>
      </Head>
      <div className={styles['app']}>
        <div className={styles['logo-container']}>
          <img
            className={styles['logo']}
            src='/images/logo-universal.png'
            title='Wails'
          />
          <div className={styles['plus']}>+</div>
          <img
            className={styles['logo']}
            src='images/nextjs-logo.svg'
            title='Next.js'
          />
        </div>
        <div className={styles['result']}>
          {result}
        </div>
        <div className={styles['input-box-container']}>
          <input
            className={styles['input-box-input']}
            type="text"
            autoComplete="off"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button
            className={styles['input-box-btn']}
            onClick={() => {
              if (name === '') {
                return
              }
              try {
                Greet(name)
                  .then(result => {
                    setResult(result)
                  })
                  .catch(err => {
                    console.error(err)
                  })
              } catch (err) {
                console.error(err)
              }
            }}>
            Greet
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
