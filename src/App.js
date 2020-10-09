import React, { Component } from 'react';
import Header from './components/header';
import Products from './components/Dropdown/Products';
import Body from './components/body';
import Sticky from './components/sticky';

class App extends Component {

  state={
    isProducts: false,
  }

  handleDropdown = (option) => {
    switch(option){
      case 'products' : 
        this.setState({
          isProducts : !this.state.isProducts,
        })
        break;

      default: 

    }
  }

  render() {
    let dropdown=null;
    if(this.state.isProducts)
    dropdown = <Products/>;
    return (
      <div>
        <Header handleDropdown={this.handleDropdown} />
        {dropdown}
        <Sticky/>
        <Body/>
      </div>
    );
  }
}

export default App;
