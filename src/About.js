Ridlnux.About = function(game) {
	
};
Ridlnux.About.prototype = {
	create: function() {
		background = this.add.sprite(0, 0, 'about');
		back = this.add.button(0,600,'back',this.goback);
		
	},
	
	goback: function(){
		this.game.state.start('MainMenu');
	},

	update: function() {
		
	}
	
};
