import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";
import Blog from './pages/Blog/pages/Blog';

import PageExample from './pages/Blog/pages/PageExample';
import Article_ReactHelmet from './pages/Blog/pages/Article_ReactHelmet';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/page-example" element={<PageExample />} />
                <Route path="/blog/o-que-e-react-helmet" element={<Article_ReactHelmet />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;