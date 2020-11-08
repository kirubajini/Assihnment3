import React, { Component } from "react";

//import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Card, CardContent, Grid, FormControl, Typography, TextField } from '@material-ui/core';
import { Face } from '@material-ui/icons';
{/*import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import {  } from '@material-ui/core/colors';*/}




const style = {
  root: {
    minWidth: 275,
    backgroundColor:'white',
    marginTop: 30,
    color: 'blue'
  },
  
}

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "",
      Email: "",
      Password: "",
      message: "",
      successful: false
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      Username: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      Email: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      Password: e.target.value
    });
  }

  handleRegister = (e) => {
    e.preventDefault();

    if (this.state.Username && this.state.Email && this.state.Password) {
      console.log(this.state.Username + " " + this.state.Password + " " + this.state.Email)
      this.setState({
        successful: true,
        message: "Registered successfully"
      })
    } else {
      this.setState({
        successful: false,
        message: "Please enter Username/Password/Email"
      })
    }
  }

  render() {
    return (
      
      <Grid container spacing={1} style={{margin:20}}>
        <Grid item xs={4}/>
        <Grid item xs={4}style={{backgroundColor:"black"}}>
          <Card className={style.root} style={{margin:20}}>
              <CardContent>
                <h2>Register Account at Books shop</h2>
   
                <form onSubmit={this.handleRegister}>
                  {!this.state.successful && (
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Face style={{ fontSize: 80 }}/>
                      </Grid>

                      <Grid item xs={12}>

                        <FormControl fullWidth>
                          <TextField type="text" label="Username" variant="outlined" helperText="Please enter username"  id="outlined-size-small" size="small" name="Username" value={this.state.Username}/>
                         <TextField 
                             label="Username"
                             onChange={this.handleRegister}
                             name="Username"
                            // validators={['required','isUsername']}
                             errorMessage={['this field is required','username is not valid']}
                          />
                       
                        
                            onChange={this.onChangeUsername}/>
                        </FormControl>
                        {/* <ValidatorForm/> */}
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField type="text"  label="Email"helperText="Please enter Email" variant="outlined"  id="outlined-size-small" size="small" name="Email" required value={this.state.Email}
                            onChange={this.onChangeEmail}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField type="Password" helperText="Please enter password" label="Password"  id="outlined-size-small" variant="outlined" size="small" name="Password" value={this.state.Password}
                            onChange={this.onChangePassword}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <button style={{backgroundColor:'blue'}}>SIGN UP</button>
                        </FormControl>
                      </Grid>
                  </Grid>
                  )}
                  {
                    this.state.message && (
                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )
                  }
                </form>
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    );
  }
}
