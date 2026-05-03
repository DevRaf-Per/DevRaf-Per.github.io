var spinner = document.getElementById("spinner");
let angle = 0;
let lastTime = 0;
const interval = 100; // Rotate every 100ms

function spin(currentTime) {
    requestAnimationFrame(spin);

    const deltaTime = currentTime - lastTime;

    if (deltaTime >= interval) {
        lastTime = currentTime - (deltaTime % interval);

        angle = angle + 80;
        if (angle > 360) {
            angle = angle - 360;
        }

        spinner.setAttribute("transform", "rotate(" + angle + ", 81, 69)");
    }
}

function start() {
    document.getElementById('looper').play();
    document.getElementById('start_container').style.display = 'none';
    spin();
}

var audioElem = document.querySelector('audio');
if (audioElem) {
    var promise = audioElem.play();

    if (promise !== undefined) {
        promise.then(_ => {
            spin();
        }).catch(error => {
            document.getElementById('start_container').style.display = 'block';
        });
    }
}

document.getElementById('start_btn').addEventListener('click', start);