import React from 'react';
import DisplayItem from './DisplayItem';

export default class DisplayList extends React.Component {

	render(){
		return <ul id="todo-list">
		  			{ this.props.todos.map((todo,i) => {
		  				return <section id="main" key={todo.id}>
		  						<DisplayItem  
		  						 handleDone={this.props.handleDone.bind(null, todo.id)}
		  						 handleDelete={this.props.handleDelete.bind(null, todo.id)} 
		  						 todo={todo} />
		  						</section>
		  			}) }
				</ul>;
	}
}

DisplayList.propTypes = {
	todos: React.PropTypes.array.isRequired,
	handleDone: React.PropTypes.func.isRequired,
	handleDelete: React.PropTypes.func.isRequired
}