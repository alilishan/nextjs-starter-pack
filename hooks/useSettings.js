import { useEffect, useReducer } from "react";


const useSettings = () => {
    const [state, setState] = useReducer((state, newState) => ({
        ...state,
        ...newState
    }), {
        settingsLoaded: false,
        settingsData: {}
    });

    useEffect(() => {
        const getSettings = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/settings.json`)
            const data = await response.json();
            setState({
                settingsData: data[process.env.NODE_ENV],
                settingsLoaded: true
            });
            
            console.log(`Directory Loaded Settings [${process.env.NODE_ENV}]`, data[process.env.NODE_ENV]);
        }

        getSettings();

    }, []);

    return {...state};
}
 
export default useSettings;