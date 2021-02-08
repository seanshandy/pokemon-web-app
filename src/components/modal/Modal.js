import React, { useEffect, useState, useContext } from 'react';

import { PokemonData } from '../../contexts/MyPokemonContext';
import Button from "../button/Button";
import "./Modal.css";

const Modal = props => {
    const [isShow, setIsShow] = useState(false);
    const [isCatched, setIsCatched] = useState(false);
    const [isReleased, setIsReleased] = useState(false);
    const [isNickname, setIsNickname] = useState(false);
    const [isInputError, setIsInputError] = useState(false);
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [errorText, setErrorText] = useState('');
    const [nickname, setNickname] = useState('');
    const [pokemon, setPokemon] = useState({});

    const { mypokemons } = useContext(PokemonData);

    function checkName(nickname) {
        let notExists = true;

        mypokemons.forEach((mp) => {
            if((mp.nickname.toLowerCase() === nickname.toLowerCase()) && ( mp.id === pokemon.id) ) {
                return notExists = false;
            }
        });
        return notExists;
    }


    function savePokemon() {
        if (nickname.length === 0) {
            setIsInputError(true);
            setErrorText('Nickname cannot be empty');
        } else {
            const accept = checkName(nickname);
            if (accept) {
                props.onSavePokemon(nickname);
            } else {
                setErrorText("Can't have same Pokemon with same Nickname.");
                setIsInputError(true);
            }
        }
    }

    function defaultNickName() {
        const accept = checkName(pokemon.name);
        if (accept) {
            props.onSavePokemon(''); 
        } else {
            setIsCatched(true);
            setIsNickname(true);
            setErrorText("Can't have same Pokemon with same Nickname.");
            setIsInputError(true);
        }
    }

    function GiveNickname() {
        setIsNickname(true);
        setBodyText('Input a Nickname');
    }

    function releasePokemon() {
        props.onReleasePokemon(); 
    }

    function handleChange(event) {
        setNickname((event.target.value).trim());
    }

    function handleClickOutside(e) {
        if (isCatched === true) {
            e.stopPropagation();
        } else {
            return props.onClose();
        }
    }

    useEffect(() => {
        setIsShow(props.show ? true : false);
        setIsCatched(props.catched ? true : false);
        setIsReleased(props.released ? true : false);
        setTitleText(props.title);
        setBodyText(props.body);
        setPokemon(props.pokemon);
    }, [props.body, props.catched, props.pokemon, props.released, props.show, props.title])


    return (
        <div className={`modal ${isShow ? 'show' : ''}`} onClick={(e) => handleClickOutside(e)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4>{titleText}</h4>
                </div>
                
                <div className="modal-body">
                    <span className="modal-body-text">{bodyText}</span>
                    {   isNickname ? 
                        <>
                            <input type="text" className={`form-nickname ${isInputError === true ? 'input-error' : ''}`} value={nickname} onChange={handleChange}> 
                            </input>
                            {
                                isInputError === true ? 
                                <span className="error-text">
                                {errorText}
                                </span> : null
                            }
                        </>
                        : null
                    }
                </div>

                <div className={`modal-footer ${isInputError === true ? 'footer-error' : ''}`}>
                    <>
                        {
                            isCatched && !isNickname ? 
                            <>
                                <div onClick={() => GiveNickname()}> 
                                    <Button text="YES" size="size-modal"></Button>
                                </div>
                                <div onClick={() => defaultNickName()}> 
                                    <Button text="DEFAULT" size="size-modal"></Button>
                                </div>
                            </>
                            : !isReleased && !isNickname ?
                            <div onClick={props.onClose}> 
                                <Button text="OK" size="size-modal"></Button>
                            </div> : null
                        }

                        {
                            isNickname ? 
                            <div onClick={() => savePokemon()}> 
                                <Button text="SAVE" size="size-modal"></Button>
                            </div> : null
                            
                        }

                        {
                            isReleased && !isCatched ? 
                            <>
                            <div onClick={() => releasePokemon()}>
                                <Button text="Confirm" size="size-modal"></Button>
                            </div>
                            <div onClick={props.onClose}> 
                                <Button text="Cancel" size="size-modal"></Button>
                            </div>
                            </> : null
                        }
                    </>
                </div>
            </div> 
        </div>
    )
}

export default Modal
