import React from 'react';
import { toast } from 'react-toastify';

const Modal = ({ modal, sendEvent, setModal }) => {
    return (
        <div className="shadow-none">

            <input type="checkbox" id="deleteModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure?</h3>

                    <div className="modal-action">
                        <label onClick={() => sendEvent(modal._id)} for="deleteModal" className="btn">Yes</label>
                        <label onClick={() => { toast.info('Ok,Try next time.'); setModal({}) }} for="deleteModal" className="btn">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;