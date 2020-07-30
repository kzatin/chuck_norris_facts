export default function getFacts(type) {
  
    return dispatch => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response=>response.json())
        .then(res=>   {
     if(type==='factsOnly')
         {  
           dispatch({type: 'GET_FACT',payload:res.value.toString()})
         }
     else {
           dispatch({type: 'GET_FAV'})
           }
       })
  
  }
}
  