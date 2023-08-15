import Cookies from 'js-cookie';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        form.reset();
        console.log(username, email, password);

        try {
            const response = await fetch('http://localhost:1337/api/auth/local/register', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({username, email, password})
            });
            const data = await response.json();
            const token = data.jwt;
            Cookies.set('token', token);
            Cookies.set('username', username);
            Cookies.set('email', email);
            const checkSaveToken = Cookies.get('token');
                if (checkSaveToken) {
                    console.log("C'est bien stocker dans les cookies", checkSaveToken);
                }
                else {
                    console.log("Ca marche pas")
                }
            navigate('/profil');
            console.log(data);
        }
        catch(error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Username :</label>
                    <input
                        name="username"
                        type="text"
                        id="username"
                        autoComplete='none'
                    />
                </div>
                <div className='form-group'>
                    <label>Email :</label>
                    <input
                        name="email"
                        type="email"
                        autoComplete='none'
                    />
                </div>
                <div className='form-group'>
                    <label>Password :</label>
                    <input
                        name="password"
                        type="text"
                        autoComplete='none'
                    />
                </div>
                <button type='submit'>Confirmer</button>
            </form>
        </div>
    );
}
