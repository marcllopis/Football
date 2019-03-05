import axios from 'axios';
import { MAIN_URL, TOKEN } from '../data/tokens';


export const fetchTeams = async (leagueId, setTeam) => {  
  const { data } = await axios({
    method: 'get',
    url: `${MAIN_URL}competitions/${leagueId}/teams`,
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  setTeam(data.teams);
};