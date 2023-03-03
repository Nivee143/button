/*global QUnit*/

sap.ui.define([
	"demo/demo/controller/Demo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Demo Controller");

	QUnit.test("I should test the Demo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
