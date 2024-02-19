class CelestialBody {
    constructor(id, name, orbitalParameters) {
        this.id = id;
        this.name = name;
        this.orbitalParameters = orbitalParameters;
        this.element = this.createCelestialElement();
    }

    createCelestialElement() {
        const celestialElement = document.createElement('div');
        celestialElement.id = this.id;
        celestialElement.classList.add('celestial-body');

        document.getElementById('cosmos').appendChild(celestialElement);

        celestialElement.style.boxShadow = this.addShadowWithColor(this.id);

        const bodyName = document.createElement('p');
        bodyName.classList.add('body-name');
        bodyName.textContent = this.name;
        celestialElement.appendChild(bodyName);

        return celestialElement;
    }

    addShadowWithColor(id) {
        // Get the element by its ID
        const element = document.getElementById(id);

        // Check if the element exists
        if (!element) {
            console.error(`Element with ID ${id} not found.`);
            return;
        }

        // Get the computed style of the element
        const computedStyle = window.getComputedStyle(element);

        // Extract the color property from the computed style
        const color = computedStyle.backgroundColor;

        return `0px 0px 15px 5px ${color}`;
    }

    updatePosition(time) {
        if (this.name === 'MOON') {
            // Calculate Moon's position relative to Earth
            const earthPosition = calculateNewPosition(
                time,
                earthOrbitalParameters
            );
            const moonRelativePosition = calculateNewPosition(
                time,
                moonOrbitalParameters
            );

            // Update the Moons position in the dom
            const newPosition = {
                x: earthPosition.x + moonRelativePosition.x,
                y: earthPosition.y + moonRelativePosition.y,
            };
            this.element.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
        } else {
            // Implement orbital position calculation based on time using Kepler's laws or simplified equations
            // Update the celestial body's position in the DOM
            const newPosition = calculateNewPosition(
                time,
                this.orbitalParameters
            );
            this.element.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
        }
    }
}

// Sample orbital parameters (distance, orbital period, etc.) - Replace with actual values
const earthOrbitalParameters = {
    distance: 420,
    orbitalPeriod: 36500,
};

const moonOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 0.157, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod / 2.3, // Approximate period ratio
};

const mercuryOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 0.387, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod / 4.15, // Approximate period ratio
};

const venusOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 0.723, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod / 1.6, // Approximate period ratio
};

const marsOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 1.52, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 1.88, // Approximate period ratio
};

const jupiterOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 5.2, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 11.86, // Approximate period ratio
};

const saturnOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 9.58, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 29.5, // Approximate period ratio
};

const uranusOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 10.22, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 84, // Approximate period ratio
};

const neptuneOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 13.05, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 164.8, // Approximate period ratio
};

const plutoOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 19.48, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 248.09, // Approximate period ratio
};

// Instantiate celestial bodies
const sun = new CelestialBody('sun', 'SUN', {});
const mercury = new CelestialBody(
    'mercury',
    'MERCURY',
    mercuryOrbitalParameters
);
const venus = new CelestialBody('venus', 'VENUS', venusOrbitalParameters);
const earth = new CelestialBody('earth', 'EARTH', earthOrbitalParameters);
const moon = new CelestialBody('moon', 'MOON', moonOrbitalParameters);
const mars = new CelestialBody('mars', 'MARS', marsOrbitalParameters);
const jupiter = new CelestialBody(
    'jupiter',
    'JUPITER',
    jupiterOrbitalParameters
);
const saturn = new CelestialBody('saturn', 'SATURN', saturnOrbitalParameters);
const uranus = new CelestialBody('uranus', 'URANUS', uranusOrbitalParameters);
const neptune = new CelestialBody(
    'neptune',
    'NEPTUNE',
    neptuneOrbitalParameters
);
// const pluto = new CelestialBody(
//     'pluto',
//     'PLUTO',
//     '#9e9e9e',
//     2,
//     plutoOrbitalParameters
// );

// Function to calculate new position based on orbital parameters and time
function calculateNewPosition(time, orbitalParameters) {
    const { distance, orbitalPeriod } = orbitalParameters;

    // Convert time to radians based on the orbital period
    const theta = (2 * Math.PI * time) / orbitalPeriod;

    // Calculate x and y coordinates based on polar coordinates
    const x = distance * Math.cos(theta);
    const y = distance * Math.sin(theta);

    return { x, y };
}

// Sample function to update celestial bodies' positions over time
function updateCelestialBodiesPosition() {
    const currentTime = new Date().getTime(); // Replace with actual time
    sun.updatePosition(currentTime);
    mercury.updatePosition(currentTime);
    venus.updatePosition(currentTime);
    earth.updatePosition(currentTime);
    moon.updatePosition(currentTime);
    mars.updatePosition(currentTime);
    jupiter.updatePosition(currentTime);
    saturn.updatePosition(currentTime);
    uranus.updatePosition(currentTime);
    neptune.updatePosition(currentTime);
    // pluto.updatePosition(currentTime);
}

// Update celestial bodies' positions periodically (e.g., every 10 milliseconds)
setInterval(updateCelestialBodiesPosition, 10);
