var React = require('react');
var ReactDOM = require('react-dom');

var CardForm = React.createClass({
  submit: function () {
    this.props.onSubmit();
  },
  getInitialState: function() {
    return {text: ''};
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var text = this.state.text.trim();
    if (text) {
      this.setState({text: ''});
      this.props.onSubmit({text: text, key: Date.now()});
    }
  },
  render: function() {
    return (
      <form className="card-form" onSubmit={this.handleSubmit}>
        <textarea type="text" className="card-text" data-l10n-id="addCardPlaceholder" value={this.state.text} onChange={this.handleTextChange}/>
        <input type="submit" className="btn submit" data-l10n-id="addCard"/>
      </form>
    );
  }
});

module.exports = CardForm;
