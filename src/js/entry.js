require('../sass/style.scss');
var React = require('react');
var ReactDOM = require('react-dom');
var TaskBoard = require('./task-board');

ReactDOM.render(
  <TaskBoard/>,
  document.getElementById('content')
);
