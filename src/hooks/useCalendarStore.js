import { useSelector, useDispatch } from "react-redux"
import { onAddnewEvent, onSetActiveEvent } from "../store/calendar/caledarSlice";


export const useCalendarStore = () => {
  const dispath = useDispatch();
  const { events, activeEvent} = useSelector((state) => state.calendar);
  
  const setActiveEvent = (calendarEvent) => {
    dispath(onSetActiveEvent(calendarEvent));
  }
  
  const startSavingEvent = ( calendarEvent ) => {
    console.log('startSavingEvent')
    
    if( calendarEvent._id ) {
      console.log('actualizar')
    } else {
      console.log('crear')
      dispath(onAddnewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  }
  return {
    //* Propiedades
    events,
    activeEvent,
    
    //* Métodos
    setActiveEvent,
    startSavingEvent
  }
}