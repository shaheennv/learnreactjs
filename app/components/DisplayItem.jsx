import React from 'react';

export default class DisplayItem extends React.Component {
	
	constructor(){
		super();
		this.state = {editing : false};
	}
	componentDidMount(){
		this.setState({changedText: this.props.todo.title});
	}
	handleEditing(event){
		this.setState({ editing: true, changedText: this.props.todo.title });
	}
	handleDone(event){
		var todo = !this.props.todo;
		this.setState({ done: _done});
	}
	handleEditingDone(event){
		console.log("asdasd");
		if(event.keyCode === 13){
			this.setState({ editing: false});
			console.log("enter") ;
		}
	}
	handleEditingChange(event){
		var _changedText = event.target.value;
		this.setState({changedText: _changedText});
	}
	render(){
		var todo = this.props.todo;
		var editStyle = {};
		var viewStyle = {};
		var title = todo.title;
		if(this.state.editing){
			viewStyle.display = 'none';
		}
		else{
			editStyle.display = 'none';
		}
		return <li className={ todo.done ? 'done' : ''}>
				<div style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>
				 <input 
				 	checked= {todo.done}
				 	onChange= {this.props.handleDone.bind(null, todo.id)}
				 	type="checkbox" 
				 	style={{ fontSize: 'x-large'}} />
				 <label>
				 	{ this.state.changedText }
				 </label>
				 <a href="#" className="destroy" onClick={ this.props.handleDelete.bind(null, todo.id) }>[x]</a>
			    </div>
		    	<input type="text"  
		    		style={editStyle}
		    		value={this.state.changedText}
		    		onChange={this.handleEditingChange.bind(this)}
		    		onKeyDown= {this.handleEditingDone.bind(this)} />
			   </li>;
	}
}

DisplayItem.propTypes= {
	todo: React.PropTypes.object.isRequired,
	handleDone: React.PropTypes.func.isRequired,
	handleDelete: React.PropTypes.func.isRequired
}