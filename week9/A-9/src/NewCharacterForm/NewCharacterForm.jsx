import {useState} from "react";
import "./NewCharacterForm.css";

export function NewCharacterForm() {
    const initialCardSetting = {
        charName: "",
        player: "",
        species: "",
        powerset: "",
        backstory: "",
        isNPC: false,
        image: "",
    }
    const [newCard, setNewCard] = useState(initialCardSetting);
    const [errorObj, setErrorObj] = useState({
        charName: "",
        image: "",
    });

    function validateForm(newCard) {
        let valid = true;
        if(!newCard.charName) {
            console.log("setting error object")
            //set err Obj charName prop to error message
            setErrorObj((prevErrorObj) => {
                return{
                    ...prevErrorObj,
                    charName: "Character name is required."
                }
            });
            valid = false;
        }
        if(!newCard.image){
            //set image prop to error message
            setErrorObj((prevErrorObj) => {
                return{
                    ...prevErrorObj,
                    image: "Image is required."
                }
            });
            valid = false;
        }
        return valid;
    }

    function changeHandler(event) {
        const needsBoolean = ["isNPC"];
        const updatedTarget = needsBoolean.includes(event.target.id) ? Boolean(event.target.value) : event.target.value;

        setNewCard((prevCard) => {
            return {
                ...prevCard,
                [event.target.name]: event.target.value,
                [event.target.name]: updatedTarget
            }
        })
    }
    
    function submitHandler(event) {
        event.preventDefault();
        console.log({newCard});
        if (validateForm(newCard)) {
        //     // send card to App

        //     //reset values
            setNewCard(initialCardSetting)
        // }
    }}

    return (
        <form className="new-character-form-wrapper" onSubmit={submitHandler}>
            <fieldset>
                <legend>
                    Character Details
                </legend>

                <div className="form-group">
                    <label htmlFor="charName" className="required">
                        Character Name
                    </label>

                    <input
                        type="text"
                        name="charName"
                        id="charName"
                        value={newCard.charName}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newCard.charName) {
                                setErrorObj((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        charName: ""
                                    }
                                })
                            }
                        }}
                        />
                        {errorObj.charName && (
                            <>
                            <br/>
                            <small>{errorObj.charName}</small>
                            </>
                        )}
                </div>

                <div className="form-group">
                    <label htmlFor="player">
                        Player Name
                    </label>
                    <input
                        type="text"
                        name="player"
                        id="player"
                        value={newCard.player}
                        onChange={changeHandler}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="species">
                        Species
                    </label>
                    <input
                        type="text"
                        name="species"
                        id="species"
                        value={newCard.species}
                        onChange={changeHandler}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="powerset">
                        Class
                    </label>
                    <input
                        type="text"
                        name="powerset"
                        id="powerset"
                        value={newCard.powerset}
                        onChange={changeHandler}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="backstory">
                        Background
                    </label>
                    <input
                        type="text"
                        name="backstory"
                        id="backstory"
                        value={newCard.backstory}
                        onChange={changeHandler}
                    />
                </div>

                <div className="form-group" >
                    <label htmlFor="image" className="required">
                        Image URL
                    </label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        value={newCard.image}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newCard.image) {
                                setErrorObj((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        image: ""
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.image && (
                        <>
                        <br/>
                        <small>{errorObj.image}</small>
                        </>
                    )}
                </div>
            </fieldset>
            <fieldset>
                <legend>
                    Collection Details
                </legend>

                <div className="form-group">
                    <label htmlFor="isNPC">
                        NPC
                        <input
                            type="checkbox"
                            name="isNPC"
                            id="isNPC"
                            onChange={changeHandler}
                            value={newCard.isNPC}
                            >
                        </input>
                    </label>
                </div>

            </fieldset>
            <button type="submit">
                Add Character
            </button>
        </form>
    )
}