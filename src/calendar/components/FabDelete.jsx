import { DeleteOutlined } from "@ant-design/icons"
import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {
  
  const { startDeletingEvent, hasEnventSelected } = useCalendarStore();
  
  const handleDelete =( ) => {
    startDeletingEvent();
  }
  
  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
      style={{ 
        display: hasEnventSelected ? 'block' : 'none'
    
      }}
    >
      <DeleteOutlined />
    </button>
  )
}
