/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

import { Container, Title } from './App.js'

import { ThemeProvider } from 'styled-components'
import { light } from '../Styles/themes/light.js'
import dark from '../Styles/themes/dark.js'


import GlobalStyles from '../Styles/global.js'

import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { Form } from '../Components/Form/Form.jsx'
import { Grid } from '../Components/Grid/Grid.jsx'
import { Header } from '../Components/Header/Header.jsx'


import axios from "axios"

export function App() {

  const [products, setProducts] = useState([])
  const [onEdit, setOnEdit] = useState(null)
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8800")
      setProducts(response.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [setProducts])

  
  return (
    <>
    <ThemeProvider theme={theme} >
    <GlobalStyles />
      <Container>
        <Header toggleTheme={toggleTheme} />
        <Title>Produtos</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getProducts={getProducts} />
        <Grid products={products} setProducts={setProducts} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
      </> 

  )
}


