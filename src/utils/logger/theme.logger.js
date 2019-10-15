/**
 * @type function
 * @description Logger function to log css styles. Helpful in debugging css.
 * @param {string} namespace
 * @param {function} fn
 * @param {boolean} log
 */
const themeLogger = (namespace, fn, log = true) => (...args) => {
  if (log) console.log(namespace, ...args);
  return fn(...args);
};

export default themeLogger;
