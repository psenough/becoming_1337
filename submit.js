	
	function isFunction(functionToCheck) {
	 var getType = {};
	 return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}

	function submit(par) {
	
		var p = chapters[chapter];
		
		if (intelligence < 0) {
			//you'll always be average and never accomplish anything
			par = 23;
			p = chapters[0];
		}
		if (luck < 0) {
			//you're just too unlucky
			par = 30;
			p = chapters[0];
		}
		if (nerdness < 0) {
			//you're just too lame
			par = 24;
			p = chapters[0];
		}
		if (socialskills < 0) {
			//you might have asperger syndrome
			chapter = 0;
			par = 25;
			p = chapters[0];
		}
		if (time < 0) {
			//you might have underestimated the time it would take you
			chapter = 0;
			par = 32;
			p = chapters[0];
		}
		
		if (p[par]['pre']) {
			p[par]['pre']();
		}
	
		var textout = '';
		var subinfo = 'info';
		var suboptions = 'options';
		
		if (language != 'en') {
			if (p[par]['info-'+language]) subinfo = 'info-'+language;
			if (p[par]['options-'+language]) suboptions = 'options-'+language;
		}
		
		if (isFunction(p[par][subinfo])) textout = p[par][subinfo]();
				else textout = p[par][subinfo];
				
		console.log(par);
		
		if (p[par][suboptions]) {
		
			textout += "<div id=\"options\">";
			for (var i=0; i<p[par][suboptions].length; i++) {
			
				var optext = '';
				if (isFunction(p[par][suboptions][i][0])) optext = p[par][suboptions][i][0]();
					else optext = p[par][suboptions][i][0];
					
				var vlaue = 0;
				if (isFunction(p[par][suboptions][i][1])) vlaue = p[par][suboptions][i][1]();
				 else vlaue = p[par][suboptions][i][1];
				
				textout += '<input type="button" value="'+optext+'" onclick="submit('+vlaue+')">';
			}
			textout += "</div>";
			
		} else {

			// legacy paragraph code compliancy

			if (p[par]['options-text'] && p[par]['options-redirect']) {
				var dim = Object.keys(p[par]['options-text']).length;
				var dim2 = Object.keys(p[par]['options-redirect']).length;
				if (dim != dim2) {
					console.log("options-text != options-redirect");
					return;
				} else {
					textout += "<div id=\"options\">";
					for (var i=0; i<dim; i++) {
						
						var optext = '';
						if (isFunction(p[par]['options-text'][i])) optext = p[par]['options-text'][i]();
							else optext = p[par]['options-text'][i];
							
						var vlaue = 0;
						if (isFunction(p[par]['options-redirect'][i])) vlaue = p[par]['options-redirect'][i]();
						 else vlaue = p[par]['options-redirect'][i];
						
						textout += '<input type="button" value="'+optext+'" onclick="submit('+vlaue+')">';
					}
					textout += "</div>";
				}
			}
		}
		document.getElementById('board').innerHTML = textout;
		
		if (p[par]['update']) {
			p[par]['update']();	
		}
		
		if (dont_display_stats_once == false) {
			displayStats();
		} else {
			dont_display_stats_once = false;
		}
	}
