import React,{Component}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';



const style = {
  root: {
    minWidth: 250,
    backgroundColor:'black',
    marginTop: 45,
    color: '#e0f7fa'
  },
  button: {
    fontSize: '15px'
  },
}

export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
      Username: "",
      Email: "",
      SelectRoles: "",
      Password: "",
      successful: false
    };
  }

  onChangeUsername = (event) => {
    this.setState({
      Username: event.target.value
    });
  }

  onChangeEmail = (event) => {
    this.setState({
      Email: event.target.value
    });
  }

  onChangeSelectRoles = (event) => {
    this.setState({
      SelectRoles: event.target.value
    });
  }

  onChangePassword = (event) => {
    this.setState({
      Password: event.target.value
    });
  }

 
  handleAddUser = (event) => {
    event.preventDefault();

    if (this.state.Username && this.state.Email && this.state.SelectRoles && this.state.Passworld ) {
      console.log(this.state.Username + " " + this.state.Email + " " + this.state.SelectRoles + "" +this.state.Passworld )
      this.setState({
        successful: true,
        message: "Success -AddUser Saved Successfully."
      })
    } else {
      this.setState({
        successful: false,
        message: "Not success"
      })
    }
  }

  render() {
    return (
        <Grid container spacing={1}>
        <Grid item xs={4}/>
        <Grid item xs={5} style={{backgroundColor:"black"}}>
          <Card className={style.root} style={{margin:20}}>
           <CardContent>
           <Paper variant="outlined">
             <form className={style.root} noValidate autoComplete="off" style={{width:'150%'}}onSubmit={this.handleRegister}>
                  {!this.state.successful && (
             <Grid container spacing={1}>
                      <Grid item xs={11}>
                        {
                          localStorage.getItem("exportin")? (
                            <h5 style= {{color:'black'}}> <AddBoxIcon fontSize="small"/> Update New User</h5>
                           ) : ( <h5 style={{fontSize:30}}><AddBoxIcon Style={{fontSize:10}}/>Add New User</h5>)
                        }
                       
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                        <TextField type="text" id="outlined-required" label="Username*" variant="outlined" helperText="Enter Username" style={{width:"100%"}} onChange={this.onChangeUsername} />
                        </FormControl>&emsp; &emsp; &emsp; 
                        

                        
                        <FormControl >
                        <TextField type="text" id="outlined-size-small" label="Email*" variant="outlined" helperText="Enter Email Address" onChange={this.onChangeEmail} />
                        </FormControl>
                        </Grid>
                         
                        <Grid item xs={12}>
                        <FormControl size="small"onChange={this.onChangeSelectRoles}>
                            <InputLabel>Roles</InputLabel>
                            <NativeSelect
                              inputProps={{
                                  name:'Roles',
                                  id: 'Roles',
                                  
                              }}
                            >
                            <option value={"Select Roles"}>Select Roles</option>
                            <option value={"ROLE_USER"}>ROLE_USER</option>
                            <option value={"ROLE_ADMIN"}>ROLE_ADMIN</option>
                            </NativeSelect>
                            <FormHelperText>Please select your Roles</FormHelperText>
                        </FormControl>&emsp; &emsp; 
                       
                      

                      
                        <FormControl>
                        <TextField type="" id="outlined-required" label="Passworld*" variant="outlined" helperText="Enter  Passworld" onChange={this.onChangePassworld} />
                        </FormControl>
                        </Grid>

                       
                        
                      
                        
                        <Paper variant="outlined">
                        <Button href="/Save" variant="contained"onClick={this.handleAddUser} style={{backgroundColor:'#1b5e20'}}> <SaveIcon style={{fontSize:20}}/>Save</Button>&emsp; &emsp; 
                        <Button  href="/Reset"variant="contained" style={{backgroundColor:'#0d47a1'}}> <ReplayIcon style={{fontSize:20}}/>RESET</Button>&emsp; &emsp; 
                        <Button href="/userlist" variant="contained" style={{backgroundColor:'#0d47a1'}}><FormatListBulletedIcon style={{fontSize:20}}/>USER LIST</Button>
                        </Paper>
                 </Grid>   
                 )}
                 {this.state.message && (
               <div>
                 <Typography  variant="overline" display="block" gutterBottom> 
                     <strong>{this.state.message}</strong>
                 </Typography>
               </div>
             )}
                
                </form>
                </Paper>
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    );
                            
}
}
