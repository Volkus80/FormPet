const errorMessage = "This field is required";
function InputBlock({label}) {
    return (
        <div inputblock>
            <div className="inputblock_header">
                <p className="inputblock_header_label">{label}</p>
                <p className="inputblock_header_errorMessage">{errorMessage}</p>
            </div>
            <input type="text" className="inputblock_input"/>
        </div>
    )
}

export {InputBlock};