import '../sass/components/accordeon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Accordeon({Title, children}) {
    const [open, setOpen] = useState(false)
    return (
        <div className='accordeon'>
            <div className='accordeon__top' onClick={() => setOpen(!open)}>
                <p className='accordeon__top--text'>{Title}</p>
                {open ?
                <FontAwesomeIcon className='accordeon__top--arrow' icon={faChevronUp}/>
                : 
                <FontAwesomeIcon className='accordeon__top--arrow' icon={faChevronDown}/>
                }
            </div>
            {open ? <div className='accordeon__bottom'>{children}</div> : null}
        </div>
    )
}
 
export default Accordeon