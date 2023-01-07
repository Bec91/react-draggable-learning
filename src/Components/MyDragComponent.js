import Draggable from "react-draggable";
import React from "react-dom";

function MyDragComponent() {
    const eventHandler = (e, data) => {
        console.log('EventType', e.Type);
        console.log({e, data});
    }

    return(
        <Draggable
            onDrag={eventHandler}
            // onStart={eventHandler}
            // onStop={eventHandler}
            // onMouseDown={eventHandler}

            // These 2 go together
            // onMouseUp={eventHandler}
            // defaultPosition={{x: 0, y: 0}}

            // onTouchStart={eventHandler}

            // AXIS PROP
            // axis="x"  //moves left to right
            // axis ="y"   //move top to bottom
            // axis="none"  //fixed position
            // axis="both" //move in any direction

            // handle=".handle"  //looks for class name and can only click on that container on the screen to drag item.

            // defaultPosition={{x: 0, y: 0}}

            // disabled={true} //boolean value if true acts like static component.

            // bounds={{left: 0, top: 0, right: 100, bottom: 500}}
            // restricts movement to the parent 
        >
            <div style={{border: "2px solid blue", padding: "5rem", width: "30%"}}>
                <div className="handle"> Drag From Here</div>
                <div>This readme is really dragging on the onDrag react event listner....</div>
            </div>
        </Draggable>
    )
}

export default MyDragComponent;