'use strict';

import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {

        case FETCH_WEATHER:
            console.log(`reducer_weather: action received ${action.type}`);
            return [action.payload.data, ...state];
            break;

        default:
            return state;
    }
}