var React = require( "react");

var NoteContainer = React.createClass({
    handleSaveNote: function(e) {
        e.preventDefault();
        console.log( 'in handleSaveNote');

        var newNote = {
            name: this.refs.name.getDOMNode().value.trim(),
            title: this.refs.title.getDOMNode().value.trim(),
            text: this.refs.text.getDOMNode().value.trim()
        };
        this.refs.name.getDOMNode().value = "";
        this.refs.title.getDOMNode().value = "";
        this.refs.text.getDOMNode().value = "";
        
        this.props.updateLibrary( newNote );
  },
  handleClearNote: function (e)  {
    console.log( 'in handleClearNote');
    this.refs.name.getDOMNode().value = "";
    this.refs.title.getDOMNode().value = "";
    this.refs.text.getDOMNode().value = "";
  },
  handleDelete: function (e){
    e.preventDefault();
    console.log( 'in handleDeleteNote');
    this.refs.name.getDOMNode().value = "";
    this.refs.title.getDOMNode().value = "";
    this.refs.text.getDOMNode().value = "";
  },
  render: function() {
    console.log('render form');
    var that = this;
    return (
        <div className="noteDetails col-xs-6">
          <form className= "noteContainer " onSubmit={this.handleSaveNote}>
            <input className="nameField" type="text" placeholder="name" value={this.props.displayedNote.name} ref="name"/>
            <input className="titleField" type="text" placeholder="title" value={this.props.displayedNote.title} ref="title"/>
          </form>
          <div>
          <div>
            <form className="saveButt" onSubmit={this.handleSaveNote}>
              <input className="saveButt" type="submit" value="Save" />
            </form>
            <form className="deleteButt" onSubmit={this.handleDelete}>
              <input className="deleteButt" type="submit" value="Delete"/>
            </form>
            <form className='clearButt' onSubmit={this.handleClearNote}>
              <input className="clearButt" type="submit" value="Clear" />
            </form>
          </div>
          </div>
          <form>
            <textarea className="textField" wrap='hard' placeholder="notepad" value={this.props.displayedNote.text} ref="text"/>
          </form>
      </div>
    );
  }
});

module.exports = NoteContainer;