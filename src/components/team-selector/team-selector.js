// import React, { useContext, useEffect } from 'react';
// import axios from 'axios';
// import { MAIN_URL, TOKEN } from '../../data/tokens';
// import { MainContext } from '../../context-provider/context-provider';
// import { Actions } from './actions';
// import { Leagues } from '../../data/leagues';

// export function LeagueSelector() {
//   const { state, dispatch } = useContext(MainContext);

//   const getChuckFacts = async () => {
//     const { data } = await axios(`
//       ${MAIN_URL}competitions/${state.league.id}/teams
//     `);
//     console.log(data)
//   }

//   useEffect(() => getChuckFacts(), []);

//   return (
//     <div className='league-selector'>
//       {data.map(team => (
//         <div key={team.id}>
//           <img src={team.emblemUrl} alt={team.name} />
//           <div>
//             <button onClick={() =>
//               dispatch({ type: Actions.GET_TEAM, team })}>
//               Select {team.name}
//             </button>
//           </div>
//         </div>
//       ))}
//       <br />
//     </div>
//   );
// };
