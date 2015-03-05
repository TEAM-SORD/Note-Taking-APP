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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9zYXJhaC9URUFNLVNPUkQvTm90ZS1UYWtpbmctQVBQL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQSxxQkFBcUI7O0FBRXJCLCtCQUErQjs7QUFFL0IsSUFBSSxpQ0FBaUMsMkJBQUE7QUFDckMsSUFBSSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDN0I7QUFDQTtBQUNBOztRQUVRLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUM7S0FDaEU7SUFDRCxNQUFNLEVBQUUsV0FBVztRQUNmO1lBQ0ksb0JBQUEsT0FBTSxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxNQUFBLEVBQU0sQ0FBQyxLQUFBLEVBQUssQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBQyxDQUFDLFFBQUEsRUFBUSxHQUFJLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQyxHQUFBLEVBQUcsQ0FBQyxZQUFBLEVBQVksQ0FBQyxXQUFBLEVBQVcsQ0FBQyxXQUFXLENBQUUsQ0FBQTtVQUM5SDtBQUNWLEtBQUs7O0FBRUwsQ0FBQyxDQUFDLENBQUM7O0FBRUgsSUFBSSxnQ0FBZ0MsMEJBQUE7O0NBRW5DLE1BQU0sRUFBRSxVQUFVO0VBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDaEMsT0FBTyxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMs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bUJBQW1CLENBQUM7O0FBRTlDLENBQUMsQ0FBQzs7QUFFRixpREFBaUQ7O0FBRWpELEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsZUFBZSxFQUFBLENBQUEsQ0FBQyxLQUFBLEVBQUssQ0FBRSxTQUFVLENBQUUsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG4vL3ZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBTZWFyY2hGaWVsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIC8vIElmIHlvdSBjb21tZW50IG91dCB0aGlzIGxpbmUsIHRoZSB0ZXh0IGJveCB3aWxsIG5vdCBjaGFuZ2UgaXRzIHZhbHVlLlxuICAgICAgICAvLyBUaGlzIGlzIGJlY2F1c2UgaW4gUmVhY3QsIGFuIGlucHV0IGNhbm5vdCBjaGFuZ2UgaW5kZXBlbmRlbnRseSBvZiB0aGUgdmFsdWVcbiAgICAgICAgLy8gdGhhdCB3YXMgYXNzaWduZWQgdG8gaXQuIEluIG91ciBjYXNlIHRoaXMgaXMgdGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmcuXG4gICAgICAgIHZhciBzZWFyY2hUZXh0ID0gdGhpcy5yZWZzLnNlYXJjaFRleHQuZ2V0RE9NTm9kZSgpLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2hTdHJpbmcoIHtzZWFyY2hTdHJpbmc6IHNlYXJjaFRleHQgfSApO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaFN0cmluZ30gb25DaGFuZ2UgPSB7dGhpcy5oYW5kbGVDaGFuZ2V9IHJlZj0nc2VhcmNoVGV4dCcgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIi8+XG4gICAgICAgICk7XG4gICAgfVxuXG59KTtcblxudmFyIFNlYXJjaExpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBsaXN0ID0gdGhpcy5wcm9wcy5saWJyYXJpZXMubWFwKGZ1bmN0aW9uKGwpe1xuICAgICAgICAgICAgICAgICByZXR1cm4gPGxpPntsLm5hbWV9IDxhIGhyZWY9e2wudXJsfT57bC51cmx9PC9hPjwvbGk+XG4gICAgICAgICAgICAgIH0pO1xuICAgICBcbiAgICAgcmV0dXJuIChcbiAgICAgICAgIFx0PHVsPlxuICAgICAgICAgICAgICAgIHtsaXN0fVxuICAgICAgICAgICAgPC91bD5cbiAgICAgXHQpO1xuICAgIH1cblxufSk7XG5cbnZhciBTZWFyY2hDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7IHNlYXJjaFN0cmluZzogJycgfTtcbiAgICB9LFxuXG4gICAgdXBkYXRlU2VhcmNoU3RyaW5nOiBmdW5jdGlvbiggc2VhcmNoICl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc2VhcmNoKTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGxpYnJhcmllcyA9IHRoaXMucHJvcHMuaXRlbXMsXG4gICAgICAgICAgICBzZWFyY2hTdHJpbmcgPSB0aGlzLnN0YXRlLnNlYXJjaFN0cmluZy50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuXG4gICAgICAgIGlmKHNlYXJjaFN0cmluZy5sZW5ndGggPiAwKXtcblxuICAgICAgICAgICAgLy8gV2UgYXJlIHNlYXJjaGluZy4gRmlsdGVyIHRoZSByZXN1bHRzLlxuXG4gICAgICAgICAgICBsaWJyYXJpZXMgPSBsaWJyYXJpZXMuZmlsdGVyKGZ1bmN0aW9uKGwpe1xuICAgICAgICAgICAgICAgIHJldHVybiBsLm5hbWUudG9Mb3dlckNhc2UoKS5tYXRjaCggc2VhcmNoU3RyaW5nICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoRmllbGQgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoU3RyaW5nfSB1cGRhdGVTZWFyY2hTdHJpbmc9e3RoaXMudXBkYXRlU2VhcmNoU3RyaW5nfS8+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hMaXN0IGxpYnJhcmllcz17bGlicmFyaWVzfS8+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICB9XG59KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxudmFyIGxpYnJhcmllcyA9IFtcblxuICAgIHsgbmFtZTogJ0JvcmlzJywgdGl0bGU6ICdodHRwOi8vZG9jdW1lbnRjbG91ZC5naXRodWIuaW8vYmFja2JvbmUvJ30sXG4gICAgeyBuYW1lOiAnQW5ndWxhckpTJywgdGl0bGU6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJ30sXG4gICAgeyBuYW1lOiAnalF1ZXJ5JywgdGl0bGU6ICdodHRwOi8vanF1ZXJ5LmNvbS8nfSxcbiAgICB7IG5hbWU6ICdQcm90b3R5cGUnLCB0aXRsZTogJ2h0dHA6Ly93d3cucHJvdG90eXBlanMub3JnLyd9LFxuICAgIHsgbmFtZTogJ1JlYWN0JywgdGl0bGU6ICdodHRwOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0Lyd9LFxuICAgIHsgbmFtZTogJ0VtYmVyJywgdGl0bGU6ICdodHRwOi8vZW1iZXJqcy5jb20vJ30sXG4gICAgeyBuYW1lOiAnS25vY2tvdXQuanMnLCB0aXRsZTogJ2h0dHA6Ly9rbm9ja291dGpzLmNvbS8nfSxcbiAgICB7IG5hbWU6ICdEb2pvJywgdGl0bGU6ICdodHRwOi8vZG9qb3Rvb2xraXQub3JnLyd9LFxuICAgIHsgbmFtZTogJ01vb3Rvb2xzJywgdGl0bGU6ICdodHRwOi8vbW9vdG9vbHMubmV0Lyd9LFxuICAgIHsgbmFtZTogJ1VuZGVyc2NvcmUnLCB0aXRsZTogJ2h0dHA6Ly9kb2N1bWVudGNsb3VkLmdpdGh1Yi5pby91bmRlcnNjb3JlLyd9LFxuICAgIHsgbmFtZTogJ0xvZGFzaCcsIHRpdGxlOiAnaHR0cDovL2xvZGFzaC5jb20vJ30sXG4gICAgeyBuYW1lOiAnTW9tZW50JywgdGl0bGU6ICdodHRwOi8vbW9tZW50anMuY29tLyd9LFxuICAgIHsgbmFtZTogJ0V4cHJlc3MnLCB0aXRsZTogJ2h0dHA6Ly9leHByZXNzanMuY29tLyd9LFxuICAgIHsgbmFtZTogJ0tvYScsIHRpdGxlOiAnaHR0cDovL2tvYWpzLmNvbS8nfSxcblxuXTtcblxuLy8gUmVuZGVyIHRoZSBTZWFyY2hFeGFtcGxlIGNvbXBvbmVudCBvbiB0aGUgcGFnZVxuXG5SZWFjdC5yZW5kZXIoPFNlYXJjaENvbnRhaW5lciBpdGVtcz17bGlicmFyaWVzfS8+LCBkb2N1bWVudC5ib2R5KTtcbiJdfQ==
