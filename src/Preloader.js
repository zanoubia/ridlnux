Ridlnux.Preloader = function(game) {};
Ridlnux.Preloader.prototype = {
	preload: function() {
		this.game.stage.backgroundColor = '#16181a';
		background = this.game.add.sprite(0,0,'preloadbackground');
		this.preloadBg = this.add.sprite(this.game.world.centerX - 500 , this.game.world.centerY , 'preloaderBarCont');
		this.preloadBar = this.add.sprite(this.game.world.centerX - 500 , this.game.world.centerY, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('answerback', 'img/answerback.png');
		this.load.image('backgroundsign', 'img/backgroundsign1280x720.png');
		this.load.image('playbackground', 'img/playbackground.png');
		this.load.image('menubackground', 'img/mainmenu.png');
		this.load.image('about','img/about.png');
		this.load.image('bulle', 'img/bulle400x350.png');
		this.load.image('help', 'img/help66x66.png');
		this.load.image('logout', 'img/logout66x66.png');
		this.load.image('reset', 'img/reset45x45.png');
		this.load.image('textinput', 'img/textinput360x60.png');
		this.load.image('tuxintello', 'img/tuxintello260x60.png');
		this.load.image('tuxback','img/tuxback192x199.png');
		this.load.image('signin','img/signin.png');
		this.load.image('signup','img/signup.png');
		this.load.image('back','img/back125x125.png');
		

		this.load.spritesheet('aboutmenu', 'img/aboutmenu754x52.png',754,26,2,0,0);
		this.load.spritesheet('playmenu', 'img/playmenu754x52.png',754,26,2,0,0);
		this.load.spritesheet('wizard', 'img/wizard630x255.png',210,255,3,0,0);
                this.load.spritesheet('tux', 'img/tuxsheet1880x213.png',208,213,9,0,1);


	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};
