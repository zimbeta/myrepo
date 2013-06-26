// JavaScript Document

$('#findBiz').typeahead({
	source: list1,
	minLength: 2,
	items: 5
});

$('#currentBiz').popover({
	trigger: 'click',
	placement: 'bottom',
	title: 'Change Business Profile',
});