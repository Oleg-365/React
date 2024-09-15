import PropTypes from "prop-types";

export const debounce = (fn, msec) => {
  let lastCall = 0;
  let lastCallTimer = 0;
  return (...args) => {
    const previousCall = lastCall;
    lastCall = Date.now();
    if (previousCall && lastCall - previousCall <= msec) {
      clearTimeout(lastCallTimer);
    }
    lastCallTimer = setTimeout(() => fn(...args), msec);
  };
};

export const propTypeMessage = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.number.isRequired,
};

export const propTypeMessages = PropTypes.arrayOf(
  PropTypes.shape(propTypeMessage),
).isRequired;
