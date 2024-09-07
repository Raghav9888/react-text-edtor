import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert('Dark mode has been enabled', 'success');

            setInterval(() => {
                document.title = 'Text Utils is amazing mode';
            }, 2000);
            setInterval(() => {
                document.title = 'Install Text Utils now';
            }, 1500);

        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light mode has been enabled', 'success');
        }
    }

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (
        <>
            <Router>
                <Navbar navTitle={'React App'} mode={mode} toggleMode={toggleMode}/>
                <Alert alert={alert}/>
                <div className={'container'} style={{color: mode === 'dark' ? 'white' : '#042743'}}>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
