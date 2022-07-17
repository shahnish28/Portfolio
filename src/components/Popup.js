import React from 'react'



function Popup(props) {
  return (props.trigger) ? (
    <div className="Popup">
        <div className="Popup-inner">
            <button className="closebtn" onClick={()=> props.setTrigger(false)}>
                
                <i class="fa-solid fa-xmark"></i>
                
            </button>
            {props.children}
        </div>
    </div>
  ) : "";
}
               

export default Popup
      
    

