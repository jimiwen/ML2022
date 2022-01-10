let mobilenet;
let video
let label=[];
let prob=[];

function modelReady(){
	console.log('Model is ready!!!');
mobilenet.predict(video,gotResults);
}

function gotResults(error,results){
	if (error){
		console.error(error)
	} else {
//		console.log(results)
	 	 label  =  results[0].label;
		 prob =results[0].confidence;

	 // createP(label)
	 // createP(prob)

	 mobilenet.predict(video,gotResults);

	}
}

// function imageReady(){
// 	image(puffin,0,0,width,height);
// }

function setup() {
	createCanvas(640, 550);
	frameRate(5)
	 // puffin =createImg('images/puffin.jpeg',imageReady)
	 // puffin.hide();
	 video = createCapture(VIDEO);
	 video.hide();
	mobilenet = ml5.imageClassifier('MobileNet', video,modelReady)
}
//
function draw() {
	// put drawing code here
background(0)
background(0);

image(video,0,0)
fill(255);
textSize(32);
text(label,10,height-10);

}
