

chapters[2] = {
	0: {
		'info': "You have a little extra money to invest on your setup. What would you like to buy?"
		,'options':
		[
		 ["Decent speakers",1],
		 ["Better graphics card",2],
		 ["Wacom tablet",3],
		 ["More RAM",8]
		]
		,'info-es': "Tienes un poco de dinero extra que gastar en tu máquina. ¿Qué quieres comprar?"
		,'options-es':
		[
		 ["Altavoces decentes",1],
		 ["Una gráfica mejor",2],
		 ["Tableta Wacom",3],
		 ["Más RAM",8]
		]
		,'update': function() {
			document.body.style.backgroundColor = "#ec9444";
			document.getElementById('container').style.backgroundColor="#f8d6b0";
			document.body.style.color="#000";
		}
	},
	1: {
		'info': "You go out and buy a new pair of speakers. Sounding pretty cool."
		,'options':
		[
		 [function(){ return (gamer>3)?"Enter online tournament":"Check your email"; },
		  function(){ return (gamer>3)?4:5; }],
		 [function(){ return (musician>2)?"Enter online competition":"Browse forums"; },
		  function(){ return (musician>2)?6:7; }]
		]
		,'info-es': "Sales a comprar un par de buenos altavoces. Suenan cojonudos."
		,'options-es':
		[
		 [function(){ return (gamer>3)?"Entrar en torneo on-line":"Comprobar correo"; },
		  function(){ return (gamer>3)?4:5; }],
		 [function(){ return (musician>2)?"Entrar en competición online":"Navegar por foros"; },
		  function(){ return (musician>2)?6:7; }]
		]
		,'update': function() {
			gamer++;
			musician++;
			time--;
		}
	},	
	2: {
		'info': "You go out and buy a graphics card. Higher framerate is always welcome."
		,'options':
		[
		 [function(){ return (gamer>3)?"Enter online tournament":"Check your email"; },
		  function(){ return (gamer>3)?4:5; }],
		 [function(){ return (coder>3)?"Enter size coding competition":"Browse forums"; },
		  function(){ return (coder>3)?9:7; }]
		]
		,'info-es': "Sales a comprar una gráfica mejor. Una tasa de frames mejor siempre es bienvenida."
		,'options-es':
		[
		 [function(){ return (gamer>3)?"Entrar en torneo on-line":"Comprobar correo"; },
		  function(){ return (gamer>3)?4:5; }],
		 [function(){ return (coder>3)?"Entrar en competición de size coding":"Navegar por foros"; },
		  function(){ return (coder>3)?9:7; }]
		]
		,'update': function() {
			gamer++;
			coder++;
			time--;
		}
	},
	3: {
		'info': "You go out and buy a wacom tablet. That's really helpful if you're serious about becoming a graphician."
		,'options':
		[
		 [function(){ return (graphician>3)?"Enter drawing competition":"Check your email"; },
		  function(){ return (graphician>3)?10:5; }],
		 ["Browse forums",7]
		]
		,'info-es': "Sales a comprar una tableta Wacom. Ayudará mucho si quieres convertirte en un buen grafista."
		,'options-es':
		[
		 [function(){ return (graphician>3)?"Entrar en competición de dibujo":"Comprobar correo"; },
		  function(){ return (graphician>3)?10:5; }],
		 ["Navegar por foros",7]
		]
		,'update': function() {
			graphician++;
			time--;
		}
	},	
	4: {
		'info': "You join an online tournament for your favorite game."
		,'options':
		[
		 ["Brag about it online",11],
		 ["Give it your best",12],
		 ["Try to cheat", function() { return (luck > rand(12))?13:14;} ]		 
		]
		,'info-es': "Entras en un torneo on-line de tu juego favorito."
		,'options-es':
		[
		 ["Dar la lata sobre ello on-line",11],
		 ["Dar lo mejor",12],
		 ["Intentar chetar", function() { return (luck > rand(12))?13:14;} ]		 
		]
		,'update': function() {
			time--;
		}
	},	
	5: {
		'info': "You check your email. Spam. Spam. Spam.<br>Subject title 'I LOVE YOU', has to be spam..."
		,'options':
		[
		 ["Open 'I LOVE YOU'",
		  function(){ return (luck > rand(12))?22:23;} ],
		 ["Browse forums", 7]
		]
		,'info-es': "Compruebas el correo. Spam. Spam. Spam.<br>Asunto 'I LOVE YOU', debe ser spam..."
		,'options-es':
		[
		 ["Abrir 'I LOVE YOU'",
		  function(){ return (luck > rand(12))?22:23;} ],
		 ["Navegar por foros", 7]
		]
		,'update': function() {
			time--;
		}
	},
	6: {
		'info': "You join an online music competition and start working on a new track, but you're not happy with how it's turning out. What will you do with the track?"
		,'options':
		[
		 ["Submit it, for the hell of it",15],
		 ["Submit it, and ask all your friends to vote for you",16],
		 ["Don't submit it",17]
		]
		,'info-es': "Entras en una competición on-line de música y empiezas a hacer un nuevo tema, pero no estás contento con cómo está saliendo. ¿Qué haces con la canción?"
		,'options-es':
		[
		 ["Enviarla, porque yo lo valgo",15],
		 ["Enviarla y pedir que tus amigos voten por ti",16],
		 ["No enviarla",17]
		]
		,'update': function() {
			musician++;
			time--;
		}
	},
	7: {
		'info': "You browse the forums for news. Seems there is a meetup dinner coming up. You're not too sure of attending. What would you like to do?"
		,'options':
		[
		 ["Attend for sure",27],
		 ["Check who else is going",27],
		 ["Think it over",27],
		 ["Not attend", 27]
		]
		,'info-es': "Navegas los foros mirando noticias. Parece que hay una cena de quedada pronto. No estás seguro de si ir. ¿Qué harás?"
		,'options-es':
		[
		 ["Ir fijo",27],
		 ["Mirar quién más va",27],
		 ["Repensártelo",27],
		 ["No ir", 27]
		]
		,'update': function() {
			time--;
		}
	},
	8: {
		'info': "You go out and buy some more RAM. Everything runs smoother now."
		,'options':
		[
		 [function(){ return (graphician>3)?"Enter drawing competition":"Check your email"; },
		  function(){ return (graphician>3)?10:5; }],
		 [function(){ return (coder>3)?"Enter size coding competition":"Browse forums"; },
		  function(){ return (coder>3)?9:7; }]
		]
		,'info-es': "Sales a comprar más RAM. Ahora todo corre más suave."
		,'options-es':
		[
		 [function(){ return (graphician>3)?"Entrar en competición de dibujo":"Comprobar correo"; },
		  function(){ return (graphician>3)?10:5; }],
		 [function(){ return (coder>3)?"Entrar en competición de size coding":"Navegar por foros"; },
		  function(){ return (coder>3)?9:7; }]
		]
		,'update': function() {
			graphician++;
			coder++;
			gamer++;
			musician++;
			time--;
		}
	},
	9: {
		'info': "You decide to enter a size coding competition just for kicks. You always wanted to try size coding and there are tons of tricks you can learn checking out the other entries."
		,'options':
		[
		 ["Proceed",18]
		]
		,'info-es': "Decides entrar en una competición de size coding a ver qué pasa. Siempre quisiste probar y hay un montón de trucos que puedes aprender con las otras obras."
		,'options-es':
		[
		 ["Seguir",18]
		]
		,'update': function() {
			time--;
		}
	},	
	10: {
		'info': "You enter a graphics competition. It's a long shot to win anything but atleast the jury gives some constructive criticism to all entries."
		,'options':
		[
		 ["Proceed",21]
		]
		,'info-es': "Entras en una competición de gráficos. No ganas ni por asomo pero al menos recibes algo de críticas constructivas."
		,'options-es':
		[
		 ["Seguir",21]
		]
		,'update': function() {
			time--;
		}
	},
	11: {
		'info': "You brag about how hard you're going to win against everyone but in the end you just place average and made yourself look stupid."
		,'options':
		[
		 ["Check your email", 5],	 
		]
		,'info-es': "Das la vara sobre lo fácil que vas a ganarles a todos pero al final acabas discretamente y quedas como un estúpido."
		,'options-es':
		[
		 ["Check your email", 5],	 
		]
		,'update': function() {
			socialskills--;
			troll++;
			intelligence--;
			time--;
		}
	},	
	12: {
		'info': "You give it your best at the tournament. You place on the top 5, a noble achievement considering how long you been playing but you're still a long way to go to be among the elite."
		,'options':
		[
		 ["Browse forums", 7],	 
		]
		,'info-es': "Das lo mejor en el torneo. Quedas en el top 5, un logro notable considerando lo que has jugado pero todavía queda mucho para estar en la élite."
		,'options-es':
		[
		 ["Navegar por foros", 7],	 
		]
		,'update': function() {
			gamer++;
			time--;
		}
	},	
	13: {
		'info': "You shamelessly cheat to get an advantage on the tournament. No one caught you but it still wasn't enough to get you in the top 3."
		,'options':
		[
		 ["Check your email", 5],	 
		]
		,'info-es': "Chetas vergonzosamente para conseguir ventajas en el torneo. No te pillaron pero ni así fue suficiente para estar en el top 3."
		,'options-es':
		[
		 ["Comprobar correo", 5],	 
		]
		,'update': function() {
			luck--;
			troll++;
			intelligence--;
			time--;
		}
	},	
	14: {
		'info': "You shamelessly cheat to get an advantage on the tournament. Someone caught you doing it and you end up being banned and publicly shamed. You don't seem to care much, instead you just create a new account."
		,'options':
		[
		 ["Browse forums", 7],
		]
		,'info-es': "Chetas vergonzosamente para obtener una ventaja en el torneo. Alguien te pilló y te han baneado y humillado en público. Parece que no te preocupa mucho, y te creas una cuenta nueva."
		,'options-es':
		[
		 ["Navegar por foros", 7],
		]
		,'update': function() {
			luck--;
			nerdness--;
			intelligence--;
			troll++;
			time--;
		}
	},
	15: {
		'info': "You submit your track just for the hell of it. As you were predicting, it didn't end up placing very well."
		,'options':
		[
		 ["Check your email", 5]
		]
		,'info-es': "Envías la canción porque tú lo vales. Como esperabas, no quedó muy bien posicionada."
		,'options-es':
		[
		 ["Comprobar correo", 5]
		]
		,'update': function() {
			musician++;
			time--;
		}
	},
	16: {
		'info': "You submit your track and proceed to spam all your friends and internet acquaintances to vote for you. But it didn't matter in the end, you still didn't place very well."
		,'options':
		[
		 ["Browse forums", 7]
		]
		,'info-es': "Envías la canción y procedes a spamear a todos tus amigos y contactos para que te voten. Pero al final dio igual, con todo no quedaste muy bien."
		,'options-es':
		[
		 ["Navegar por foros", 7]
		]
		,'update': function() {
			troll++;
			intelligence--;
			nerdness--;
			socialskills++;
			time--;
		}
	},
	17: {
		'info': "In the end you decide not to submit your track to the competition."
		,'options':
		[
		 ["Check your email", 5]
		]
		,'info-es': "Al final decides no enviar la canción a la competición"
		,'options-es':
		[
		 ["Check your email", 5]
		]
		,'update': function() {
			musician++;
			intelligence++;
			time--;
		}
	},
	18: {
		'info': "You didn't win anything but you had some fun coding. Someone made a snarky comment at your entry, pointing out some obvious errors, calling you a newb."
		,'options':
		[
		 ["Answer back",19],
		 ["Thank him for his critics",20],
		 ["Ignore",5],
		]
		,'info-es': "No ganaste nada pero te lo pasaste bien escribiendo código. Alguien hizo un comentario ofensivo en tu entrada, apuntando algunos errores obvios y llamándote 'n00b'."
		,'options-es':
		[
		 ["Responderle",19],
		 ["Agradecerle las críticas",20],
		 ["Ignorar",5],
		]
		,'update': function() {
			coder++;
			hacker++;
			time--;
		}
	},
	19: {
		'info': "You answer him back and start a small flamewar. Just another day at the internet."
		,'options':
		[
		 ["Check your email",5]
		]
		,'info-es': "Le respondes, y comienza una pequeña flamewar. Otro día más en la Internet."
		,'options-es':
		[
		 ["Comprobar correo",5]
		]
		,'update': function() {
			troll++;
			intelligence--;
			time--;
		}
	},
	20: {
		'info': "You thank him for his criticism, he takes the opportunity to insult you some more."
		,'options':
		[
		 ["Answer back",19],
		 ["Browse forums",7]
		]
		,'info-es': "Le agradeces las críticas, aprovecha para insultarte aún más."
		,'options-es':
		[
		 ["Responderle",19],
		 ["Navegar por foros",7]
		]
		,'update': function() {
			intelligence++;
			luck--;
			time--;
		}
	},	
	21: {
		'info': "Like you were expecting you didn't win anything. One of the juries was a bit of an ass, borderline insulting to your modest backgrounds."
		,'options':
		[
		 ["Answer back",19],
		 ["Thank him for his critics",20],
		 ["Ignore",5],
		]
		,'info-es': "Como esperabas no ganaste nada. Uno de los jueces era un poco mamón, insultándote hasta donde más te duele."
		,'options-es':
		[
		 ["Responderle",19],
		 ["Agradecerle las críticas",20],
		 ["Ignorar",5],
		]
		,'update': function() {
			graphician++;
			time--;
		}
	},
	22: {
		'info': "Smell like spam, looks like spam, it's probably spam. Some talk of a member of the opposite sex who happened to see your profile online and needs your assistance. Yeah right."
		,'options':
		[
		 ["Answer back", 24 ],
		 ["Browse forums", 7]
		]
		,'info-es': "Si huele como el spam y parece spam, entonces probablemente es spam. Una conversación con un miembro del sexo opuesto que vio tu perfil y necesita tu ayuda. Ya, claro."
		,'options-es':
		[
		 ["Responder", 24 ],
		 ["Navegar por foros", 7]
		]
		,'update': function() {
			luck--;
		}
	},
	23: {
		'info': "Actually, it wasn't spam, it was a virus. Now your machine is infected. Will take a while to clean this mess."
		,'options':
		[
		 ["Clean virus", 25]
		]
		,'info-es': "En realidad no eran spam. Era un virus. Ahora tu máquina está infectada, Tomará un rato arreglar este estropicio.."
		,'options-es':
		[
		 ["Limpiar virus", 25]
		]
		,'update': function() {
			luck--;
			intelligence--;
		}
	},	
	24: {
		'info': "You decide to answer back just for the sake of seeing how far the scammers go. But you soon lose interest when they stop sending photos and just ask for urgent need of a money transfer."
		,'options':
		[
		 ["Proceed", 7]
		]
		,'info-es': "Decides responder por ver hasta dónde llega la estafa. Pero pronto pierdes el interés cuando dejan de mandar fotos y solamente piden una necesidad urgente de transferencia de dinero."
		,'options-es':
		[
		 ["Seguir", 7]
		]
		,'update': function() {
			troll++;
		}
	},	
	25: {
		'info': "After a couple of weeks struggling you finally manage to get your computer clean of that nasty virus. You had to format your hard drive in the end, setting you back in a couple more weeks of installing time."
		,'options':
		[
		 ["Proceed", 7]
		]
		,'info-es': "Después de un par de semanas luchando finalmente consigues eliminar el virus. Acabaste teniendo que formatear el disco duro, retrasándote un par de semanas para instalar tu máquina."
		,'options-es':
		[
		 ["Seguir", 7]
		]
		,'update': function() {
			time-=4;
		}
	},	 // if troll high enough, option to go online and infect other people


// 26: proceed with next story plot, announce Euskal


// soon after, you notice a certain someone who seems to be taking a special interest in you, should you really be focusing on something else? flirt, talk, asks for attention when you're in final sprint


	27: {
		'info': "<input name=\"pwd\" id=\"pwd\" type=\"text\" onkeydown=\"if (event.keyCode == 13) submit(28)\">",
		'info-es': "<input name=\"pwd\" id=\"pwd\" type=\"text\" onkeydown=\"if (event.keyCode == 13) submit(28)\">"
		,'options':
		[
		 ["", 28]
		]
		,'options-es':
		[
		 ["", 28]
		]
		,'update': function() {
			document.body.style.backgroundColor="#000";
			document.getElementById('container').style.backgroundColor="#000";
			document.body.style.color="#0d0";
			dont_display_stats_once = true;
			document.getElementById('top').innerHTML = '<div id=\"comic\"></div>';
			ping_1(document.getElementById('comic'));
		}
	},
	28: {
		'info': "You have fun at the dinner and meet a nice girl. What would you like to do?"
		,'options':
		[
		 ["Get her phone number", 29],
		 ["Get her email address", 29]
		]
		,'info-es': "Lo pasas bien en la cena y conoces a una chica maja. ¿Qué quieres hacer?"
		,'options-es':
		[
		 ["Obtener su número de teléfono", 29],
		 ["Obtener su correo electrónico", 29]
		]
		,'pre': function(){
			var pwd = document.getElementById('pwd');
			if (pwd) {
				pass = trim(pwd.value);
			}
		}
		,'update': function() {
			document.body.style.backgroundColor = "#ec9444";
			document.getElementById('container').style.backgroundColor="#f8d6b0";
			document.body.style.color="#000";	
				
		}
	},
	29: {
		'info': "You exchange contacts with her and start talking regularly. Not very nerdy of you."
		,'options':
		[
		 ["Proceed", 30]
		]
		,'info-es': "Intercambias contactos con ella y empezáis a hablar a menudo. No te hace muy friki."
		,'options-es':
		[
		 ["Seguir", 30]
		]
		,'update': function() {
			nerdness--;
			time--;
		}
	},
	30: {
		'info': "Your friends tell you Euskal is coming up. You realize it's finally time to put your hard earned skills to the test."
		,'options':
		[
		 ["Check out Euskal competitions", function(){ return (pass == passcode2)?32:31; } ]
		]
		,'info-es': "Tus amigos te dicen que va llegando la Euskal. Te das cuenta de que al final es hora de poner tus habilidades a prueba."
		,'options-es':
		[
		 ["Comprobar las competiciones de la Euskal", function(){ return (pass == passcode2)?32:31; } ]
		]
		,'update': function() {
			time--;
		}
	},
	31: {
		'info': "You check out the competitions at Euskal and wonder which ones you should enter."
		,'options':
		[
		 ["Proceed", 33]
		]
		,'info-es': "Compruebas las competiciones de la Euskal y te preguntas en cuáles deberías participar."
		,'options-es':
		[
		 ["Seguir", 33]
		]
		,'update': function() {
			
		}
	},
	32: {
		'info': "<input name=\"pwd2\" id=\"pwd2\" type=\"text\" onkeydown=\"if (event.keyCode == 13) submit(33)\">"
		,'options':
		[
		 ["", 33]
		]
		,'info-es': "<input name=\"pwd2\" id=\"pwd2\" type=\"text\" onkeydown=\"if (event.keyCode == 13) submit(33)\">"
		,'options-es':
		[
		 ["", 33]
		]
		,'update': function() {
			document.body.style.backgroundColor="#000";
			document.getElementById('container').style.backgroundColor="#000";
			document.body.style.color="#0d0";
			dont_display_stats_once = true;
			document.getElementById('top').innerHTML = '<div id=\"comic\"></div>';
			ping_2(document.getElementById('comic'));
		}
	},	
	33: {
		'info': "You decide to give it your best to try and win Euskal. You have several hardships in your way towards world domination."
		,'options':
		[
		 ["Proceed",34]
		]
		,'info-es': "Decides dar lo mejor de ti para ganar la Euskal. Tendrás varios escollos en tu camino hacia la dominación mundial."
		,'options-es':
		[
		 ["Seguir",34]
		]
		,'pre': function(){
			var pwd2 = document.getElementById('pwd2');
			if (pwd2) {
				pass2 = trim(pwd2.value);
			}
		}
		,'update': function() {
			document.body.style.backgroundColor = "#ec9444";
			document.getElementById('container').style.backgroundColor="#f8d6b0";
			document.body.style.color="#000";	
				
		}
	},
	
	
//draw logo, trust your graphics skills, test intelligence, test luck
	
	
	34: {
		'info': "Your group requires a new logo and you're the one responsible for providing it. Should be easy work for any graphician. How will you provide for one?"
		,'options':
		[
		 ["Trust your own graphician skills", function(){ return (graphician > 3)?35:36; }],
		 ["Test your luck", function() { return (luck > rand(12))?37:38; }],
		 ["Test your social skills", function() { return (socialskills > rand(12))?39:40; }]
		]
		,'info-es': "Tu grupo requiere un nuevo logo y eres el responsable de proporcionárselo. Debería ser fácil para un grafista. ¿Cómo les darás uno?"
		,'options-es':
		[
		 ["Confiar en tus habilidades de grafista", function(){ return (graphician > 3)?35:36; }],
		 ["Probar tu suerte", function() { return (luck > rand(12))?37:38; }],
		 ["Probar tus habilidades sociales", function() { return (socialskills > rand(12))?39:40; }]
		]
		,'update': function() {
			time--;	
		}
	},	
	35: {
		'info': "With your graphician skills you manage to pull off a beautiful new logo for your group"
		,'options':
		[
		 ["Proceed", 41]
		]
		,'info-es': "Con tus dotes de grafista consigues apañar un logo bonito para tu grupo."
		,'options-es':
		[
		 ["Seguir", 41]
		]
		,'update': function() {
			time--;
		}
	},	
	36: {
		'info': "Your graphician skills aren't good enough. You would never assume a group would place such importance on a logo."
		,'options':
		[
		 ["Proceed", 34]
		]
		,'info-es': "Tus dotes de grafista no son lo suficientemente buenas. Nunca asumiste estar en un grupo que le diera tanta importancia al logo."
		,'options-es':
		[
		 ["Seguir", 34]
		]
		,'update': function() {
			intelligence--;
			luck--;
			nerdness--;
			socialskills--;
			time--;
		}
	},	
	37: {
		'info': "You're lucky enough to figure out a nice solution. Well done"
		,'options':
		[
		 ["Proceed", 41]
		]
		,'info-es': "Tienes la suerte de encontrar una buena solución. Bien hecho."
		,'options-es':
		[
		 ["Seguir", 41]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},	
	38: {
		'info': "You ran out of luck when you needed it the most. You would never assume a group would place such importance on a logo. Without it the group falls apart and your hopes to conquer Euskal by storm are shred to pieces."
		,'info-es': "Te quedaste sin suerte cuando más falta te hacía. Nunca asumiste estar en un grupo que le diera tanta importancia al logo. Sin él el grupo se derrumba y tus esperanzas de conquistar la Euskal se deshacen en pedazos."
	},
	39: {
		'info': "Your social skills go a long way. You manage to find a dope graphician to help you out and provide a kick ass new logo."
		,'options':
		[
		 ["Proceed", 41]
		]
		,'info-es': "Tus habilidades sociales te sacan adelante. Logras encontrar a un grafista para que te ayude y te hace un buen logo."
		,'options-es':
		[
		 ["Seguir", 41]
		]
		,'update': function() {
			socialskills--;
			time--;
		}
	},	
	40: {
		'info': "Your social skills fail to cut the mustard on this one. Without the new logo your group falls apart and your hopes to conquer Euskal by storm shred to pieces."
		,'info-es': "Tus dotes sociales te han dejado tirado. Sin un logo nuevo el grupo se derrumba y tus esperanzas de conquistar la Euskal se deshacen en pedazos."
	},

//fix computer, trust coder skills, test intelligence, test luck

	41: {
		'info': "A member of your group needs his computer fixed asap. Without it you stand no chance to triumph at Euskal."
		,'options':
		[
		 ["Trust your programming skills", function(){ return (coder > 3)?42:43; }],
		 ["Test your intelligence", function() { return (intelligence > rand(12))?44:45; }],
		 ["Test your luck", function() { return (luck > rand(12))?46:47; }]
		]
		,'info-es': "Un miembro de tu grupo necesita tener su ordenador arreglado ya mismo. Sin él no tienes ni una oportunidad de ganar en la Euskal."
		,'options-es':
		[
		 ["Confiar en tus dotes de programación", function(){ return (coder > 3)?42:43; }],
		 ["Probar tu inteligencia", function() { return (intelligence > rand(12))?44:45; }],
		 ["Probar tu suerte", function() { return (luck > rand(12))?46:47; }]
		]
		,'update': function() {
			time--;	
		}
	},	
	42: {
		'info': "With your m4d programming skills you manage to figure out whats wrong with the machine and restore it back to life. All hail you."
		,'options':
		[
		 ["Proceed", 48]
		]
		,'info-es': "Con tus dotes chungas de programación consigues averiguar qué pasa con la máquina y la devuelves a la vida. Bravo."
		,'options-es':
		[
		 ["Seguir", 48]
		]
		,'update': function() {
			time--;
		}
	},	
	43: {
		'info': "Your programming skills just aren't good enough to figure this one out. Without a computer to work on it's impossible to achieve great things."
		,'options':
		[
		 ["Proceed", 41]
		]
		,'info-es': "Tus dotes de programación no son suficientes para salir de ésta. Sin ordenador que usar es imposible alcanzar grandes cosas."
		,'options-es':
		[
		 ["Seguir", 41]
		]
		,'update': function() {
			intelligence--;
			luck--;
			nerdness--;
			socialskills--;
			time--;
		}
	},
	44: {
		'info': "Your intelligence helps you figure out what's wrong with the machine. Just in time to prevent your group from falling apart."
		,'options':
		[
		 ["Proceed", 48]
		]
		,'info-es': "Tu inteligencia te ayuda a averiguar qué anda mal en la máquina. Justo a tiempo de evitar que tu grupo se derrumbe."
		,'options-es':
		[
		 ["Seguir", 48]
		]
		,'update': function() {
			intelligence--;
			time--;
		}
	},	
	45: {
		'info': "Your social skills fail to cut the mustard on this one. Without the new logo your group falls apart and your hopes to conquer Euskal by storm shred to pieces."
		,'info-es': "Tus habilidades sociales te dejan tirado. Sin logo nuevo el grupo se derrumba y tus esperanzas de conquistar la Euskal quedan reducidas a nada."
	},
	46: {
		'info': "You're lucky enough to figure out a nice solution. Well done."
		,'options':
		[
		 ["Proceed", 48]
		]
		,'info-es': "Tienes la potra justa para sacar una buena solución. Bien hecho."
		,'options-es':
		[
		 ["Seguir", 48]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},	
	47: {
		'info': "You ran out of luck when you needed it the most. No computer no Euskal compos."
		,'info-es': "Te quedaste sin suerte cuando más falta te hacía. No ordenador, no compos de la Euskal."
	},


//recruit help, test socialskills, test intelligence, test nerdness, test luck

	48: {
		'info': "Your group is working well but it doesn't look like you'll make it unless you recruit more people asap. It's all up to you."
		,'options':
		[
		 ["Test your social skills", function() { return (socialskills > rand(12))?49:50; }],
		 ["Test your intelligence", function() { return (intelligence > rand(12))?51:52; }],
 		 ["Test your nerdness", function() { return (nerdness > rand(12))?53:54; }],
		 ["Test your luck", function() { return (luck > rand(12))?55:56; }]
		]
		,'info-es': "Tu grupo está trabajando bien pero no parece que vayáis a lograrlo a menos que reclutes a más gente ya mismo. De ti depende."
		,'options-es':
		[
		 ["Probar tus habilidades sociales", function() { return (socialskills > rand(12))?49:50; }],
		 ["Probar tu inteligencia", function() { return (intelligence > rand(12))?51:52; }],
 		 ["Probar tu nivel de empollón", function() { return (nerdness > rand(12))?53:54; }],
		 ["Probar tu suerte", function() { return (luck > rand(12))?55:56; }]
		]
		,'update': function() {
			time--;	
		}
	},	
	49: {
		'info': "With your social skills you manage to recruit someone helpful to your cause without a problem."
		,'options':
		[
		 ["Proceed", 57]
		]
		,'info-es': "Con tus habilidades sociales consigues reclutar a alguien útil para tu causa sin problemas."
		,'options-es':
		[
		 ["Seguir", 57]
		]
		,'update': function() {
			socialskills--;
			time--;
		}
	},	
	50: {
		'info': "Your social skills weren't enough to recruit a new member in time. Your group fails because of this."
		,'options':
		[
		 ["Proceed", 48]
		]
		,'info-es': "Tus dotes sociales no fueron suficientes para reclutar a nuevos miembros. Tu grupo cae por ello."
		,'options-es':
		[
		 ["Seguir", 48]
		]
		,'update': function() {
			socialskills--;
			time--;
		}
	},
	51: {
		'info': "Your intelligence helps you figure out the best person for the job and how to motivate him to join your group."
		,'options':
		[
		 ["Proceed", 57]
		]
		,'info-es': "Tu inteligencia te ayuda a averiguar quién es la mejor persona para el trabajo y cómo motivarlo para que se una a tu grupo."
		,'options-es':
		[
		 ["Seguir", 57]
		]
		,'update': function() {
			intelligence--;
			time--;
		}
	},	
	52: {
		'info': "Your intelligence fails to cut the mustard on this one."
		,'options':
		[
		 ["Proceed", 48]
		]
		,'info-es': "Tu inteligencia fracasa para lograr tu objetivo."
		,'options-es':
		[
		 ["Seguir", 48]
		]
		,'update': function() {
			intelligence--;
			time--;
		}
	},
	53: {
		'info': "Your nerdness finally comes in handy. Recruiting fellow nerds was a breeze."
		,'options':
		[
		 ["Proceed", 57]
		]
		,'info-es': "Al fin ser empollón sirve de algo. Reclutar a colegas ha sido sencillo."
		,'options-es':
		[
		 ["Seguir", 57]
		]
		,'update': function() {
			nerdness--;
			time--;
		}
	},	
	54: {
		'info': "Your nerdness just wasn't enough to surpass this challenge."
		,'options':
		[
		 ["Proceed", 48]
		]
		,'info-es': "Ser tan empollón no te ha servido para superar este problema."
		,'options-es':
		[
		 ["Seguir", 48]
		]
		,'update': function() {
			nerdness--;
			time--;
		}
	},
	55: {
		'info': "You're lucky enough to also figure out a solution to this challenge."
		,'options':
		[
		 ["Proceed", 57]
		]
		,'info-es': "Tienes la suerte justa para encontrar una solución a este reto."
		,'options-es':
		[
		 ["Seguir", 57]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},	
	56: {
		'info': "No such luck."
		,'options':
		[
		 ["Proceed", 48]
		]
		,'info-es': "No hubo suerte."
		,'options-es':
		[
		 ["Seguir", 48]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},



// girl demanding attention while you should be focusing, test nerdness, test luck	


	57: {
		'info': "The girl you met the other day has apparently started to grow jealous of all the time you spend with your group doing things for Euskal. Right when you need to focus the most on your work she keeps demanding you pay more attention to her."
		,'options':
		[
		 ["Test your social skills", function() { return (socialskills > rand(12))?62:63; }],
 		 ["Test your nerdness", function() { return (nerdness > rand(12))?58:59; }],
		 ["Test your luck", function() { return (luck > rand(12))?60:61; }],
		 ["Dump her", 64]
		]
		,'info-es': "La chica que conociste el otro día aparentemente ha empezado a ponerse celosa por el tiempo que pasas con tu grupo haciendo cosas para la Euskal. Justo cuando necesitas enfocar tu atención en tu trabajo se pone a pedir que le prestes más atención."
		,'options-es':
		[
		 ["Probar tus habilidades sociales", function() { return (socialskills > rand(12))?62:63; }],
 		 ["Probar empollón", function() { return (nerdness > rand(12))?58:59; }],
		 ["Probar tu suerte", function() { return (luck > rand(12))?60:61; }],
		 ["Cortar con ella", 64]
		]
		,'update': function() {
			time--;	
		}
	},
	58: {
		'info': "Your exceeding nerdness manages to convince her to cut you some slack."
		,'options':
		[
		 ["Proceed", 65]
		]
		,'info-es': "Tu excesivo nivel de empollón consigue convencerla para que deje de dar por saco."
		,'options-es':
		[
		 ["Seguir", 65]
		]
		,'update': function() {
			nerdness--;
			time--;
		}
	},	
	59: {
		'info': "Nerdness always loses over demanding girl. You should have known better."
		,'options':
		[
		 ["Proceed", 57]
		]
		,'info-es': "Ser empollón siempre pierde frente a una chica que pide cosas. Deberías haberlo sabido."
		,'options-es':
		[
		 ["Seguir", 57]
		]
		,'update': function() {
			intelligence--;
			nerdness -= 2;
			time--;
		}
	},
	60: {
		'info': "On a stroke of good fortune her parents take her away on holidays for the week somewhere where she can't bug you."
		,'options':
		[
		 ["Proceed", 65]
		]
		,'info-es': "En un golpe de suerte sus padres se la llevan de vacaciones a algún sitio donde no puede molestarte."
		,'options-es':
		[
		 ["Seguir", 65]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},	
	61: {
		'info': "You ran out of luck when you needed it the most."
		,'options':
		[
		 ["Proceed", 57]
		]
		,'info-es': "Te quedaste sin suerte cuando más falta te hacía."
		,'options-es':
		[
		 ["Seguir", 57]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},
	62: {
		'info': "You social engineer your way into the best of both worlds."
		,'options':
		[
		 ["Proceed", 65]
		]
		,'info-es': "A base de ingeniería social te abres camino entre lo mejor de ambos mundos."
		,'options-es':
		[
		 ["Seguir", 65]
		]
		,'update': function() {
			socialskills--;
			time--;
		}
	},	
	63: {
		'info': "You try to talk your way out of the problem but she won't hear any of it."
		,'options':
		[
		 ["Proceed", 57]
		]
		,'info-es': "Intentas hablar las cosas pero no escucha ni una palabra."
		,'options-es':
		[
		 ["Seguir", 57]
		]
		,'update': function() {
			socialskills--;
			time--;
		}
	},
	64: {
		'info': "You tell the girl to sod off. That surely took care of the problem. Wonder who'll take care of you when you win."
		,'options':
		[
		 ["Proceed", 65]
		]
		,'info-es': "You tell the girl to sod off. That surely took care of the problem. Wonder who'll take care of you when you win."
		,'options-es':
		[
		 ["Seguir", 65]
		]
		,'update': function() {
			socialskills--;
			nerdness++;
			time--;
		}
	},	


//a flamewar breaks out, trust troll instincts, trust hacker skills, test intelligence, test luck, test socialskills



	65: {
		'info': "A flamewar breaks out."
		,'options':
		[
		 ["Trust your trolling skills", function(){ return (troll > 4)?66:67; }],
		 ["Trust your hacker skills", function(){ return (hacker > 1)?68:69; }],
		 ["Test your intelligence", function() { return (intelligence > rand(12))?70:71; }],
		 ["Test your luck", function() { return (luck > rand(12))?72:73; }],
		 ["Test your social skills", function() { return (socialskills > rand(12))?74:75; }]
		]
		,'info-es': "Se desata una flamewar."
		,'options-es':
		[
		 ["Confiar en tus habilidades de trol", function(){ return (troll > 4)?66:67; }],
		 ["Confiar en tus habilidades de hacker", function(){ return (hacker > 1)?68:69; }],
		 ["Probar tu inteligencia", function() { return (intelligence > rand(12))?70:71; }],
		 ["Probar tu suerte", function() { return (luck > rand(12))?72:73; }],
		 ["Probar tus habilidades sociales", function() { return (socialskills > rand(12))?74:75; }]
		]
		,'update': function() {
			time--;	
		}
	},	
	66: {
		'info': "Your trolling skills are no match for such a feeble flamewar."
		,'options':
		[
		 ["Proceed", 76]
		]
		,'info-es': "Tus habilidades para trolear no son rival en una flamewar tan débil."
		,'options-es':
		[
		 ["Seguir", 76]
		]
		,'update': function() {
			time--;
		}
	},	
	67: {
		'info': "You thought you were a good troll, but apparently not good enough. The internet is full of them."
		,'options':
		[
		 ["Proceed", 65]
		]
		,'info-es': "Pensabas que eras un buen trol, pero parece que no tanto. Internet está llena de ellos."
		,'options-es':
		[
		 ["Seguir", 65]
		]
		,'update': function() {
			intelligence--;
			luck--;
			nerdness--;
			socialskills--;
			time--;
		}
	},
	68: {
		'info': "Your hacker brilliance finds a site vulnerability which you exploit to bring down the whole forum. No more flame war."
		,'options':
		[
		 ["Proceed", 76]
		]
		,'info-es': "Tu brillantez de hacker encuentra una vulnerabilidad en el sitio que explotas para tirar abajo el foro. Fin de la guerra."
		,'options-es':
		[
		 ["Seguir", 76]
		]
		,'update': function() {
			time--;
		}
	},	
	69: {
		'info': "Your lack of hacker skills made you an easy victim to the flamewar."
		,'options':
		[
		 ["Proceed", 65]
		]
		,'info-es': "Tu falta de habilidades de hacker te hace una víctima fácil de la flamewar."
		,'options-es':
		[
		 ["Seguir", 65]
		]
		,'update': function() {
			intelligence--;
			luck--;
			nerdness--;
			socialskills--;
			time--;
		}
	},
	70: {
		'info': "Your intelligence allows you to cool the situation down."
		,'options':
		[
		 ["Proceed", 76]
		]
		,'info-es': "Tu inteligencia te permite rebajar la tensión."
		,'options-es':
		[
		 ["Seguir", 76]
		]
		,'update': function() {
			intelligence--;
			time--;
		}
	},	
	71: {
		'info': "You thought you were smart. Apparently not smart enough."
		,'options':
		[
		 ["Proceed", 65]
		]
		,'info-es': "Pensabas que eras astuto. Parece que no tanto."
		,'options-es':
		[
		 ["Seguir", 65]
		]
		,'update': function() {
			intelligence -= 2;
			time--;
		}
	},
	72: {
		'info': "You're lucky enough to dodge most of the flames and focus on what's really important."
		,'options':
		[
		 ["Proceed", 76]
		]
		,'info-es': "Tienes la suerte justa para evadirte de las flamewars y centrarte en lo que es importante."
		,'options-es':
		[
		 ["Seguir", 76]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},	
	73: {
		'info': "You run out of luck consumed in the flamewar."
		,'options':
		[
		 ["Proceed", 65]
		]
		,'info-es': "Te has quedado sin suerte consumido en la flamewar."
		,'options-es':
		[
		 ["Seguir", 65]
		]
		,'update': function() {
			luck -= 2;
			time--;
		}
	},
	74: {
		'info': "Your social skills saved you from an embarrassing confrontation."
		,'options':
		[
		 ["Proceed", 76]
		]
		,'info-es': "Tus habilidades sociales te han salvado de una molesta confrontación."
		,'options-es':
		[
		 ["Seguir", 76]
		]
		,'update': function() {
			socialskills--;
			time--;
		}
	},	
	75: {
		'info': "Your social skills were too low to save you from this flamewar."
		,'options':
		[
		 ["Proceed", 65]
		]
		,'info-es': "Tus habilidades sociales fueron demasiado bajas para salvarte de esta flamewar."
		,'options-es':
		[
		 ["Seguir", 65]
		]
		,'update': function() {
			socialskills -= 2;
			time--;
		}
	},

//need soundtrack for a video you just finished, trust musician skills, test luck, test socialskills


	76: {
		'info': "You're almost done. Just need a soundtrack for a video you just finished."
		,'options':
		[
		 ["Trust your musician skills", function(){ return (musician > 2)?77:78; }],
		 ["Test your luck", function() { return (luck > rand(12))?79:80; }],
		 ["Test your socialskills", function() { return (socialskills > rand(12))?81:82; }]
		]
		,'info-es': "Casi has acabado. Apenas te queda una canción para un vídeo que has terminado."
		,'options-es':
		[
		 ["Confiar en tus dotes de músico", function(){ return (musician > 2)?77:78; }],
		 ["Probar tu suerte", function() { return (luck > rand(12))?79:80; }],
		 ["Probar tus habilidades sociales", function() { return (socialskills > rand(12))?81:82; }]
		]
		,'update': function() {
			time--;	
		}
	},	
	77: {
		'info': "Your skill as a musician come in handy."
		,'options':
		[
		 ["Proceed", function() { return (pass2 == passcode1)?86:83; }]
		]
		,'info-es': "Tus dotes de músico resultan útiles."
		,'options-es':
		[
		 ["Seguir", function() { return (pass2 == passcode1)?86:83; }]
		]
		,'update': function() {
			time--;
		}
	},	
	78: {
		'info': "Your skill as musician just isn't enough to cut it."
		,'options':
		[
		 ["Proceed", 76]
		]
		,'info-es': "Tus dotes de músico se quedan cortas para esto."
		,'options-es':
		[
		 ["Seguir", 76]
		]
		,'update': function() {
			intelligence--;
			luck--;
			nerdness--;
			socialskills--;
			time--;
		}
	},
	79: {
		'info': "You're lucky enough to figure out a nice solution. Well done."
		,'options':
		[
		 ["Proceed",  function() { return (pass2 == passcode1)?86:83; }]
		]
		,'info-es': "Has tenido suerte para sacar una buena solución. Bien hecho."
		,'options-es':
		[
		 ["Seguir",  function() { return (pass2 == passcode1)?86:83; }]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},	
	80: {
		'info': "You run out of luck when you needed it the most. Without a soundtrack your video is useless and you have no chance at Euskal."
		,'options':
		[
		 ["Proceed", 76]
		]
		,'info-es': "Te has quedado sin suerte justo cuando más la necesitabas. Sin canción tu vídeo es inútil y no tienes oportunidad de ganar la Euskal."
		,'options-es':
		[
		 ["Seguir", 76]
		]
		,'update': function() {
			luck -= 2;
			time--;
		}
	},
	81: {
		'info': "Your social skills saved the day once again."
		,'options':
		[
		 ["Proceed", function() { return (pass2 == passcode1)?86:83; }]
		]
		,'info-es': "Tus habilidades sociales salvaron el día una vez más."
		,'options-es':
		[
		 ["Seguir", function() { return (pass2 == passcode1)?86:83; }]
		]
		,'update': function() {
			socialskills--;
			time--;
		}
	},	
	82: {
		'info': "Not enough social skills to help you find a musician this time."
		,'options':
		[
		 ["Proceed", 76]
		]
		,'info-es': "No tienes dotes sociales para encontrar un músico a estas alturas."
		,'options-es':
		[
		 ["Seguir", 76]
		]
		,'update': function() {
			socialskills -= 2;
			time--;
		}
	},
	83: {
		'info': "Your group managed to prepare itself for Euskal.<br>Now it's all up to the jury."
		,'options':
		[
		 ["Wait for results", function() { return (rand(2)==0)?84:85; }]
		]
		,'info-es': "Tu grupo se las arreglado para la Euskal.<br>Ahora todo queda en manos del jurado."
		,'options-es':
		[
		 ["Esperar resultados", function() { return (rand(2)==0)?84:85; }]
		]
	},	
	84: {
		'info': "You placed 3rd. Guess you'll have to try again next year.<br><br>Thank you for playing the Becoming 1337 simulation program.<br><br>Have a nice day.<br><br><br><br><br><br><span onclick=\"submit(100)\";>&#960;</span>"
		,'info-es': "Quedaste 3º. Parece que tendrás que probar otra vez el año que viene.<br><br>Gracias por jugar al programa de simulación Becoming 1337.<br><br>Que tengas un buen día.<br><br><br><br><br><br><span onclick=\"submit(100)\";>&#960;</span>"
	},	
	85: {
		'info': "You placed 7th. What a disapointment.<br><br>Thank you for playing the Becoming 1337 simulation program.<br><br>Have a nice day.<br><br><br><br><br><br><span onclick=\"submit(100)\";>&#960;</span>"
		,'info-es': "Quedaste 7º. Qué decepción.<br><br>Gracias por jugar al programa de simulación Becoming 1337.<br><br>Que tengas un buen día.<br><br><br><br><br><br><span onclick=\"submit(100)\";>&#960;</span>"
	},
	
	
	86: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["intl",87],
			["luck",88],
			["nerd",89],
			["socs",90],
			["code",91],
			["musk",92],
			["grfx",93],
			["trol",94],
			["hack",95],
		]
		,'update': function() {
			document.body.style.backgroundColor="#000";
			document.getElementById('container').style.backgroundColor="#000";
			document.body.style.color="#0d0";
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			finalcounter--;	
		}
	},
	87: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["...", function(){ return (finalcounter == 0)?96:86; }]
		]
		,'update': function() {
			intelligence--;
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;		
		}
	},	
	88: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["...", function(){ return (finalcounter == 0)?96:86; }]
		]
		,'update': function() {
			luck--;
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;		
		}
	},		
	89: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["...", function(){ return (finalcounter == 0)?96:86; }]
		]
		,'update': function() {
			nerdness--;
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
		}
	},
	90: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["...", function(){ return (finalcounter == 0)?96:86; }]
		]
		,'update': function() {
			socialskills--;
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
		}
	},	
	91: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["...", function(){ return (finalcounter == 0)?96:86; }]
		]
		,'update': function() {
			coder--;
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			if (coder < 0) {
				submit(97);
			}
		}
	},	
	92: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["...", function(){ return (finalcounter == 0)?96:86; }]
		]
		,'update': function() {
			musician--;
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			if (musician < 0) {
				submit(97);
			}
		}
	},		
	93: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["...", function(){ return (finalcounter == 0)?96:86; }]
		]
		,'update': function() {
			graphician--;
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			if (graphician < 0) {
				submit(97);
			}
		}
	},
	94: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["...", function(){ return (finalcounter == 0)?96:86; }]
		]
		,'update': function() {
			troll--;
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			if (troll < 0) {
				submit(97);
			}
		}
	},
	95: {
		'info': function() { return "0x"+finalcounter.toString(16); }
		,'options': [
			["...", function(){ return (finalcounter == 0)?96:86; }]
		]
		,'update': function() {
			hacker--;
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			if (hacker< 0) {
				submit(97);
			} else {
				finalcounter--;
			}
		}
	},
	
	96: {
		'info': "KERNEL BREACH. INTRUSION ALERT." //win
		,'options': [
			["...",99]
		]
		,'update': function() {
			document.body.style.backgroundColor="#000";
			document.getElementById('container').style.backgroundColor="#000";
			document.body.style.color="#0d0";
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;		
		}
	},

	
	97: {
		'info': "BUFFER OVERFLOW<br>KERNEL ERROR VIOLATION DETECTED<br>DISABLING LIFE SUPPORT"
	},
/*	98: {
		'info': "..."
		,'update': function() {
			document.body.style.backgroundColor="#000";
			document.getElementById('container').style.backgroundColor="#000";
			document.body.style.color="#0d0";
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			//play sound dead	
		}
	},*/
	99: {
		'info': "<div id=\"comic\"></div>" //win
		,'update': function() {
			document.body.style.backgroundColor="#000";
			document.getElementById('container').style.backgroundColor="#000";
			document.body.style.color="#0d0";
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			ping_3(document.getElementById('comic'));
			//play sound aperture science
		}
	},
	
	100: {
		'info': "<div id=\"comic\"></div>"
		,'update': function() {
			document.body.style.backgroundColor="#000";
			document.getElementById('container').style.backgroundColor="#000";
			document.body.style.color="#0d0";
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;		
			ping_4(document.getElementById('comic'));
		}
	},
		
};