import { Actions } from './actions';


export const TeamSelectorHandler = {
  [Actions.GET_TEAM]: (state, payload) => ({
    ...state,
    team: payload.team,
    matchDay: payload.matchDay
  }),
};
