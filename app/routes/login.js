Balanced.LoginRoute = Balanced.Route.extend({
    redirect: function () {
        // if you're logged in, no reason to let you see the login page
        if (Balanced.Auth.get('signedIn')) {
            this.transitionTo('marketplaces');
        }
    }
});
