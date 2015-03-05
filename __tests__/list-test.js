jest.dontMock('../src/main.js');

var React = require('react/addons'),
    NoteApp = require('../src/main.js'),
    TestUtils = React.addons.TestUtils;

describe('NoteApp', function() {

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

  var SearchField = TestUtils.renderIntoDocument(<NoteApp.SearchField libraries={libraries}/>);
  var node = SearchField.refs.searchText.getDOMNode();
  React.addons.TestUtils.Simulate.change(node, {target: {value: 'a'}});
  var NoteList2 = TestUtils.scryRenderedDOMComponentsWithTag(AppElement, 'ul');

  it('changes the note list output when the value in the search field changes', function() {
      expect(NoteList2[0].props.children.length).toEqual(4);
  });

});
