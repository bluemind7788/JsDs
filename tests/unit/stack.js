$(function () {
  'use strict';

  module('stack plugin', {
    beforeEach: function () {
    	
    },
    afterEach: function () {
      
    }
  })

  test('new stack', function (assert) {
    assert.ok(new Stack(), 'new stack pass')
  })
  
  test('stack init', function (assert) {
  	var s = new Stack()
  	s.init();
    assert.ok($.type(s.elements) == 'array' 
    						&& s.elements.length == 100
    						&& s.top == -1, 'stack init pass')
  })
  
  test('stack peek', function (assert) {
  	var s = new Stack()
  	s.init();
    assert.ok(s.peek() == 'error', 'stack peek 1 pass')
    s.push(1);
    assert.ok(s.peek() == 1, 'stack peek 2 pass')
  })
  
  test('stack push', function (assert) {
  	var s = new Stack()
  	s.init();
  	var p1 = s.push(1);
  	var p2 = s.push(2);
  	var p3 = s.push(3);
    assert.ok(p1 && p2 && p3, 'every stack push pass')
    assert.ok(s.length() == 3, 'stack push pass')	
  })
  
  test('stack pop', function (assert) {
  	var s = new Stack()
  	s.init();
  	s.push(1);
  	s.push(2);
  	s.push(3);
  	var p1 = s.pop();
  	var p2 = s.pop();
  	assert.ok(p1 == 3, 'stack pop 1 pass')	
  	assert.ok(p2 == 2, 'stack pop 2 pass')	
    assert.ok(s.length() == 1, 'stack pop pass')	
  })
  
  test('stack peek', function (assert) {
  	var s = new Stack()
  	s.init();
  	s.push(1);
  	s.push(2);
  	s.push(3);
  	s.pop();
    assert.ok(s.peek() == 2, 'stack top pass')	
  })
  
  
  

 

})
