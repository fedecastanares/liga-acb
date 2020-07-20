import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = (props) => {

  const {height, width} = props;
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid (maxWidth: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img 
            fluid={data.placeholderImage.childImageSharp.fluid} 
            style={{height: height, width: width}}
          />
}

export default Logo
