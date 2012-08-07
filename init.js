	
	//global variables
	var paragraph, chapter, gameover;
	var chapters = [];
	var language = '';
	
	//chapter 0 variables	
	var name, intelligence, luck, nerdness, socialskills;
	var time, minskills, maxskills, rolls, rollgap;
	var jumpchapter, privacy;

	//chapter 1 variables
	var coder, musician, graphician, gamer, hacker, troll;

	//hacked sim variables	
	var dont_display_stats_once,pass,pass2,passcode1,passcode2,finalcounter;

	
	function init() {

		//global variables
		chapter = 0;
		paragraph = 0;
		gameover = false;
		
		name = '';
		time = 0;
		minskills = 2;
		maxskills = 12;
		rolls = 5;
		rollgap = 6;
		jumpchapter = false;
		privacy = false;
		
		intelligence = minskills;
		luck = minskills;
		nerdness = minskills;
		socialskills = minskills;
		
		coder = 0;
		musician = 0;
		graphician = 0;
		gamer = 0;
		hacker = 0;
		troll = 0;
		
		dont_display_stats_once = false;
		pass = '';
		pass2 = '';
		passcode1 = 'undefined';
		passcode2 = 'undefined';
		finalcounter = 24;
		
		var outputtext = '';
		outputtext += '<div id=\"options\">';
		outputtext += '<select name="select1" id="select1"><option value="en" selected>English</option><option value="es">Spanish</option></select><br><br>';
		outputtext += '<select name="select2" id="select2"><option value="covers" selected>Covers Soundtrack</option><option value="euskal">Euskal Soundtrack</option></select><br><br>';
		outputtext += '<input type="button" value="Start!" onclick="launch()"></div>';
		document.getElementById('board').innerHTML = outputtext;

	}

	function launch() {
	
		var dropdown = document.getElementById('select1');
		if (dropdown) {
			var index  = dropdown.selectedIndex;
    		var value = dropdown.options[index].value;
    		language = value;
		} else {
			language = 'en';
		}
		
		var dropdown2 = document.getElementById('select2');
		if (dropdown2) {
			var index  = dropdown2.selectedIndex;
    		var value = dropdown2.options[index].value;
    		if (value == 'covers') loadAudioCovers();
    		 else loadAudioEuskal();
		} else {
			loadAudioCovers();
		}
		
		submit(paragraph);
	}

	function test() {
		init();
		chapter = 0;
		paragraph = 0;
		intelligence = 10;
		luck = 10;
		nerdness = 10;
		socialskills = 10;
		time = 6;
		rolls = 0;
	}
	
	rand = function(n){
		return 0|(Math.random()*n);
	};

	function trim(s) {
		s = s.replace(/(^\s*)|(\s*$)/gi,"");
		s = s.replace(/[ ]{2,}/gi," ");
		s = s.replace(/\n /,"\n");
		return s;
	}

	function displayStats() {
		var textout = '<table>';
		
		if (intelligence > maxskills) intelligence = maxskills;
		if (luck > maxskills) luck = maxskills;
		if (nerdness > maxskills) nerdness = maxskills;
		if (socialskills > maxskills) socialskills = maxskills;

		var i;
		textout += '<tr><td align="right">'+t[language]['intl']+': </td><td width="4%">&nbsp;</td><td width="100%">';
		for(i=0; i<intelligence; i++) textout+='<span class="range'+i+'">☆</span>';
		for(; i<maxskills; i++) textout+='<span>☆</span>';	
		textout+='</td></tr>';
		
		textout += '<tr><td align="right">'+t[language]['luck']+': </td><td width="4%">&nbsp;</td><td width="100%">';
		for(i=0; i<luck; i++) textout+='<span class="range'+i+'">☆</span>';
		for(; i<maxskills; i++) textout+='<span>☆</span>';	
		textout+='</td></tr>';
		
		textout += '<tr><td align="right">'+t[language]['nerd']+': </td><td width="4%">&nbsp;</td><td width="100%">';
		for(i=0; i<nerdness; i++) textout+='<span class="range'+i+'">☆</span>';
		for(; i<maxskills; i++) textout+='<span>☆</span>';	
		textout+='</td></tr>';
		
		textout += '<tr><td align="right" nowrap>'+t[language]['soci']+': </td><td width="4%">&nbsp;</td><td width="100%">';
		for(i=0; i<socialskills; i++) textout+='<span class="range'+i+'">☆</span>';
		for(; i<maxskills; i++) textout+='<span>☆</span>';	
		textout+='</td></tr>';
		
		if (time!=0) textout += '<tr><td align="right" nowrap>&nbsp;</td><td width="4%">&nbsp;</td><td width="100%">&nbsp;</td></tr>';
		
		if (time!=0) textout += '<tr><td align="right" nowrap>'+t[language]['weeks']+': </td><td width="4%">&nbsp;</td><td width="100%">' + time + '</td></tr>';
		
		textout += '</table>';
		document.getElementById('top').innerHTML = textout;
	}

	function rollIntelligence() {
		intelligence += rand(rollgap)+1;
		if (intelligence > maxskills) intelligence = maxskills;
		rolls--;
		return intelligence;
	}
	
	function rollLuck() {
		luck += rand(rollgap)+1;
		if (luck > maxskills) luck = maxskills;		
		rolls--;
		return luck;
	}
	
	function rollNerdness() {
		nerdness += rand(rollgap)+1;
		if (nerdness > maxskills) nerdness = maxskills;	
		rolls--;
		return nerdness;
	}
	
	function rollSocialSkills() {
		socialskills += rand(rollgap)+1;
		if (socialskills > maxskills) socialskills = maxskills;		
		rolls--;
		return socialskills;
	}