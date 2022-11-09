import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Complete from './home';


export default function Home() {
  return (
    <div className={styles.container}>
      <Complete />
    </div>
  )
}
