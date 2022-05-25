import React from 'react';
import { toast } from 'react-toastify';

const Modal = ({ modal, sendEvent, setModal }) => {
    return (
        <div className="shadow-none">

            <input type="checkbox" id="deleteModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure?</h3>

                    <div class="modal-action">
                        <label onClick={() => sendEvent(modal._id)} for="deleteModal" class="btn">Yes</label>
                        <label onClick={() => { toast.info('Ok,Try next time.'); setModal({}) }} for="deleteModal" class="btn">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;