import {Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import Posts from './Posts';
import NotFound from './NotFound';

const Views = () => {
    const [num, setNum] = useState(1);
    return (
        <Routes>
            <Route index element={<div class="centered"><b>Please Log In</b></div>}/>
            <Route path='/home' element={
                <div class="centered">
                    <b>Home Page</b>&nbsp;<br/>
                    <Link to={`/posts/`}>Go to Posts.</Link>
                </div>
            }/>
            <Route path='/posts'>
                <Route index element={
                    <div class="centered">
                        Start Posting or View Some Posts. &nbsp; <br/>
                        <Link to={`/posts/${num}`}>View Posts.</Link>
                    </div>
                }/>
                <Route path=':id' element={<Posts/>} />
                {/* <Route path='*' element={<div>No post found.</div>} /> */}
            </Route>
            <Route path='/about' element={<div class="centered">About Me</div>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
};

export default Views;