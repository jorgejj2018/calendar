import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const listarFechas = () => (dispatch) => {
    db.collection('prueba').get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const dataDocument = doc.data();
          return { ...dataDocument, id: doc.id };
        });
        //console.log(data)
        dispatch({ type: 'listarFechas', payload: data });
      });
  };


  //listar eventos "#"
  export const listarEvents = () => (dispatch) => {
    db.collection('eventos').get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const dataDocument = doc.data();
          return { ...dataDocument, id: doc.id };
        });
        //console.log(data)
        dispatch({ type: 'listarEvents', payload: data });
      });
  };


//crear eventos programados "#" cambiar el (db.collection('eventos').add(data)) por la funcion requerida de firebase function 
  export const createNewEvent = (title,start,end,description) => async (dispatch, getState) => {
    try {
      if (Date.parse(start) > Date.parse(end)) {
        alert('la fecha de final no puede ser menor a la fechan inicial');
      } else {
        const data = { 
        title,
        start,
        end,
        description,
        };
        db.collection('eventos').add(data);
        dispatch({ type: 'newEventCreated', payload: { ...data, id: title } });
      }
  
    } catch (error) {
      alert('algo salio mal');
      console.log(error);
    }
  
  };
