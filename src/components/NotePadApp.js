var React = require( 'react' );
var NoteContainer = require( './NoteContainer.js');
var SearchContainer = require( './SearchContainer.js');

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
    handleChange : function(e) {
        console.log('testing');
    },
    render: function() {
        return (
            <div className="notePadApp col-xs-12">
                <SearchContainer searchString={this.state.searchString} libraries={this.state.library} displayNote={this.displayNote} updateSearchString={this.updateSearchString}/>
                <NoteContainer displayedNote={this.state.displayedNote} handleChange={this.handleChange} updateLibrary={this.updateLibrary}/>
            </div>
            );
    }
});

module.exports = NotePadApp;
