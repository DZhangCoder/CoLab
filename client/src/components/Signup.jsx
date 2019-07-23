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
    password: "",
    errorMessage: "",
    results: [],
    statement: "",
    className: "still",
    profession: "",
    submitArr:[]
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios({
      url: "/authentication/signup",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((response) => {
        this.props.history.push('/profile');
        // this.state.submitArr.push(this.state.[name]); 
        // console.log(this.state.submitArr); 
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
    }
    else if (option === "photographer") {
      this.setState({ results: ["Landscape", "Portrait", "Street", "Motion"] });
      this.setState({ statement: "Here's the photography I'm good at:" })
    }
  };

  handleFilter = () => {
    if (this.state.className === "still") {
      this.setState({ className: "active" })
    }
    else {
      this.setState({ className: "still" })
    }
  };

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
            <Filter results={this.state.results} statement={this.state.statement} handleFilter={this.handleFilter} className={this.state.className} />

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

