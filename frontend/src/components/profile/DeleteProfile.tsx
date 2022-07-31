import { useState } from 'react';
import { AlertTriangle, Loader } from 'react-feather';
import { useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import Modal from '../shared/Modal';

export default function DeleteProfile() {
    const { authenticatedUser, setAuthenticatedUser } = useAuth();
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [deleteShow, setDeleteShow] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const history = useHistory();
    const handleLogout = async () => {
        await AuthService.logout();
        setAuthenticatedUser(null);
        history.push('/login');
    };
    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await UserService.delete(authenticatedUser.id);
            setDeleteShow(false);
        } catch (error) {
            setError(error.response.data.message);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <div>
                <button
                    className="btn w-full"
                    onClick={() => {
                        setDeleteShow(true);
                    }}
                >
                    Delete Your User
                </button>
            </div>
            {/* Delete User Modal */}
            <Modal show={deleteShow}>
                <AlertTriangle size={30} className="text-red-500 mr-5 fixed" />
                <div className="ml-10">
                    <h3 className="mb-2 font-semibold">Delete Your User</h3>
                    <hr />
                    <p className="mt-2">

                        Are you sure you want to delete the your user? All of your user's data will be permanently removed.          permanently removed.
                        <br />
                        This action cannot be undone.
                    </p>
                </div>
                <div className="flex flex-row gap-3 justify-end mt-5">
                    <button
                        className="btn"
                        onClick={() => {
                            setError(null);
                            setDeleteShow(false);
                        }}
                        disabled={isDeleting}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn danger"
                        onClick={() => {
                            handleDelete();
                            handleLogout();
                        }}
                        disabled={isDeleting}
                    >
                        {isDeleting ? (
                            <Loader className="mx-auto animate-spin" />
                        ) : (
                            'Delete'
                        )}
                    </button>
                </div>
                {error ? (
                    <div className="text-red-500 p-3 font-semibold border rounded-md bg-red-50">
                        {error}
                    </div>
                ) : null}
            </Modal>
        </>
    );
}
