import React, {useEffect } from 'react'
import "./AddPokemon.css";

const AddPokemon = props => {
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

    return (
        <>
            <div className={`modal ${props.show ? 'show' : ''} )`} onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4>{props.title}</h4>
                    </div>
                    
                    <div className="modal-body">
                        This is modal content
                    </div>

                    <div className="modal-footer">
                        <>
                            {
                                props.catched ? <button className="btn-modal" onClick={() => savePokemon("Sukijem")}>Submit</button> : ''
                            }
                        </>
                        <button className="btn-modal" onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPokemon
