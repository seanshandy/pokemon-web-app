import React, { useState } from 'react';
import Button from "../button/Button";
import "./Modal.css";

const Modal = props => {
    const [nickname, setNickname] = useState('');

    function savePokemon(name) {
        props.onSavedPokemon(name.trim()); 
    }

    function releasePokemon() {
        props.onReleasePokemon(); 
    }

    function handleChange(event) {
        setNickname(event.target.value);
    }

    function handleClickOutside(e) {
        if (props.catched !== undefined || props.catched === true) {
            e.stopPropagation();
        } else {
            return props.onClose();
        }
    }


    return (
        <>
            <div className={`modal ${props.show ? 'show' : ''}`} onClick={(e) => handleClickOutside(e)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4>{props.title}</h4>
                    </div>
                    
                    <div className="modal-body">
                            <span className="modal-body-text">{props.body}</span>
                        {
                            props.catched ? <input type="text" className="form-nickname" value={nickname} onChange={handleChange} /> : null
                        }
                    </div>

                    <div className="modal-footer">
                        <>
                            {
                                props.catched ? 
                                <>
                                    <div onClick={() => savePokemon(nickname)}> 
                                        <Button text="OK" size="size-modal"></Button>
                                    </div>
                                    <div onClick={() => savePokemon(nickname)}> 
                                        <Button text="NO" size="size-modal"></Button>
                                    </div>
                                </> 
                                : !props.release ? 
                                <div onClick={props.onClose}> 
                                    <Button text="NO" size="size-modal"></Button>
                                </div> 
                                : null
                            }
                            {
                                props.release && !props.catched ? 
                                <>
                                <div onClick={() => releasePokemon()}>
                                    <Button text="OK" size="size-modal"></Button>
                                </div>
                                <div onClick={props.onClose}> 
                                    <Button text="Cancel" size="size-modal"></Button>
                                </div>
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
