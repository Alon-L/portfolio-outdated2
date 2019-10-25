import { Dispatch } from 'redux';
import {
  NavbarActionTypes,
  TOGGLE_COLLAPSE
} from '../types/navbar';

export type dispatchCurrying = (dispatch: Dispatch) => NavbarActionTypes;

export const toggleCollapse = (): dispatchCurrying => (
  dispatch: Dispatch
): NavbarActionTypes => {
  return dispatch({
    type: TOGGLE_COLLAPSE
  });
};
