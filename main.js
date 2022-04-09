song1 = ""
song2 = ""
leftWX = 0
leftWY = 0
rightWX = 0
rightWY = 0
scoreLW = 0
scoreRW = 0
s1Status = ""
s2Status = ""

function preload() {
    song1 = loadSound("ikPlaces.mp3")
    song2 = loadSound("nightChanges.mp3")
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center()
    v1 = createCapture(VIDEO)
    v1.hide()
    poseN = ml5.poseNet(v1, modelLoaded)
    poseN.on('pose', getPose)
}

function getPose(results) {
    if (results.length > 0) {
        console.log(results)
        scoreLW = results[0].pose.keypoints[9].score
        scoreRW = results[0].pose.keypoints[10].score
        leftWX = results[0].pose.leftWrist.x
        leftWY = results[0].pose.leftWrist.y
        rightWX = results[0].pose.rightWrist.x
        rightWY = results[0].pose.rightWrist.y
    }
}

function modelLoaded() {
    console.log("model loaded")
}

function draw() {
    image(v1, 0, 0, 600, 400)
    fill("red")
    stroke("red")
    s1Status = song1.isPlaying()
    s2Status = song2.isPlaying()
    if (scoreLW > 0.2) {
        song1.stop()
        circle(leftWX, leftWY, 20)
        if (s2Status == false) {
            song2.play()
            document.getElementById("SN").innerHTML = "Playing Night Changes"
        }
    }
    if (scoreRW > 0.2) {
        song2.stop()
        circle(rightWX, rightWY, 20)
        if (s1Status == false) {
            song1.play()
            document.getElementById("SN").innerHTML = "Playing I know Places"
        }
    }
    if (scoreRW > 0.2){
    if (rightWX > 250 && rightWX < 350) {
        song.stop()
    }}
}

function Play() {
    song.play()
}

function Stop() {
song.stop()
}