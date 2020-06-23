import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
            this.state = { 
                email: "",
                password: "",
                passwordbis: "",
                name: "",
                lastname: ""
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
         event.preventDefault();
         console.log(this.state)
     }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{JSON.stringify(this.state)}</h1>
                    <input type="email" name="email" onChange={this.handleChange}/>
                    <input type="text" name="password" onChange={this.handleChange}/>
                    <input type="text" name="passwordbis" onChange={this.handleChange}/>
                    <input type="text" name="name" onChange={this.handleChange}/>
                    <input type="text" name="lastname" onChange={this.handleChange}/>
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
         );
    }
}
 
export default SignUp;