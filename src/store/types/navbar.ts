export const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE';

interface ToggleCollapseAction {
  type: typeof TOGGLE_COLLAPSE;
}

export type NavbarActionTypes =
  | ToggleCollapseAction;
