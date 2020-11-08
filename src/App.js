import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile';
import { Paper, IconButton, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/MenuBook';
import { AccountCircle } from "@material-ui/icons";
import AddBook from './Components/AddBook';
import BookList from './Components/BookList';
import AddUser from './Components/AddUser';
import Admin from './Components/Admin';
import UserList from './Components/UserList';



const Style ={
  root: {
    flexGrow: 1,
  },
  menuButton: {
    spacing: 2,
  },
  title: {
    flexGrow: 1,
  },
  
  
};

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: true,
      currentUser: undefined,
    };
  }
  componentDidMount() {
    let user;
    if (localStorage.getItem('username')) {
      user = {
        username: localStorage.getItem('username'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
      };
    }

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut () {
    localStorage.clear()
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;
    var Adminlog;
    if (localStorage.getItem("roles")=="ROLE_ADMIN"){
      Adminlog=true
    }




  return (
    
    <div Style={Style.root}>
      <Router>
      <AppBar position="static" style={{ backgroundColor: 'black' }} >
        <Toolbar>
        
        <MenuIcon />
         <Button href="/" color='inherit'>
           <Typography><strong>Books Shop</strong></Typography>
           </Button>
           <Typography variant="h6" Style={Style.title}>
          <Button  href="/Home" color="inherit">
          <strong>HOME</strong> 
          </Button>
          </Typography>

          {Adminlog?(
            <Button href="/admin" color='inherit'>
              <strong>Admin Board</strong>
            </Button>
          ):(
            <>
          {currentUser && (
                  <div>
                  <Button href="/addBook" color='inherit'onClick={this.AddBook_veiw}>
                    <strong>ADD BOOK</strong>
                  </Button>
                
              
                  <Button href="/bookList" color='inherit'>
                    <strong>BOOK LIST</strong>
                  </Button>
                  </div>
                )}
              </>
          )}
              {currentUser ? (
                <div>
                  <Button href="/profile" color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </div>
              ) : (
                
                   <div>
                  
                  <Button href="/login" color='inherit'>
                  <strong> Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                   </div>
                
              )}
              
            </Toolbar>
          </AppBar>

          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/addbook" component={AddBook} />
              <Route exact path="/booklist" component={BookList} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/adduser" component={AddUser} />
              <Route exact path="/userlist" component={UserList} />
              



              
              
              
            </Switch>
          </div>
        
      
          <Footer/>
          
       
      </Router>
      </div>
    );
  }
}



export default App; 
     