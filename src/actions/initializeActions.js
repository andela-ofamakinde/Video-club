"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var MovieApi = require('../api/MovieApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                movies: MovieApi.getAllMovies()
            }
        });
    }
};

module.exports = InitializeActions;
