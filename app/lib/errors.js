if (typeof Raven !== typeof undefined) {
    Raven.config('https://c5e331a1bd9c47af85d481e46b415dab@app.getsentry.com/6353').install();

    Ember.onerror = function (error) {
        if (!ENV.BALANCED.DEBUG) {
            Raven.captureException(error);
        }
        Ember.Logger.error(error.message);
    };
}
