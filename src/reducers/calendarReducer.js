
const initialState = {
    sprint: [],
    events: [],
    allEvents: [],
}

export const CalendarReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'listarFechas':
        return {...state, sprint:action.payload}
        case 'listarEvents':
            return {...state, allEvents:action.payload}
        default:
            return state
    }
};

export const CreateEvents = (state = initialState , action) =>{
    switch (action.type) {
        case 'newEventCreated':
            return {
              ...state,
              events: [...state.events, action.payload],
            };
    
        default:
            return state
    }
}


