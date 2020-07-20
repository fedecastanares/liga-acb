import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImagen from 'gatsby-background-image';


const ImagenFondo = (props) => {

    const image = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "background-demo.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920, grayscale: true )  {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            }
          }
        }
    `);

    return ( 
        <BackgroundImagen 
            Tag={'section'} 
            fluid={image.file.childImageSharp.fluid}
            >
                <div style={{height: '92vh', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #151515 90%)'}}>
                    {props.children}
                </div>
        </BackgroundImagen>
     );
}
 
export default ImagenFondo;