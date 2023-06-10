import { authApi } from '@/api-client';
import { useAuth } from '@/hooks';
import React from 'react';

const login = () => {
    const { profile, login, logout } = useAuth({ revalidateOnMount: false });

    async function handleLoginClick() {
        try {
            // await authApi.login({
            //     username: 'test1',
            //     password: '123123',
            // });
            await login({
                username: 'test1',
                password: '123123',
            });
        } catch (error) {
            console.log('login Failed', error);
        }
    }
    async function handleGetProfileClick() {
        try {
            await authApi.getProfile();
        } catch (error) {
            console.log('get Profile', error);
        }
    }
    async function handleLogoutClick() {
        try {
            await authApi.logout();
        } catch (error) {
            console.log('logout Failed', error);
        }
    }

    return (
        <div>
            Main Login
            <br />
            <hr />
            <div className="flex gap-2">
                <button className="bg-cyan-400" onClick={handleLoginClick}>
                    Login
                </button>
                <button className="bg-red-400" onClick={handleLogoutClick}>
                    Logout
                </button>
                <button className="bg-yellow-400" onClick={handleGetProfileClick}>
                    Get Details
                </button>
            </div>
        </div>
    );
};

export default login;
