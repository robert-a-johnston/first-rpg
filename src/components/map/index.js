import React from 'react'

export default function Map({ tiles, setTiles, activeTile, tileSet, size }) {
  
  function cloneMatrix(m) {
    const clone = new Array(m.length)
    for(let i = 0; i < m.length; ++i) {
      clone[i] = m[i].slice(0)
    }
    return clone
  }
  
  function dropTile({x, y}){
    setTiles(prev => {
      // clone matrix, alter tile at x/y to the active tile
      const clone = cloneMatrix(prev)
      const tile = {
        ...clone[y][x],
        v: activeTile
      }
      clone[y][x] = tile
      return clone
    })
  }

  return (
    <div
      style={{
        boxSizing: "border-box",
        backgroundColor: "white",
        width: size.width
      }}>
      {
        tiles.map((row, y) => <div style={{display: "flex"}}>
          {
            row.map((tile, x) => (
              <div
                onClick={() => dropTile({x, y})}
                style={{
                  borderBottom: "1px solid #333",
                  borderRight: "1px solid #333",
                  background: `url(/sprites/${tileSet}.png) -${
                    tile.v.x
                  }px -${tile.v.y
                  }px no-repeat`,
                  width: 32,
                  height: 32,
                }}
              />
              ))}
        </div>
        )}
    </div>
  )
}
