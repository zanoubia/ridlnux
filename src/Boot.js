var Ridlnux = {
	playername :  ""
};
Ridlnux.Boot = function(game) {};
Ridlnux.Boot.prototype = {
	preload: function() {
		this.load.image('preloadbackground', 'img/bootbackground1280x720.png');
		this.load.image('preloaderBar', 'img/loadingbar1000*30.png');
		this.load.image('preloaderBarCont', 'img/loadingcontainer1000x30.png');
	},
	create: function() {
		this.game.input.maxPointers = 1;
		this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
		this.game.stage.scale.pageAlignHorizontally = true;
		this.game.stage.scale.pageAlignVertically = true;
		this.game.stage.scale.setScreenSize(true);
		this.game.state.start('Preloader');
	}
};
