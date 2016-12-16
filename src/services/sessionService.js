Service.$inject = [''];

/* @ngInject */
function Service() {
    const service = {
        create: function (sessionId, userId, userRole) {
            this.id = sessionId;
            this.userId = userId;
            this.userRole = userRole;
        },

        destroy: function () {
            this.id = null;
            this.userId = null;
            this.userRole = null;
        }
    }

    return service;
}

module.exports = angular
    .module('sessionModule', [])
    .service('sessionService', Service);
