import React from 'react'

export default function TilePallet({ tileSet, position, size, activeTile, setActiveTile }) {
  const { width, height } = size
  const tiles = []
  let id = 0

  for(let y =0; y < height; y = y + 32){
    const row = []
    for(let x = 0; x < width; x = x + 32){
      row.push({
        x, y, id: id++
      })
    }
    tiles.push(row)
  }

  
  return (
    <div>
      <div
        id="palette"
        style={{
          position: 'absolute',
          border: '1px solid black',
          top: position.y,
          left: position.x,
          zIndex: 100,
          backgroundColor: 'white'
        }}
        >
          <img id="handle" src="/img/drag-handle.png" alt="drag handle"/>
          <div style={{
                      background: `url(/sprites/${tileSet}.png) -${activeTile.x}px -${
                        activeTile.y
                      }px no-repeat`,
                      width: 32,
                      height: 32,
                    }}>

          </div>
          {tiles.map((row, y) => <div style={{ display: "flex" }}>
                  {row.map((tile, x) => ( 
                    <div
                    onClick={() => setActiveTile({x: x * 32, y: y * 32})}
                    style={{
                      borderTop: "1px solid black",
                      borderRight: "1px solid black",
                      background: `url(/sprites/${tileSet}.png) -${x * 32}px -${
                        y * 32
                      }px no-repeat`,
                      width: 32,
                      height: 32,
                    }}
                  />
                ))}
            </div>
            )}
        </div>
    </div>
  )
}
