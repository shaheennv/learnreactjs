import React from 'react';
import DisplayList from './DisplayList';
var rand = require('random-key');
export default class App extends React.Component {
    constructor(){
        super();
        this.state= {title : '', todos:[
                                        {title:'shaheen', done: false, id: 1 },
                                        {title: 'srihari', done: false, id: 2},
                                        {title: 'junil', done: false, id: 3},
                                        {title: 'sush', done: false, id: 4}
                                        ]
                    };
    }
    handleDone(idToBeMarkedDone){
      var _todo = this.state.todos;
      var todo = _todo.filter((todo) => {
        return todo.id == idToBeMarkedDone;
      })[0];
      todo.done = !todo.done;
      this.setState({ todos: _todo});
    }
    handleDelete(idToDelete){
      var newtodos = this.state.todos.filter((todo) => {
        return todo.id != idToDelete;
      });
      this.setState({todos: newtodos});
    }

  handleClearCompleted(event){
    var newTodos = this.state.todos.filter((todo) => {return !todo.done});
    this.setState({todos: newTodos});
  }
	handleSubmit(event){
		event.preventDefault();
        var title = this.state.title;
        var newtodos = this.state.todos.concat({title: title, 
                                                id: rand.generate(),
                                                done: false});
        this.setState({title: '', todos: newtodos});
	}
	handleChange(event){
		var title = event.target.value;
        this.setState({title: title});

	}
  render () {
    return <div>
             <h1>TODO</h1>
             <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" onChange={this.handleChange.bind(this)} value={this.state.title}/> 
              </form>
              <DisplayList
               handleDelete = {this.handleDelete.bind(this)}
               handleDone = {this.handleDone.bind(this)}
               todos={this.state.todos} />
              <footer>All : {this.state.todos.length} |
                Completed : {this.state.todos.filter((todo) => {return todo.done}).length} | 
                Pending : {this.state.todos.filter((todo) => {return !todo.done}).length} |
                <a href="#" onClick={this.handleClearCompleted.bind(this)}> Clear Completed </a>
              </footer> 
           </div>;

  }
}
