

export  const IncreNum = (num)=>{

    return {
        type:'INCREMENT',
        payload:num,
    }

}

export const DecreNum = (num)=>{

    return{
        type:'DECREMENT',
        payload:num,

        
    }
    
}