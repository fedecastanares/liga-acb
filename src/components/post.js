import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import {Container, Grid, Button} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  post:{
    backgroundColor: theme.palette.background,
    padding: '2vh',
    borderRadius: '1.2rem',
    color: theme.palette.backgroundContrast,
    lineHeight: '1.4rem'
  }
}));

const Post = () => {

    const classes = useStyles();
    
    return ( 
    <>
    <Container style={{height: 'calc(100% - 64px)'}}>
        <Grid container alignContent='center' alignItems='center' justify='flex-start' style={{height: 'calc(100% - 64px)'}}>
          <Grid item className={classes.post} lg={4} md={6} sm={10} xs={12}>
            <h1>Titulo del post</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lorem velit, non dapibus metus ultricies sed. Cras varius mollis est ut lacinia. Praesent erat felis, auctor ut maximus vitae, venenatis eget sem. Phasellus non diam finibus, posuere orci id, elementum nibh. Etiam risus lectus, accumsan nec est eget, imperdiet blandit sem. Phasellus malesuada mi in imperdiet varius. Vivamus a ornare metus, sed congue orci. Vestibulum molestie ornare tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis eleifend dolor id efficitur. In hac habitasse platea dictumst. Maecenas ante risus, imperdiet elementum urna vitae, commodo interdum turpis.</p>
            <Button variant="outlined" fullWidth color="primary" style={{fontWeight: 'bold'}}>Leer mas</Button>
          </Grid>
        </Grid>
      </Container>
    </>
     );
}
 
export default Post;