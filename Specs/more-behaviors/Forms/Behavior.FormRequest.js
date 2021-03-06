/*
---
name: Behavior.FormRequest Tests
description: n/a
requires: [More-Behaviors/Behavior.FormRequest, Behavior-Tests/Behavior.SpecsHelpers]
provides: [Behavior.FormRequest.Tests]
...
*/
(function(){

	var str = '<form data-filters="FormRequest" data-update-by-selector=".formRequestTest"></form><div id="formRequestTest"></div>';
	Behavior.addFilterTest({
		filterName: 'FormRequest',
		desc: 'Creates an instance of FormRequest (by selector)',
		content: str,
		returns: Form.Request
	});
	Behavior.addFilterTest({
		filterName: 'FormRequest',
		desc: 'Creates an instance of FormRequest (by selector) (10x)',
		content: str,
		returns: Form.Request,
		multiplier: 10,
		noSpecs: true
	});

})();