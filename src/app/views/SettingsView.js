define([
	"ember",
	"text!templates/settings.html.hbs"
], function( Ember, template ) {

	return Ember.View.extend({
		template: Ember.HTMLBars.compile( template ),
		tagName: "main",
		classNames: [ "content", "content-settings" ],

		RadioBoxesView: Ember.View.extend({
			tagName: "div"
		})
	});

});
