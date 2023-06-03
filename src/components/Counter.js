import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountDecrement, getCountIncrement, getCountReset } from '../countActions/countActions';

const Counter = () => {
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();

    const handleCountIncrement = () => {
        dispatch(getCountIncrement());
    }

    const handleCountDecrement = () => {
        dispatch(getCountDecrement());

    }

    const handleCountReset = () => {
        dispatch(getCountReset());
    }
  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick={handleCountIncrement}>Increment</button> 
        <button onClick={handleCountDecrement}>Decrement</button> 
        <button onClick={handleCountReset}>Reset</button> 
    </div>
  )
}

export default Counter