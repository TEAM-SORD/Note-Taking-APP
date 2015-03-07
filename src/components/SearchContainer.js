var React = require('react');
var SearchField = require( './SearchField');
var SearchList = require( './SearchList');

var SearchContainer = React.createClass({

    render: function() {
        var libraries = this.props.libraries,
            liveSearchString = this.props.searchString.trim().toLowerCase();

        if(liveSearchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( liveSearchString );
            });
        }
        return (
                <div className="searchArea col-xs-6">
                    <SearchField searchString={this.props.searchString} updateSearchString={this.props.updateSearchString}/>
                    <SearchList libraries={libraries} displayNote={this.props.displayNote}/>
                </div>
        );
    }
});

module.exports = SearchContainer;