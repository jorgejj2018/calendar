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

/*   export const getFirestoreSprints = (corteId, salonId) => async (dispatch, getState) => {
    db.collection(`/cortes/${corteId}/sprints`).where('salonId', '==', salonId).get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const dataDocument = doc.data();
          return { ...dataDocument, id: doc.id };
        });
        dispatch({ type: 'getFirestoreSprints', payload: data });
      })
      .catch((err) => console.log(err));
  };
  
  export const deleteSprint = (id, corteId) => async (dispatch) => {
    try {
      await db.collection(`/cortes/${corteId}/sprints`).doc(id).delete();
      alert('sprint eliminado');
      dispatch({ type: 'deleteSprint', payload: id });
    } catch (error) {
      alert('ha habido un error');
      console.log(error);
    }
  
  };
  
  export const getFirestoreAllSprints = (corteId) => async (dispatch, getState) => {
    db.collection('cortes').doc(corteId).collection('sprints').get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const dataDocument = doc.data();
          return { ...dataDocument, id: doc.id };
        });
        dispatch({ type: 'getFirestoreAllSprints', payload: data });
      })
      .catch((err) => console.log(err));
  }; */