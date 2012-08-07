
//
// figure out what you want to do
//

chapters[1] = {
	0: {
		'info': "With your own computer in your bedroom you are now ready to take over the world. So what do you want to do first?"
		,'info-es': "Con tu ordenador en tu habitación ya estás listo para conquistar el mundo. ¿Qué quieres hacer primero?"
		,'options': 
		[
			["Program 'Hello World'",1],
		    ["Draw some graphics",2],
		    ["Make some music",3],
		    ["Play some games",4],
		    ["Hack the planet",13],
		    ["Surf for porn",5]
		]
		,'options-es': 
		[
			["Programar 'Hola Mundo'",1],
		    ["Dibujar algunos gráficos",2],
		    ["Hacer algo de música",3],
		    ["Jugar a algo",4],
		    ["Hackear el planeta",13],
		    ["Navegar por porno",5]
		]
		,'update': function() {
			jumpchapter = false;
			document.body.style.backgroundColor = "#ec9444";
			document.getElementById('container').style.backgroundColor="#f8d6b0";
			document.body.style.color="#000";
		}
	},
	1: {
		'info': "You bravely try to program an 'Hello World' but lack any programming skills whatsoever. You don't even know where to start from."
		,'info-es': "Valientemente intentas programar un 'Hola Mundo' pero no tienes ningún conocimiento de programacion. Ni siquiera sabes por dónde empezar."
		,'options-text': {
		    0:"Give up on coding",
		    1:"Buy programming book",
		    2:"Ask for help online",
		    3:"Ask for help offline"
		}
		,'options-redirect': {
			0: 8,
			1: 9,
			2: 10,
			3: function() { return (luck > rand(12))?11:6; }
		}
		,'options-es': 
		[
			["Abandonar el coding",8],
		    ["Comprar un libro de programación",9],
		    ["Pedir ayuda en red",10],
		    ["Pedir ayuda fuera de red",function() { return (luck > rand(12))?11:6; }]
		]
	},
	2: {
		'info': "You install a program to draw some graphics but can't do anything decent with it."
		,'info-es': "Instalas un programa para dibujar algo pero no sacas nada decente."
		,'options-text': {
		    0:"Give up on drawing graphics",
		    1:"Buy books",
		    2:"Read tutorials online",
		    3:"Ask for help offline"
		}
		,'options-redirect': {
			0: 7,
			1: 17,
			2: 18,
			3: function(){ return (luck > rand(12))?19:50; }
		}
		,'options-es': 
		[
			["Abandonar el dibujo",7],
		    ["Comprar libros",17],
		    ["Leer tutoriales en red",18],
		    ["Pedir ayuda fuera de red",function() { return (luck > rand(12))?19:50; }]
		]
	},	
	3: {
		'info': "You install a program to compose some music. You get some sounds out of it but clearly lack some experience."
		,'info-es': "Instalas un programa para componer música. Sacas algunos sonidos pero claramente te falta experiencia."
		,'options-text': {
		    0:"Give up on music",
		    1:"Learn an instrument",
		    2:"Experiment",
		    3:"Read tutorials online"
		}
		,'options-redirect': {
			0: 20,
			1: 21,
			2: 22,
			3: 23
		}
		,'options-es': 
		[
			["Dejar la música",20],
		    ["Aprender a tocar un instrumento",21],
		    ["Experimentar",22],
		    ["Leer tutoriales en red",23]
		]
	},		
	4: {
		'info': "You decide to try out a few games. Videogames improve your intelligence and hand eye coordination. You never know when you're going to need more of that."
		,'info-es': "Decides probar algunos juegos. Los videojuegos mejoran tu inteligencia y la coordinación ojo-mano. Nunca sabes cuándo vas a necesitar más de eso."	
		,'options-es':
		[
		 ["Jugar a juegos casual", 60 ],
		 ["Jugar a un RTS", 61 ],
		 ["Jugar a un FPS", 62 ],
		 ["Hacer otra cosa", 63 ]
		]
		,'options':
		[
		 ["Play casual games", 60 ],
		 ["Play RTS games", 61 ],
		 ["Play FPS games", 62 ],
		 ["Do something else", 63 ]
		]
		,'update': function() {
			intelligence++;
			nerdness++;
			gamer++;
			time--;
		}
	},
	5: {
		'info': function() { return "The internet is for porn. " + (privacy==true)?"Thank goodness you persuaded your parents to let you install your machine in your room. More privacy. More kleenex.":"You could really use a little more privacy right about now."; }
		,'info-es': function() { return "Internet es para el porno. " + (privacy==true)?"Menos mal que convenciste a tus padres para poner tu ordenador en tu habitación. Más privacidad. Más pañuelos.":"Ahora mismo te gustaría tener un poco más de privacidad.."; }
		,'options-es':
		[
		 ["Encontrar sitios guarros", function(){ return (privacy==true)?64:78; } ],
		 ["Encontrar foros guarros", 33 ],
//		 ["Intentar ligar con alguien en el IRC", 70 ],
		 ["Hacer otra cosa", 71 ]
		]
		,'options':
		[
		 ["Find dirty sites", function(){ return (privacy==true)?64:78; } ],
		 ["Find dirty forums", 33 ],
//		 ["Try to hook with someone on IRC", 70 ],
		 ["Do something else", 71 ]
		]
		,'update': function() {
			intelligence--;
			nerdness--;
			troll++;
			time--;
		}
	},	
	6: {
		'info': "Luckily you have a friend who already knows how to code. You decide to bother him for some hints on how to get started and now you are ready to code your first program."
		,'info-es': "Por suerte tienes un amigo que sabe escribir código. Decides darle la tabarra para que te enseñe algo para empezar y ahora puedes escribir tu primer programa."
		,'options-text': {
		    0:"Program 'Hello World'",
		    1:"Program Pong",
		    2:"Program Quake",
		    3:"Do something else"
		}
		,'options-redirect': {
			0: 12,
			1: 14,
			2: 15,
			3: 16,
		}
		,'options-es': [
		    ["Programar 'Hola Mundo'",12],
		    ["Programar Pong",14],
		    ["Programar Quake",15],
		    ["Hacer otra cosa",16]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},
	7: {
		'info': "You give up on drawing for now. Not very nerdlike. What would you like to do then?"
		,'info-es': "Dejas de dibujar por ahora. No es muy friki. ¿Qué quieres hacer ahora?"
		,'options-text': {
		    0:"Learn to code",
		    1:"Make some music",
		    2:"Play some games",
		    3:"Hack the planet",
		    4:"Surf for porn"
		}
		,'options-redirect': {
			0: 1,
			1: 3,
			2: 4,
			3: 13,
			4: 5
		}
		,'options-es': [
		    ["Aprender coding",1],
		    ["Hacer música",3],
		    ["Jugar a algo",4],
		    ["Hackear el planeta",13],
		    ["Navegar por porno",5]
		]
		,'update': function() {
			nerdness--;
			time--;
		}
	},
	8: {
		'info': "You give up on coding for now. Not very nerdlike. What would you like to do then?"
		,'info-es': "Dejas de codificar por ahora. No es muy friki. ¿Qué te apetece hacer?"
		,'options-text': {
		    0:"Draw some graphics",
		    1:"Make some music",
		    2:"Play some games",
		    3:"Hack the planet",
		    4:"Surf for porn"
		}
		,'options-redirect': {
			0: 2,
			1: 3,
			2: 4,
			3: 13,
			4: 5
		}
		,'options-es': [
		    ["Dibujar algo",2],
		    ["Hacer música",3],
		    ["Jugar a algo",4],
		    ["Hackear el planeta",13],
		    ["Navegar por porno",5]
		]
		,'update': function() {
			nerdness--;
			time--;
		}
	},
	9: {
		'info': "You go out and buy 'Programming for dummies' and spend a few days reading it. You should now able to program your 'Hello World'."
		,'info-es': "Sales a comprar 'Programación para torpes' y echas un par de días leyéndolo. Ahora deberías poder programar tu 'Hola Mundo'."
		,'options-text': {
		    0:"Program 'Hello World'",
		    1:"Program Pong",
		    2:"Program Quake",
		    3:"Do something else"
		}
		,'options-redirect': {
			0: 12,
			1: 14,
			2: 15,
			3: 16,
		}
		,'options-es': [
		    ["Programar 'Hola Mundo'",12],
		    ["Programar Pong",14],
		    ["Programar Quake",15],
		    ["Hacer otra cosa",16]
		]
		,'update': function() {
			nerdness++;
			coder++;
			time--;
		}
	},	
	10: {
		'info': "You join a few programming forums and ask for help. You are mostly ignored."
		,'info-es': "Te unes a un par de foros de programación y pides ayuda. Mayormente te ignoran."
		,'options-text': {
		    0:"Test Intelligence",
		    1:"Test Luck",
		    2:"Test Social Skills"
		}
		,'options-redirect': {
			0: function() { return (intelligence > rand(12))?24:27; },
			1: function() { return (luck > rand(12))?25:28; },
			2: function() { return (socialskills > rand(12))?26:29; }
		}
		,'options-es': [
		    ["Probar Inteligencia",function() { return (intelligence > rand(12))?24:27; }],
		    ["Probar Suerte",function() { return (luck > rand(12))?25:28; }],
		    ["Probar Habilidades Sociales",function() { return (socialskills > rand(12))?26:29; }]
		]
		,'update': function() {
			time--;
		}
	},
	11: {
		'info': "You try to get some help offline to learn programming but you don't seem to have that many contacts with programming knowledge."
		,'info-es': "Intentas obtener ayuda para aprender a programar pero no parece que tengas tantos contactos que sepan hacerlo."
		,'options-text': {
		    0:"Give up on coding",
		    1:"Buy programming books",
		    2:"Ask for help online"
		}
		,'options-redirect': {
			0: 8,
			1: 9,
			2: 10
		}
		,'options-es': [
		    ["Abandonar el coding",8],
		    ["Comprar libros de programación",9],
		    ["Pedir ayuda en red",10]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},
	12: {
		'info': "You program your first 'Hello World'. A huge sense of pride flows through your veins."
		,'info-es': "Programas tu primer 'Hola Mundo'. Una enorme sensación de orgullo fluye por tus venas."
		,'options': [
		    ["Make it move!",76]
		]
		,'options-es': [
		    ["¡Que se mueva!",76]
		]
		,'update': function() {
			dont_display_stats_once = true;
			drawHelloWorld(document.getElementById('top'),0);
		}
	},
	13: {
		'info': "You can't just dial a random BBS and start a nuclear war like in the movies. To become a real hacker first you need to learn how to program. Or atleast have some seriously over the top social skills for some social engineering."
		,'info-es': "No puedes simplemente llamar a una BBS al azar y comenzar una guerra nuclear como en las películas. Para convertirte en un hacker de verdad primero necesitas aprender a programar. O al menos tener algunas habilidades sociales bien potentes para la ingeniería social."
		,'options-text': {
		    0:"Nevermind",
		    1:"Learn to program",
		    2:"Learn social engineering"
		}
		,'options-redirect': {
			0: 16,
			1: function() { return (coder==0)?1:34; },
			2: function() { return (socialskills > rand(12))?35:36; }
		}
		,'options-es': [
		    ["Pasando",16],
		    ["Aprender a programar",function() { return (coder==0)?1:34; }],
		    ["Aprender ingeniería social",function() { return (socialskills > rand(12))?35:36; }]
		]
	},
	14: {
		'info': "Pong is a great way to learn yourself some graphics programming. You become familiar with the syntax, learn how to take advantage of different loops and figure out the basics of user interaction. What would you like to program next?"
		,'info-es': "Pong es una gran forma de aprender algo de programación de gráficos. Te familiarizas con la sintaxis, aprendes a tomar ventaja de los bucles y averiguas los conceptos básicos de la interacción con el usuario. ¿Qué quieres programar ahora?"
		,'options-text': {
		    0:"Quake clone",
		    1:"A simple demo",
		    2:"A server-client app"
		}
		,'options-redirect': {
			0: 37,
			1: 38,
			2: 39
		}
		,'options-es': [
		    ["Clon de Quake",37],
		    ["Una demo sencilla",38],
		    ["Una aplicación cliente-servidor",39]
		]
		,'update': function() {
			coder++;
			time--;
		}
	},
	15: {
		'info': "You can't just code a first person shooter out of the blue. You need to learn alot more things first, if you're really serious about programming that is."
		,'info-es': "No puedes intentar escribir un FPS y hala. Necesitas aprender primero un montón de cosas, si vas en serio con la programación, claro."
		,'options-text': {
		    0:"Nevermind",
		    1:"Program a simple demo",
		    2:"Program server-client app"
		}
		,'options-redirect': {
			0: 16,
			1: 38,
			2: 39
		}
		,'options-es': [
		    ["Pasando",16],
		    ["Una demo sencilla",38],
		    ["Una aplicación cliente-servidor",39]
		]
	},	
	16: {
		'info': "You conclude programming just isn't your thing. So what would you rather do?"
		,'info-es': "Decides que programar no es lo tuyo. ¿Qué prefieres hacer?"
		,'options-text': {
		    0:"Draw some graphics",
		    1:"Make some music",
		    2:"Play some games",
		    3:"Surf for porn"
		}
		,'options-redirect': {
			0: function() { return (graphician==0)?2:30; },
			1: function() { return (musician==0)?3:31; },
			2: function() { return (gamer==0)?4:32; },
			3: function() { return (troll==0)?5:33; }
		}
		,'options-es': [
		    ["Dibujar gráficos",function() { return (graphician==0)?2:30; }],
		    ["Hacer música",function() { return (musician==0)?3:31; }],
		    ["Jugar a algo",function() { return (gamer==0)?4:32; }],
		    ["Navegar por porno",function() { return (troll==0)?5:33; }]
		]
		,'update': function() {
			time--;
		}
	},
	17: {
		'info': "You go out and buy a couple of books on learning how to draw. They are very interesting but keep saying the best way to improve is to practice..."
		,'info-es': "Sales y compras varios libros para aprender a dibujar. Son muy interesantes pero no dejan de decir que la mejor manera de mejorar es practicando..."
		,'options-text': {
		    0:"Draw on paper",
		    1:"Draw on computer",
		    2:"Do something else"
		}
		,'options-redirect': {
			0: 47,
			1: 30,
			2: 49
		}
		,'options-es': [
		    ["Dibujar en papel",47],
		    ["Dibujar en ordenador",30],
		    ["Hacer otra cosa",49]
		]
		,'update': function() {
			graphician++;
			time--;
		}
	},
	18: {
		'info': "Tutorials are helpful but you still need to practice more."
		,'info-es': "Los tutoriales ayudan pero aún necesitas practicar más."
		,'options-text': {
		    0:"Draw on paper",
		    1:"Draw on computer",
		    2:"Do something else"
		}
		,'options-redirect': {
			0: 47,
			1: 30,
			2: 49
		}
		,'options-es': [
		    ["Dibujar en papel",47],
		    ["Dibujar en ordenador",30],
		    ["Hacer otra cosa",49]
		]
		,'update': function() {
			nerdness++;
			graphician++;
			time--;
		}
	},
	19: {
		'info': "You're lucky to have friends who help you learn how to draw. They tell you the secret is to keep practicing."
		,'info-es': "Tienes suerte de tener amigos que te ayudan a aprender a dibujar. Te dicen que el secreto es seguir practicando."
		,'options-text': {
		    0:"Draw on paper",
		    1:"Draw on computer",
		    2:"Do something else"
		}
		,'options-redirect': {
			0: 47,
			1: 30,
			2: 49
		}
		,'options-es': [
		    ["Dibujar en papel",47],
		    ["Dibujar en ordenador",30],
		    ["Hacer otra cosa",49]
		]
		,'update': function() {
			luck--;
			graphician++;
			time--;
		}
	},
	20: {
		'info': "You decide to put your rock star career on hold. So what would you rather do?"
		,'info-es': "Decides paralizar tu carrera como estrella del rock. ¿Qué prefieres hacer?"
		,'options-es':
		[
		 ["Programar algo", function(){ return (coder==0)?1:12; } ],
		 ["Dibujar algo", function(){ return (graphician==0)?2:30; } ],
		 ["Jugar a algo", function(){ return (gamer==0)?4:32; } ],
		 ["Navegar por porno", function(){ return (troll==0)?5:33; } ]
		]
		,'options':
		[
		 ["Do some programming", function(){ return (coder==0)?1:12; } ],
		 ["Draw some graphics", function(){ return (graphician==0)?2:30; } ],
		 ["Play some games", function(){ return (gamer==0)?4:32; } ],
		 ["Surf for porn", function(){ return (troll==0)?5:33; } ]
		]
		,'update': function() {
			time--;
		}
	},
	21: {
		'info': "Learning an instrument is a nice way to get into music. You'll still need to learn how to use the computer to make music though."
		,'info-es': "Aprender un instrumento es una buena manera de meterte en la música. Aún necesitas aprender cómo usar el ordenador para hacerla."
		,'options-es':
		[
		 ["Experimentar", 22],
		 ["Leer tutoriales en red", 23 ],
		 ["Hacer otra cosa", 20 ]
		]
		,'options':
		[
		 ["Experiment", 22],
		 ["Read tutorials online", 23 ],
		 ["Do something else", 20 ]
		]
		,'update': function() {
			musician++;
			time -= 2;
		}
	},
	22: {
		'info': "You experiment with different music applications and do a couple of tracks. Nothing worth showing your friends, but atleast you're having fun."
		,'info-es': "Experimentas con diferentes aplicaciones de música y haces un par de temas. Nada que valga la pena enseñar, pero al menos te diviertes."
		,'options-es':
		[
		 ["Experimentar más", 31],
		 ["Hacer otra cosa", 20 ]
		]
		,'options':
		[
		 ["Experiment more", 31],
		 ["Do something else", 20 ]
		]
		,'update': function() {
			nerdness++;
			musician++;
			time -= 2;
		}
	},
	23: {
		'info': "You read some tutorials online. Always helpful to know your tools."
		,'options':
		[
		 ["Experiment with music", 22],
		 ["Do something else", 20 ]
		]
		,'info-es': "Lees algunos tutoriales en la red. Siempre es bueno conocer tus herramientas."
		,'options-es':
		[
		 ["Experimentar con música", 22],
		 ["Hacer otra cosa", 20 ]
		]
		,'update': function() {
			musician++;
			time--;
		}
	},
	24: {
		'info': "With your intelligence alone you manage to figure out how to take most advantage of the internet to help you learn how to program."
		,'info-es': "Con tu inteligencia consigues averiguar cómo sacar ventaja de Internet para ayudarte a aprender a programar."
		,'options-text': {
		    0:"Program 'Hello World'",
		    1:"Program Pong",
		    2:"Program Quake",
		    3:"Do something else"
		}
		,'options-redirect': {
			0: 12,
			1: 14,
			2: 15,
			3: 16,
		}
		,'options-es': [
		    ["Programar 'Hola Mundo'",12],
		    ["Programar Pong",14],
		    ["Programar Quake",15],
		    ["Hacer otra cosa",16]
		]
		,'update': function() {
			intelligence--;
			coder++;
			time--;
		}
	},
	25: {
		'info': "You are lucky enough to find some people who take you in and explain you the basics of programming."
		,'info-es': "Tienes la suficiente suerte como para encontrar gente que te ayude a entender lo básico sobre programación"
		,'options-text': {
		    0:"Program 'Hello World'",
		    1:"Program Pong",
		    2:"Program Quake",
		    3:"Do something else"
		}
		,'options-redirect': {
			0: 12,
			1: 14,
			2: 15,
			3: 16,
		}
		,'options-es': [
		    ["Programar 'Hola Mundo'",12],
		    ["Programar Pong",14],
		    ["Programar Quake",15],
		    ["Hacer otra cosa",16]
		]
		,'update': function() {
			luck--;
			coder++;
			time--;
		}
	},
	26: {
		'info': "With your extreme social engineering skills you persuade some folks to help you out and explain you the basics of programming."
		,'info-es': "Con tus extremas habilidades de ingeniería social persuades a algunos colegas para que te ayuden y te expliquen lo básico sobre programación."
		,'options-text': {
		    0:"Program 'Hello World'",
		    1:"Program Pong",
		    2:"Program Quake",
		    3:"Do something else"
		}
		,'options-redirect': {
			0: 12,
			1: 14,
			2: 15,
			3: 16,
		}
		,'options-es': [
		    ["Programar 'Hola Mundo'",12],
		    ["Programar Pong",14],
		    ["Programar Quake",15],
		    ["Hacer otra cosa",16]
		]
		,'update': function() {
			socialskills--;
			coder++;
			time--;
		}
	},
	27: {
		'info': "You can't seem to figure out on your own how to use the internet to your advantage in learning how to program. Maybe programming just isn't your thing."
		,'info-es': "Parece que no consigues averiguar por ti mismo cómo usar Internet para aprender a programar. Quizá no sea tu punto fuerte."
		,'options-text': {
		    0:"Try again",
		    1:"Do something else"
		}
		,'options-redirect': {
			0: function() { return (intelligence > rand(12))?24:27; },
			1: 16
		}
		,'options-es': [
		    ["Probar otra vez",function() { return (intelligence > rand(12))?24:27; }],
		    ["Hacer otra cosa",16]
		]
		,'update': function() {
			intelligence--;
			time--;
		}
	},
	28: {
		'info': "Lady luck can't teach you how to code."
		,'info-es': "La diosa Fortuna no puede enseñarte a programar."
		,'options-text': {
		    0:"Try again",
		    1:"Do something else"
		}
		,'options-redirect': {
			0: function() { return (luck > rand(12))?25:28; },
			1: 16
		}
		,'options-es': [
		    ["Probar otra vez",function() { return (luck > rand(12))?25:28; }],
		    ["Hacer otra cosa",16]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},
	29: {
		'info': "Your social skills don't seem to be enough to learn you how to code on the internet."
		,'info-es': "Tus habilidades sociales no parecen suficientes para aprender a escribir código en Internet."
		,'options-text': {
		    0:"Try again",
		    1:"Do something else"
		}
		,'options-redirect': {
			0: function() { return (socialskills > rand(12))?26:29; },
			1: 16
		}
		,'options-es': [
		    ["Probar otra vez",function() { return (socialskills > rand(12))?26:29; }],
		    ["Hacer otra cosa",16]
		]
		,'update': function() {
			socialskills--;
			time--;
		}
	},
	30: {
		'info': "You practice drawing on the computer some more. You are slowly getting the hang of it."
		,'info-es': "Practicas dibujando en el ordenador un poco más. Poco a poco le coges el truco."
		,'options':
		[
		 ["Practice pixel art", 51 ],
		 ["Try 3D modelling", 52 ],
		 ["Take over the world", 42 ],
		]
		,'options-es':
		[
		 ["Practicar pixel art", 51 ],
		 ["Intentar modelado 3D", 52 ],
		 ["Conquistar el mundo", 42 ],
		]
		,'update': function() {
			graphician++;
			time--;
		}
	},
	31: {
		'info': "You try to compose a few more tracks of some different styles. You're starting to know your software of choice but you're still a long way to go."
		,'info-es': "Intentas componer un par de temas más de estilos diferentes. Empiezas a conocer tu programa pero todavía queda mucho camino."
		,'options':
		[
		 ["Participate on a remix competition", 53 ],
		 ["Take a little break", 44 ]
		]
		,'options-es':
		[
		 ["Participar en una competición de mezclas", 53 ],
		 ["Tomar un descanso", 44 ]
		]
		,'update': function() {
			musician++;
			time -= 2;
		}
	},
	32: {
		'info': "You decide to join a clan and improve your gaming skills. Which clan are you going to try to join?"
		,'info-es': "Decides unirte a un clan y mejorar tus habilidades de gamer. ¿A qué clan intentarás unirte?"
		,'options':
		[
		 ["Join the best clan", 65 ],
		 ["Join a middle ranged clan", 66 ],
		 ["Join the newb friendly clan", 67 ],
		 ["Create your own clan", 68 ],
		]
		,'options-es':
		[
		 ["Unirse al mejor clan", 65 ],
		 ["Unirse a un clan regular", 66 ],
		 ["Unirse a un clan de amigos novatos", 67 ],
		 ["Crear el tuyo propio", 68 ],
		]
	},
	33: {
		'info': "You find some forums where folks post all sorts of things. Some more legal then others. Is this really the path you want to go?"
		,'info-es': "Encuentras algunos foros donde unos tipos ponen cosas de todo tipo. Algunas más legales que otras. ¿Es este camino el que realmente quieres tomar?"
		,'options':
		[
		 ["Browse sex forums", 69 ],
		 ["Browse piracy forums", 72 ],
		 ["Troll users", 73 ],
		 ["Do something else", 71 ]			 
		]
		,'options-es':
		[
		 ["Mirar foros de sexo", 69 ],
		 ["Mirar foros de piratería", 72 ],
		 ["Trolear usuarios", 73 ],
		 ["Hacer otra cosa", 71 ]			 
		]
		,'update': function() {
			troll++;
			time--;
		}
	},
	34: {
		'info': "The only way to become a better programmer is to program. What would you like to code next?"
		,'info-es': "La única manera de volverse mejor programador es programando. ¿Qué quieres programar ahora?"
		,'options-text': {
		    0:"Program Pong",
		    1:"Program Quake"
		}
		,'options-redirect': {
			0: 14,
			1: 15
		}
		,'options-es':
		[
		 ["Programar Pong", 14],
		 ["Programar Quake", 15]
		]
		,'update': function() {
			hacker++;
		}
	},
	35: {
		'info': "You seem to have enough social skills to master the ancient art of social engineering. It'll be a long and harduos path but you're on the right trail. Sadly social engineering will only get you so far, you still need to learn how to code to become a real 1337 hacker."
		,'info-es': "Parece que tienes suficientes habilidades sociales para amaestrar el antiguo arte de la ingeniería social. Será un camino largo y arduo pero estás haciendo lo correcto. Por desgracia la ingeniería social aún no te llevará lejos, todavía necesitas aprender a programar para convertirte en un auténtico hacker 31i73."
		,'options-text': {
		    0:"Nevermind",
		    1:"Learn to program"
		}
		,'options-redirect': {
			0: 16,
			1: function() { return (coder==0)?1:34; }
		}
		,'options-es':
		[
		 ["Pasando", 16],
		 ["Aprender a programar", function() { return (coder==0)?1:34; }]
		]
		,'update': function() {
			socialskills--;
			hacker++;
		}
	},
	36: {
		'info': "You seem to lack social skills to social engineer your way into things. But even being an expert at social engineering you will still need to learn how to program if you want to become a real 1337 hacker."
		,'info-es': "Parece que te faltan habilidades sociales para usar la ingeniería social. Pero incluso llegando a ser un experto aún necesitarás aprender a programar si quieres ser un auténtico hacker 31i73."
		,'options-text': {
		    0:"Nevermind",
		    1:"Learn to program"
		}
		,'options-redirect': {
			0: 16,
			1: function() { return (coder==0)?1:34; }
		}
		,'options-es':
		[
		 ["Pasando", 16],
		 ["Aprender a programar", function() { return (coder==0)?1:34; }]
		]
		,'update': function() {
			socialskills--;
		}
	},
	37: {
		'info': "Trying to program Quake at this point might be quite hard to say the least. A real test to your luck and intelligence. Are you sure you want to have a go at it?"
		,'info-es': "Intentar programar Quake en este punto quizá sea algo difícil como poco. Una prueba real para tu suerte y tu inteligencia. ¿Seguro que quieres intentarlo?"
		,'options-text': {
		    0:"Program a Quake clone",
		    1:"Program a demo",
		    2:"Program a server-client app"
		}
		,'options-redirect': {
			0: function() { return ((intelligence > rand(12)) && (luck > rand(12))) ? 40 : 41; },
			1: 38,
			2: 39
		}
		,'options-es':
		[
		 ["Programar un clon de Quake", function() { return ((intelligence > rand(12)) && (luck > rand(12))) ? 40 : 41; }],
		 ["Programar una demo", 38],
		 ["Programar una aplicación cliente-servidor", 39]
		]
		,'update': function() {
			coder++;
			time--;
		}
	},
	38: {
		'info': function() { return ("You decide to program a demo. Only took you a month to get something acceptable done. You learned alot with the challenge. " + ((musician==0)?"Wouldn't hurt to know a little more about making music. ":"") + ((graphician==0)?"Wouldn't hurt to know a little more about making graphics.":"")); }
		,'info-es': function() { return ("Decides programar una demo. Solamente te lleva un mes para tener algo aceptable. Has aprendido mucho con ello. " + ((musician==0)?"Wouldn't hurt to know a little more about making music. ":"") + ((graphician==0)?"Wouldn't hurt to know a little more about making graphics.":"")); }
		,'options-text': {
		    0:"Post about it on the internet",
		    1:function(){ return (musician==0)?"Learn some music":"Surf the web";},
		    2:function(){ return (graphician==0)?"Learn some graphics":"Take a little break";},
		    3:"Program a server-client app",
		}
		,'options-redirect': {
		    0:45,
			1:function(){ return (musician==0)?3:43; },
		    2:function(){ return (graphician==0)?2:44; },
		    3:39
		}
		,'options-es':
		[
		 ["Colgarla en Internet",45],
		 [function(){ return (musician==0)?"Aprender música":"Navegar por la red";}, function(){ return (musician==0)?3:43; }],
		 [function(){ return (graphician==0)?"Aprender sobre gráficos":"Tomarse un descanso";}, function(){ return (graphician==0)?2:44; }],
		 ["Programar una aplicación cliente-servidor", 39]
		]
		,'update': function() {
			coder++;
			time -= 4;
		}
	},
	39: {
		'info': "You decide to program a server-client application. You learn alot about networks in the process. Only took you a couple of weeks."
		,'info-es': "Decides programar una aplicación cliente-servidor. Aprendes mucho sobre redes en el proceso. Apenas te lleva un par de semanas."
		,'options-text': {
		    0:"Study kernel security",
		    1:"Surf the web",
		    2:"Program a first person shooter",
			3:"Take a little break"
		}
		,'options-redirect': {
		    0:46,
			1:43,
		    2:40,
		    3:44
		}
		,'options-es':
		[
		 ["Estudiar seguridad del kernel",46],
		 ["Navegar por la red",43],
		 ["Programar un FPS",40],
		 ["Tomarse un descanso", 44]
		]
		,'update': function() {
			coder++;
			hacker++;
			time -= 2;
		}
	},
	40: {
		'info': "After a month of hard work you have a buggy prototype of something resembling a first person shooter. It's slow and buggy but it works..."
		,'info-es': "Tras un mes de duro trabajo tienes un prototipo lleno de bugs de algo que se parece a un mata-mata en primera persona. Es lento y peta, pero funciona..."
		,'options':
		[
		 ["Take over the world!",42]
		]
		,'options-es':
		[
		 ["¡Conquistar el mundo!",42]
		]
		,'update': function() {
			intelligence--;
			luck--;
			coder++;
			time -= 4;
		}
	},
	41: {
		'info': "After a couple of weeks you realize your endeavour might have been a little too ambitious. You learned alot from your mistakes but perhaps you should take it one step at a time?"
		,'info-es': "Tras un par de semanas te das cuenta de que tu empresa quizá haya sido demasiado ambiciosa. Has aprendido mucho de tus errores pero puede que debas ir paso a paso."
		,'options-text': {
		    0:"Program a small demo",
		    1:"Program a server-client app",
		    2:"Give up programming"
		}
		,'options-redirect': {
			0:38,
			1:39,
			2:16
		}
		,'options-es':
		[
		 ["Programar una pequeña demo",38],
		 ["Programar una aplicación cliente-servidor",39],
		 ["Abandonar la programación",16]
		]
		,'update': function() {
			intelligence--;
			luck--;
			coder++;
			time -= 2;
		}
	},
	42: {
		'info': "Enough studying and learning, it's time to take over the world."
		,'info-es': "Ya vale de estudiar y aprender, es hora de conquistar el mundo."
		,'options':
		[
		 ["Yeah!", 74]
		]
		,'options-es':
		[
		 ["¡Vamos!", 74]
		]
		,'update': function() {
			nerdness++;
			//chapter = 2;
		}
	},
	43: {
		'info': "You surf around the internet, registering into a few forums and getting to know people. Getting ready to start working on a bigger project."
		,'info-es': "Navegas por la red, te registras en un par de foros y conoces gente. Te preparas para comenzar a trabajar en un proyecto mayor."
		,'options':
		[
		 ["Proceed", 74]
		]
		,'options-es':
		[
		 ["Seguir", 74]
		]
		,'update': function() {
			time--;
			//chapter = 2;
		}
	},
	44: {
		'info': "You decide to take a little break from all this hardcore computer stuff. You get a roll the dice to recover one of your skills, choose it wisely."
		,'options':
		[
			["Roll Intelligence",54],
			["Roll Luck",55],
			["Roll Nerdness",56],
			["Roll Social Skills",57]
		]
		,'info-es': "Decides tomarte un descanso de toda esta matraca de ordenadores. TIra un dado para recuperar una de tus habilidades, pero elige con cuidado."
		,'options-es':
		[
			["Tirar Inteligencia",54],
			["Tirar Suerte",55],
			["Tirar Empollón",56],
			["Tirar Habilidades Sociales",57]
		]
		,'update': function() {
			time -= 2;
		}
	},
	45: {
		'info': "You decide to post about your first demo on the internet. Response is mostly negative. What are you going to do?"
		,'options':
		[
		 ["Argue on the internet.", 58 ],
		 ["Take a little break", 44 ],
		 ["Program a server-client app", 39 ]
		]
		,'info-es': "Decides colgar tu primera demo en Internet. Las críticas son más bien negativas. ¿Qué harás?"
		,'options-es':
		[
		 ["Discutir en Internet", 58 ],
		 ["Tomar un descanso", 44 ],
		 ["Programar una aplicación cliente-servidor", 39 ]
		]
		,'update': function() {
			troll++;
			intelligence--;
			time--;
		}
	},
	46: {
		'info': "You spend a few weeks locked away in your room reading about kernel security. You find it interesting to know how your computer works. It makes you a better coder and hacker."
		,'options':
		[
		 ["Take over the world!", 42 ],
		 ["Take a little break", 44 ],
		 ["Surf the web", 43 ]
		]
		,'info-es': "Empleas un par de semanas en tu habitación leyendo sobre seguridad del kernel. Encuentras interesante saber cómo funciona tu ordenador. Te hace un mejor programador y hacker."
		,'options-es':
		[
		 ["¡Conquistar el mundo!", 42 ],
		 ["Tomar un descanso", 44 ],
		 ["Navegar por la web", 43 ]
		]
		,'update': function() {
			coder++;
			hacker++;
			socialskills--;
			time-=2;
		}
	},
	47: {
		'info': "You practice your drawing every day and start to show signs of improvement. A school friend of yours notices some of your drawings and introduces you to some of his friends who are into graffiti."
		,'options':
		[
		 ["Learn about graffiti", 48 ],
		 ["Draw on computer", 30 ],
		 ["Take over the world!", 42 ],
		 ["Take a little break", 44 ],
		 ["Surf the web", 43 ]
		]
		,'info-es': "Practicas dibujo todos los días y empiezas a mostrar signos de mejora. Un amigo de la escuela ve algunos de tus dibujos y te presenta a algunos de sus amigos que están metidos en el graffiti."
		,'options-es':
		[
		 ["Aprender graffiti", 48 ],
		 ["Dibujar en ordenador", 30 ],
		 ["¡Conquistar el mundo!", 42 ],
		 ["Tomar un descanso", 44 ],
		 ["Navegar por la red", 43 ]
		]
		,'update': function() {
			graphician++;
			time--;
		}
	},
	48: {
		'info': "You hang around with the graffiti kids a couple of times and learn a lot about their art. Not very nerdy of you, but it was something that improved your social skills. One day, one of the graffiti kids offers you a joint."
		,'options':
		[
		 ["Try drugs", 59 ],
		 ["Draw on computer", 30 ],
		 ["Take a little break", 44 ]
		]
		,'info-es': "Sales con los chicos del graffiti de vez en cuando y aprendes sobre su arte. No te hace muy friki, pero es algo que ha mejorado tus habilidades sociales. Un día, uno de los chicos te ofrece un porro."
		,'options-es':
		[
		 ["Probar las drogas", 59 ],
		 ["Dibujar en ordenador", 30 ],
		 ["Tomar un descanso", 44 ]
		]
		,'update': function() {
			graphician++;
			socialskills++;
			nerdness--;
			time -= 2;
		}
	},
	49: {
		'info': "You decide to try something other than drawing graphics."
		,'info-es': "Decides intentar otra cosa aparte de dibujar."
		,'options-text': {
		    0:"Do some programming",
		    1:"Make some music",
		    2:"Play some games",
		    3:"Surf for porn"
		}
		,'options-redirect': {
			0: function() { return (coder==0)?1:12; },
			1: function() { return (musician==0)?3:31; },
			2: function() { return (gamer==0)?4:32; },
			3: function() { return (troll==0)?5:33; }
		}
		,'options-es':
		[
		 ["Programar algo", function() { return (coder==0)?1:12; }],
		 ["Hacer música", function() { return (musician==0)?3:31; }],
		 ["Jugar a algo", function() { return (gamer==0)?4:32; }],
		 ["Navegar por la red", function() { return (troll==0)?5:33; }]
		]
		,'update': function() {
			time--;
		}
	},
	50: {
		'info': "You decide to try and ask some friends to help you learn how to draw. But luck is against you, you have no friends who can draw."
		,'info-es': "Decides intentar pedir ayuda a amigos para que te enseñen a dibujar. Pero la suerte está contra ti, no tienes amigos que sepan dibujar."
		,'options-text': {
		    0:"Draw on paper",
		    1:"Draw on computer",
		    2:"Buy art books",
		    3:"Do something else"
		}
		,'options-redirect': {
			0: 47,
			1: 30,
			2: 17,
			3: 49
		}
		,'options-es':
		[
		 ["Dibujar en papel",47],
		 ["Dibujar en ordenador",30],
		 ["Comprar libros de arte",17],
		 ["Hacer otra cosa",49]
		]
		,'update': function() {
			luck--;
			time--;
		}
	},
	51: {
		'info': "You decide to have a go at pixel art. It's a whole different game from what you been doing so far but it has a charm of it's own."
		,'options':
		[
		 ["Take over the world", 42],
		 ["Take a little break", 44],
		 ["Surf the web", 43]
		]
		,'info-es': "Decides probar el pixel art. Es muy diferente a lo que has estado haciendo hasta ahora pero tiene su encanto."
		,'options-es':
		[
		 ["Conquistar el mundo", 42],
		 ["Tomar un descanso", 44],
		 ["Navegar por la web", 43]
		]
		,'update': function() {
			graphician++;
			nerdness++;
			time -= 2;
		}
	},
	52: {
		'info': "3d modeling is a whole different world. It feels like you're starting from zero all over again. More tutorials to read, more things to experiment... You could get lost in this for years."
		,'options':
		[
		 ["Take over the world", 42],
		 ["Take a little break", 44 ],
		 ["Surf the web", 43 ]
		]
		,'info-es': "El modelado 3D es un mundo diferente. Te sientes como si empezaras de cero otra vez. Más tutoriales que leer, más cosas que probar... Podrías estar perdido en esto durante años."
		,'options-es':
		[
		 ["Conquistar el mundo", 42],
		 ["Tomar un descanso", 44 ],
		 ["Navegar por la web", 43 ]
		]
		,'update': function() {
			graphician++;
			intelligence++;
			time -= 3;
		}
	},	
	53: {
		'info': "You try to do a remix for a competition. Didn't turn out quite as good as you would hope, but you're starting to get some good feedback on your tracks, that has to be a good sign."
		,'options':
		[
		 ["Take over the world", 42],
		 ["Surf the web", 43 ]
		]
		,'info-es': "Intentas hacer una remezcla para una competición. No sale tan bien como esperabas, pero empiezas a obtener críticas positivas de tus temas, eso debe ser un buen signo."
		,'options-es':
		[
		 ["Conquistar el mundo", 42],
		 ["Navegar por la web", 43 ]
		]
		,'update': function() {
			musician++;
			time--;
		}
	},	
	54: {
		'info': function(){ return "You roll the dice to improve your intelligence... Your intelligence is now " + rollIntelligence() + ". Now you're ready." }
		,'options': [
			["Take over the world!",42]
		]
		,'info-es': function(){ return "Tiras un dado para mejorar tu inteligencia... Tu inteligencia es ahora " + rollIntelligence() + ". Ya estás listo." }
		,'options-es': [
			["¡Conquistar el mundo!",42]
		]
	},
	55: {
		'info': function(){ return "You roll the dice to improve your luck... Your luck is now " + rollLuck() + ". Now you're ready." }
		,'options': [
			["Take over the world!",42]
		]
		,'info-es': function(){ return "Tiras un dado para mejorar tu suerte... Tu suerte es ahora " + rollLuck() + ". Ya estás listo." }
		,'options-es': [
			["¡Conquistar el mundo!",42]
		]
	},
	56: {
		'info': function(){ return "You roll the dice to improve your nerdness... Your nerdness is now " + rollNerdness() + ". Now you're ready." }
		,'options': [
			["Take over the world!",42]
		]
		,'info-es': function(){ return "Tiras un dado para mejorar tu nivel de empollón... Tu nivel es ahora " + rollLuck() + ". Ya estás listo." }
		,'options-es': [
			["¡Conquistar el mundo!",42]
		]
	},
	57: {
		'info': function(){ return "You roll the dice to improve your social skills... Your social skills are now " + rollSocialSkills() + ". Now you're ready." }
		,'options': [
			["Take over the world!",42]
		]
		,'info-es': function(){ return "Tiras un dado para mejorar tus habilidades sociales... Tus habilidades son ahora " + rollLuck() + ". Ya estás listo." }
		,'options-es': [
			["¡Conquistar el mundo!",42]
		]
	},
	58: {
		'info': "When in doubt you should always argue on the internet. It's incredible the ammount of people who are wrong on the internet every day. Someone has to set their records straight. You might aswell have some fun while at it."
		,'options': [
		 ["Surf the web", 43 ]
		]
		,'info-es': "Cuando dudes siempre discute en Internet. Es increíble la cantidad de gente que se equivoca en Internet cada día. Alguien tiene que cantarles las cuarenta. Quizá también te diviertas mientras tanto."
		,'options-es': [
		 ["Navegar por la red", 43 ]
		]
		,'update': function() {
			troll++;
			time--;
		}
	},
	59: {
		'info': "Drugs are bad mmkay? Your parents caught you smoking a spliff and decided to take away your privileges and ground you for life.<br>Your plans for world domination plan will have to wait until you're of legal age to move out."
		,'info-es': "Las drogas son malas, ¿vale? Tus padres te pillaron fumando un canuto y decidieron retirarte tus privilegios y castigarte de por vida.<br>Tus planes para dominar el mundo tendrán que esperar hasta que tengas la edad para independizarte."
	},
	60: {
		'info': "You play some casual games. You don't find them very challenging."
		,'options':
		[
		 ["Play RTS games", 61 ],
		 ["Play FPS games", 62 ],
		 ["Do something else", 63 ]
		]
		,'info-es': "Juegas a algunos juegos casual. No los encuentras muy atractivos."
		,'options-es':
		[
		 ["Jugar juegos RTS", 61 ],
		 ["Jugar juegos FPS", 62 ],
		 ["Hacer otra cosa", 63 ]
		]
		,'update': function() {
			gamer++;
			time--;
		}
	},
	61: {
		'info': "You try some realtime strategy games. You do great against the computer but keep getting beaten by other players."
		,'options':
		[
		 ["Join a clan", 32 ],
		 ["Do something else", 63 ]
		]
		,'info-es': "Pruebas algunos juegos de estrategia en tiempo real. Lo haces bien contra el ordenador pero otros jugadores te siguen ganando."
		,'options-es':
		[
		 ["Unirte a un clan", 32 ],
		 ["Hacer otra cosa", 63 ]
		]
		,'update': function() {
			intelligence++;
			nerdness++;
			gamer++;
			time--;
		}
	},	
	62: {
		'info': "You try some first person shooters. Single player is a piece of cake but on public servers you keep getting fragged."
		,'options':
		[
		 ["Join a clan", 32 ],
		 ["Do something else", 63 ]
		]
		,'info-es': "Pruebas juegos de disparos en primera persona. En un jugador está chupado pero en servidores públicos no dejan de abrirte el cacas."
		,'options-es':
		[
		 ["Unirte a un clan", 32 ],
		 ["Hacer otra cosa", 63 ]
		]
		,'update': function() {
			intelligence++;
			nerdness++;
			gamer++;
			time--;
		}
	},	
	63: {
		'info': "You decide to try something else, other than playing games all day."
		,'options':
		[
		 ["Do some programming", function(){ return (coder==0)?1:12; } ],
		 ["Draw some graphics", function(){ return (graphician==0)?2:30; } ],
		 ["Make some music", function(){ return (musician==0)?3:31; } ],
		 ["Surf for porn", function(){ return (troll==0)?5:33; } ]
		]
		,'info-es': "Decides probar otra cosa en vez de jugar todo el día."
		,'options-es':
		[
		 ["Programar algo", function(){ return (coder==0)?1:12; } ],
		 ["Dibujar algo", function(){ return (graphician==0)?2:30; } ],
		 ["Hacer música", function(){ return (musician==0)?3:31; } ],
		 ["Navegar por porno", function(){ return (troll==0)?5:33; } ]
		]
		,'update': function() {
			time--;
		}
	},
	64: {
		'info': "You find all kinds of dirty sites with naked people doing things you never thought were possible. It's both sick, disturbing and addictive."
		,'options':
		[
		 ["Find dirty forums", 33 ],
		 ["Do something else", 71 ]
		]
		,'info-es': "Encuentras todo tipo de sitios guarros con gente desnuda haciendo cosas que nunca pensaste que fueran posible. Es a la vez enfermizo, molesto y adictivo."
		,'options-es':
		[
		 ["Encontrar foros sucios", 33 ],
		 ["Hacer otra cosa", 71 ]
		]
		,'update': function() {
			intelligence--;
			nerdness++;
			troll++;
			time--;
		}
	},		
	65: {
		'info': "You try to join the best clan out there. Your application is denied."
		,'options':
		[
		 ["Join a middle ranged clan", 66 ],
		 ["Join the newb friendly clan", 67 ],
		 ["Create your own clan", 68 ],
		 ["Do something else", 63 ]		 
		]
		,'info-es': "Intentas unirte al mejor clan que hay. Tu petición es denegada."
		,'options-es':
		[
		 ["Unirte a un clan regular", 66 ],
		 ["Unirte a un clan de amigos novatos", 67 ],
		 ["Crear tu propio clan", 68 ],
		 ["Hacer otra cosa", 63 ]		 
		]
		,'update': function() {
			intelligence--;
			gamer--;
			time--;
		}
	},		
	66: {
		'info': "You try to join a middle ranged clan and are accepted. You learn alot just by socializing with the other clan members on the first week alone."
		,'options':
		[
		 ["Take over the world!", 42 ]
		]
		,'info-es': "Intentas unirte a un grupo normalito y te aceptan. Aprendes mucho apenas socializando con los otros miembros en la primera semana."
		,'options-es':
		[
		 ["¡Conquistar el mundo!", 42 ]
		]
		,'update': function() {
			gamer+=2;
			socialskills++;
			time--;
		}
	},			
	67: {
		'info': "You join the newbie friendly clan. You don't learn much from them."
		,'options':
		[
		 ["Surf the web", 43 ]
		]
		,'info-es': "Te unes a un clan de amigos novatos. No aprendes mucho de ellos."
		,'options-es':
		[
		 ["Navegar por la web", 43 ]
		]
		,'update': function() {
			gamer++;
			socialskills++;
			time--;
		}
	},
	68: {
		'info': "You create your own clan. A wonderful idea which soon turned into a time consuming nightmare."
		,'options':
		[
		 ["Take a little break", 44 ],
		]
		,'info-es': "Creas tu propio clan. Una idea maravillosa que pronto se convierte en una pesadilla que te consume el tiempo."
		,'options-es':
		[
		 ["Tomar un descanso", 44 ],
		]
		,'update': function() {
			gamer++;
			socialskills++;
			time -= 3;
		}
	},
	69: {
		'info': "You join the dark side of the internet. You have a promising career ahead of you categorizing worksafe content on the web."
		,'info-es': "Te unes al lado oscuro de Internet. Tienes una prometedora carrera frente a ti categorizando contenido seguro para el trabajo en la web."
	},

// 70: free
	
	71: {
		'info': "You decide to do something other than browsing forums on the internet. What will you do?"
		,'options':
		[
		 ["Do some programming", function(){ return (coder==0)?1:12; } ],
		 ["Draw some graphics", function(){ return (graphician==0)?2:30; } ],
		 ["Make some music", function(){ return (musician==0)?3:31; } ],
		 ["Play some games", function(){ return (gamer==0)?4:32; } ]
		]
		,'info-es': "Decides hacer alguna otra cosa que navegar por foros en la red. ¿Qué harás?"
		,'options-es':
		[
		 ["Programar algo", function(){ return (coder==0)?1:12; } ],
		 ["Dibujar algo", function(){ return (graphician==0)?2:30; } ],
		 ["Hacer música", function(){ return (musician==0)?3:31; } ],
		 ["Jugar a algo", function(){ return (gamer==0)?4:32; } ]
		]
		,'update': function() {
			time--;
		}
	},
	72: {
		'info': "You walked right into a honey pot by the MPAA and will now spend the rest of your teenage life talking with lawyers and disapointing your parents.<br><br>It's because of hard criminals like you that the Motion Picture and Recording industries all over the world, but particularly in the United States, are struggling to pay their artists. Have you took a moment to think these people have lives and mortgages to pay? How will the respected artists be allowed to pour their creative talent into overpriced sales and overbooked concert halls when they are starving? How will they feed their children? Why won't anyone think about the children?.<br><br>You sir are a criminal and belong in jail, along with the other child molesters and bank robbers of the world. You wouldn't steal a car. So why did you download that episode 5 of the second season of Friends? You will have plenty of time to think about your actions when you serve your hard time in jail."
		,'info-es': "Te has metido en una trampas de la MPAA y ahora estarás el resto de tu vida de adolescente hablando con abogados y decepcionando a tus padres.<br><br>Esto ocurre por los duros criminales como tú contra las industrias del cine y de la música de todo el mundo que quieren pagar a sus artistas, especialmente en Estados Unidos. ¿Te has parado un momento a pensar que esta gente tiene vidas e hipotecas que pagar? ¿Cómo sacarán su talento creativo los artistas respetados con esos precios tan inflados y esos auditorios tan abarrotados cuando se estén muriendo de hambre? ¿Cómo darán de comer a sus niños? ¿Por qué nadie piensa en los niños?<br><br>Usted es un criminal y debe ir a la cárcel, junto a otros abusadores de niños y ladrones de bancos del mundo. No robarías un coche. Así que ¿por qué descargaste ese episodio 5 de la segunda temporada de Friends? Tendrás mucho tiempo para pensar sobre tus acciones cuando estés metido en chirona."
		,'update': function() {
			document.getElementById('top').innerHTML = '<img src="images/mpaa.jpg">';
			dont_display_stats_once = true;
		}
	},
	73: {
		'info': "You spend your days trolling people on the internet. Fun fun fun."
		,'options':
		[
		 ["Surf the web", 43 ]	 
		]
		,'info-es': "Echas los días troleando a gente en Internet. Guay guay guay."
		,'options-es':
		[
		 ["Navegar por la web", 43 ]	 
		]
		,'update': function() {
			troll++;
			time -= 2;
		}
	},
	74: {
		'info': "<span id=\"decoded_message\"></span>"
		,'options-text': {
			0:",",
			1:"",
			2:"",
			3:"",
		}
		,'options-redirect': {
			0:0,
			1:0,
			2:0,
			3:0
		}
		,'update': function() {
			chapter = 2;	
			
			var textout = '';
			
			var vl = "00:00:00:00:00:00".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
			
			passcode2 = vl.toString().toUpperCase();

			for (i = 0; i < 16; i++) textout += passcode2+" ";
			
			document.body.style.backgroundColor="#000";
			document.getElementById('container').style.backgroundColor="#000";
			document.body.style.color="#0d0";
			document.getElementById('top').innerHTML = '';
			dont_display_stats_once = true;
			decode_message(textout, "");
			playAudio(2);
		}
	},
	75: {
		'info': "Awesomeness. What do you want to do next?"
		,'info-es': "Mola. ¿Qué quieres hacer ahora?"
		,'options-text': {
		    0:"Program a simple demo",
		    1:"Program a Quake clone",
		    2:"Do something else"
		}
		,'options-redirect': {
			0: 38,
			1: 15,
			2: 16,
		}
		,'options-es': [
		    ["Programar una demo sencilla",38],
		    ["Programar un clon de Quake",15],
		    ["Hacer otra cosa",16]
		]
		,'update': function() {
			intelligence++;
			nerdness++
			coder++;
			time--;
			dont_display_stats_once = true;
			drawHelloWorld(document.getElementById('top'),3);
		}
	},
	76: {
		'info': ""
		,'info-es': ""
		,'options': [
		    ["With colors!",77]
		]
		,'options-es': [
		    ["¡Con colores!",77]
		]
		,'update': function() {
			dont_display_stats_once = true;
			drawHelloWorld(document.getElementById('top'),1);
		}
	},
	77: {
		'info': ""
		,'info-es': ""
		,'options': [
		    ["And circles!",75]
		]
		,'options-es': [
		    ["¡Y círculos!",75]
		]
		,'update': function() {
			coder++;
			dont_display_stats_once = true;
			drawHelloWorld(document.getElementById('top'),2);
		}
	},
	78: {
		'info': "Your mother walks in on you while you're watching a porn movie.<br><br>After an embarrassing family discussion you lose your computer privileges."
		,'info-es': "Tu madre entra mientras ves una peli guarrilla.<br><br>Tras una sonrojante discusión familiar pierdes tus privilegios sobre el ordenador."
	},
};