(function () {
    const canvas = document.getElementById('outerspace');
    const mainContext = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawOuterSpace();
    }

    resizeCanvas();

    function drawOuterSpace() {
        // do your drawing stuff here
        let canvasWidth = outerspace.width;
        let canvasHeight = outerspace.height;

        let centerX = canvasWidth * 0.5;
        let centerY = canvasHeight * 0.5;

        let numberOfStars = 1000;

        let stars = [];

        let frames_per_second = 60;

        let interval = Math.floor(1000 / frames_per_second);
        let startTime = performance.now();
        let previousTime = startTime;

        let currentTime = 0;
        let deltaTime = 0;

        class Star {
            constructor() {
                this.x = getRandomInt(-centerX, centerX);
                this.y = getRandomInt(-centerY, centerY);
                this.counter = getRandomInt(1, canvasWidth);

                this.radiusMax = 1 + Math.random() * 2;
                this.speed = getRandomInt(1, 1);

                this.context = mainContext;
            }

            drawStar() {
                this.counter -= this.speed;

                if (this.counter < 1) {
                    this.counter = canvasWidth;
                    this.x = getRandomInt(-centerX, centerX);
                    this.y = getRandomInt(-centerY, centerY);

                    this.radiusMax = getRandomInt(1, 3);
                    this.speed = getRandomInt(1, 1);
                }

                let xRatio = this.x / this.counter;
                let yRatio = this.y / this.counter;

                let starX = remap(xRatio, 0, 1, 0, canvasWidth);
                let starY = remap(yRatio, 0, 1, 0, canvasHeight);

                this.radius = remap(
                    this.counter,
                    0,
                    canvasWidth,
                    this.radiusMax,
                    0
                );

                mainContext.beginPath();

                mainContext.arc(
                    starX,
                    starY,
                    this.radius,
                    0,
                    Math.PI * 2,
                    false
                );
                mainContext.closePath();

                mainContext.fillStyle = '#FFF';
                mainContext.fill();
            }
        }

        function setup() {
            for (let i = 0; i < numberOfStars; i++) {
                let star = new Star();
                stars.push(star);
            }
        }
        setup();

        function draw(timestamp) {
            currentTime = timestamp;
            deltaTime = currentTime - previousTime;

            if (deltaTime > interval) {
                previousTime = currentTime - (deltaTime % interval);

                mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
                // mainContext.fillStyle = "#111";
                mainContext.fillStyle = 'transparent';

                mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

                mainContext.translate(centerX, centerY);

                for (let i = 0; i < stars.length; i++) {
                    let star = stars[i];
                    star.drawStar();
                }

                mainContext.translate(-centerX, -centerY);
            }

            requestAnimationFrame(draw);
        }
        draw();

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function remap(value, istart, istop, ostart, ostop) {
            // Ensure values are numerical to avoid potential errors
            value = Number(value);
            istart = Number(istart);
            istop = Number(istop);
            ostart = Number(ostart);
            ostop = Number(ostop);

            // Perform the mapping calculation
            return (
                ostart +
                (ostop - ostart) * ((value - istart) / (istop - istart))
            );
        }
    }
})();

// let outerspace = document.querySelector('#outerspace');
// let mainContext = outerspace.getContext('2d');
