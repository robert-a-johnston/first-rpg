import React, {useEffect, useState} from 'react'
import Player from './components/player';
import './App.css';

function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const handle = document.getElementById('handle')
    handle.addEventListener('mousedown', function(e){
      e.preventDefault()
      handle.style.pointerEvents = 'none'

      document.body.addEventListener('mousemove', moveBox)
      document.body.addEventListener('mouseup', () => {
        document.body.removeEventListener('mousemove', moveBox)
        // reset handle values
        handle.style.pointerEvents = 'initial'
      })
    })
    // clean up event listeners
    return () => {
      document.body.removeEventListener('mousedown', moveBox)
      document.body.removeEventListener('mouseup', moveBox)
      document.body.removeEventListener('mousemove', moveBox)
    }
  }, [])


  function moveBox(e) {
    const pos = {
      // xy of mouse
      x: e.clientX,
      y: e.clientY,
    }
    setPosition(pos)
  }

  return (
    <div  style={{
      position: 'relative',
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 'grey',
      overflow: 'hidden',
      border: '1px solid black',
    }}>
      <div
        style={{
          position: 'absolute',
          border: '1px solid black',
          top: position.y,
          left: position.x,
          zIndex: 100,
          width: 200,
          height: 200,
          backgroundColor: 'white'
        }}
        >
          <img id="handle" src="/img/drag-handle.png" alt="drag handle"/>
        </div>
    
      <Player skin='m2'/>
     
    </div>
  );
}

export default App;
