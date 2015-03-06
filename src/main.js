
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
            <input type="text" value={this.props.searchString} onChange = {this.handleChange} ref='searchText' placeholder="Type here"/>
        );
    }

});

var SearchList = React.createClass({

    render: function(){
        var list = this.props.libraries.map(function(l){
                 return <li>{l.name} <a href={l.url}>{l.url}</a></li>
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
                    <SearchList libraries={libraries}/>
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
        <input type="text" placeholder="name" ref="name"/>
        <input type="text" placeholder="title" ref="title"/>
        <input type="submit" value="post" />
        <input type="text" placeholder="notepad" ref="text"/>
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
                    library : libraries,
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
    render: function() {
        return (
            <div className="notePadApp col-xs-12">
                <SearchContainer searchString={this.state.searchString} libraries={this.state.library} updateSearchString={this.updateSearchString}/>
                <NoteContainer updateLibrary={this.updateLibrary}/>
            </div>
            );
        }
});

var libraries = [

    { name: 'Boris', title: 'http://documentcloud.github.io/backbone/', text: ""},
    { name: 'AngularJS', title: 'https://angularjs.org/', text: ""},
    { name: 'jQuery', title: 'http://jquery.com/', text: ""},
    { name: 'Prototype', title: 'http://www.prototypejs.org/', text: ""},
    { name: 'React', title: 'http://facebook.github.io/react/', text: ""},
    { name: 'Ember', title: 'http://emberjs.com/', text: ""},
    { name: 'Knockout.js', title: 'http://knockoutjs.com/', text: ""},
    { name: 'Dojo', title: 'http://dojotoolkit.org/', text: ""},
    { name: 'Mootools', title: 'http://mootools.net/', text: ""},
    { name: 'Underscore', title: 'http://documentcloud.github.io/underscore/', text: ""},
    { name: 'Lodash', title: 'http://lodash.com/', text: ""},
    { name: 'Moment', title: 'http://momentjs.com/', text: ""},
    { name: 'Express', title: 'http://expressjs.com/', text: ""},
    { name: 'Koa', title: 'http://koajs.com/', text: ""},

];

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
