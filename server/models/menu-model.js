'use strict';

module.exports = function(Menumodel) {
	//@TODO update this, 'cause we've updated relations
	Menumodel.validatesPresenceOf('title', 'date', 'desc', 'recipes');


	Menumodel.observe("after save", function (ctx, next) {

		// console.log( ctx.instance.rec );

       Menumodel.app.models.Email.send({
	    to: 'arthur.tkachenko.netweight@gmail.com',
	    from: 'noreply@loopback.loop',
	    subject: 'Thank you for adding to menu ',
	    html: '<p>We confirm - menu was saved</p>'
	  }, function (err, mail) {
	    console.log('email sent!');
	  });

		

		//not working, right now. Above we're using similar, but easy way to test notifications
		// Menumodel.app.models.Recipemodel.findById(ctx.instance.rec, function (err, recipe) {

		//   Menumodel.app.models.Email.send({
		//     to: 'arthur.tkachenko.netweight@gmail.com',
		//     from: 'noreply@loopback.loop',
		//     subject: 'Thank you for adding to menu your recipe ' + recipe.name,
		//     html: '<p>We confirm your recipe with name <strong>' + recipe.name + '</strong> was saved</p>'
		//   }, function (err, mail) {
		//     console.log('email sent!');
		//   });

		// });

		next();
	});

};
