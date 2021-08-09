import React, { useEffect } from 'react'
import FullCalendar , { formatDate }  from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
//import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useDispatch, useSelector } from 'react-redux'
import {listarFechas} from '../actions/calendarActions'


// simplemente solo necesito traerme un arreglo con todos los registros en forma de objeto 
const prueba = [
    { title: 'event 1', date: '2021-08-07' },
    { title: 'event 1', date: '2021-08-09' },
    { title: 'event 1', date: '2021-08-12' },
    { title: 'event 1', date: '2021-08-17' },
    { title: 'event 2', date: '2021-08-08' }
]

const Calendar = () => {

    const calendar = useSelector(state => state.calendar.date)
    const dispatch = useDispatch()
    console.log(calendar)
    useEffect(() => {
        dispatch(listarFechas())
    }, [])

    return (
        <div>
            <h1>Calendar GeekPlatform</h1>
            <FullCalendar
            plugins={[ dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={calendar}
            />
        </div>
    )
}

export default Calendar
