import { Actions } from './actions';


export const LeagueSelectorHandler = {
  [Actions.GET_LEAGUE]: (state, payload) => ({
    ...state,
    league: payload.leagues,
  }),
};
