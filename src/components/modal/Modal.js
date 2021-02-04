import React, { useEffect, useState } from 'react'
import "./Modal.css";

const Modal = props => {
    const [nickname, setNickname] = useState('');

    const closeOnEsaceKeyDown = (e) => {
        if((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEsaceKeyDown);
        return () => {
            document.body.removeEventListener('keydown', closeOnEsaceKeyDown)
        }
    }, [])

    function savePokemon(name) {
        props.onSavedPokemon(name); 
    }

    function releasePokemon() {
        props.onReleasePokemon(); 
    }

    function handleChange(event) {
        setNickname(event.target.value);
    }


    return (
        <>
            <div className={`modal ${props.show ? 'show' : ''} )`} onClick={props.onClose}>
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
