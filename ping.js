		function onComicgeneratorConfigure() {	
			comicgenerator._settings.placeholders.server="stripthis-0.1/";
			comicgenerator._settings.translator.enabled = false;
		}	



var pingtext = [];

pingtext['en'] = [];
pingtext['en'][0] = "can you read me now? joey, i need your mac address!!";
pingtext['en'][1] = "don\'t worry, i\'m on my way! but i need you to type you to type me the password that i flashed you with the cake";
pingtext['en'][2] = "there you are! well done! let\'s get the hell out of dodge!";
pingtext['en'][3] = "what the hell are you doing joey? i cant break through without your help! reset the sim and feed me the data!";

pingtext['es'] = [];
pingtext['es'][0] = "me lees ahora? joey, necesito tu dirección mac!!";
pingtext['es'][1] = "no te preocupes, voy de camino! pero necesito que me escribas la contraseña que parpadeaba con el pastel";
pingtext['es'][2] = "ahí estás! bien hecho! vayámonos de aquí!";
pingtext['es'][3] = "qué demonios estás haciendo joey? no puedo avanzar sin tu ayuda! resetea el sim y envíame los datos!";




		function ping_1(element) {
			element.innerHTML = ' \
			<textarea class="comicbrowser-render">\n \
			" "\n \
			new with image aligned top single images/stripthis_backgrounds/fthr_everse_851_180.png panel\n \
			somebody says whispering "'+pingtext[language][0]+'"\n \
			</textarea>';
			comicbrowser._onload();
		}	


		function ping_2(element) {
			element.innerHTML = ' \
			<textarea class="comicbrowser-render">\n \
			" "\n \
			new with image aligned top single images/stripthis_backgrounds/fthr_everse_851_180.png panel\n \
			somebody says whispering "'+pingtext[language][1]+'"\n \
			</textarea>';
			comicbrowser._onload();
		}	

		function ping_3(element) {
			element.innerHTML = ' \
			<textarea class="comicbrowser-render">\n \
			" "\n \
			new with image aligned top single images/stripthis_backgrounds/fthr_everse_851_180.png panel\n \
			somebody says whispering "'+pingtext[language][2]+'"\n \
			</textarea>';
			comicbrowser._onload();
		}	

		function ping_4(element) {
			element.innerHTML = ' \
			<textarea class="comicbrowser-render">\n \
			" "\n \
			new with image aligned top single images/stripthis_backgrounds/fthr_everse_851_180.png panel\n \
			somebody says whispering "'+pingtext[language][3]+'"\n \
			</textarea>';
			comicbrowser._onload();
		}	

		