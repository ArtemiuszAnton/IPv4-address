import style from './App.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setIp] = useState('');

  const getIp = async () => {
    const response = await axios.get('https://api.ipify.org/?format=json');

    setIp(response.data.ip)
  }

  useEffect(() => {
    getIp()
  }, [])

  return (
    <div>
      <h1>{data}</h1>

      <p >{data}( This is your IP address...probably :P )</p>
    </div>
  );
}

export default App;
