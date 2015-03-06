
/** @jsx React.DOM */

var React = require('react');


var SearchField = React.createClass({
    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.
        var searchText = this.refs.searchText.getDOMNode().value.trim();
        this.props.updateSearchString( {searchString: searchText } );
    },
    render: function() {
        return (
            <input className="searchField" type="text" value={this.props.searchString} onChange = {this.handleChange} ref='searchText' placeholder="Type here"/>
        );
    }

});

var SearchList = React.createClass({
    handleSelect: function(note) {
        console.log( 'click worked');
        this.props.displayNote( note );
    },
    render: function(){
        var that = this;
        var list = this.props.libraries.map(function(l, idx){
                var id = 'item' + +idx;
                 return <li ref={id} onClick={that.handleSelect.bind(null, l)}>{l.name} :  {l.title}</li>;
              });

     return (
            <ul>
                {list}
            </ul>
        );
    }

});

var SearchContainer = React.createClass({

    render: function() {
        var libraries = this.props.libraries,
            searchString = this.props.searchString.trim().toLowerCase();

        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });
        }
        return (
                <div className="searchArea col-xs-4">
                    <SearchField searchString={this.props.searchString} updateSearchString={this.props.updateSearchString}/>
                    <SearchList libraries={libraries} displayNote={this.props.displayNote}/>
                </div>
        );
    }
});

var NoteContainer = React.createClass({
    handleChange: function(e) {
        e.preventDefault();
        console.log( 'in handleChange');

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
  render: function() {
    console.log('render form');
    return (
      <form className= "noteContainer col-xs-8" onSubmit={this.handleChange}>
        <input className="nameField" type="text" placeholder="name" value={this.props.displayedNote.name} ref="name"/>
        <input className="titleField" type="text" placeholder="title" value={this.props.displayedNote.title} ref="title"/>
        <input className="saveButt" type="submit" value="Save" />
        <input className="clearButt" type="submit" value="Clear" />
        <input className="textField" type="text" placeholder="notepad" value={this.props.displayedNote.text} ref="text"/>
      </form>
    );
  }
});

var NotePadApp = React.createClass({
    loadLibraryFromServer: function() {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          success: function(data) {
            this.setState({library: data});
          }
          .bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }
          .bind(this)
        });
    },
    getInitialState: function(){
        return { 
                    searchString: '',
                    library : [],
                    displayedNote : {}
               };
    },
    componentDidMount: function() {
        this.loadLibraryFromServer();
        setInterval(this.loadLibraryFromServer, this.props.pollInterval);
    },
    updateSearchString: function( search ){
        this.setState( search );
    },
    updateLibrary: function( newNote ){
        console.log('in updateLibrary');
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          type: 'POST',
          data: newNote,
          success: function(data) {
            this.setState({library: data});
          }
          .bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }
          .bind(this)
        });
        //this.state.library.push( newNote );
    },
    displayNote: function( note ){
        this.setState( {displayedNote: note } );
        console.log( this.state.displayedNote );
    },
    render: function() {
        return (
            <div className="notePadApp col-xs-12">
                <SearchContainer searchString={this.state.searchString} libraries={this.state.library} displayNote={this.displayNote} updateSearchString={this.updateSearchString}/>
                <NoteContainer displayedNote={this.state.displayedNote} updateLibrary={this.updateLibrary}/>
            </div>
            );
        }
});


// Render the SearchExample component on the page

React.render(<NotePadApp url='library.json' pollInterval={2000} />, document.body);



// var exports = module.exports = {};

function sum( value1, value2 ) {
  return value2 + value1;
}

module.exports = {
    SearchField : SearchField,
    SearchList  : SearchList,
    SearchContainer : SearchContainer,
    NotePadApp: NotePadApp,
    NoteContainer: NoteContainer,
    sum             : sum
};
