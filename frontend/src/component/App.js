import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../stylesheets/App.css';
import Home from './Home'
import FindMeal from './FindMeal'
import AddRecipe from './AddRecipe'
import ChooseRecipe from './ChooseRecipe';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/findmeal" component={FindMeal}/>
          <Route path="/addrecipe" component={AddRecipe}/>
          <Route path="/chooserecipe" component={ChooseRecipe}/>
        </div>
      </Router>
    );
  }
}

export default App;