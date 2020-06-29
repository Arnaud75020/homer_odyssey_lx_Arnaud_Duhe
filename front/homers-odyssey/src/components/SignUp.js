import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
            this.state = { 
                email: "",
                password: "",
                //passwordbis: "",
                name: "",
                lastname: "", 
                flash: ""
            }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleChange(event) {
         const value = event.target.value;
         const name = event.target.name;
        this.setState({ 
            [name]: value
        })
     }

     handleSubmit(event) {

        const { flash, ...user } = this.state

         event.preventDefault();
         fetch("/auth/signup",
         {
             method:  'POST',
             headers:  new  Headers({
                 'Content-Type':  'application/json'
             }),
             body:  JSON.stringify(user),
         })
         .then(res  =>  res.json())
         .then(
             res  =>  this.setState({"flash":  res.flash}),
             err  =>  this.setState({"flash":  err.flash})
         )
     }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.state.flash}</h1>                    
                    <input type="email" name="email" onChange={this.handleChange} placeholder="email"/>
                    <input type="text" name="password" onChange={this.handleChange}placeholder="password"/>
                    {/*<input type="text" name="passwordbis" onChange={this.handleChange} placeholder="passwordbis"/>*/}
                    <input type="text" name="name" onChange={this.handleChange} placeholder="name"/>
                    <input type="text" name="lastname" onChange={this.handleChange}placeholder="lastname"/>
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
         );
    }
}
 
export default SignUp;