import React from 'react';

export class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    let value = target.value;
    let fields = this.state.fields;


    if (target.type === 'checkbox') {
      value = target.checked
    }
    if (target.type === 'select-multiple') {
      var options = event.target.options;
      value = [];
      for (var i = 0; i<options.length; i++) {
        if(options[i].selected) {
          value.push(options[i].value);
        }
      }
    }
    const name = target.name;

    fields[name] = value;

    this.setState({
     fields
    });
  }



  handleValidation() {
    let fields = this.state.fields;
    let errors = [];
    let formIsValid = true;



    if (!fields["username"]) {
      formIsValid = false;
      errors["username"]="This field is required.";
    }


if (typeof fields['username'] !=='undefined') {
  let length = fields['username'].length;
  if (length < 3 || length > 10) {
    formIsValid  =false;
    errors["username"]="Please enter a valid username"
  }
}


if (!fields["password"]) {
      formIsValid = false;
      errors["password"]="This field is required.";
    }



if (typeof fields['password'] !=='undefined') {
  let length = fields['password'].length;
  if (length < 3 || length > 30) {
    formIsValid = false;
    errors["password"]="Please enter a valid password"
  } else {
    let passwordValid = fields["password"].match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/);
    if (!passwordValid) {      
       formIsValid = false;
      errors["password"]="Your password does not match";
     
    }
  }
}

if (!fields["description"]) {
      formIsValid = false;
      errors["description"]="This field is required.";
    }
this.setState({ errors: errors });
return formIsValid;



  }



  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
    let result = '<h3>Account Info</h3>';
    result += '<p>' + 'Username: ' + this.state.fields["username"] + '</p>';
    result += '<p>' + 'Password: ' + this.state.fields["password"] + '</p>';
    result += '<p>' + 'Description: ' + this.state.fields["description"] + '</p>';
    this.refs.result.innerHTML = result;
  }
//  else { alert("Form has errors.")}
  }





  render() {
    return (
      <div>
     <h1>Форма</h1>
           <form onSubmit={this.handleSubmit.bind(this)}>
            <p><label>Name</label><br/>
            <input type="text" name="username" value={this.state.fields["username"]} className="form-control" onChange={this.handleChange} />
 <small>{this.state.errors["username"]}</small>
            </p>
            <p><label>Password</label><br/>
 <input type="password" name="password" value={this.state.fields["password"]} className="form-control" onChange={this.handleChange} />
  <small>{this.state.errors["password"]}</small></p>
 <p><label>Description</label><br/>
 <textarea name="description" cols="20" rows="5" className="form-control" onChange={this.handleChange}>
{this.state.fields["description"]}
 </textarea>
<small>{this.state.errors["description"]}</small></p>
 <p> <input type="submit" value="Ok"/> </p>
 <br />
           </form>
           <div ref="result"></div>          
           </div>
    );
  }
}

export default Forms;