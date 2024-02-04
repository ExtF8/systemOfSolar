/**
 * Initialization Module
 *
 * Explanation:
 * - This module handles the initialization of celestial bodies for the Solar System simulation.
 * - Each celestial body is defined with its name, mass, radius,initial position, and velocity.
 * - The initializeCelestialBodies function returns an array containing the initial state of all celestial bodies.
 */

export function initializeCelestialBodies() {
    return [
        {
            name: 'Sun',
            mass: 1.989 * Math.pow(10, 30),
            radius: 696340 * 1000,
            position: { x: 0, y: 0 },
            velocity: { x: 0, y: 0 },
        },
        {
            name: 'Mercury',
            mass: 3.285 * Math.pow(10, 23),
            radius: 57.9 * 1000 * 1.5, // Adjusted for better visualization
            position: { x: 0, y: 0 }, // Starting position at the same point as the Sun
            velocity: { x: 0, y: 47000 }, // Example initial velocity for an elliptical orbit
        },
        // {
        //     name: 'Venus',
        //     mass: 4.8675 * Math.pow(10, 24),
        //     radius: 6051.8 * 1000,
        //     position: { x: -108200000 * 1000, y: 0 },
        //     velocity: { x: 0, y: -35020 },
        // },
        // {
        //     name: 'Earth',
        //     mass: 5.972 * Math.pow(10, 24),
        //     radius: 6371 * 1000,
        //     position: { x: -149600000 * 1000, y: 0 },
        //     velocity: { x: 0, y: -29780 },
        // },
        // {
        //     name: 'Moon',
        //     mass: 7.342 * Math.pow(10, 22),
        //     radius: 1737.5 * 1000,
        //     position: { x: -149600000 * 1000 + 384400 * 1000, y: 0 },
        //     velocity: { x: 0, y: -29780 + 1023 },
        // },
        // {
        //     name: 'Mars',
        //     mass: 6.417 * Math.pow(10, 23),
        //     radius: 3389.5 * 1000,
        //     position: { x: -227900000 * 1000, y: 0 },
        //     velocity: { x: 0, y: -24130 },
        // },
        // {
        //     name: 'Jupiter',
        //     mass: 1.898 * Math.pow(10, 27),
        //     radius: 71492 * 1000,
        //     position: { x: -778300000 * 1000, y: 0 },
        //     velocity: { x: 0, y: -13160 },
        // },
        // {
        //     name: 'Saturn',
        //     mass: 5.683 * Math.pow(10, 26),
        //     radius: 60268 * 1000,
        //     position: { x: -1427000000 * 1000, y: 0 },
        //     velocity: { x: 0, y: -9640 },
        // },
        // {
        //     name: 'Uranus',
        //     mass: 8.681 * Math.pow(10, 25),
        //     radius: 25559 * 1000,
        //     position: { x: -2871000000 * 1000, y: 0 },
        //     velocity: { x: 0, y: -6810 },
        // },
        // {
        //     name: 'Neptune',
        //     mass: 1.024 * Math.pow(10, 26),
        //     radius: 24764 * 1000,
        //     position: { x: -4503000000 * 1000, y: 0 },
        //     velocity: { x: 0, y: -5430 },
        // },
        // {
        //     name: 'Pluto',
        //     mass: 1.309 * Math.pow(10, 22),
        //     radius: 1186 * 1000,
        //     position: { x: -5913520000 * 1000, y: 0 },
        //     velocity: { x: 0, y: -4740 },
        // },
    ];
}
