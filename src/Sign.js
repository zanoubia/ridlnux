Ridlnux.Sign = function(game) {
	var textinputname = "";
	var textinputpass = "";
	var inputname = null;
	var inputpass = null;
	var current = 0;
	var inputreturn = "";
};
Ridlnux.Sign.prototype = {
	create: function() {
		textinputname ="";
	        textinputpass = "";
		current = 0 ;
		inputreturn = "";

		background1 = this.add.sprite(0, 0, 'backgroundsign');
		background2 = this.add.sprite(0, -2 * this.game.world.centerY, 'backgroundsign');
		tux = this.add.sprite(this.game.world.centerX - 260 ,this.game.world.centerY -130  , 'tuxintello');
		namelabel=this.game.add.text(this.game.world.centerX  , 210, "My Name", {
                        font: "40px Arial",
                        fill: "#00000",
                        align: "left"
                        });
	
		textback1 = this.game.add.sprite(this.game.world.centerX + 120 , 260, 'textinput');
		
		inputname = this.game.add.text(this.game.world.centerX + 130 , 270,"Myname", {
                        font: "30px Arial",
                        fill: "#00000",
                        align: "left",
		        wordWrap: true,
                        wordWrapWidth :350
                        });
		
		
		passwdlabel =this.game.add.text(this.game.world.centerX, 340 , "Mypass", {
                        font: "40px Arial",
                        fill: "#00000",
                        align: "left"
                        });

		textback2 = this.game.add.sprite(this.game.world.centerX + 120 , 390 , 'textinput');

		inputpass = this.game.add.text(this.game.world.centerX + 130 , 400, "MyPass", {
                        font: "30px Arial",
                        fill: "#00000",
                        align: "left"
                        });


		signlabel=this.game.add.text(370  , 207 , "Sign Me :", {
                        font: "40px Arial",
                        fill: "#0000",
                        align: "left"
                        });
			
		signuptux = this.game.add.sprite(670,207,'signup');
		signintux = this.game.add.sprite(360,360,'signin');

		letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "_"];
		
		currenttext = this.game.add.text(this.game.world.centerX, this.game.world.centerY,current, {
                        font: "40px Arial",
                        fill: "#ff0000",
                        align: "center"
                        });

	},
	
	
	capturetext: function(text,input) {
		
		this.game.input.keyboard.onDownCallback = function(e) {

			if(e.keyCode == 13)
			{
				if ((current == 0)  && (textinputname.length != 0) &&(textinputpass.lenght != 0))
				{
					current = 1;
				}
				else if ((current == 1)&&(textinputpass.lenght != 0))
				{
					current = 2;
				}
				
			}
                        else if ((64<e.keyCode) && (e.keyCode<91))
                        {
                                letter = letters[e.keyCode - 65];
                        }
			else if (e.keyCode==56)
                        {
                                letter = '_';
                        }

                        if(e.keyCode != 8)
                        {
                                if (input.length < 8)
                                {
                                        input = input + letter;
                                        input = input.trim();
                                        letter = "";
					text.setText(input);
					inputreturn = input;
						
                                        
                                }
                        }
                        else if (input.length >0)
                        {
                                n = input.length -1 ;
                                input = input.slice(0,n);
                                text.setText(input);
				inputreturn = input;

                        }
			
                }
		
		
	},

	updatefields: function(current) {
		if (current == 0) 
		{
			namelabel.visible = true;
			textback1.visible = true;
			inputname.visible = true;
			passwdlabel.visible = false;
                	textback2.visible = false ;
                	inputpass.visible = false;
			signuptux.visible = false;
			signintux.visible = false;
                	signlabel.visible =false ;
		}
		if(current == 1)
		{
			namelabel.visible = false;
                        textback1.visible = false;
                        inputname.visible = false;
                        passwdlabel.visible = true;
                        textback2.visible = true ;
                        inputpass.visible = true;
			signuptux.visible = false;
                        signintux.visible = false;
                        signlabel.visible =false ;


		}
		if(current == 2)
		{
			namelabel.visible = false;
                        textback1.visible = false;
                       	inputname.visible = false;
                        passwdlabel.visible = false;
                       	textback2.visible = false ;
                        inputpass.visible = false;
			signuptux.visible = true;
                        signintux.visible = true;
                       	//signlabel.visible =true ;
			tux.visible= false
			signintux.inputEnabled = true;
			signuptux.inputEnabled = true;
			signuptux.input.useHandCursor = true;
			signintux.input.useHandCursor = true;

		}
		
	},
	update: function() {
		if(background2.y < 0)
		{
			background1.y = background1.y + 2;
			background2.y = background2.y + 2;
		}
		else 
		{
			e = background2;
			background2 =background1;
			background1 = e;
			background2.y = - 2 * this.game.world.centerY;
				
		}
	
		
		this.updatefields(current);
		if (current == 0)
		{
			this.capturetext(inputname,textinputname);
			textinputname = inputreturn;
		}
		else if (current == 1)
		{
			this.capturetext(inputpass,textinputpass);
                        textinputpass = inputreturn;
			
		}
		else  if (current == 2)
		{
			cred = [textinputname,textinputpass];
			signintux.events.onInputDown.add(this.signin , this );
			signuptux.events.onInputDown.add(this.signup, this);
		}
		
				
		
					
	},

	
	


	signin: function() {
		Ridlnux.playername =textinputname ; 
		this.game.state.start('Game');
		
	},
	signup: function() {
		this.game.state.start('Game');
	}
};
