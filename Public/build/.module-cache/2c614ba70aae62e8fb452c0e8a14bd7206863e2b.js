
/** @jsx React.DOM */

// Let's create a "real-time search" component
var SearchList = React.createClass({displayName: "SearchList",

	render: function(){
		var list = this.props.libraries.map(function(l){
                 return React.createElement("li", null, l.name, " ", React.createElement("a", {href: l.title}, l.title))
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

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
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

        return React.createElement("div", null, 
                    React.createElement("input", {type: "text", value: this.state.searchString, onChange: this.handleChange, placeholder: "Type here"}), 
                    React.createElement(SearchList, {libraries: libraries})
                    

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

React.renderComponent(
    React.createElement(SearchContainer, {items: libraries }),
    document.body
);
