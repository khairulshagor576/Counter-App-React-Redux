import { COUNT_DECREMENT, COUNT_INCREMENT, COUNT_RESET } from "../countConstants/counterConstant"

const initialCountValue = {
    count:0,
}

const countReducer=(state=initialCountValue,action)=>
{
   switch (action.type) {
    case COUNT_INCREMENT:
    return{
        ...state,
        count:state.count+1,
    }
    
    case COUNT_DECREMENT:
    return{
        ...state,
        count:state.count-1,
    } 

    case COUNT_RESET:
    return{
        ...state,
        count:0,
    } 

   
    default:
       return state;
   }
}

export default countReducer;