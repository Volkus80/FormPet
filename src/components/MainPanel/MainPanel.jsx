import {panelText} from "../../data/panelText";


function MainPanel({active=1}) {
    return (
        <div className="panel">
            <div className="panel_header">
                <p className="panel_header_head">{panelText[active].header}</p>
                <p className="panel_header_description">{panelText[active].text}</p>
            </div>
            
        </div>
    )

}

export {MainPanel};