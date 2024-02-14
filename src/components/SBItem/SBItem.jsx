import s from './SBItem.module.scss';
import cn from 'classnames';
import cnBind from 'classnames/bind';

const cx = cnBind.bind(s);

function SBItem({itemNo, posText, active = 1}) {
    const itemNoCN = cn(s.item_num, active === itemNo ? cx({active: {active}}) : "");
    console.log(itemNoCN)
    return (
        <div className={s.item}>
            <div className={itemNoCN}>{itemNo}</div>
            <div className={s.item_desc}>
                <p className={s.item_desc_header}>STEP {itemNo}</p>
                <p className={s.item_desc_footer}>{posText}</p>
            </div>
        </div>
    )
}

export {SBItem};