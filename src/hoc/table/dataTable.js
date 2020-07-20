import React, {useContext} from 'react';

import StyleTable from './styleTable'
import {DataContext} from '../../context/data'
import {leaguesRequest} from '../../requests/leagueTable'



const DataTable = ({label, datakeys}) => {

     const {idLeague} = useContext(DataContext);
     const [data, setData] = React.useState('')

    if (idLeague !== data.id) {
        const getData = async () => {
            const data = await leaguesRequest(idLeague);
            setData(data);
        }
        getData();
    }

    

    return ( 
    <>
        <StyleTable
        label={label}
        data={data}
        datakeys={datakeys}
        />
    </> )
    ;
}
 
export default DataTable;