import { useEffect, useState } from 'react'

export default function useDraggable(id) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  
  useEffect(() => {
    const handle = document.getElementById(id)
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
  
  return {
    position
  }
}
