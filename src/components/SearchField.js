var React = require( 'react');

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

module.exports = SearchField;