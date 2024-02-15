class CelestialBody {
    constructor(id, name, color, diameter, orbitalParameters) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.diameter = diameter;
        this.orbitalParameters = orbitalParameters;
        this.element = this.createCelestialElement();
    }

    createCelestialElement() {
        const celestialElement = document.createElement('div');
        celestialElement.id = this.id;
        celestialElement.classList.add('celestial-body');
        celestialElement.style.backgroundColor = this.color;
        celestialElement.style.width = `${this.diameter}px`;
        celestialElement.style.height = `${this.diameter}px`;

        document.getElementById('cosmos').appendChild(celestialElement);

        const bodyName = document.createElement('p');
        bodyName.classList.add('body-name');
        bodyName.textContent = this.name;
        celestialElement.appendChild(bodyName);

        return celestialElement;
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
    eccentricity: 0.0167,
};

const moonOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 0.157, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod / 2.3, // Approximate period ratio
    eccentricity: 0.055, // Eccentricity of Moon's orbit
    inclination: 5.14, // Inclination in degrees
    ascendingNode: 125, // Ascending node in degrees
    perihelionLongitude: 318, // Perihelion longitude in degrees
    // Add other parameters as needed
};

const mercuryOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 0.387, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod / 4.15, // Approximate period ratio
    eccentricity: 0.205, // Eccentricity of Mercury's orbit
    inclination: 7, // Inclination in degrees
    ascendingNode: 48, // Ascending node in degrees
    perihelionLongitude: 77, // Perihelion longitude in degrees
    // Add other parameters as needed
};

const venusOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 0.723, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod / 1.6, // Approximate period ratio
    eccentricity: 0.007, // Eccentricity of Venus's orbit
    inclination: 3.39, // Inclination in degrees
    ascendingNode: 76, // Ascending node in degrees
    perihelionLongitude: 131, // Perihelion longitude in degrees
    // Add other parameters as needed
};

const marsOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 1.52, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 1.88, // Approximate period ratio
    eccentricity: 0.093, // Eccentricity of Mars's orbit
    inclination: 1.85, // Inclination in degrees
    ascendingNode: 49, // Ascending node in degrees
    perihelionLongitude: 336, // Perihelion longitude in degrees
    // Add other parameters as needed
};

const jupiterOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 5.2, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 11.86, // Approximate period ratio
    eccentricity: 0.049, // Eccentricity of Jupiter's orbit
    inclination: 1.3, // Inclination in degrees
    ascendingNode: 100, // Ascending node in degrees
    perihelionLongitude: 14, // Perihelion longitude in degrees
    // Add other parameters as needed
};

const saturnOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 9.58, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 29.5, // Approximate period ratio
    eccentricity: 0.056, // Eccentricity of Saturn's orbit
    inclination: 2.49, // Inclination in degrees
    ascendingNode: 113, // Ascending node in degrees
    perihelionLongitude: 93, // Perihelion longitude in degrees
    // Add other parameters as needed
};

const uranusOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 19.22, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 84, // Approximate period ratio
    eccentricity: 0.046, // Eccentricity of Uranus's orbit
    inclination: 0.77, // Inclination in degrees
    ascendingNode: 74, // Ascending node in degrees
    perihelionLongitude: 170, // Perihelion longitude in degrees
    // Add other parameters as needed
};

const neptuneOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 30.05, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 164.8, // Approximate period ratio
    eccentricity: 0.01, // Eccentricity of Neptune's orbit
    inclination: 1.77, // Inclination in degrees
    ascendingNode: 131, // Ascending node in degrees
    perihelionLongitude: 44, // Perihelion longitude in degrees
    // Add other parameters as needed
};

const plutoOrbitalParameters = {
    distance: earthOrbitalParameters.distance * 39.48, // Approximate distance ratio
    orbitalPeriod: earthOrbitalParameters.orbitalPeriod * 248.09, // Approximate period ratio
    eccentricity: 0.248, // Eccentricity of Pluto's orbit
    inclination: 17.16, // Inclination in degrees
    ascendingNode: 110, // Ascending node in degrees
    perihelionLongitude: 224, // Perihelion longitude in degrees
    // Add other parameters as needed
};

// Instantiate celestial bodies
const sun = new CelestialBody('sun', 'SUN', '#ffeb3b', 200, {});
const mercury = new CelestialBody(
    'mercury',
    'MERCURY',
    '#9e9e9e',
    20,
    mercuryOrbitalParameters
);
const venus = new CelestialBody(
    'venus',
    'VENUS',
    '#ff9800',
    20,
    venusOrbitalParameters
);
const earth = new CelestialBody(
    'earth',
    'EARTH',
    '#2196f3',
    20,
    earthOrbitalParameters
);
const moon = new CelestialBody(
    'moon',
    'MOON',
    '#bdbdbd',
    2,
    moonOrbitalParameters
);
const mars = new CelestialBody(
    'mars',
    'MARS',
    '#e57373',
    14,
    marsOrbitalParameters
);
const jupiter = new CelestialBody(
    'jupiter',
    'JUPITER',
    '#b89e84',
    70,
    jupiterOrbitalParameters
);
const saturn = new CelestialBody(
    'saturn',
    'SATURN',
    '#c7a200',
    58.4,
    saturnOrbitalParameters
);
const uranus = new CelestialBody(
    'uranus',
    'URANUS',
    '#00bcd4',
    25.6,
    uranusOrbitalParameters
);
const neptune = new CelestialBody(
    'neptune',
    'NEPTUNE',
    '#1976d2',
    20,
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

// Update celestial bodies' positions periodically (e.g., every 100 milliseconds)
setInterval(updateCelestialBodiesPosition, 10);
