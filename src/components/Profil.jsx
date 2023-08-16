import Cookies from 'js-cookie';
import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userNameAtom, emailAtom } from './Atoms';

export default function Profil() {
    const navigate = useNavigate();

    const [username, setUserName] = useAtom(userNameAtom);
    const [email, setEmail] = useAtom(emailAtom);

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            fetch('http://localhost:1337/api/users/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                setUserName(data.username)
                setEmail(data.email);
                console.log(data.username)
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }, []);

    const handleDeleteProfil = () => {
        Cookies.remove('token');
        setUserName('');
        setEmail('');
        navigate('/register')
    }

    const handleLogOut = () => {
        Cookies.remove('token');
        setUserName('');
        setEmail('');
        navigate('/login');
    }

    return (
        <div className='sm:mt-40'>
            <div className='text-center sm:mt-48'>
                <h2>Profil de {username}</h2>
                <p>Email: {email}</p>
            </div>
            <button onClick={handleDeleteProfil}>Supprimer mon profil</button>
            <button onClick={handleLogOut}>Se deconnecter</button>
        </div>
    );
}


