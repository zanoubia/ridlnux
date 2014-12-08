Ridlnux.Game = function(game) {
	var gamecanvas = null;
	var element = null;
	var iframe = null;
	var x=0;
	var y=0;
	var width = "";
	var height = "";
	var marginleft = 0;
	var margintop = 0;
	var level = [];	
	var answer = "" ;
	var inputreturn = "";
	var sub  = 0;
};

Ridlnux.Game.prototype = {

	create: function() {
		sub  = 0;
		answer = "" ;
		inputreturn = "";
		letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "_"];

		background = this.game.add.sprite(0, 0, 'playbackground');
		answerback = this.game.add.sprite(36,114, 'answerback');
		answerfield =   this.game.add.text(39, 146, "click to write your answer and hit enter to submit it", {
                        font: "20px Arial",
                        fill: "#ffffff",
                        align: "center",
                        wordWrap: true,
                        wordWrapWidth :300
                        });
		

		restbutton = this.game.add.button(816,536,'reset',this.resetsession);
		logoutbutton = this.game.add.button(1203,646,'logout',this.logout);
		helpbutton = this.game.add.button(1128,646,'help',this.help);

		tuxback = this.game.add.sprite(567, 498 ,'tuxback');

		wizard = this.game.add.button(0,this.game.world.centerY * 6/ 5 ,'wizard',this.playhint,this,0,1);
		talkingwizard = wizard.animations.add('talking',[1,2],10,true);
		wizard.inputEnabled = true;		

		bulle = this.game.add.sprite(0,88,'bulle');		
		bulle.visible = false ;

		tux = this.add.sprite(567, 520, 'tux');
		tux.visible = false
		tux.animations.add('dancing',[2,3],10,true);
		tux.animations.add('talkindsiting',[7,8],10,true);
		tux.animations.add('wrong',[1,0],10,true);
		tux.animations.add('wondring',[5,6],10,true);
		

		this.setiframe();
		
		level = this.getlevel();
		this.game.add.text(20  , 20, level[0], {
                        font: "40px Arial",
                        fill: "#00000",
                        align: "left"
                        });
		hint =   this.game.add.text(6  , 110, level[1], {
                        font: "30px Arial",
                        fill: "#00000",
                        align: "center",
			wordWrap: true,
			wordWrapWidth :385
			
                        });
		hint.visible = false;

		enterkey = this.game.input.keyboard.addKey(13);
	},

	getlevel : function() {
		//var data = new FormData();
                //data.append('username', Ridlnux.playername );
                //var xhr = new XMLHttpRequest();
                //xhr.open('POST', 'http://192.168.42.252:5000/levels/current' , true);
		//xhr.send(data);
                //re = xhr.responseText;
		return ["Level0","There is no place like home"];
	},

	help : function() {

	},
	logout: function() {
		//var data = new FormData();
                //data.append('username', Ridlnux.playername );
                //var xhr = new XMLHttpRequest();
                //xhr.open('POST', 'http://192.168.42.252:5000/logout' , true);
                //xhr.send(data);
                //re = xhr.responseText;

	},
	resetsession: function(){
		//var xhr = new XMLHttpRequest();
		//data.append('username', Ridlnux.playername );
		//var xhr = new XMLHttpRequest();
		//xhr.open('POST', 'http://192.168.42.252:5000/reset' , true);
		//re = xhr.responseText;
		
	},
	playhint: function(){
		bulle.visible = true;
		hint.visible = true ;
		wizard.animations.play('talking');
		
	},
	wizardout: function(){
		talkingwizard.stop(true);
		bulle.visible = false;
                hint.visible = false ;
		hint.setText(level[1]);
	},
	
	correct: function(){
		bulle.visible = true;
		wizard.inputEnabled = false;
		wizard.animations.play('talking');
		hint.setText("Correct Answer! Now you can pass to the next level");
		hint.visible = true;
		tuxback.visible = false;
		tux.visible = true;
		tux.animations.play('dancing');
	},
	
	uncorrect: function(){
		bulle.visible = true;
		wizard.animations.play('talking');
		hint.setText("Wrong answer. You shall not pass !!");
		hint.visible = true;
		tuxback.visible = false;
		tux.visible = true;
                tux.animations.play('wrong');
	},

	setiframe: function(){
		this.game.canvas.id= "gamecanvas";
		gamecanvas = document.getElementById("gamecanvas");
		iframe = document.createElement("iframe");
		iframe.setAttribute("src","https://192.168.42.252:4200");
		iframe.setAttribute("id","idframe");
		this.style();
		element = document.getElementById("body");
		element.appendChild(iframe);		
	},

	style : function() {
		widthratio = 775/1280 ;
                heightration = 465/720 ;
		width = Number(gamecanvas.style.width.replace(/[^\d\.\-]/g, '')) * widthratio;
                height = Number(gamecanvas.style.height.replace(/[^\d\.\-]/g, '')) * heightration ;
                marginleft= Number(gamecanvas.style.marginLeft.replace(/[^\d\.\-]/g, '')) + (456/1280) * Number(gamecanvas.style.width.replace(/[^\d\.\-]/g, ''))   ;
                margintop= Number(gamecanvas.style.marginTop.replace(/[^\d\.\-]/g, ''))+ (32/720)*Number(gamecanvas.style.height.replace(/[^\d\.\-]/g, ''))  ;
                x= this.game.stage.offset.x   ;
                y= this.game.stage.offset.y  ;
		iframe.setAttribute("height",height);
		iframe.setAttribute("style","position:absolute;color=#77ccff;width:"+width+"px;margin-left:"+marginleft+"px;margin-top:"+margintop+"px;right:"+x+";top:"+y+";");
	},

	correctanswer: function(answer){
		answerfield.setText("ok");
		return "ok";
	},	
	
	nextlevel: function(){

	},
	submitanswer: function(){
		
		correction = this.correctanswer(answer);
		if (correction == "ok")
		{
			this.uncorrect();
			//this.nextlevel();
		}
		else if (correction == "ko")
		{
			this.uncorrect();
		}
		else
		{
			hint.setText("Ohohoooo, internal error, try later!"); 
		}
	},

	capturetext: function(text,input) {

                this.game.input.keyboard.onDownCallback = function(e) {
			//if(e.keyCode == 13)
                        //{
                          //      if (answer.lenght != 0)
                            //    {
                                       
                              //          answerfield.setText(submit);
                                //}
                        //}
			if ((64<e.keyCode) && (e.keyCode<91))
                	{
                      		letter = letters[e.keyCode - 65];
                       	}
                       	else if (e.keyCode==56)
                        {
                               	letter = '_';
                        }
			

                        if(e.keyCode != 8 && e.keyCode!=13)
                   	{
                        	input = input + letter;
                                input = input.trim();
                                letter = "";
                                text.setText(input);
                                inputreturn = input;
                        }
                        
                        else if (input.length >0 && e.keyCode!=13)
                        {
                               	n = input.length -1 ;
                               	input = input.slice(0,n);
                               	text.setText(input);
                               	inputreturn = input;
                        }

                }
	},
					

	update : function(){		
		
		this.style();
		wizard.events.onInputOut.add(this.wizardout, this);
		this.capturetext(answerfield,answer);
                answer = inputreturn;
		enterkey.onDown.add(this.submitanswer, this);
			
	
                			
	}


	

};
