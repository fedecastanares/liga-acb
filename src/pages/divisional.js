import React from 'react';
import SEO from "../components/seo"
import Layout from '../components/layout'
import DataTable from '../hoc/table/dataTable'
import BackgroundBalls from '../components/backgroundballs'


import {Container} from '@material-ui/core'


const DivisionalPage = () => {

   
    return ( 
        <>
        <SEO title="Home" />
            <Layout>
                <BackgroundBalls>
                    <Container style={{paddingTop:'15vh'}}>
                        <DataTable
                        label='Posiciones'
                        datakeys={['pos', 'name', 'w', 'l']}
                        />
                    </Container>
                </BackgroundBalls>
            </Layout>
        </>
     );
}
 
export default DivisionalPage;