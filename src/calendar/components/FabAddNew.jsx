import { PlusOutlined } from "@ant-design/icons"
import { useCalendarStore, useUiStore } from "../../hooks"
import { addHours } from "date-fns";

export const FabAddNew = () => {
  
  const {openDateModal} = useUiStore();
  const {setActiveEvent, startSavingEvent} = useCalendarStore();
  const handleClickNew =( ) => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Jorge",
      }
    });
    openDateModal();
  }
  return (
    <button
      className="btn btn-primary fab"
      onClick={handleClickNew}
    >
      <PlusOutlined />
    </button>
  )
}
