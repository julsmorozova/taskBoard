var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var CardList = React.createClass({
  render: function() {
    var cards = this.props.cards.map(function(card) {
      return <Card key={card.key}>{card.text}</Card>;
    });
    return (
      <div className="card-list">
        {cards}
      </div>
    );
  }
});

module.exports = CardList;
