import { useEffect } from "react"
import './button.css'

const Button = ({ onClick, buttonTitle }) => {

    useEffect(() => {
        //console.log("Button ekrana basıldı");
    }, [])

    useEffect(() => {
        return () => {
            //console.log("Button ekrandan silindi.");
        }
    }, [])

    return (
        <button className="btn" onClick={onClick}>{buttonTitle}</button>
    )
}

export default Button