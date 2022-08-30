import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/home');
        }, 3000);
    }, [navigate]);
    return (
        <div class="centered">
            <b>ERROR 404</b>&nbsp;Page Not Found
        </div>
    )
};

export default NotFound;