import React, { useState, useEffect } from "react"
import Button from "./Button/Button";
import DeleteComponent from "./DeleteComponent";

const FunctionComponent = () => {
    const [count, setCount] = useState(0);
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        //console.log("Component didMount Çalıştı");
    }, [])

    useEffect(() => {
        //console.log("Component didUpdate Çalıştı");
        if (count <= 0) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    }, [count]);

    return (
        <>
            <Button buttonTitle={"Arttır"} onClick={() => setCount(count + 1)}></Button>
            <div>Sayacın değeri : {count}</div>
            {showButton === true ? <Button buttonTitle={"Azalt"} onClick={() => setCount(count - 1)}></Button> : null}
        
            {showButton && <DeleteComponent></DeleteComponent>}
        </>
    )
}

export default FunctionComponent