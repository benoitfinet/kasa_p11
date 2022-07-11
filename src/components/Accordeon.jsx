import '../sass/components/accordeon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Accordeon({Title, Text}) {
    const [open, setOpen] = useState(false)
    return (
        <div className='accordeon'>
            <div className='accordeon__top' onClick={() => setOpen(!open)}>
                <p className='accordeon__top--text'>{Title}</p>
                {open ?
                <FontAwesomeIcon className='accordeon__top--arrow' icon={faChevronDown}/>
                : 
                <FontAwesomeIcon className='accordeon__top--arrow' icon={faChevronUp}/>
                }
            </div>
            {open ? <div className='accordeon__bottom'>{Text}</div> : null}
        </div>
    )
}
 
export default Accordeon