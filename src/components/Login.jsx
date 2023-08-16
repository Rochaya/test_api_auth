import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai';
import { userNameAtom, emailAtom } from './Atoms';


export default function Login() {

    const navigate = useNavigate();
    const [, setUserName] = useAtom(userNameAtom);
    const [, setEmail] = useAtom(emailAtom);

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const identifier = formData.get("email");
        const password = formData.get("password");
        
        try {
            const response = await fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({identifier, password})
            });
        
            const data = await response.json();
            console.log(data);
            setUserName(data.username);
            setEmail(data.email);
            navigate('/profil');
        }
        catch(error) {
            console.error('Error:', error);
        }
    }

    return (
      <div>
          <form onSubmit={handleLogin}>
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
                  <button type='submit'>Me connecter !</button>
                  <button onClick={() => navigate('/register')}>S'inscrire !</button>
          </form>
      </div>
    );
}
