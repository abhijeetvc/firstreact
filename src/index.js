import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
// import App1 from './App1'
// import MyForm from './MyForm'

// Two ways to create components: a) function, b) class 

// class App extends Component{
//     render(){
//       return(
//            <div>
//               <h1>This is Heading</h1>
//               <p>This is a paragraph.</p>
//               <p>This is again a new Paragraph.</p>
//            </div>
//           )
//     }
    
// }

// function App(){
//   return(
//     <div>
//       <h1>This is Heading</h1>
//       <p>This is a paragraph.</p>
//       <p>This is again a new Paragraph.</p>
//    </div>
//   )
// }

// function App1(){
//   return(
//     <ul>
//       <li>India</li>
//       <li>US</li>
//       <li>France</li>
//       <li>Germany</li>
//     </ul>
//   )
// }

// const message="Hello John Doe"

// const data=<h1>{message}</h1>

// const person={
//    firstName:"John",
//    lastName:"Doe"
// }

// function concatName(person){
//    return person.firstName+ ' '+person.lastName
// }
// props -> properties (information passed from one component to another)
function MyMessage(props){
    return(
      <h1>{props.message}</h1>
    )
}

function MyApp(){
  return(
    <div>
      <MyMessage message="Hello ReactJS"/>
      <MyMessage message="Hello ReactJS1"/>
      <MyMessage message="Hello ReactJS2"/>
  </div>
  )
}

ReactDOM.render(<MyApp/>,document.getElementById('root'));




// render -> Two parameters -> a) What has to be renered?, b) Where it has to be rendered?
