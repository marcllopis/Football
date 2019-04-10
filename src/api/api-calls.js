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

export const fetchLeagueStandings = async (leagueId, setStandings) => {
  const { data } = await axios({
    method: 'get',
    url: `${MAIN_URL}competitions/${leagueId}/standings`,
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  setStandings(data.standings[0].table); // current season only
};

export const fetchLeagueMatchDay = async (leagueId, setMatchDay) => {
  const { data } = await axios({
    method: 'get',
    url: `${MAIN_URL}competitions/${leagueId}/standings`,
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  setMatchDay(data.season);
};

export const fetchLeagueMatches = async (leagueId, matchDay, setMatches) => {
  const { data } = await axios({
    method: 'get',
    url: `${MAIN_URL}competitions/${leagueId}/matches?matchday=${matchDay}`,
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  setMatches(data.matches);
};

export const fetchLeagueScorers = async (leagueId, setScorers) => {
  const { data } = await axios({
    method: 'get',
    url: `${MAIN_URL}competitions/${leagueId}/scorers?limit=5`,
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  setScorers(data.scorers);
};

export const fetchTeamMatches = async (teamId, leagueName, setTeamMatches) => {
  const { data } = await axios({
    method: 'get',
    url: `${MAIN_URL}teams/${teamId}/matches`,
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  setTeamMatches(data.matches.filter(
    team => team.competition.name === leagueName)); // filter selected league
};

export const fetchTeamSquad = async (teamId, setTeamSquad) => {
  const { data } = await axios({
    method: 'get',
    url: `${MAIN_URL}teams/${teamId}`,
    headers: {
      'X-Auth-Token': TOKEN,
    },
  });
  setTeamSquad(data.squad);
};