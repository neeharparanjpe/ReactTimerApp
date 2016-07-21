var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('Countdown Form', () =>{
	it('should exist',() => {
		expect(CountdownForm).toExist();
	});
	
	it('should call onSetCountdown if valid seconds entered',() => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));
		
		//set the value of the form input field
		countdownForm.refs.seconds.value = '109';
		
		//simulate form submission
		TestUtils.Simulate.submit($el.find('form')[0]);
		
		//assert that the spy has been called
		expect(spy).toHaveBeenCalledWith(109);
	});
	
	it('should not call onSetCountdown if invalid seconds entered',() => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));
		
		//set the value of the form input field
		countdownForm.refs.seconds.value = '';
		
		//simulate form submission
		TestUtils.Simulate.submit($el.find('form')[0]);
		
		//assert that the spy has been called
		expect(spy).toNotHaveBeenCalled();
	});
});