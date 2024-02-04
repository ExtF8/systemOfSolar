import { G, deltaTime } from './constants.js';
// import { celestialBodies } from './main.js';

/**
 * Utility Functions Module
 *
 * Explanation:
 * - This module contains utility functions that may be used across different parts of the Solar System Simulation.
 * - The calculateDistance function computes the distance between two points in a two-dimensional space.
 * - The calculateGravitationalForce function calculates the gradational force between two celestial bodies.
 * - The updatePosition function updates the position of a celestial body on its velocity.
 */

export function calculateDistance(body1, body2) {
    // Calculate the Euclidean distance between two points
    const dx = body2.position.x - body1.position.x;
    const dy = body2.position.y - body1.position.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export function calculateGravitationalForce(body1, body2) {
    // Calculate the gravitational force between two bodies
    const distance = calculateDistance(body1, body2);
    const forceMagnitude =
        (G * body1.mass * body2.mass) / Math.pow(distance, 2);

    // Calculate force components along the axes
    const forceX =
        (forceMagnitude * (body2.position.x - body1.position.x)) / distance;
    const forceY =
        (forceMagnitude * (body2.position.y - body1.position.y)) / distance;

    return { x: forceX, y: forceY };
}

export function updatePosition(body) {
    // Scale down positions to avoid numerical instability
    const scaleDownFactor = 1e-19;
    const scaledX = body.position.x * scaleDownFactor;
    const scaledY = body.position.y * scaleDownFactor;

    // Update the body's position with scaled values
    body.position.x = scaledX;
    body.position.y = scaledY;
}

export function updateVelocity(body, force) {
    // Calculate acceleration based on the gravitational force
    const accelerationX = force.x / body.mass;
    const accelerationY = force.y / body.mass;

    // Update velocity using the calculated acceleration
    body.velocity.x += accelerationX * deltaTime;
    body.velocity.y += accelerationY * deltaTime;
}
