import './App.css';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path = '/Auth' element = {<AuthPage/>}></Route>
            </Routes>
        </BrowserRouter> 
    )
    
}

export default App
