
const initialState = {
    date: []
}

export const CalendarReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'listarFechas':
        return {...state, 
            date:action.payload
            }
    
        default:
            return state
    }
};


