import React, { ReactNode, useRef, useState } from 'react';
import { ElementDiv } from '../basicEditor2/BasicEditor2';

// window.addEventListener('mouseup', () => {console.log('mouse up event occurred!')});
//should try and remove this on unmounting, perhaps using the useEffect return function.
export type DraggableFrameProps = {
    elementDiv: ElementDiv
    handleDeleteElement: (id:number) => void
}
function DraggableFrame2({ elementDiv, handleDeleteElement }:DraggableFrameProps) {
    const fillerElement = elementDiv.body;
    const div = elementDiv.div;
    const [position, setPosition] = useState({ x: elementDiv.div.position.x, y: elementDiv.div.position.y });
    const divRef = useRef(null);

    const handleMouseDown = (e) => {
        const windowYPosition = window.scrollY;
        const rect = divRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const handleMouseMove = (e) => {
            const newPosition = { x: e.clientX - offsetX, y: e.clientY - offsetY + windowYPosition }
            // setPosition({
            //     x: e.clientX - offsetX,
            //     y: e.clientY - offsetY + windowYPosition,
            //     // x: e.clientX,
            //     // y: e.clientY
            // });
            setPosition(newPosition);
            div.setSelfPosition(newPosition);
        };

        const handleMouseUp = () => {
            // console.log("div.getSelfPosition", div.getSelfPosition());
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    function handleFrameClick() {
        // console.log("div", div);
    }

    return (
        <div
            ref={divRef}
            style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                cursor: 'grab',
                border: '1px solid black'
            }}
            onMouseDown={handleMouseDown}
            onClick={handleFrameClick}
        >
            <button onClick={() => handleDeleteElement(div.id)}>Delete</button>
            DraggableFrame
            {fillerElement}
        </div>
    )
}

export default DraggableFrame2