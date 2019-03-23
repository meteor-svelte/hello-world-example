import HelloWorld from '/imports/HelloWorld.svelte';

new HelloWorld({
  target: document.querySelector('main'),
  props: {
    name: 'world'
  }
});
