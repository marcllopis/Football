import React, { useContext, useEffect, useState, Fragment } from 'react';
import { fetchTeamDetails } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';


export function TeamDetails() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => { fetchTeamDetails(state.team.id, setData) }, []);

  return (
    <Fragment>
        {data ?
          `Team name: ${data.name}, founded in: ${data.founded}.
          Squad: ${data.squad[0].name}`
          : `LEAGUE STANDINGS INFO NOT LOADED`}
    </Fragment>
  );
};
