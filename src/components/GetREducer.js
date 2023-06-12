
 export const GetData= ()=>{
    return async(dispatch)=>{

        const rest =await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await rest.json()
        console.log(result);
      dispatch({type: 'GET', payload: result})
    }
}