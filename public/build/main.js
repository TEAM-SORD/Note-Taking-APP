(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/main.js":[function(require,module,exports){

/** @jsx React.DOM */

//var React = require('react');


var SearchField = React.createClass({displayName: "SearchField",
    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.
        var searchText = this.refs.searchText.getDOMNode().value.trim();
        this.props.updateSearchString( {searchString: searchText } );
    },
    render: function() {
        return (
            React.createElement("input", {type: "text", value: this.props.searchString, onChange: this.handleChange, ref: "searchText", placeholder: "Type here"})
        );
    }

});

var SearchList = React.createClass({displayName: "SearchList",

	render: function(){
		var list = this.props.libraries.map(function(l){
                 return React.createElement("li", null, l.name, " ", React.createElement("a", {href: l.url}, l.url))
              });
     
     return (
         	React.createElement("ul", null, 
                list
            )
     	);
    }

});

var SearchContainer = React.createClass({displayName: "SearchContainer",

    getInitialState: function(){
        return { searchString: '' };
    },

    updateSearchString: function( search ){
        this.setState(search);
    },
    render: function() {

        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return (
                React.createElement("div", null, 
                    React.createElement(SearchField, {value: this.state.searchString, updateSearchString: this.updateSearchString}), 
                    React.createElement(SearchList, {libraries: libraries})
                )
                )
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

React.render(React.createElement(SearchContainer, {items: libraries}), document.body);


},{}]},{},["./src/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2ZWJlZWNoL05vdGUtVGFraW5nLUFQUC9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0EscUJBQXFCOztBQUVyQiwrQkFBK0I7QUFDL0I7O0FBRUEsSUFBSSxpQ0FBaUMsMkJBQUE7QUFDckMsSUFBSSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDN0I7QUFDQTtBQUNBOztRQUVRLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUM7S0FDaEU7SUFDRCxNQUFNLEVBQUUsV0FBVztRQUNmO1lBQ0ksb0JBQUEsT0FBTSxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxNQUFBLEVBQU0sQ0FBQyxLQUFBLEVBQUssQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBQyxDQUFDLFFBQUEsRUFBUSxHQUFJLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQyxHQUFBLEVBQUcsQ0FBQyxZQUFBLEVBQVksQ0FBQyxXQUFBLEVBQVcsQ0FBQyxXQUFXLENBQUUsQ0FBQTtVQUM5SDtBQUNWLEtBQUs7O0FBRUwsQ0FBQyxDQUFDLENBQUM7O0FBRUgsSUFBSSxnQ0FBZ0MsMEJBQUE7O0NBRW5DLE1BQU0sRUFBRSxVQUFVO0VBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDaEMsT0FBTyxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMs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bUJBQW1CLENBQUM7O0FBRTlDLENBQUMsQ0FBQzs7QUFFRixpREFBaUQ7O0FBRWpELEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsZUFBZSxFQUFBLENBQUEsQ0FBQyxLQUFBLEVBQUssQ0FBRSxTQUFVLENBQUUsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG4vL3ZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cblxudmFyIFNlYXJjaEZpZWxkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGhhbmRsZUNoYW5nZTogZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgLy8gSWYgeW91IGNvbW1lbnQgb3V0IHRoaXMgbGluZSwgdGhlIHRleHQgYm94IHdpbGwgbm90IGNoYW5nZSBpdHMgdmFsdWUuXG4gICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSBpbiBSZWFjdCwgYW4gaW5wdXQgY2Fubm90IGNoYW5nZSBpbmRlcGVuZGVudGx5IG9mIHRoZSB2YWx1ZVxuICAgICAgICAvLyB0aGF0IHdhcyBhc3NpZ25lZCB0byBpdC4gSW4gb3VyIGNhc2UgdGhpcyBpcyB0aGlzLnN0YXRlLnNlYXJjaFN0cmluZy5cbiAgICAgICAgdmFyIHNlYXJjaFRleHQgPSB0aGlzLnJlZnMuc2VhcmNoVGV4dC5nZXRET01Ob2RlKCkudmFsdWUudHJpbSgpO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlYXJjaFN0cmluZygge3NlYXJjaFN0cmluZzogc2VhcmNoVGV4dCB9ICk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMucHJvcHMuc2VhcmNoU3RyaW5nfSBvbkNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX0gcmVmPSdzZWFyY2hUZXh0JyBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbn0pO1xuXG52YXIgU2VhcmNoTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGxpc3QgPSB0aGlzLnByb3BzLmxpYnJhcmllcy5tYXAoZnVuY3Rpb24obCl7XG4gICAgICAgICAgICAgICAgIHJldHVybiA8bGk+e2wubmFtZX0gPGEgaHJlZj17bC51cmx9PntsLnVybH08L2E+PC9saT5cbiAgICAgICAgICAgICAgfSk7XG4gICAgIFxuICAgICByZXR1cm4gKFxuICAgICAgICAgXHQ8dWw+XG4gICAgICAgICAgICAgICAge2xpc3R9XG4gICAgICAgICAgICA8L3VsPlxuICAgICBcdCk7XG4gICAgfVxuXG59KTtcblxudmFyIFNlYXJjaENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHsgc2VhcmNoU3RyaW5nOiAnJyB9O1xuICAgIH0sXG5cbiAgICB1cGRhdGVTZWFyY2hTdHJpbmc6IGZ1bmN0aW9uKCBzZWFyY2ggKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzZWFyY2gpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgbGlicmFyaWVzID0gdGhpcy5wcm9wcy5pdGVtcyxcbiAgICAgICAgICAgIHNlYXJjaFN0cmluZyA9IHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG5cbiAgICAgICAgaWYoc2VhcmNoU3RyaW5nLmxlbmd0aCA+IDApe1xuXG4gICAgICAgICAgICAvLyBXZSBhcmUgc2VhcmNoaW5nLiBGaWx0ZXIgdGhlIHJlc3VsdHMuXG5cbiAgICAgICAgICAgIGxpYnJhcmllcyA9IGxpYnJhcmllcy5maWx0ZXIoZnVuY3Rpb24obCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGwubmFtZS50b0xvd2VyQ2FzZSgpLm1hdGNoKCBzZWFyY2hTdHJpbmcgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hGaWVsZCB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmd9IHVwZGF0ZVNlYXJjaFN0cmluZz17dGhpcy51cGRhdGVTZWFyY2hTdHJpbmd9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaExpc3QgbGlicmFyaWVzPXtsaWJyYXJpZXN9Lz4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgIH1cbn0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG52YXIgbGlicmFyaWVzID0gW1xuXG4gICAgeyBuYW1lOiAnQm9yaXMnLCB0aXRsZTogJ2h0dHA6Ly9kb2N1bWVudGNsb3VkLmdpdGh1Yi5pby9iYWNrYm9uZS8nfSxcbiAgICB7IG5hbWU6ICdBbmd1bGFySlMnLCB0aXRsZTogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nfSxcbiAgICB7IG5hbWU6ICdqUXVlcnknLCB0aXRsZTogJ2h0dHA6Ly9qcXVlcnkuY29tLyd9LFxuICAgIHsgbmFtZTogJ1Byb3RvdHlwZScsIHRpdGxlOiAnaHR0cDovL3d3dy5wcm90b3R5cGVqcy5vcmcvJ30sXG4gICAgeyBuYW1lOiAnUmVhY3QnLCB0aXRsZTogJ2h0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvJ30sXG4gICAgeyBuYW1lOiAnRW1iZXInLCB0aXRsZTogJ2h0dHA6Ly9lbWJlcmpzLmNvbS8nfSxcbiAgICB7IG5hbWU6ICdLbm9ja291dC5qcycsIHRpdGxlOiAnaHR0cDovL2tub2Nrb3V0anMuY29tLyd9LFxuICAgIHsgbmFtZTogJ0Rvam8nLCB0aXRsZTogJ2h0dHA6Ly9kb2pvdG9vbGtpdC5vcmcvJ30sXG4gICAgeyBuYW1lOiAnTW9vdG9vbHMnLCB0aXRsZTogJ2h0dHA6Ly9tb290b29scy5uZXQvJ30sXG4gICAgeyBuYW1lOiAnVW5kZXJzY29yZScsIHRpdGxlOiAnaHR0cDovL2RvY3VtZW50Y2xvdWQuZ2l0aHViLmlvL3VuZGVyc2NvcmUvJ30sXG4gICAgeyBuYW1lOiAnTG9kYXNoJywgdGl0bGU6ICdodHRwOi8vbG9kYXNoLmNvbS8nfSxcbiAgICB7IG5hbWU6ICdNb21lbnQnLCB0aXRsZTogJ2h0dHA6Ly9tb21lbnRqcy5jb20vJ30sXG4gICAgeyBuYW1lOiAnRXhwcmVzcycsIHRpdGxlOiAnaHR0cDovL2V4cHJlc3Nqcy5jb20vJ30sXG4gICAgeyBuYW1lOiAnS29hJywgdGl0bGU6ICdodHRwOi8va29hanMuY29tLyd9LFxuXG5dO1xuXG4vLyBSZW5kZXIgdGhlIFNlYXJjaEV4YW1wbGUgY29tcG9uZW50IG9uIHRoZSBwYWdlXG5cblJlYWN0LnJlbmRlcig8U2VhcmNoQ29udGFpbmVyIGl0ZW1zPXtsaWJyYXJpZXN9Lz4sIGRvY3VtZW50LmJvZHkpO1xuIl19
