import { useSelector, useDispatch } from "react-redux";
import { termSelector } from "../../store/terms/termsSelectors";

function AddOn({ header, title, price, selected }) {
    const isMonthly = useSelector(termSelector);

    const addonPrice = isMonthly ? price : price * 10;
    const termName = isMonthly ? "mo" : "yr";

    return (
        <div className='addon'>
            <label className='addon_checkbox checked'>
                <input type='checkbox' checked={selected} className='addon_checkbox_check' />
            </label>
            <div className='addon_description'>
                <p className='addon_description_header'>{header}</p>
                <p className='addon_description_title'>{title}</p>
            </div>
            <p className='addon_price'>{`\+\$${addonPrice}\/${termName}`}</p>
        </div>
    );
}

export { AddOn };
