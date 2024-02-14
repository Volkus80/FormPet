import { Button } from "../Button/Button"
function ButtonBlock() {
    return (
        <div className="buttons">
            <Button value={"Next Step"} type={"forward"} active={1}/>
            <Button value={"Go Back"} type={"back"} active={2}/>
        </div>
    )
}

export { ButtonBlock };