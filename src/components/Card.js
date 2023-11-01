import { useState, useEffect } from 'react'

export function Card(){

  const [name, setName] = useState('Guille')
  const [counter, setCounter] = useState(0)

  // name = "Guille" // NUNCA hacerlo asi. Siempre que quieras cambiar tu estado tienes que hacerlo con a función correspondiente a cada estado (setName, setCounter, etc)

  useEffect(()=>{
    setName('Bruno') // Esta es la forma de cambiar mi estado
  }, [name])

  useEffect(()=>{
    console.log(counter)
  }, [counter])

  const changeCounter =()=>{
    setCounter(counter + 1)
  }


  return(
    <div className="Card">
      <p>Hola {name}</p>
      <p>Bienvenido a React</p>
      <p>{counter}</p>
      <button onClick={()=>{changeCounter()}}>Change counter</button>
    </div>
  )
}