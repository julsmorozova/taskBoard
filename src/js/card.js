var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
  render: function() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Card;
