import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";
import Blog from './pages/Blog';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;