import React from "react"
import BackgroundImage from '../components/backgroundimage'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Post from '../components/post'
import Carousel from '../components/carousel'

const IndexPage = () => {


return(
  <>
  <SEO title="Home" />
    <Layout>
      <BackgroundImage>
        <Post/>
      </BackgroundImage>
    </Layout>
  <Carousel/>
  </>
)}

export default IndexPage
