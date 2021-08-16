import React, { useEffect } from 'react'
import FullCalendar  from '@fullcalendar/react' // Componente
import dayGridPlugin from '@fullcalendar/daygrid' // plugins de dias...
import interactionPlugin from "@fullcalendar/interaction" // Plugin de interacion
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es'; // idioma
import {listarFechas} from '../actions/calendarActions'
import {listarEvents } from '../actions/calendarActions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'




const Calendar = () => {

    // enfocarte solo en las lineas que tenga un "#" esto seria lo nuevo 

    let sprint = useSelector(state => state.sprint.sprint) // sprint "#"
    let events = useSelector(state => state.sprint.allEvents) // eventos programados "#"

    let allList = sprint.concat(events) // "#" todos los eventos y sprint juntos , este arreglo se coloca en la props events={allList}


    //console.log(allList)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listarFechas()) // listar sprint
        dispatch(listarEvents()) // listar eventos "#"
    }, [])

    const handleEvent = (el) =>{
      el.event.url === "" 
      ?alert("Evento sin establecer")
      : alert("Deseas ir el evento") // ignorar esto 
    }
    return (
        <div>
            <h1>Calendar GeekPlatform</h1>
             <FullCalendar
            allDay={false}
            headerToolbar={{
            left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            center:'title',
            right: 'prev today next',
            }}
            plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin,listPlugin]} 
            weekends={true}
            events={allList} // "#"
            eventClick = {handleEvent} // ignorar esto no agregar esto solo enfocarte en donde esta el "#"
            editable={true} 
            locales = {esLocale} 
            selectable={true}  
            unselectAuto={true}
            /> 
        </div>
    )
}

export default Calendar
