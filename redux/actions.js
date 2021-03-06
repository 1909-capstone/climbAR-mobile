import {
  SET_HOLD,
  SET_DRAGGING_HOLD,
  SET_HOLDS,
  SET_ROUTE_MODELS,
  SET_ROUTE_MODEL,
  SET_USER,
  STATUS_MESSAGE,
  SET_CLIMBING_ROUTES,
  SET_CLIMBING_ROUTE,
  SET_ROUTE_FILTERS,
  SET_ROUTE_IMAGE,
  SET_ROUTE_VIDEO,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_EDIT_MODEL,
  TOGGLE_FILTER_DRAWER,
  GET_TOKEN,
  SAVE_TOKEN,
  REMOVE_TOKEN,
  TOKEN_ERROR,
  OPEN_RATING_FORM_DRAWER,
  CLOSE_RATING_FORM_DRAWER,
} from './constants';

export const toggleFilterDrawer = () => {
  return {
    type: TOGGLE_FILTER_DRAWER,
  };
};

export const openRatingFormDrawer = route => {
  return {
    type: OPEN_RATING_FORM_DRAWER,
    route,
  };
};

export const closeRatingFormDrawer = () => {
  return {
    type: CLOSE_RATING_FORM_DRAWER,
  };
};

export const setEditModel = (model, holdsData) => {
  return {
    type: SET_EDIT_MODEL,
    model,
    holdsData,
  };
};

export const setRouteVideo = video => {
  return {
    type: SET_ROUTE_VIDEO,
    video,
  };
};

export const setRouteFilters = filters => {
  return {
    type: SET_ROUTE_FILTERS,
    filters,
  };
};

export const setHold = hold => {
  return {
    type: SET_HOLD,
    hold,
  };
};

export const setDraggingHold = hold => {
  return {
    type: SET_DRAGGING_HOLD,
    hold,
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    user,
  };
};

export const statusMessage = message => {
  return {
    type: STATUS_MESSAGE,
    message,
  };
};

export const setHolds = holds => {
  return {
    type: SET_HOLDS,
    holds,
  };
};

export const setRouteModel = model => {
  return {
    type: SET_ROUTE_MODEL,
    model,
  };
};

export const setRouteModels = models => {
  return {
    type: SET_ROUTE_MODELS,
    models,
  };
};

export const setClimbingRoutes = routes => {
  return {
    type: SET_CLIMBING_ROUTES,
    routes,
  };
};

export const setClimbingRoute = route => {
  return {
    type: SET_CLIMBING_ROUTE,
    route,
  };
};

export const setRouteImage = image => {
  return {
    type: SET_ROUTE_IMAGE,
    image,
  };
};

export const logInSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loggedInFail = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const getToken = token => {
  return {
    type: GET_TOKEN,
    token,
  };
};

export const saveToken = token => {
  return {
    type: SAVE_TOKEN,
    token,
  };
};

export const removeToken = token => {
  return {
    type: REMOVE_TOKEN,
    token,
  };
};

export const tokenError = error => {
  return {
    type: TOKEN_ERROR,
    error,
  };
};
