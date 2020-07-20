import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import DataProvider from '../context/data'
import "./layout.css"
import {ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const [darkMode, setdarkMode] = React.useState(true);


  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#DD4B04',
      },
      secondary: {
        main: '#E46C0B'
      },
      background:  darkMode ? 'rgb(0 0 0 / 70%)' : 'rgb(255 255 255 / 70%)',
      backgroundContrast:  darkMode ? '#f9f9f9' :  '#181818',
      backgroundColor: darkMode ? '#181818' : '#f9f9f9'
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <DataProvider>
          <Header siteTitle={data.site.siteMetadata.title} darkMode={darkMode} setdarkMode={setdarkMode}/>
            {children}
        </DataProvider>
      </ThemeProvider>
    </>
  )
}


export default Layout
