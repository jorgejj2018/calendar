import { firebase, googleAuthProvider, db, functions } from '../firebase/firebaseConfig';

export const listarFechas = () => (dispatch) => {
    db.collection('prueba').get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const dataDocument = doc.data();
          return { ...dataDocument, id: doc.id };
        });
        dispatch({ type: 'listarFechas', payload: data });
      });
  };