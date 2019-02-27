import { LeagueSelectorHandler } from '../components/league-selector/reducer';
import { TeamSelectorHandler } from '../components/team-selector/reducer';


export const initialState = {
  count: 0,
  league: {},
  team: {},
  component: 0,
};

const mainHandler = {
  ...LeagueSelectorHandler,
  ...TeamSelectorHandler,
};

export default function mainReducer(state = initialState, action) {
  const handler = mainHandler[action.type];
  return handler ? handler(state, action) : state;
};
