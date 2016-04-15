var React = require('react');
var ReactDOM = require('react-dom');
var Task = require('./task');

var TaskList = React.createClass({
  render: function() {
    var tasks = this.props.tasks.map(function(task) {
      return <Task cards={task.cards} title={task.title} key={task.key}/>;
    });
    var divStyle = {
      display: this.props.tasks.length ? null : 'none'
    };
    return (
      <div className="task-list" style={divStyle}>
        {tasks}
      </div>
    );
  }
});

module.exports = TaskList;
