import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import HEADER from '../components/header'
import Slider from '../components/slide'
import BodyTop from '../components/body/body-top'
import BodyCenter from '../components/body/body-content'
import Footer from '../components/footer'
import Header from '../components/header'
// import Child from '../components/child'
import Test from '../components/Test'
import { BrowserRouter as Router,Link, Route} from 'react-router-dom'
export default function Home() {
  return (
    

      <main>
        
        <Header />
      
        <Slider />
        <BodyTop />
        <BodyCenter/>
        <Footer/>
        
      </main>
  
  )
}
