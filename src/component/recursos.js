/* 
// simplemente solo necesito traerme un arreglo con todos los registros en forma de objeto 
const prueba = [
    { title: 'event 1', date: '2021-08-07' },
    { title: 'event 1', date: '2021-08-09' },
    { title: 'event 1', date: '2021-08-12' },
    { title: 'event 1', date: '2021-08-17' },
    { title: 'event 2', date: '2021-08-08' }
]

//import timeGridPlugin from '@fullcalendar/timegrid'; // manejar eventos por tiempos e por semana y mas
//import googleCalendarPlugin from '@fullcalendar/google-calendar'; //integrar con google


    const handleDateClick = (arg) => { // bind with an arrow function
        //alert(arg.dateStr)
        console.log(arg)
      }

    const handleDrag = (el) =>{
        //console.log(el.event)
        //console.log(el.event.startStr) fecha guardada
        //el.event._def
        console.log(el)
    }
    const handleDidMount = (info) =>{
        console.log(info)
    }
    const handleDataSet = (info) =>{
        console.log(info)
    }
    const handleDateClick = (arg) => { // bind with an arrow function
        //alert(arg.dateStr)
        //console.log(arg)
        
      }



          <FullCalendar
           editable={true}
            headerToolbar={{
            left: 'dayGridMonth,timeGridWeek,timeGridDay',
            center:'title',
            right: 'prev today next',
            }}
            plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin,googleCalendarPlugin ]}
            googleCalendarApiKey={'AIzaSyBXwE42hs-JfFpFqFvixDDqkT42nqFet-U'} 
            //dateClick={handleDateClick} // con un click muestra la la informacion
            events={calendar}
            className='gcal-event'
            eventDragStop={handleDrag} //cuando se termina de mover
            eventDidMount={handleDidMount} // cuando se termina el arrastrar
            datesSet={handleDataSet} // recibir la fecha del proximo evento
            locales = {esLocale} //idioma
            locale= 'es' // idioma 
            selectable={true} 
            weekends={true}
            eventDragStop={handleDrag} 
           /> 





         [
                {
                  title: 'BCH237',
                  start: '2021-08-09T18:39:00',
                  end: '2021-08-09T18:40:00',
                  extendedProps: {
                    department: 'BioChemistry'
                  },
                  description: 'Lecture'
                },
                // more events ...
              ] 


*/