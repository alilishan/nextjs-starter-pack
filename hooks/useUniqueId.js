import { useEffect, useReducer } from "react";
import { FirebaseDB } from "../firebase";
import { s5 } from "../utils/GenerateUniqueID";
import SwalToast from "../utils/SwalToast";

const useUniqueId = () => {

    const [state, setState] = useReducer((state, newState) => ({
        ...state,
        ...newState
    }), {
        id: '',
        isLoading: true
    });

    useEffect(() => {

        const checkForDuplicate = (id) => {
            FirebaseDB
                .collection('requests')
                .where("meta_fulfilledBy", "==", id)
                .get()
                .then((querySnapshot) => {
                    const resp = querySnapshot.docs.map((doc) => ({ ...doc.data(), docId: doc.id }));
                    // console.log(resp.length, resp)
                    if (resp.length) {
                        checkForDuplicate(s5());

                    } else {
                        setState({
                            id: id,
                            isLoading: false
                        })
                    }

                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                    SwalToast("Error getting documents: ", 'error');
                });

        }
        
        checkForDuplicate(s5());
            
    }, []);


    return { ...state }
}

export default useUniqueId;