import React, { useEffect } from 'react'
import FullCalendar  from '@fullcalendar/react' // Componente
import dayGridPlugin from '@fullcalendar/daygrid' // plugins de dias...
import interactionPlugin from "@fullcalendar/interaction" // Plugin de interacion
import esLocale from '@fullcalendar/core/locales/es'; // idioma
import {listarFechas} from '../actions/calendarActions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'




const Calendar = () => {

    const calendar = useSelector(state => state.calendar.date)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listarFechas())
    }, [])

    const handleEvent = (el) =>{
      el.event.url === "" 
      ?alert("Evento sin establecer")
      : alert("Deseas ir el evento") // logica para hacer si existe una url
    }
    
    return (
        <div>
            <h1>Calendar GeekPlatform</h1>
             <FullCalendar
            plugins={[dayGridPlugin,interactionPlugin]} // plugins
            weekends={true} // para mostrar los dias de fines de semana
            events={calendar} // todos los eventos registrados
            eventClick = {handleEvent} // darle click a un evento hacer una accion 
            editable={true} //para moverlo
            locales = {esLocale} //idioma pack
            locale= 'es' // agregar idioma 
            selectable={true}  // nos servira para calcular y dibujar un conjunto de fechas
            unselectAuto={true}
            /> 
        </div>
    )
}

export default Calendar
