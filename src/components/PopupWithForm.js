import React from "react";

function PopupWithForm(props) {
 return (
<div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
        
            <div className="popup__container">
                <button className="popup__close" id="profileClose" type="button" aria-label="Закрыть попап" onClick={props.onClose}></button>
                <form className="popup__form" id="profileForm" name={`${props.name}`} onSubmit={props.onSubmit} noValidate>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__save" id="profile-btn" type="submit">{props.buttonText}</button>
                </form>
            
            </div>
        </div>
    )
}

export default PopupWithForm;