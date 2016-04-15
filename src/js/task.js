var React = require('react');
var ReactDOM = require('react-dom');
var CardList = require('./card-list');
var CardForm = require('./card-form');

var Task = React.createClass({
  getInitialState: function() {
    return {cards: [], title:''};
  },
  addCard: function(cardText) {
    this.setState({cards: this.state.cards.concat(cardText)});
  },
  render: function() {
    return (
      <div className="task">
        <h1>{this.props.title}</h1>
        <CardList cards={this.state.cards}/>
        <CardForm onSubmit={this.addCard}/>
      </div>
    );
  }
});

module.exports = Task;
