import { FC } from "react"
import { IToast } from "./Toast.types"
import { ToastContainer } from "./styles"

const Toast: FC<IToast> = ({ message }) => {
    return (
        <ToastContainer>
            <div className="message">
                {message}
            </div>
        </ToastContainer>
    )
}

export default Toast