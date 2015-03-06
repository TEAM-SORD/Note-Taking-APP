var React = require('react');

var SearchList = React.createClass({
    handleSelect: function(note) {
        console.log( 'click worked');
        this.props.displayNote( note );
    },
    render: function(){
        var that = this;
        var list = this.props.libraries.map(function(l, idx){
                var id = 'item' + idx;
                 return <li ref={id} onClick={that.handleSelect.bind(null, l)}>{l.name} :  {l.title}</li>;
              });

     return (
            <ul>
                {list}
            </ul>
        );
    }

});

module.exports = SearchList;