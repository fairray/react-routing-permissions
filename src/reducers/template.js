import {
    TEMPLATE_OPEN_SIDEBAR,
    TEMPLATE_CLOSE_SIDEBAR,
  } from '../constants/template';
  
  const initialState = { sidebarIsOpened: false,};
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case TEMPLATE_OPEN_SIDEBAR:
      return {
        ...state,
        sidebarIsOpened: true,
      };
      case TEMPLATE_CLOSE_SIDEBAR:
        return {
          ...state,
          sidebarIsOpened: false,
        };
      default:
        return state;
    }
  };
  