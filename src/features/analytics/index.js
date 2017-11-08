import isFunction from 'lodash/isFunction';

import './event-interceptors';

// for testing
const stub = {
  load() {},
  page() {},
  identify() {},
  track() {},
};

const analytics = window.analytics || stub;

if (process.env.NODE_ENV === 'production') {
  analytics.load(process.env.REACT_APP_SEGMENT_KEY);
} else {
  Object.keys(analytics).forEach(key => {
    const original = analytics[key];
    if (isFunction(original)) {
      analytics[key] = function(...args) {
        console.info(key, ...args);
        return original.call(analytics, ...args);
      };
    }
  });
}

export default analytics;
