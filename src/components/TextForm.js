import React, {useState} from "react";
import PropTypes, {element} from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const {mode ,title = 'Title list',showAlert} = props;
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        showAlert('Converted to Uppercase', 'success');
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
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
            <div className="container" >
                <h1 className='text-center'>{title}</h1>
                <div className="my-3">
                <textarea
                    className="form-control"
                    placeholder={'Enter the text here'}
                    value={text}
                    onChange={handleOnChange}
                    style={{backgroundColor: mode === 'dark' ? 'gray' : 'white', color: mode === 'dark' ? 'white' : '#042743'}}
                    id="myBox"
                    rows="8"
                ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-secondary mx-1 my-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.length > 0 ? text.split(/\s+/).filter((element) => {return element.length !== 0}).length : 0} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ?text: 'Enter something in the textbox  above to preview here' }</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    title: PropTypes.string
};
