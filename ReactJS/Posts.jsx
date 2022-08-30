import React from 'react';
import {useParams, Outlet} from 'react-router-dom';

const Posts = () => {
    const params = useParams();
    return (
        <div class="centered">
            <Outlet/>
            {params.id}
        </div>
    )
}

export default Posts;