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

    let sprint = useSelector(state => state.sprint.sprint)
    let events = useSelector(state => state.sprint.allEvents)

    let allList = sprint.concat(events)


    console.log(allList)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listarFechas())
        dispatch(listarEvents())
    }, [])

    const handleEvent = (el) =>{
      el.event.url === "" 
      ?alert("Evento sin establecer")
      : alert("Deseas ir el evento") // logica para hacer si existe una url
    }
    const handleDidMount = (el) =>{
        console.log(el)
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
            plugins={[dayGridPlugin,interactionPlugin,timeGridPlugin,listPlugin]} // plugins
            weekends={true} // para mostrar los dias de fines de semana
            events={allList}
            eventClick = {handleEvent} // darle click a un evento hacer una accion 
            editable={true} //para moverlo
            locales = {esLocale} //idioma pack
            locale= 'es' // agregar idioma 
            selectable={true}  // nos servira para calcular y dibujar un conjunto de fechas
            unselectAuto={true}
            eventDidMount={handleDidMount}
            /> 
        </div>
    )
}

export default Calendar
