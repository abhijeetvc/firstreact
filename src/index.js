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
// function MyMessage(props){
//     return(
//       <div>
//         <h1>{props.message.name}</h1>
//        <h2>{props.message.city}</h2>
//        <h2>{props.message.salary}</h2>
//       </div>
//     )
// }

// const person={
//    name:"John",
//    city:"Pune",
//    salary:75000
// }
// const person1={
//   name:"Peter",
//   city:"Mumbai"
// }
// const person2={
//   name:"Smith",
//   city:"Bangalore"
// }

// const person=[{ name:"John",
// city:"Pune",
// salary:75000},
// {
//   name:"Peter",
//   city:"Mumbai"
// },{
//   name:"Smith",
//   city:"Bangalore"
// }]

// function MyApp(){
//   return(
//     <div>
//       <MyMessage message={person}/>
//       <MyMessage message={person1}/>
//       <MyMessage message={person2}/>
//   </div>
//   )
// }

// class MyApp1 extends React.Component{
//    constructor(){
//      super()
//      this.state={
//          name:'Abhijeet',
//          emails:['a@gmail.com','b@gmail.com']
//      }
//    }
//     render(){
//       return(
//         <div>  
//           <h1>Name : {this.state.name}</h1>
//           <MyApp2 emails={this.state.emails}/>
//         </div>  
//       )
//     }
// }

// class MyApp2 extends React.Component{
//      render(){
//        return(
//          <div>

//           <h1>Emails</h1>
//           <ul>
//               {this.props.emails.map((email)=><li>{email}</li>)}
//           </ul>
//         </div>  
//        )
//      }
// }

// class CheckComponent extends React.Component{
//     constructor(){
//       super()
//       this.state={
//          name:"Abhijeet"
//       }
//     }

//     componentDidMount(){
//       console.log("Loaded CheckComponent")
//     }
//     render(){
//       return(
//          <div>
//             <h1>This is Heading</h1>
//          </div>
//       )
//     }
// }

function MyComps(){
   return(
     <div>
         <ul>
            <li>India</li>
            <li>US</li>
            <li>France</li>
            <li>Germany</li>
         </ul>

         <ol>
            <li>India</li>
            <li>US</li>
            <li>France</li>
            <li>Germany</li>
         </ol>

         <dl>
              <dt>India</dt>
              <dd>India is a nice Country</dd>

              <dt>US</dt>
              <dd>US is a nice Country</dd>
         </dl>
     </div>
   )
}

ReactDOM.render(<MyComps/>,document.getElementById('root'));

// ReactDOM.render -> It Renders a react component to a DOM node
// JSX -> It allows to write HTML like syntax which gets transformed to lightweight JS objects.
// Virtual DOM -> Javascript representation of the actual DOM
// React.Component -> Used for creation of the class component. The way in which you can create a mew component.
// state -> Internal data store of a component
// constructor -> Used for initialisation
// this.state -> used for establishing the initial state of a component
// setState -> It is a helper method used for updating the state of component and re-rendering to the UI.
// props -> properties/data which is passed from parent components to the child components.
// Component Life Cycle methods:
    //     a) componentDidMount -> executes after the component is mounted.
    //     b) componentWillUnMount -> executes before the component will unmount
    //     c) getDerivedStateFromProps -> executes when the component mounts and also the props change.
              // It is used to update the state of a component when its props change.

// render -> Two parameters -> a) What has to be renered?, b) Where it has to be rendered?
