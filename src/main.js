
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

    getInitialState: function(){
        return { searchString: '' };
    },

    updateSearchString: function( search ){
        this.setState(search);
    },
    render: function() {

        var libraries = this.props.libraries,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return (
                <div>
                    <SearchField value={this.state.searchString} updateSearchString={this.updateSearchString}/>
                    <SearchList libraries={libraries}/>
                </div>
                );
    }
});

var NoteContainer = React.createClass({
  render: function() {
    return (
      <form className= "noteContainer">
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="title"/>
        <input type="submit" value="post"/>
        <input type="text" placeholder="notepad"/>
      </form>
    );
  }
});

var NotePadApp = React.createClass({
  render: function() {
    return (
      <div className="notePadApp">
        <SearchContainer libraries={this.props.items}/>
        <NoteContainer/>
      </div>
    );
  }
});

var libraries = [

    { name: 'Boris', title: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', title: 'https://angularjs.org/'},
    { name: 'jQuery', title: 'http://jquery.com/'},
    { name: 'Prototype', title: 'http://www.prototypejs.org/'},
    { name: 'React', title: 'http://facebook.github.io/react/'},
    { name: 'Ember', title: 'http://emberjs.com/'},
    { name: 'Knockout.js', title: 'http://knockoutjs.com/'},
    { name: 'Dojo', title: 'http://dojotoolkit.org/'},
    { name: 'Mootools', title: 'http://mootools.net/'},
    { name: 'Underscore', title: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', title: 'http://lodash.com/'},
    { name: 'Moment', title: 'http://momentjs.com/'},
    { name: 'Express', title: 'http://expressjs.com/'},
    { name: 'Koa', title: 'http://koajs.com/'},

];

// Render the SearchExample component on the page

React.render(<NotePadApp items={libraries}/>, document.body);



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
