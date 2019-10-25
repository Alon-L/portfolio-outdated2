import {
  NavbarActionTypes,
  TOGGLE_COLLAPSE
} from '../types/navbar';
import { Navbar } from '../types';

const initialState: Navbar = {
  collapsed: false
};

export function navbar(
  state = initialState,
  action: NavbarActionTypes
): Navbar {
  switch (action.type) {
    case TOGGLE_COLLAPSE:
      return {...state, collapsed: !state.collapsed};
    default:
      return state;
  }
}
