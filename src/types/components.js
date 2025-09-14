/**
 * @fileoverview Component prop type definitions
 */

/**
 * @typedef {Object} BaseComponentProps
 * @property {string} [className] - Additional CSS classes
 * @property {React.CSSProperties} [style] - Inline styles
 * @property {string} [id] - Element ID
 * @property {'div'|'section'|'article'|'aside'|'header'|'footer'|'main'|'nav'} [as] - HTML element type
 */

/**
 * @typedef {Object} FormFieldProps
 * @property {string} name - Field name
 * @property {string} label - Field label
 * @property {*} value - Field value
 * @property {Function} onChange - Change handler
 * @property {string} [placeholder] - Field placeholder
 * @property {boolean} [required=false] - Required field
 * @property {boolean} [disabled=false] - Disabled state
 * @property {string} [error] - Error message
 * @property {string} [helperText] - Helper text
 */

/**
 * @typedef {Object} NavigationItem
 * @property {string} id - Navigation item ID
 * @property {string} label - Display label
 * @property {string} icon - Icon identifier
 * @property {string} [href] - Navigation URL
 * @property {Function} [onClick] - Click handler
 * @property {boolean} [active=false] - Active state
 * @property {NavigationItem[]} [children] - Sub-navigation items
 */

/**
 * @typedef {Object} ThemeConfig
 * @property {Object} colors - Color palette
 * @property {Object} spacing - Spacing scale
 * @property {Object} typography - Typography settings
 * @property {Object} shadows - Shadow definitions
 * @property {Object} borderRadius - Border radius values
 */

export {};