import React from "react";


class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      email : '',
      password : '',
      rememberMe : false
    }
  }
  render(){
    const {email, password, rememberMe} = this.state;

    return(
      <form onSubmit={this.onSubmit} style = {{margin: 'auto', width: '50%'}}>
        <h3>Login This site</h3>
        <div>
          <label>Email</label><br />
          <input placeholder="Write Your Email"
          type='email' value={email}
          onChange={e =>this.setState({email : e.target.value})} />
        </div>
        <br />
        <div>
          <label>Password</label>
          <br />
          <input placeholder="Please Enter YourPassword"
          type='empasswordail' value={password}
          onChange={e =>this.setState({password : e.target.value})} />
        </div>
        <br />
        <div>
          <label>
            <input 
                type='checkbox'
                checked = {rememberMe}
                onChange={e =>this.setState({rememberMe : e.target.checked})}
                />
                Remember Me?
          </label>
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
        
      </form>
    );
  }
  validateForm = () =>{
    const {email, password} = this.state;

    let status = true;
    if (email.length ===0){
      status = false;
    }
    if (password.length ===0){
      status = false;
    }
    return status;

  }
  onSubmit = (e) =>{
    e.preventDefault();
    const validationStatus = this.validateForm();
    if(validationStatus === false){
      alert('please fill all the required field');
    }
    
    console.log(this.state);
  }
}

export default Form