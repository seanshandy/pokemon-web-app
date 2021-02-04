import React, { useEffect, useState } from 'react'
import "./Modal.css";

const Modal = props => {
    const [nickname, setNickname] = useState('');

    function savePokemon(name) {
        name.trim() === '' ? props.onSavedPokemon('-') : 
        props.onSavedPokemon(name.trim()); 
    }

    function releasePokemon() {
        props.onReleasePokemon(); 
    }

    function handleChange(event) {
        setNickname(event.target.value);
    }

    function handleClickOutside(e) {
        if (props.catched != undefined || props.catched === true) {
            e.stopPropagation();
        } else {
            return props.onClose();
        }
    }


    return (
        <>
            <div className={`modal ${props.show ? 'show' : ''} )`} onClick={(e) => handleClickOutside(e)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4>{props.title}</h4>
                    </div>
                    
                    <div className="modal-body">
                        {props.body}
                        {
                            props.catched ? <textarea value={nickname} onChange={handleChange} /> : null
                        }
                    </div>

                    <div className="modal-footer">
                        <>
                            {
                                props.catched ? <button className="btn-modal" onClick={() => savePokemon(nickname)}>Submit</button> : 
                                (props.release ? null : <button className="btn-modal" onClick={props.onClose}>Close</button>)
                            }
                            {
                                props.release ? 
                                <>
                                <button className="btn-modal" onClick={() => releasePokemon()}>Submit</button>
                                <button className="btn-modal" onClick={props.onClose}>Cancel</button> 
                                </>: null
                            }
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
