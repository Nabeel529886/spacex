import React, { useState } from 'react';
import './App.css';
import Launches from './components/Launches'
import LaunchInfo from './components/LaunchInfo'
import Container from '@material-ui/core/Container'


function App() {

  const [selected, setSelected] = useState(false)
  const [id, setId] = useState(0)

  const handleIdChange = React.useCallback(
    (newId) => {
      setId(newId)
      setSelected(true)
    },
    [],
  )

  const handleBackBtn = React.useCallback(
    () => {
      setSelected(false)
    },
    [],
  )

  return (
          <Container maxWidth="md">
          <h1>Space X Flights</h1>
          { selected ? <LaunchInfo id={id} handleBackBtn={handleBackBtn} />: <Launches handleIdChange={handleIdChange} />}  
          </Container> 
  );
}

export default App;
