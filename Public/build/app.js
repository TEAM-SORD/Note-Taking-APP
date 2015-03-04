//var React = require( 'react');

var NoteApp = React.createClass({displayName: "NoteApp",
	render: function(){
		return ( 
			React.createElement("div", {className: "NoteApp col-md-6 col-lg-6 col-sm-8 col-xs-10"}, 
				React.createElement(SearchableTable, {notes: this.props.notes}), 
				React.createElement(TextEditor, {notes: this.props.notes})

			)
		)
	}
});

var TextEditor = React.createClass({displayName: "TextEditor",
	render: function(){
		return(
			React.createElement("div", {className: "TextEditor col-md-8 col-lg-8 col-sm-8 col-xs-12"}, 
			React.createElement("textarea", {className: "textarea"})
			)
			)
	}
});

var SearchableTable = React.createClass({displayName: "SearchableTable",
	render: function(){
		return (
			React.createElement("div", {className: "SearchableTable col-md-4 col-lg-4 col-sm-4 col-xs-4"}, 
				React.createElement(SearchField, null), 
				React.createElement(NoteList, {notes: this.props.notes})
			)
			)
	}
});

var SearchField = React.createClass({displayName: "SearchField",
	render: function(){
		return(
			React.createElement("input", {type: "text", className: "SearchField"})
			)
	}
});


var NoteList = React.createClass({displayName: "NoteList",
	render: function(){
		var titles = [];
		this.props.notes.forEach(function(note){
			titles.push(React.createElement(IndivNote, {note: note}))
		});

		return (
			React.createElement("ul", {className: "NoteList"}, " ", titles, " ")
			)

	}
});

var IndivNote = React.createClass({displayName: "IndivNote",
	render: function(){
		return ( 
			React.createElement("li", null, 
				React.createElement("p", null, " ", this.props.note.title, " ")
			)
		)
	}
});


var NOTES = [
 	{author: 'Amil', title: 'Amils Text1', text: 'This is Amil here and this is my text'},
 	{author: 'Per', title: 'Pers Text1', text: 'This is Per here and this is my text'},
 	{author: 'Ron', title: 'Rons Text1', text: 'This is Ron here and this is my text'},
 	{author: 'Amil', title: 'Amils Text2', text: 'This is Amil here and this is my text'},
 	{author: 'Per', title: 'Pers Text2', text: 'This is Per here and this is my text'},
 	{author: 'Ron', title: 'Rons Text2', text: 'This is Ron here and this is my text'}
];

React.render(React.createElement(NoteApp, {notes: NOTES}), document.getElementById("content"));

//module.exports.NoteApp;