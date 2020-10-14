import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import HEADER from '../components/header'
import SLIDER from '../components/slide'
import BODYTOP from '../components/bodytop'
import BODYCENTER from '../components/bodycenter'
import FOOTER from '../components/footer'

import { Container, Row, Col, Nav, NavItem, NavLink, Navbar, NavDropdown, NavbarBrand, Card } from 'react-bootstrap'

export default function Home() {
  return (
    

      <main>
        <HEADER></HEADER>
        <SLIDER></SLIDER>
        <BODYTOP></BODYTOP>
        <BODYCENTER></BODYCENTER>
        <FOOTER></FOOTER>
      </main>
  
  )
}
