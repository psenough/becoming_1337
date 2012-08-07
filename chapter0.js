
//
// define stats, buy computer
//

t = [];
t['en'] = [];
t['en']['intl'] = 'Intelligence';
t['en']['luck'] = 'Luck';
t['en']['nerd'] = 'Nerdness';
t['en']['soci'] = 'Social skills';
t['en']['weeks'] = 'Weeks left';

t['es'] = [];
t['es']['intl'] = 'Inteligencia';
t['es']['luck'] = 'Suerte';
t['es']['nerd'] = 'Empollón';
t['es']['soci'] = 'Habilidad Social';
t['es']['weeks'] = 'Semanas restantes';


chapters[0] = {
	0: {
		'info': "Welcome to the Becoming 1337 simulation program.<br><br>You are a young nerd on the rise to become someone great. You could accomplish so much if only someone would give you a chance to prove yourself. Now is the time to take over the geeks and rule supreme as the 1337 one of this world.<br><br>How long do you think it will take you to make it?"
		,'info-es': "Bienvenido al programa de simulación Becoming 1337.<br><br>Eres un joven empollón con aspiraciones a convertirse en alguien grande. Podrías conseguir tanto si alguien te diera la oportunidad de probarte. Ahora es hora de gobernar sobre los frikis como el 31i73 supremo de este mundo.<br><br>¿Cuánto crees que tardarás en lograrlo?"
		,'options':
		[
		 ["A year",27],
		 ["A couple of years",28],
		 ["All good things come to those who wait",29]
		]
		,'options-es':
		[
		 ["Un año",27],
		 ["Un par de años",28],
		 ["Muchos más",29]
		]
		,'update': function() {
			playAudio(0);
		}
	},
	1: {
		'info': function(){ return "You enthusiastically embrace your journey in Becoming 1337 and can't wait to face the challenges to come.<br><br>Your starting skill points is "+minskills+" on all visible stats, your maximum is "+maxskills+". If at any time you drop below 0 on any of these stats your quest will come to a dramatic end. Your skill points will change with events during the game. You can improve your starting skill points now with some dice rolls, but you only have "+rolls+", so use them wisely." }
		,'info-es': function(){ return "Entusiastamente te embarcas en tu viaje para volverte 31i73 y no puedes esperar para enfrentarte a los retos que están por llegar.<br><br>Tus puntos de habilidad de inicio son "+minskills+" en todas las habilidades visibles, tu máximo es "+maxskills+". Si en cualquier momento caes por debajo de 0 en cualquier habilidad tu periplo terminará de forma dramática. Tus puntos de habilidad cambian con eventos durante el juego. Puedes mejorar tus puntos de inicio ahora lanzando algunos dados, pero sólo tienes "+rolls+", así que úsalos con sabiduría." }
		,'options-text': {
			0:"Roll Intelligence",
			1:"Roll Luck",
			2:"Roll Nerdness",
			3:"Roll Social Skills"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:4,
			3:5
		}
		,'options-es':
		[
		 ["Tirar Inteligencia",2],
		 ["Tirar Suerte",3],
		 ["Tirar Empollón",4],
		 ["Tirar Habilidades Sociales",5]
		]
	},
	2: {
		'info': function(){ return "You roll the dice to improve your intelligence... Your intelligence is now " + rollIntelligence() + ". You have "+rolls+" dice rolls left."; }
		,'info-es': function(){ return "Tiras un dado para mejorar tu inteligencia... Tu inteligencia es ahora " + rollIntelligence() + ". Te quedan "+rolls+" dados."; }
		,'options-text': {
			0:"Roll Intelligence",
			1:"Roll Luck",
			2:"Roll Nerdness",
			3:"Roll Social Skills"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:4,
			3:5
		}
		,'options-es':
		[
		 ["Tirar Inteligencia",2],
		 ["Tirar Suerte",3],
		 ["Tirar Empollón",4],
		 ["Tirar Habilidades Sociales",5]
		]		
		,'update': function() {
			if (rolls == 0) submit(6);
		}
	},
	3: {
		'info': function(){ return "You roll the dice to improve your luck... Your luck is now " + rollLuck() + ". You have "+rolls+" dice rolls left."; }
		,'info-es': function(){ return "Tiras un dado para mejorar tu suerte... Tu suerte es ahora " + rollLuck() + ". Te quedan "+rolls+" dados."; }
		,'options-text': {
			0:"Roll Intelligence",
			1:"Roll Luck",
			2:"Roll Nerdness",
			3:"Roll Social Skills"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:4,
			3:5
		}
		,'options-es':
		[
		 ["Tirar Inteligencia",2],
		 ["Tirar Suerte",3],
		 ["Tirar Empollón",4],
		 ["Tirar Habilidades Sociales",5]
		]
		,'update': function() {
			if (rolls == 0) submit(6);
		}
	},
	4: {
		'info': function(){ return "You roll the dice to improve your nerdness... Your nerdness is now " + rollNerdness() + ". You have " + rolls + " dice rolls left."; }
		,'info-es': function(){ return "Tiras un dado para ser más empollón... Tu nivel de empollón es ahora " + rollNerdness() + ". Te quedan "+rolls+" dados."; }
		,'options-text': {
			0:"Roll Intelligence",
			1:"Roll Luck",
			2:"Roll Nerdness",
			3:"Roll Social Skills"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:4,
			3:5
		}
		,'options-es':
		[
		 ["Tirar Inteligencia",2],
		 ["Tirar Suerte",3],
		 ["Tirar Empollón",4],
		 ["Tirar Habilidades Sociales",5]
		]
		,'update': function() {
			if (rolls == 0) submit(6);
		}
	},
	5: {
		'info': function(){ return "You roll the dice to improve your social skills... Your social skills are now " + rollSocialSkills() + ". You have " + rolls + " dice rolls left."; }
		,'info-es': function(){ return "Tiras un dado para mejorar tus habilidades sociales... Tus habilidades sociales son ahora " + rollSocialSkills() + ". Te quedan " + rolls + " dados."; }
		,'options-text': {
			0:"Roll Intelligence",
			1:"Roll Luck",
			2:"Roll Nerdness",
			3:"Roll Social Skills"
		}
		,'options-redirect': {
			0:2,
			1:3,
			2:4,
			3:5
		}
		,'options-es':
		[
		 ["Tirar Inteligencia",2],
		 ["Tirar Suerte",3],
		 ["Tirar Empollón",4],
		 ["Tirar Habilidades Sociales",5]
		]
		,'update': function() {
			if (rolls == 0) submit(6);
		}
	},	
	6: {
		'info': "You are all out of dice rolls and ready to take on the world."
		,'info-es': "Te has quedado sin tiradas y estás dispuesto a conquistar el mundo."

		,'options-text': {
			0:"Let's go"
		}
		,'options-redirect': {
			0:7
		}
		,'options-es':
		[
		 ["Vamos",7]
		]		
	},
	7: {
		'info': "Right now most of the other kids are playing soccer outside. But you are not like most of the other kids. Your weekends are spent at your neighbours, playing with their computer."
		,'info-es': "Ahora mismo la mayoría de chavales están en la calle jugando con la pelota. Pero tú no eres como la mayoría de chavales. Pasas los fines de semana con los vecinos, jugando con sus ordenadores."
		,'options-text': {
			0:"Enjoy life"
		}
		,'options-redirect': {
			0:33
		}
		,'options-es':
		[
		 ["Gozar la vida",33]
		]
	},	
	8: {
		'info': "Working at McDonalds is not very nerdlike, but nothing comes for free in this world and this hardship also improved your social skills. After a couple of months of hard work you manage to save up enough money to buy your first computer."
		,'info-es': "Trabajar en el McDonalds no es nada friki, pero en este mundo nada es gratis y este trabajo duro también mejora tus aptitudes sociales. Tras un par de meses de curro consigues ahorrar suficiente dinero para comprarte tu primer ordenador."
		,'options-text': {
			0:"Buy computer"
		}
		,'options-redirect': {
			0:11
		}
		,'options-es':
		[
		 ["Comprar ordenador",11]
		]
		,'update': function() {
			nerdness -= 1;
			socialskills += 1;
			time -= 8;
		}
	},	
	9: {
		'info': "After a few weeks of nagging your parents they finally give in and give you the money to buy your first computer. Accomplished like a real nerd."
		,'info-es': "Después de unas semanas dando la lata a tus padres finalmente ceden y te dan dinero para comprarte tu primer ordenador. Has cumplido como un auténtico friki."
		,'options-text': {
			0:"Buy computer"
		}
		,'options-redirect': {
			0:11
		}
		,'options-es':
		[
		 ["Comprar ordenador",11]
		]
		,'update': function() {
			nerdness++;
			time -= 3;
		}
	},		
	10: {
		'info': "You wait a few months for the moons to align. It's finally your birthday and noticing your disapointment with the lack of your own computer your parents agree to give you the money to buy one as a present. Lucky you."
		,'info-es': "Esperas un par de meses a que se alineen los planetas. Al fin es tu cumpleaños y al ver que te decepciona no tener un ordenador propio tus padres aceptan darte dinero para comprarte uno como regalo. Vaya potra."
		,'options-text': {
			0:"Buy computer"
		}
		,'options-redirect': {
			0:11
		}
		,'options-es':
		[
		 ["Comprar ordenador",11]
		]
		,'update': function() {
			luck++;
			time -= 6;
		}
	},	
	11: {
		'info': "A true 1337 knows that buying a computer is an art in itself. It usually takes months of planning and deep research. The computer industry is in it's prime. Constant sales are not uncommon in the market, which makes it hard to figure out what might actually be your best buy. How will you tackle this hard endeavour?"
		,'info-es': "Un auténtico 31i73 sabe que comprar un ordenador es un arte en sí mismo. Normalmente lleva meses de planificación e investigación a fondo.	La industria informática está en su mejor momento. Es difícil imaginar cuál puede ser tu mejor compra. ¿Cómo afrontarás esta empresa?"
		,'options-text': {
			0:"Ask a friend for help",
			1:"Let your dad pick one",
			2:"Ask the sales person",
			3:"Read computer magazines" 
		}
		,'options-redirect': {
			0:13,
			1:14,
			2:15,
			3:16
		}
		,'options-es':
		[
		 ["Pedir ayuda a un amigo",13],
		 ["Que tu padre elija",14],
		 ["Preguntar al vendedor",15],
		 ["Leer revistas de informática",16]
		]
	},	
	12: {
		'info': "You nag your parents but it seems you don't have the luck or the social skills to pull it off. You're not much of a real nerd."
		,'info-es': "Incordias a tus padres pero parece que ni tienes suerte ni aptitudes sociales para sacar algo de provecho. No eres muy friki."
		,'options-text': {
			0:"Work at McDonalds",
			1:"Wait for the moons to align"
		}
		,'options-redirect': {
			0:8,
			1:10
		}
		,'options-es':
		[
		 ["Currar en McDonalds",8],
		 ["Esperar a que se alineen los planetas",10]
		]
		,'update': function() {
			time -= 2;
			nerdness--;
		}
	},
	13: {
		'info': "You ask a friend to help you chose a computer. That's not very nerdlike. But it helped you choose a proper machine. And that's always important to have if you're serious about becoming 1337."
		,'info-es': "Pides a un amigo que te ayude a elegir un ordenador. Eso no es nada friki. Pero te ayudó a elegir una máquina en condiciones. Y eso siempre es importante si vas a tomarte en serio volverte 31i73."
		,'options':
		[
			["Setup computer",17]
		]
		,'options-es':
		[
		 ["Montar ordenadors",17]
		]
		,'update': function() {
			nerdness--;
		}
	},
	14: {
		'info': "You decide to let your dad pick your computer for you. The lamest way out. It demonstrates your lack of nerdness and social skills."
		,'info-es': "Decides que tu padre elija tu ordenador. Mira que eres cutre. Demuestra tu falta de frikismo y habilidades sociales."
		,'options':
		[
			["Setup computer",17]
		]
		,'options-es':
		[
		 ["Montar ordenadors",17]
		]
		,'update': function() {
			nerdness--;
			socialskills--;
		}
	},	
	15: {
		'info': "You decide to ask the sales person to chose a computer for you. Not very nerdy of you. Also not the smartest thing, he could easily trick you into getting something lame. You can still try to get out of the situation with a little luck or social skills, but it'll cost you."
		,'info-es': "Decides preguntar al vendedor para que te venda un ordenador. No dice mucho bueno de ti. Tampoco es lo más sensato, te podría engañar para venderte algo cutre. Todavía puedes intentar salvar la situación con un poco de suerte o habilidades sociales, pero a un coste."
		,'options-text': {
			0:"Test Luck",
			1:"Test Social Skills"
		}
		,'options-redirect': {
			0:function() { if (luck > rand(12)) return 18; else return 19; },
			1:function() { if (socialskills > rand(12)) return 20; else return 21; },
		}
		,'options-es':
		[
		 ["Probar Suerte", function() { if (luck > rand(12)) return 18; else return 19; }],
		 ["Probar Habilidades Sociales", function() { if (socialskills > rand(12)) return 20; else return 21; }]
		]
		,'update': function() {
			nerdness--;
			intelligence--;
		}
	},	
	16: {
		'info': "You spend a couple of weeks reading some computer magazines to decide on your own what is the best machine for you. You find some fascinating articles on latest trends and topics of the computer industry."
		,'info-es': "Echas un par de semanas leyendo algunas revistas para decidir tú mismo qué te conviene más. Encuentras algunos artículos fascinantes"
		,'options':
		[
			["Read some more",35],
			["Go buy computer",34]
		]
		,'options-es':
		[
		 ["Leer mas", 35],
		 ["Ir comprar ordenador", 34]
		]
		,'update': function() {
			nerdness++;
			time -= 2;
		}
	},	
	17: {
		'info': "You now have your own computer. And you really want to install it in your bedroom but your parents seem to want it on the living room where they can control you better."
		,'info-es': "Ahora tienes tu propio ordenador. Y fijo que quieres instalarlo en tu habitación pero tus padres lo quieren en la sala de estar donde te pueden controlar mejor."
		,'options':
		[
		 ["Give in to your parents", 37],
		 ["Test your luck", function() { return (luck > rand(12))?38:39; }],
		 ["Test your social skills", function() { return (socialskills > rand(12))?36:40; }]
		]
		,'options-es':
		[
		 ["Ceder a tus padres", 37],
		 ["Probar tu suerte", function() { return (luck > rand(12))?38:39; }],
		 ["Probar tus habilidades sociales", function() { return (socialskills > rand(12))?36:40; }]
		]
	},
	18: {
		'info': "Seems luck is on your side, you got a decent sales person to talk you through your options and ended up with a nice computer to take home."
		,'info-es': "Parece que la suerte te acompaña, un vendedor decente te dio tus opciones y has acabado con un buen ordenador en casa."
		,'options':
		[
			["Setup computer",17]
		]
		,'options-es':
		[
			["Montar ordenador",17]
		]
		,'update': function() {
			luck--;
		}
	},	
	19: {
		'info': "The sales person does a great job tricking you. Luck was not by your side and you're now stuck with an overpriced piece of crap."
		,'info-es': "El vendedor se lo ha currado para engañarte. La suerte no te ha acompañado y ahora tienes un montón de mierda inflada de precio."
		,'options-text': {
			0:"Try to replace",
			1:"Setup computer"
		}
		,'options-redirect': {
			0:22,
			1:17
		}
		,'options-es':
		[
			["Intentar cambiar",22],
			["Montar ordenador",17]
		]
		,'update': function() {
			luck--;
		}
	},
	20: {
		'info': "Congratulations. Your social skills manage to convince the sales person in giving you a good deal."
		,'info-es': "Enhorabuena. Tus dotes sociales consiguen convencer al vendedor para cerrar un buen trato."
		,'options':
		[
			["Setup computer",17]
		]
		,'options-es':
		[
			["Montar ordenador",17]
		]
		,'update': function() {
			socialskills--;
		}
	},
	21: {
		'info': "You try to scheme the sales person but you don't get very far with yout lack of social skills. You arrive home with a new computer and the feeling you got ripped off."
		,'info-es': "Intentas regatear con el vendedor pero no logras mucho por tu falta de aptitudes sociales. Llegas a casa con un ordenador nuevo pero sientes que te han engañado."
		,'options-text': {
			0:"Try to replace",
			1:"Setup computer"
		}
		,'options-redirect': {
			0:22,
			1:17
		}
		,'options-es':
		[
			["Intentar cambiar",22],
			["Montar ordenador",17]
		]
		,'update': function() {
			socialskills--;
		}
	},	
	22: {
		'info': "You go back to the store to try and replace your computer with something better. You end wasting some more time but it was the true nerd thing to do."
		,'info-es': "Vuelves a la tienda para intentar cambiar tu ordenador por algo mejor. Acabas gastando algo más pero seguro que era lo que todo friki haría."
		,'options':
		[
			["Setup computer",17]
		]
		,'options-es':
		[
			["Montar ordenador",17]
		]
		,'update': function() {
			nerdness++;
			time--;
		}
	},
	23: {
		'info': "Let's face it, you're not the sharpest of the bunch and you're not getting any younger. With your low level of intelligence you'll never make it far. Forest Gump never used a computer."
		,'info-es': "Afrontémoslo. No eres el tipo más lumbreras del mundo y ya no vas a cambiar. Con tu bajo nivel de inteligencia nunca llegarás lejos. Forrest Gump nunca usó un ordenador."
		,'update': function() {
			document.body.style.backgroundColor = "#ec9444";
			document.getElementById('container').style.backgroundColor="#f8d6b0";
			document.body.style.color="#000";
		}
	},
	24: {
		'info': "It seems you're just not nerdy enough to become a real 1337. Once a lamer always a lamer."
		,'info-es': "Parece que no eres lo suficientemente friki para convertirte en un 31i73. Once a lamer, always a lamer."
		,'update': function() {
			document.body.style.backgroundColor = "#ec9444";
			document.getElementById('container').style.backgroundColor="#f8d6b0";
			document.body.style.color="#000";
		}
	},
	25: {
		'info': "You'll get nowhere with such low social skills. This is hopeless. Are you sure you don't have asperger syndrome or some other form of autism?"
		,'info-es': "No vas a llegar a ningún lado con esas aptitudes sociales. No hay esperanza. ¿Seguro que no tienes Asperger u otra forma de autismo?"
		,'update': function() {
			document.body.style.backgroundColor = "#ec9444";
			document.getElementById('container').style.backgroundColor="#f8d6b0";
			document.body.style.color="#000";
		}
	},
	26: {
		'update': function() {
			time = 6*4;
			submit(1);
		}
	},
	27: {
		'update': function() {
			time = 12*4;
			submit(1);
		}
	},
	28: {
		'update': function() {
			time = 24*4;
			submit(1);
		}
	},
	29: {
		'update': function() {
			time = 36*4;
			submit(1);
		}
	},
	30: {
		'info': "Seems you're all out of luck. That's too bad. You can't catch any breaks in the big league without a little luck."
		,'info-es': "Parece que te has quedado sin suerte. Qué mal. Incluso un genio es 99 por ciento de preparación y 1 por ciento de suerte."
		,'update': function() {
			document.body.style.backgroundColor = "#ec9444";
			document.getElementById('container').style.backgroundColor="#f8d6b0";
			document.body.style.color="#000";
		}
	},
	31: {
		'info': "<span id=\"decoded_message\"></span>"
		,'options-text': {
			0:"",
			1:"",
			2:"'",
			3:""
		}
		,'options-redirect': {
			0:0,
			1:0,
			2:0,
			3:0
		}
		,'update': function() {
			playAudio(1);			
		
			chapter = 1;
			
			var textout = '';
			
			var sel = ["finally", "computer", "managed", "convince", "parents", "install", "bedroom", "privacy", "important", "achieve"];
			
			passcode1 = sel[rand(sel.length)];
			
			for (i = 0; i < 10; i++) textout += passcode1+" ";
			textout +="<br><br><div style=\"text-align: center\">there is no cake.</div><br>";
			for (i = 0; i < 10; i++) textout += passcode1+" ";
			
			document.body.style.backgroundColor="#000";
			document.getElementById('container').style.backgroundColor="#000";
			document.body.style.color="#0d0";
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			jumpchapter = true;
			decode_message(textout, "jumpafterdecode()");
		}
	},
	32: {
		'info': "You might have slightly underestimated how long it would take you to become 1337..."
		,'info-es': "Quizá hayas subestimado un poco lo mucho que tardarías en volverte 31i73..."
		,'update': function() {
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
		}
	},
	33: {
		'info': "Life is good playing computer all day at your neighbours.<br><br>But if you want to be a real 1337 you need a machine of your own. How will you obtain yours?"
		,'info-es': "Se vive bien jugando con el ordenador todo el día en casa de tus vecinos.<br><br>Pero si quieres convertirte en un auténtico 31i73 necesitas tu propia máquina. ¿Cómo conseguirás la tuya?"
		,'options-text': {
			0:"Work at McDonalds",
			1:"Nag your parents",
			2:"Wait for the moons to align"
		}
		,'options-redirect': {
			0:8,
			1:function() { if ((luck > rand(12)) && (socialskills > rand(12))) return 9; else return 12; },
			2:10
		}
		,'options-es':
		[
			["Currar en McDonalds",8],
			["Dar la lata a tus padres",function() { if ((luck > rand(12)) && (socialskills > rand(12))) return 9; else return 12; }],
			["Esperar a que se alineen los planetas",10]
		]
	},
	34: {
		'info': "After a heavy amount of reading you finally decide on what computer you should buy. You head out to the store that very afternoon and return with the best machine ever."
		,'info-es': "Después de mucho leer finalmente decides qué ordenador deberías comprar. Te diriges a la tienda esa misma tarde y vuelves con la mejor máquina posible."
		,'options':
		[
			["Setup computer",17]
		]
		,'options-es':
		[
			["Montar ordenador",17]
		]
	},
	35: {
		'info': "You just can't get enough on the latest issue of PC Mania.<br>Cloud computing is the future."
		,'info-es': "No sacas mucho en claro del último número de la PC Manía.<br>La computación en la nube es el futuro."
		,'options':
		[
			["Go buy computer",34]
		]
		,'options-es':
		[
			["Ir a comprar un ordenador",34]
		]
		,'update': function() {
			intelligence++;
			nerdness++;
			time -= 2;
		}
	},
	36: {
		'info': "You managed to convince your parents to let you install the computer in your bedroom. Privacy is important if you want to achieve great things."
		,'info-es': "Conseguiste convencer a tus padres para montarte el ordenador en tu habitación. La privacidad es importante si quieres alcanzar grandes cosas."
		,'options':
		[
			["Proceed",31]
		]
		,'options-es':
		[
			["Seguir",31]
		]
		,'update': function() {
			privacy = true;
			socialskills--;
		}
	},
	37: {
		'info': "You let your parents have their way and lose your right to privacy."
		,'info-es': "Dejas a tus padres a su bola y pierdes tu derecho a la privacidad."
		,'options':
		[
		 ["Proceed", 31]
		]
		,'options-es':
		[
		 ["Seguir", 31]
		]
		,'update': function() {
			privacy = false;
			nerdness--;
		}
	},
	38: {
		'info': "You are lucky enough to convince your parents to let you have your way."
		,'info-es': "Tienes la potra suficiente para convencer a tus padres para que te dejen ir a tu bola."
		,'options':
		[
		 ["Proceed", 31]
		]
		,'options-es':
		[
		 ["Seguir", 31]
		]
		,'update': function() {
			privacy = true;
			luck--;
		}
	},
	39: {
		'info': "You fail to convince your parents to let you install the computer in your bedroom."
		,'info-es': "No consigues convencer a tus padres para montar el ordenador en tu habitación."
		,'options':
		[
		 ["Give in to your parents", 37],
		 ["Test your luck again", function() { return (luck > rand(12))?38:39; }],
		 ["Test your social skills", function() { return (socialskills > rand(12))?36:40; }]
		]
		,'options-es':
		[
		 ["Ceder a tus padres", 37],
		 ["Probar suerte otra vez", function() { return (luck > rand(12))?38:39; }],
		 ["Probar habilidades sociales", function() { return (socialskills > rand(12))?36:40; }]
		]
		,'update': function() {
			luck--;
		}		
	},
	40: {
		'info': "You fail to social engineer your parents into some privacy."
		,'info-es': "Fracasas intentando hacer ingeniería social con tus padres para ganar privacidad."
		,'options':
		[
		 ["Give in to your parents", 37],
		 ["Test your luck", function() { return (luck > rand(12))?38:39; }],
		 ["Test your social skills again", function() { return (socialskills > rand(12))?40:36; }]
		]
		,'options-es':
		[
		 ["Ceder a tus padres", 37],
		 ["Probar tu suerte", function() { return (luck > rand(12))?38:39; }],
		 ["Probar habilidades sociales otra vez", function() { return (socialskills > rand(12))?40:36; }]
		]
		,'update': function() {
			socialskills--;
		}
	},		
};

