import { LeagueSelectorHandler } from '../components/league-selector/reducer';


export const initialState = {
  count: 0,
  league: {},
  component: 0,
};

const mainHandler = {
  ...LeagueSelectorHandler,
};

export default function mainReducer(state = initialState, action) {
  const handler = mainHandler[action.type];
  return handler ? handler(state, action) : state;
};
