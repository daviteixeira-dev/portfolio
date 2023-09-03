import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";
import Blog from './pages/Blog/pages/Blog';
import PageExample from './pages/Blog/pages/PageExample';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/page-example" element={<PageExample />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;