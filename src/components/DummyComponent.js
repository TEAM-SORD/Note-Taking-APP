var React = require('react');
var SearchContainer = require( './SearchContainer.js');
var DummyComponent = React.createClass({

	render: function() {
        return (
            <div className="notePadApp col-xs-12">
                <SearchContainer searchString={""} libraries={[]} />
            </div>
            );
    }

});

module.exports = DummyComponent;