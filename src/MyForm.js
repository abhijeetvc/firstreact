import React from 'react'

class MyForm extends React.Component{

    constructor(){
        super()   // call to constructor of super class
        this.state={
            message:''
        }
        this.onChange=this.onChange.bind(this)
        this.displayMessage=this.displayMessage.bind(this)
    }

    onChange=(event)=>{
        this.setState({message: event.target.value})
        console.log(this.state.message)
    }    
    displayMessage=(event)=>{
        event.preventDefault()
        console.log(this.state.message)
    }
    render(){
        return(
            <form>
                <h1>My Form</h1>
                <h2>Hello {this.state.message}</h2>
                <input type="text" onChange={this.onChange}/>
                <button onClick={this.displayMessage}>Check</button>
            </form>
        )
    }
}

export default MyForm