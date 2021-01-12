import React from 'react'

class Conditional extends React.Component{
        constructor(){
            super()
            this.state={
                isDispalyed: false
            }
        }
        displayHide=()=>{
            this.setState(state=>({isDispalyed: !state.isDispalyed}))
        }
        render(){
            return(
                <div>
                    <h1>Conditional Rendering</h1>
                    <CheckComponent message={"Hello ReactJS"} isDispalyed={this.state.isDispalyed}/>
                    <button onClick={this.displayHide} type="button">DisplayHide</button>
                </div>
            )
        }
}

const CheckComponent=({message, isDispalyed})=>
       isDispalyed ? <h1>{message}</h1> :null

export default Conditional
//{this.state.isDispalyed ? <CheckComponent message={"Hello ReactJS"}/>:null}