import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FightComponent = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () =>{
            try {
              const response = await axios.get('http://localhost:8080/fight');
              console.log(response.data);
              setData(response.data);
            } catch (error) {
              console.error(error.message);
            }
        }

        fetchData();
    }, []);

    return (
      <div>
        <h1>ReactJS - SpringBoot Integration</h1>
        <h4>Data from SpringBoot: {data}</h4>
      </div>
    );



}

export default FightComponent;