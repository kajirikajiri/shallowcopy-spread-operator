import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import clone from 'rfdc'

const Home: NextPage = () => {
  const test = [1, 2, 3]
  const [array, setArray ] = useState(test)
  const testObj = {
    top: {
      middle: {
        bottom: 1
      }
    }
  }
  const cloneObj = {...testObj}
  
  console.log(Object.is(testObj, cloneObj)) // false
  console.log(Object.is(testObj.top, cloneObj.top)) // true
  console.log(Object.is(testObj.top.middle, cloneObj.top.middle)) // true

  // このパターンは実態が変わっていない
  const pushAndSetToArray = () =>{
    array.push(100)
    setArray(array)
  }

  const log = (x: any) =>{
    console.log('log', x, array)
    console.log('clone', clone()(x), clone()(x))
  }

  useEffect(()=>{
    console.log('in useEffect')
    setArray(array)
  }, [array])
  return (
    <>
      <button onClick={()=>log(array)}>log: array</button>
      <button onClick={pushAndSetToArray}>push and set</button>
      {array.map((item, i) => {
        return <div key={i}>
          {item}
        </div>
      })}
    </>
  )
}

export default Home
