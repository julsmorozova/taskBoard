var React = require('react');
var ReactDOM = require('react-dom');

var TaskForm = React.createClass({
  getInitialState: function() {
    return {title: ''};
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    if (title) {
      this.setState({title: ''});
      this.props.onSubmit({title: title, key: Date.now()});
    }
  },
  render: function() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit}>
        <input className="task-title" type="text" data-l10n-id="addTaskPlaceHolder" value={this.state.title} onChange={this.handleTitleChange}/>
        <input className="btn submit" type="submit" data-l10n-id="saveTask"/>
      </form>
    );
  }
});

module.exports = TaskForm;
