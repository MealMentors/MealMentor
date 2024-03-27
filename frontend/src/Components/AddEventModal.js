import React, {useRef, useState} from 'react'
import Modal from 'react-modal'
import Datetime from 'react-datetime'

export default function ({isOpen, onClose, onEventAdded}) {

    const [title, setTitle] = useState("")
    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())
    

    const onSubmit = (event) =>  {
        event.preventDefault();
        
        onEventAdded({
            title,
            start,
            end
        })

        onClose();
    }
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
          <form onSubmit={onSubmit}>
            <input placeholder="Meal" value={title} onChange={e => setTitle(e.target.value)} />
            <div>
              <label>Start Date</label>
              <Datetime value={start} onChange={date => setStart(date)} />
            </div>
            <label>End Date</label>
            <Datetime value={start} onChange={date => setEnd(date)} />
            <button type="submit">Add Meal</button> {/* Add Meal button */}
          </form>
        </Modal>
      ) 
    };
