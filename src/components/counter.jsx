import { formatMuiErrorMessage } from '@mui/utils';
import React, { Component } from 'react'

class Counter extends Component {
    //state is a property in react and contains any data that the component needs
    //in this case we will create state set it to an object called counter and set that to 0
   
    state= {
        count: 0,
        //imageUrl: 'https://picsum.photos/200'
        //this goes in the div below if we use the imageUrl
    };
    //we set the state to an object
    /* we can put a javascript expression in the curly brackets below in the return statement.... an expression is anything that produced value */
    // see below
    //we can also pass styles to our render function or we can do it in line like this style={{fontSIze:30}} and fet rid of the style object below the state object

     styles = {
        fontSize: 20,
        fontWeight: 'bold'
     }
    render() { 
        return (
        <div>
              
            <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
            
            <button className=' btn btn-secoindary btn-sm'>Increment</button>
                
        </div>
    );       
  }

  //we can also include a Method

formatCount () {

    const {count} = this.state;
    return count === 0 ? 'Zero' : count 

    //we can clean up this code with object destructuring.... we have this.state.count twice in the ternary expression and extract this.count ..see above
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    //we can clean up this code with object destructuring.... we have this,state,count twice in the ternary expression
    //<span>{this.state.count}</span> is changed to line 17
    
}


}
 
export default Counter;