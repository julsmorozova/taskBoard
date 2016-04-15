var React = require('react');
var ReactDOM = require('react-dom');
var TaskList = require('./task-list');
var TaskForm = require('./task-form');

var TaskBoard = React.createClass({
  getInitialState: function() {
    return {tasks: []};
  },
  addTask: function(task) {
    this.setState({tasks: this.state.tasks.concat(task)});
  },
  render: function() {
    return (
      <div className="task-board">
        <h1>{this.props.title}</h1>
        <TaskList tasks={this.state.tasks}/>
        <TaskForm onSubmit={this.addTask}/>
      </div>
    );
  }
});

module.exports = TaskBoard;
