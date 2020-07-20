import React from 'react';
import BackgroundImagen from 'gatsby-background-image';
import {graphql, useStaticQuery} from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        color: theme.palette.font,
    }
}));


const Background = ({children}) => {

    const classes = useStyles();

    const image = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "background-balls.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920 )  {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            }
          }
        }
    `);



    return ( 
    <>
    <BackgroundImagen Tag={'section'} fluid={image.file.childImageSharp.fluid} >
        <div className={classes.root}>
            {children}
        </div>
    </BackgroundImagen>
    </>
     );
}
 
export default Background;