
export default function makeFav(id) {
  
    return dispatch => {

         dispatch({type: 'MAKE_FAV',payload:id})
       }
  
  }

  