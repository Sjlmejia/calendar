import { useSelector, useDispatch } from "react-redux"
import { onAddnewEvent, onSetActiveEvent, onUpdateEvent, onDeleteEvent } from "../store/calendar/caledarSlice";


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
      dispath(onUpdateEvent({...calendarEvent}));
    } else {
      console.log('crear')
      dispath(onAddnewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  }
  
  const startDeletingEvent = () => {
    // TODO: implement backend
    dispath(onDeleteEvent());
  }
  return {
    //* Propiedades
    events,
    activeEvent,
    hasEnventSelected: !!activeEvent,
    
    //* Métodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}