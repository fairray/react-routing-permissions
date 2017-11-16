import {
    TEMPLATE_OPEN_SIDEBAR,
    TEMPLATE_CLOSE_SIDEBAR,
  } from '../constants/template';

export const openSidebar = () =>{
    return {
        type: TEMPLATE_OPEN_SIDEBAR
    }
}

export const closeSidebar = () =>{
    return {
        type: TEMPLATE_CLOSE_SIDEBAR
    }
}