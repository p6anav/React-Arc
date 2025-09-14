/**
 * @fileoverview API client utilities
 */

/**
 * HTTP client for API requests
 */
export const api = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  
  /**
   * Makes a GET request
   * @param {string} endpoint - API endpoint
   * @param {Object} [options={}] - Request options
   * @returns {Promise<*>} Response data
   */
  async get(endpoint, options = {}) {
    return this.request('GET', endpoint, null, options);
  },
  
  /**
   * Makes a POST request
   * @param {string} endpoint - API endpoint
   * @param {*} data - Request data
   * @param {Object} [options={}] - Request options
   * @returns {Promise<*>} Response data
   */
  async post(endpoint, data, options = {}) {
    return this.request('POST', endpoint, data, options);
  },
  
  /**
   * Makes a PUT request
   * @param {string} endpoint - API endpoint
   * @param {*} data - Request data
   * @param {Object} [options={}] - Request options
   * @returns {Promise<*>} Response data
   */
  async put(endpoint, data, options = {}) {
    return this.request('PUT', endpoint, data, options);
  },
  
  /**
   * Makes a DELETE request
   * @param {string} endpoint - API endpoint
   * @param {Object} [options={}] - Request options
   * @returns {Promise<*>} Response data
   */
  async delete(endpoint, options = {}) {
    return this.request('DELETE', endpoint, null, options);
  },
  
  /**
   * Makes a generic request
   * @param {string} method - HTTP method
   * @param {string} endpoint - API endpoint
   * @param {*} data - Request data
   * @param {Object} options - Request options
   * @returns {Promise<*>} Response data
   */
  async request(method, endpoint, data, options) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };
    
    if (data) {
      config.body = JSON.stringify(data);
    }
    
    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
};