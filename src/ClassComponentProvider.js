import React, { Component } from 'react';
import './App.css';

var ThemeContext = React.createContext('gagandeep')

function ClassComponentProvider() {
  return (
    <ThemeContext.Provider value="Click Here">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

// "ThemedButton" functional component .. intermediate component however optional
class ThemedButton extends Component {
  render() {
    return (
      <UIButton />
    )
  }
}

// "UIButton" functional component
class UIButton extends Component {

  // for usage only in Class component 
  static contextType = ThemeContext
  render() {

    // this.context contains value from Context.Provider
    let value = this.context;

    return (
      <button>
        {value}
      </button>
    )
  }
}


export default ClassComponentProvider;
