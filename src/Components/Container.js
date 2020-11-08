import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Register from './Register'
import {createMuiTheme,responsiveFontsizes,ThemeProvider} from '@material-ui/core/styles';
const style = {
    root: {
      minWidth: 275,
      backgroundColor:"black",
      marginTop: 25,
      height: 350,
      color: 'white'
    },
    title: {
      fontSize: 24,
      textAlign:'center'
      
    },
}
let theme = createMuiTheme();
//theme=responsiveFontsizes(theme);

function Container(props) {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <Paper>
              <Card style={style.root} variant="outlined">
                <CardContent>
                
                  <Typography variant="overline" display="block" style={style.title} gutterBottom>
                    {props.content}
                  </Typography>
                  <div>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h2">Welcome to Book shop </Typography>
                      <Typography variant="h5">Good friends,good friends,good books,and a sleepy conscience:this is the ideal life.</Typography>
                      <Typography variant="h6"> -Mark Twain </Typography>
                      
                    </ThemeProvider>
                  </div>
                   
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </React.Fragment>
     
      
    )
}

export default Container