import React from 'react';

export default class App extends React.Component {
	handleSubmit(event){
		event.preventDefault();
		console.log("Clicked");
	}
	handleChange(event){
		var text = event.target.value;
		console.log(text);

	}
  render () {
    return <div>
             <p>TODO</p>
             <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange}/>
              <button>
               Submit
              </button>
              </form>
           </div>;
  }
}
