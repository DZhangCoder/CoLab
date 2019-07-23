import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Wrapper from "./Wrapper";
import Filter from "./Filter/Filter";
import Footer from "./Footer/index";
import Button from "./Button/Button.jsx";
import Nav from "./Nav/index";

export default class Signup extends Component {

  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    errorMessage: "",
    results: [],
    statement: "",
    className: "still",
    profession: "",
    talentArray:[]
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const { email, password, firstName, lastName } = this.state;
    console.log({email, password, firstName, lastName});
    
    axios({
      url: "/authentication/signup",
      method: "POST",
      data: {
        email,
        password,
        firstName,
        lastName
      }
    })
      .then((response) => {
        this.props.history.push('/profile');
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.message
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  renderFilter = (option) => {
    if (option === "dancer") {
      this.setState({ results: ["Hip-hop", "Ballet", "Contemporary", "Latin"] });
      this.setState({ statement: "Here's the dance I'm good at:" });
      // if (option === "ballet") {
      //   this.setState({ results: ["Yes", "No"] });
      //  this.setState({ statement: "Can you dance en pointe?" });
      // } else if (option === "hip-hop") {
      //   this.setState({ results: ["Yes", "No"] });
      //   this.setState({ statement: "Can you freestyle?" });
      // } else if (option === "latin") {
      //   this.setState({ results: ["Yes", "No"] });
      //   this.setState({ statement: "Can you freestyle?" });
      // } else if (option === "contemporary") {
      //   this.setState({ results: ["Yes", "No"] });
      //   this.setState({ statement: "Can you freestyle?" });
      // }
    }
    else if (option === "photographer") {
      this.setState({ results: ["Landscape", "Portrait", "Street", "Motion"] });
      this.setState({ statement: "Here's the photography I'm good at:" })
    }
  };

  // this is a function that adds all the buttons' value to the talentArray
  handleOnClick = (value,addOrRemove)=>{
    if (addOrRemove){
      this.state.talentArray.push(value); 
      console.log(this.state.talentArray);  
  }
    else{
      const index = this.state.talentArray.indexOf(value); 
      this.state.talentArray.splice(index,1); 
      console.log(this.state.talentArray);  
    }
  }

  render() {
    // JSX
    return (
      <Fragment>
        <Nav />
        <Wrapper />
        <div className="signuppage">
          <h1 className="title">Welcome to CoLab!</h1>
          <p>Please fill out the registration form to sign-up.</p>
          <p>You will complete your profile on the next page.</p>

          <form onSubmit={this.handleSubmit}>

            <p className="IMA">I am a:</p>
            <Button value="dancer" handleOnClick={this.renderFilter}>Dancer</Button>
            <Button value="photographer" handleOnClick={this.renderFilter}>Photographer</Button>
            <Filter results={this.state.results} statement={this.state.statement} handleOnClick={this.handleOnClick} className={this.state.className} />

            <hr />

            <div>First name:
              <input type="text" name="firstName" onChange={this.handleChange} />
            </div>
            <div>Last name:
              <input type="text" name="lastName" onChange={this.handleChange} />
            </div>
            <div>Email:
              <input type="text" name="email" onChange={this.handleChange} />
            </div>
            <div>Password:
              <input type="password" name="password" onChange={this.handleChange} />
            </div>

            <button>Submit</button>
          </form>
          <p>{this.state.errorMessage}</p>
          {console.log(this.state.errorMessage)}
        </div>

        <Footer />
      </Fragment>
    )
  }
}

