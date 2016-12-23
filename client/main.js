import HelloWorld from '/imports/HelloWorld.html';

var app = new HelloWorld({
  target: document.querySelector('main'),
  data: {
    name: 'world'
  }
});
