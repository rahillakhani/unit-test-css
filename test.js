// http://tomek.wiszniewski.cc/how-css-unit-tests-helped-us-move-fast/

const tape = require('tape');
const test = require('tape-catch');
const testCss = require('tape-css')(tape);  // We don’t change `tape` in any way.

testCss('Roses are red, <span>s are blue', {
  dom: document.createElement('span'),
  styles: '* { color: red; } span { color: blue; }',
}, (t) => {
  // Our span and styles are here to play with.
  t.equal(
    getComputedStyle(document.querySelector('span')).getPropertyValue('color'),
    'rgb(0, 0, 255)',
    'css test'
  );
  // t.test('another test', {}, (t1) => {
  //   t1.equal(
  //     getComputedStyle(dom.window.document.querySelector('span')).getPropertyValue('color'),
  //     'rgb(0, 0, 255)',
  //     'shoul be equal'
  //   );

  //   // t1.equal(
  //   //     'rgb(0, 0, 255)',
  //   //     'rgb(0, 0, 255)',
  //   //     'shoul not be equal'
  //   //   );
  // });
  t.end();
  // We’ve now cleaned up the place!
});