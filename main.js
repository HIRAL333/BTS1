// Create canvas variable

var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 150;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
// to upload images
	fabric.Image.fromURL(get_image, function(img){
	block_image_object = img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({

	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '78') // add appropriate keycode
	{
		// upload namjoon
		new_image('kim namjoon.png');
		console.log("n is pressed-Kim Namjoon uploading")
	}
	if(keyPressed == '83')
	{
		block_x = 150;
		// upload Seokjin
		new_image('kim seokjin.png')
		console.log("s is pressed-Kim-Seokjin uploading")
	}
	
	if(keyPressed == '89')
	{
		block_x =300;
		// upload yoongi
		new_image('min yoongi.png')
		console.log("y is pressed-min yoongi uploading")
	}

	if(keyPressed == '72')
	{
		block_x =420;
		// upload hoseok
		new_image('jung hoseok.png')
		console.log("h is pressed-jung hoseok uploading")
	}

	if(keyPressed == '74')
	{
		block_x =580;
		// upload jimin
		new_image('park jimin.png')
		console.log("j is pressed-park jimin uploading")
	}

	if(keyPressed == '84')
	{
		block_x =720;
		// upload taehyung
		new_image('kim taehyung.png')
		console.log("t is pressed-kim taehyung uploading")
	}

	if(keyPressed == '75')
	{
		block_x =890;
		// upload jungkook
		new_image('jung jungkook.png')
		console.log("k is pressed-kookie uploading")
	}
}	