import React, { useEffect, useState } from 'react'
import useDraggable from './hooks/use-draggable/index'
import Player from './components/player';
import TilePallet from './components/tile-palette';
import Map from './components/map';
import './App.css';

function App() {
  const [tileSet, setTileSet] = useState('rpg-nature-tileset/spring')
  const [activeTile, setActiveTile] = useState({x: 1 * 32, y: 4 * 32})
  const [tiles, setTiles] = useState([])
  const [mapSize, setMapSize] = useState({
    width: 800,
    height: 600,
  })
  const {position} = useDraggable('handle')

  useEffect(() => {
    const _tiles = []
    let id = 0

    for(let y = 0; y < mapSize.height; y = y + 32) {
      const row = []
      for(let x = 0; x < mapSize.width; x = x + 32) {
        row.push({
          x, y, id: id++, v: {x: -32, y: -32}
        })
      }
      _tiles.push(row)
    }
    setTiles(_tiles)
  },[])

  return (
    <div  style={{
      position: 'relative',
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 'grey',
      overflow: 'hidden',
      border: '1px solid black',
    }}>
      <Player skin='m2'/>
    <TilePallet
      position={position}
      tileSet={tileSet}
      activeTile={activeTile}
      setActiveTile={setActiveTile}
      size={{
        height: 288,
        width: 640
      }}/>
    
     <Map
      tiles={tiles}
      tileSet={tileSet}
      size={mapSize}
      activeTile={activeTile}
      setTiles={setTiles}
     /> 
     
    </div>
  );
}

export default App;
