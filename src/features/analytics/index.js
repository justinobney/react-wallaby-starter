import './event-interceptors';

const analytics = {
  page: (...args) => window.analytics.page(...args),
  identify: (...args) => window.analytics.identify(...args),
  track: (...args) => window.analytics.track(...args),
  trackHistory(history) {
    this.page(window.location.pathname);

    history.listen((location, action) => {
      this.page(location.pathname);
    });
  },
};

if (process.env.NODE_ENV === 'production') {
  window.analytics.load(process.env.REACT_APP_SEGMENT_KEY);
} else {
  Object.keys(analytics).forEach(key => {
    analytics[key] = (...args) => console.info(key, ...args);
  });
}

export default analytics;
