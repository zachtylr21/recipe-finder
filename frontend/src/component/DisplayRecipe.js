import React from 'react'
import StaticList from './StaticList'
import StyledButton from './StyledButton'
import '../stylesheets/DisplayRecipe.css'

const DisplayRecipe = props => {
  let ingredients = props.location.state.ingredients
  let title = props.location.state.title
  let instructions = props.location.state.instructions
  return (
    <div className="displayrecipe-content">
      <h1 style={{fontSize: "48px"}}>{title}</h1>
      <div className="wrapper">
        <div className="list">
          <StaticList items={ingredients}/>
        </div>
        <div className="display-instructions-container">
          {instructions}
        </div>
      </div>
      <StyledButton page="/chooserecipe" text="Back to Recipe List" class="button-back"/>
    </div>
  )
}

export default DisplayRecipe