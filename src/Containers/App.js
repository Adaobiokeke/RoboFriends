import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import {Robot} from '../Robot';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import {countries} from '../Components/data/countries';
import {states} from '../Components/data/state';




class App extends Component {
    constructor(){
        super()
        this.state={
            Robot,
            searchfield:'',
            Nigeria: states,
            Country:'',
            State:''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    handleCountryChange =(event) =>{
        this.setState({Country:event.target.value})
        console.log(this.state)
    }
    handleStateChange =(event) =>{
        this.setState({...this.state, State:event.target.value})

    }
    handleSubmit =() =>{
        alert('Robots Successfully saved')
    }


    render() {
        const{robot, searchfield,Country,Nigeria,State,submit} =this.state;
        const filteredRobots= Robot.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
            if (Robot.lenght===0){
            return <h1>Loading</h1>
        } else{
        return (
            <div className='tc'>
            <h1>RoboFriends</h1>         
            {/* <select style={{width:'100px'}} value={Country} onChange={this.handleCountryChange} >
        {countries.map((country,index)=><option value ={country.label} key={index}>{country.label}</option> )}
            </select><br/>
            <br/>
           {Country === 'Nigeria' && <select style={{width:'100px'}} value={State} onChange={this.handleStateChange}>
        {Nigeria.map((state,index)=><option value={state} key={index}>{state}</option>)}
           </select>} */}
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
            <CardList Robot={filteredRobots} />
            </ErrorBoundry>
            <button onClick={this.handleSubmit}>Submit</button>
            </Scroll>
            
            </div>
        )
    }
}

}
export default App;




































// import { robot } from "./robot";
// import SearchBox from "./SearchBox";
// import CardList from "./CardList";

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       robot: robot,
//       searchfield: "",
//     }
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value })
//   }

//   render() {
//     const filteredRobots = this.state.robot.filter(robot => {
//         return  robot.name .toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()) 
//       });
//     return (
//       <div className="tc">
//         <h1> RoboFriends</h1>
//         <SearchBox searchChange={this.onSearchChange}/>
//         <CardList robot={filteredRobots} />
//       </div>
//     );
//   }
// }

