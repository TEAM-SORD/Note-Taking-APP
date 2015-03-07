
/** @jsx React.DOM */

var React = require('react');
var NotePadApp = require( './components/NotePadApp.js');
var DummyComponent = require( './components/DummyComponent.js');


// Render the SearchExample component on the page
React.render(
	<NotePadApp url='library.json' pollInterval={2000} />, 
	document.body
);


