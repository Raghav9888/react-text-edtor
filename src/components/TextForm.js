import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState('Enter the text here');
    const {mode ,title = 'Title list'} = props;
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        const newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
            <div className="container">
                <h1 className='text-center'>{title}</h1>
                <div className="my-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{backgroundColor: mode === 'dark' ? 'gray' : 'white', color: mode === 'dark' ? 'white' : 'black'}}
                    id="myBox"
                    rows="8"
                ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-secondary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-secondary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-secondary mx-2" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-secondary mx-2" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    title: PropTypes.string
};
