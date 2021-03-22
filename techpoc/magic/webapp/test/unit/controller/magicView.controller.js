/*global QUnit*/

sap.ui.define([
	"magic/controller/magicView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("magicView Controller");

	QUnit.test("I should test the magicView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
