import React, { useReducer, useState } from 'react'

const App = () => {
  const [ firstInput , setFirstInput ] = useState('') ; 
  const [ SecondInput , setSecondInput ] = useState('') ; 
  const initialState = 0 ;
  function reducer ( state  , action){
    const {firstInput , SecondInput} = action.payload
    switch(action.type){
      case 'sum' :
      return  firstInput + SecondInput ; 
        default :
       return state +1
      
       
    }

  }

  const [state , dispatch]  = useReducer(reducer , initialState);

  return (
    <div>
      <input type="text" onChange={(e)=> setFirstInput( e.target.value) } value={firstInput} />
      <input type="text" onChange={(e)=> setSecondInput(e.target.value)   } value={SecondInput } />
      <button onClick={()=>{dispatch({type:'sum' , payload:{firstInput ,SecondInput }})}}>
        sum
      </button>
      <button onClick={()=>{dispatch({type:'sum5' , payload:{firstInput ,SecondInput }})}}>
        su1
      </button>
      {state}
      
      
    </div>
  )
}

export default App
