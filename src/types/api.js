/**
 * @fileoverview API and service type definitions
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Request success status
 * @property {*} data - Response data
 * @property {string} [message] - Response message
 * @property {Object} [errors] - Validation errors
 */

/**
 * @typedef {Object} LoginRequest
 * @property {string} email - User email
 * @property {string} password - User password
 */

/**
 * @typedef {Object} SignupRequest
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {string} name - User full name
 */

/**
 * @typedef {Object} AuthResponse
 * @property {string} token - Authentication token
 * @property {User} user - User data
 * @property {number} expiresIn - Token expiration time
 */

/**
 * @typedef {Object} HttpClient
 * @property {Function} get - GET request method
 * @property {Function} post - POST request method
 * @property {Function} put - PUT request method
 * @property {Function} delete - DELETE request method
 */

export {};