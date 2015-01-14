var easyxml = require('./index');

var convert = {
    items: [{
        name: 'one',
        _id: 1
    }, {
        name: 'two',
        _id: 2
    }, {
        name: 'three',
        _id: 3
    }],
    blah: 'http://www.google.com',
    when: new Date(),
    boolz: true,
    nullz: null
};

easyxml.configure({
  rootElement: null,
  manifest: true,
  singularizationOverride: {
    "items" : "funItems"
  }
});

console.log(easyxml.render(convert));