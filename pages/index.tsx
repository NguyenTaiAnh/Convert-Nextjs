import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import HEADER from '../components/header'
import Slider from '../components/slide'
import BodyTop from '../components/body/body-top'
import BodyCenter from '../components/body/body-content'
import Footer from '../components/footer'
import Header from '../components/header'
import { Container, Row, Col, Nav, NavItem, NavLink, Navbar, NavDropdown, NavbarBrand, Card } from 'react-bootstrap'
import Child from '../components/child'
import { Test } from '../components/Test'

export default function Home() {
  return (
    

      <main>
        {/* <HEADER></HEADER> */}
        <Header />
        {/* <Child
          title="day la title A"
        >
          <h3>AAAAAAAAAAAAAAAAAAAA</h3>
        </Child>
        <Child
          title="day la title B"
        >
          <h3>BBBBBBBBBBBBBBBBBBBB</h3>
        </Child> */}
        <Test/>
        <Slider />
        <BodyTop />
        <BodyCenter/>
        <Footer/>
      </main>
  
  )
}
