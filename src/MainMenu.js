Ridlnux.MainMenu = function(game) {
	var select ="false";
	var selected = 0 ;
};
Ridlnux.MainMenu.prototype = {
	create: function() {
		background = this.add.sprite(0, 0, 'menubackground');
		play = this.add.sprite(260,98 , 'playmenu');
		about = this.add.sprite(260,98 + 26 , 'aboutmenu');
		play.frame = 0 ;
		about.frame = 1;
		select = "false";
		selected = 0;
	},

	update: function() {
		this.game.input.keyboard.onDownCallback = function(e) {
			if(e.keyCode == 40)
			{
				play.frame = 1;
				about.frame = 0;
				selected = 1;
			}
			else if (e.keyCode == 38)
			{
				play.frame = 0;
				about.frame = 1 ;
				selected = 0;
			}
			else if (e.keyCode==13)
			{
				select = "true";
			}
		};	
		if (select=="true")
		{
			if(selected == 0)
			{
				this.gosign();
			}
			else if (selected == 1)
			{
				this.goabout();
			}
		}	
	},
	gosign: function() {
		this.game.state.start('Sign');

	},
	goabout: function() {
		this.game.state.start('About');
	}
};
