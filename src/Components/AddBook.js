import React, {Component} from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { render } from "@testing-library/react";

const style ={
  root: {
    minWidth: 200,
    backgroundColor:'white',
    marginTop: 40,
    color: 'black'
  },
}

export default class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
      Author: "",
      CoverphotoURL: "",
      ISBNNumber:"",
      Price:"",
      SelectLanguage:"",
      SelectGenre:"",
      successful:false
    };
  }
  onChangeTitle = (e) => {
    this.setState({
      Title: e.target.value
    });
  }

  onChangeAuthor = (e) => {
    this.setState({
      Author: e.target.value
    });
  }

  onChangeCoverphotoURL = (e) => {
    this.setState({
      CoverphotoURL: e.target.value
    });
  }

  onChangePrice = (e) => {
    this.setState({
      Price: e.target.value
    });
  }
  onChangeSelectLanguage = (e) => {
    this.setState({
      SelectLanguage: e.target.value
    });
  }
  onChangeSelectGenre = (e) => {
    this.setState({
      SelectGenre: e.target.value
    });
  }

  handleAddBook = (e) => {
    e.preventDefault();

    if (this.state.Title && this.state.Author && this.state.CoverphotoURL && this.state.ISBNNumber && this.state.Price && this.state.SelectLanguage && this.state.SelectLanguage) {
      console.log(this.state.Title + " " + this.state.Author + " " + this.state.CoverphotoURL + " " + this.state.ISBNNumber + " " + this.state.Price + " " + this.state.SelectLanguage + " " + this.state.SelectGenre )
      this.setState({
        successful: true,
        message: "Success-Book Saved Successfully"
      })
    } else {
      this.setState({
        successful: false,
        message: "Success-Book Deleted Successfully"
      })
    }
  }
   
 render(){
  return (
    <Grid container spacing={1}>
          <Grid item x5={4}/>
          <Grid item x5={1} style={{backgroundColor:"black"}}/>
           <Card  style={{margin:40,backgroundColor:"black"}}>
               <CardContent>
               <Paper variant="outlined">
                 <Card>
                  <form  noValidate autoComplete="off" style={{width:'50%'}} onSubmit={this.state.AddBook}>
                     <Grid container spacing={1}>
                        <Grid item xs={11}>
                          {
                            localStorage.getItem("exportin")?
                          (<h5 style={{fontSize:35}}><AddBoxIcon style={{fontSize:20}}/> Add New Book </h5>):(null)
                          }
                          </Grid>

                 <Grid item xs={12}>
                   <FormControl>
                   <TextField
                   required
                   type="text"
                   id="outlined-required"
                   label="Title"
                   variant="outlined"
                   helperText="Enter Book Title" 

                   />
                   </FormControl> &emsp; &emsp; &emsp;
                 <FormControl>
                  <TextField
                   required
                   type="text" 
                   helperText="Enter Book Author" 
                   label="Author"  
                   id="outlined-size-small" 
                   variant="outlined" 
                   size="small" 
                  /> 
                  </FormControl>
                </Grid>  &emsp; &emsp; &emsp;
              <Grid item xs={12}>
                <FormControl>
               <TextField
                required
                type="text" 
                helperText="Enter Book Cover Photo URL" 
                label="Cover Photo URL"  
                id="outlined-size-small" 
                variant="outlined" 
                size="small" 
               />
               </FormControl>  &emsp; &emsp; &emsp;
               <FormControl>
                <TextField
                  required
                  type="text" 
                  helperText="Enter Book ISBN Number" 
                  label="ISBN Number*"  
                  id="outlined-size-small" 
                  variant="outlined" 
                  size="small"
               />
               </FormControl>
              </Grid>  &emsp; &emsp; &emsp;
              <Grid item xs={12}>
                <FormControl>
                 <TextField
                  required
                  type="text" 
                  helperText="Enter Book Price" 
                  label="Price*"  
                  id="outlined-size-small" 
                  variant="outlined" 
                  size="small"
                />
                </FormControl> &emsp;&emsp;&emsp;
                 <FormControl>
                <TextField
                required
                type="text" 
                helperText="Please select your Language" 
                label="Language"  
                id="outlined-size-small" 
                variant="outlined" 
                size="small"
                select
               />
               </FormControl>
               </Grid>
        <TextField
          required
          type="text"
          id="outlined-helperText"
          label="Genre"
        
          helperText="Please select your Genre"
          variant="outlined"
          select
          
        /> 
       </Grid>
      
       <Paper>
        <Button color="primary" variant="contained" style={{float:"right"}} size="small" startIcon={<SaveIcon/>}>
        >
        SAVE
      </Button>
      <Button color="secondary" variant="contained" style={{float:'right'}} size="small" startIcon={<SaveIcon/>}>
        >
        RESET
      </Button>

      <Button color="secondary" variant="contained" style={{float:"right"}} size="small" startIcon={<SaveIcon/>}>
        >
        BOOK LIST
      </Button>
      </Paper>
      </form>
      </Card>
    </Paper>
  </CardContent>
</Card>
</Grid>
    
  
  );
}
}
