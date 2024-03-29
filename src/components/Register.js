import React, { Component } from 'react'
import fire from './../config'

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            name:'',
            number:''
        }
    }

    submitData = (e) =>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    }
    formVal=(e)=>{
        if(e.target.name==='number'){
            if(isNaN(e.target.value)){
                console.log('Invalid')
            }
            else{
                this.setState(
                    {
                        [e.target.name]:e.target.value
                    } )
            }
        }
            else{
                this.setState({
                    [e.target.name]:e.target.value
                })
            }
        
    }
    render() {
        console.log(this.state)
        return (
            
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.submitData}>
                    <input type="text" placeholder="Name" name="name" onChange={this.formVal} 
                    value={this.state.name}></input>
                    <input type="text" placeholder="Contact Number" name="number" onChange={this.formVal} 
                    value={this.state.number}></input>
                    <input type="email" placeholder="Email" name="email" onChange={this.formVal} 
                    value={this.state.email}></input>
                    <input type="password" placeholder="Password" name="password" onChange={this.formVal} 
                    value={this.state.password}></input>
                    <button>Sign Up</button>
                </form>
        </div>
        )
    }
}

export default Register
