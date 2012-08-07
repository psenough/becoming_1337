
var animid;

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


function clearElement(element) {
	cancelAnimationFrame(animid);
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
} 

function stopCanvas(element) {
	//if (anim) anim = false; 
	clearElement(element);
	element.innerHTML = '';
}


function drawHelloWorld(element, state) {
	clearElement(element);
	var canvas = document.createElement('canvas');
	element.appendChild(canvas);
	canvas.style.border = '0px';
	canvas.style.backgroundColor = '#fff';
	canvas.setAttribute('width', 500);
	canvas.setAttribute('height', 200);
	var ctx = canvas.getContext("2d");
	ctx.width = w = 500;
	ctx.height = h = 200;
	ctx.font="25pt Exo";

	var num = 10;
	var angle = (Math.PI*2)/num;
	var size = 20;
	var opening, phase1, phase2;

	function draw(){		
		var d = new Date();
		var timer = d.getTime();

		switch (state) {
			case 0:
			default:
				ctx.clearRect(0, 0, w, h);
				ctx.fillStyle = "rgba(10,10,10,1.0)";
				ctx.fillText("Hello World!", 20, 50);
			break;
			case 1:
				ctx.clearRect(0, 0, w, h);
				ctx.fillStyle = "rgba(10,10,10,1.0)";
				ctx.fillText("Hello World!", 80+Math.sin(timer/200)*60, 100+Math.sin(timer/500)*20);
			break;
			case 2:
				ctx.fillStyle = "rgba(20,50,70,1.0)";
				ctx.fillRect(0,0,w,h);
				
				ctx.fillStyle = "rgba(200,"+Math.floor(Math.sin(timer/200)*80+120)+",200,1.0)";
				ctx.fillText("Hello World!", 80+Math.sin(timer/200)*60, 100+Math.sin(timer/500)*20);
			break;
			case 3:
				ctx.fillStyle = "rgba(20,50,70,1.0)";
				ctx.fillRect(0,0,w,h);
										
				phase1 = timer/800;
				phase2 = timer/600;
				
				for (var i=0; i<num; i++) {
					opening = 120+Math.sin(i*angle)*50;
					
					ctx.fillStyle = "rgba("+Math.floor(opening)+","+Math.floor(Math.sin(timer/200+opening)*80+120)+",200,1.0)";
					
					//size = 40+Math.sin(timer/1000)*10+Math.sin(timer*(j-numy*.5)/1000)*10;
					ctx.save();
					ctx.translate( w*.5+Math.sin(i*angle+phase1)*opening, h*.5+Math.cos(i*angle+phase2)*opening*.5 );
					//ctx.rotate(i*angle+Math.sin(phase2+Math.sin(i*angle)));
					ctx.beginPath();
					ctx.arc(0,0,size,0,Math.PI*2,true);
					ctx.closePath();
					ctx.fill();
	
					ctx.restore();
				}			
				
				ctx.fillStyle = "rgba(200,"+Math.floor(Math.sin(timer/200)*80+120)+",200,1.0)";
				ctx.fillText("Hello World!", 80+Math.sin(timer/200)*60, 100+Math.sin(timer/500)*20);
			break;
		}
	} 

	(loop = function() {
		animid = requestAnimationFrame(loop);
		draw();
	})()
}


function rand(n) {
	return Math.floor(Math.random()*n);
}


function decode_message(message, func) {

	var decodechars = '!"#$%&/()=?*§\'|~`ºª-_.::@€£‰®∑æ™¶[]≠abcdefghijklmnopqrstuvwxyz0123456789çãáàéèABCDEFGHIJKLMOPQRSTUVWXYZ';
	
	var letters = message.split('');
	var encoded_letters = [];
	
	for(i=0; i< letters.length; i++) {
		encoded_letters[i] = decodechars[rand(decodechars.length)];
	}

	(loop2 = function() {
		var decoded = true;
		var textout = '';
		for(i=0; i< letters.length; i++) {
			if (letters[i] != encoded_letters[i]) {
				decoded = false;
				if (Math.random()>0.84+(i/letters.length)*0.15 ) {
					encoded_letters[i] = letters[i];
				} else {
					encoded_letters[i] = decodechars[rand(decodechars.length)];
				}
			}
			textout += encoded_letters[i]; 
		}
		var dom = document.getElementById('decoded_message');
		if (dom) dom.innerHTML = textout;
		if (!decoded) {
			setTimeout(loop2,30);
		} else {
		 	(1,eval)(func);
		}
	})()
}

function jumpafterdecode() {
	if (jumpchapter == true) submit(0);
}