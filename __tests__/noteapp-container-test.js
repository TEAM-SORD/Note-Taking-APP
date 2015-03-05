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

  var AppElement = TestUtils.renderIntoDocument(<NoteApp.SearchContainer libraries={libraries}/>);
  var NoteList = TestUtils.scryRenderedDOMComponentsWithTag(AppElement, 'ul');

  it('proves that the NoteApp container exists on the page', function(){
      expect(TestUtils.isElement(AppElement)).toEqual(true);
  });

});
