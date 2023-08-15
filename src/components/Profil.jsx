import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profil() {

    return (
        <div>
            {userData ? (
                <div>
                    <h2>Profil de {userData.username}</h2>
                    <p>Email: {userData.email}</p>
                    <button onClick={handleDeleteProfil}>Supprimer mon compte</button>
                </div>
            ) : (
                <form className='form-signup'>
                    <h1>Connecte toi ici :</h1>
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
                        <label>Password :</label>
                        <input
                            className='my-4'
                            name="email"
                            type="email"
                            id="email"
                            autoComplete='none'
                        />
                    </div>
                    <button onClick={() => navigate('/signup')} className='bg-red-700'>S'inscrire !</button>
                </form>
            )}
        </div>
    );
}

