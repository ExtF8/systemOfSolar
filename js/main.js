import { initializeCelestialBodies } from './initialization.js';
import {
    calculateGravitationalForce,
    updatePosition,
    updateVelocity,
} from './utils.js';

/**
 * Main JavaScript file for the Solar System simulation logic.
 *
 * Explanation:
 * - Imports required modules for animation and initialization.
 * - Initializes celestial bodies using the initialization module.
 * - Sets up an animation loop using requestAnimationFrame.
 * - Calls updateAnimation to continuously update celestial body positions.
 */

// Initialize celestial bodies
const celestialBodies = initializeCelestialBodies();

function updateAnimation() {
    const sun = celestialBodies[0];
    const mercury = celestialBodies[1];

    // Update Mercury's position in a circular orbit
    const angle = (Date.now() * 0.0001) % (2 * Math.PI);
    const orbitRadius = mercury.radius;
    mercury.position.x = sun.position.x + orbitRadius * Math.cos(angle);
    mercury.position.y = sun.position.y + orbitRadius * Math.sin(angle);

    // Log the state of celestial bodies
    console.log('Celestial Bodies:', celestialBodies);
    console.log('Sun Position:', sun.position);
    console.log('Mercury Position:', mercury.position);

    // Call animation loop
    requestAnimationFrame(updateAnimation);
}
updateAnimation();
