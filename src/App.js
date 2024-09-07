import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from "react";

function App() {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if(mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }

    }
    return (
        <>
            <Navbar navTitle={'React App'} mode={mode} toggleMode ={toggleMode}/>
            <div className={'container'}>
                <TextForm mode={mode}/>
            </div>
        </>
    );
}

export default App;
