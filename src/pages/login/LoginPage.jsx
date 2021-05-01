import React from 'react';
import "./LoginPage.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { withRouter } from "react-router-dom";


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordError: '',
      emailError: '',
      isPasswordError: false,
      isEmailError: false,
    };
  }
  componentDidMount() {
    this.props.getLoginCredential();
  }
  render() {
    return (
      <div className={`pageLayout`}>
        <FormControl>

          <h3>Login</h3>
          <div className={`textbox`}>
            <TextField
              required
              id="margin-dense"
              label="Email"
              variant="outlined"
              onChange={this.onEmailChange}
              error={this.state.isEmailError}
              helperText={this.state.emailError}
              InputProps={{
                style: {
                    width: 250
                }
            }}
            />
          </div>
          <div className={`textbox`}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={this.onPasswordChange}
              InputProps={{
                style: {
                    width: 250
                }
            }}

            />
            <p className={'error'}>{this.state.passwordError}</p>
          </div>
          <div>
            <Button variant="outlined" size='small' color="primary" id='Cancel' style ={{marginRight:'85px'}}>Cancel</Button>
            <Button variant="contained" size="small" color="primary" onClick={this.onLogin}>
              Login
          </Button>
          </div>
        </FormControl>
      </div>
    )
  }

  onLogin = () => {
    this.setState({
      emailError:'',
      isEmailError:false,
      passwordError:''
    })
    let isUserInData = this.props.loginDetails.find(loginDetails => loginDetails.password === this.state.password && loginDetails.username === this.state.email)

    let reg = new RegExp("^(?=.*[1-9])(?=.*[a-z]).{6,32}$");
    let testPass = reg.test(this.state.password);
    let lastAtPos = this.state.email.lastIndexOf('@');
    let lastDotPos = this.state.email.lastIndexOf('.');
    if (this.state.email === "") {
      this.setState({
        emailError: 'Email is Required',
        isEmailError: true

      })
    }

    else if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
      this.setState({
        emailError: "Email is not valid",
        isEmailError: true
      })
      //  errors["email"] = "Email is not valid";
    }
    else if (!testPass) {
      this.setState({
        passwordError: 'Password should contain alphabet, numbers and minimum 6 characters',
        isPasswordError: true
      })
    }
    else {
      if(isUserInData && isUserInData.password === 'admin123'){
        this.props.history.push("/author");
      }
      else if (!isUserInData){
        this.setState({
          passwordError: 'InCorrect Credentials'
        })
      }
      else{
        this.props.history.push("/user");
      }
    }

  }
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
}

export default withRouter(LoginPage);