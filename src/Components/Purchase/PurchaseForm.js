import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const PurchaseForm = ({ handleSubmitParam, tool, quantity }) => {
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const [user] = useAuthState(auth);
    return (
        <div className='w-full mx-auto custom-shadow bg-[#e8eaec] pt-10 pb-10 px-10 rounded-lg'>
            <h1 className='text-2xl md:text-3xl font-medium text-slate-500 text-center mb-10'>Please Input Your Information</h1>
            <form onSubmit={handleSubmit(handleSubmitParam)}>

                <div className="">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            value={user?.displayName} disabled
                        />


                        <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>


                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                        value={user?.email} disabled
                    />

                    <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="number" name="floating_quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={quantity} disabled
                        />

                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="number" name="floating_total" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value={tool.price * quantity} disabled
                        />

                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Price</label>
                    </div>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="text" name="floating_address" id="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                        {...register('address', {
                            required: 'Address is required',
                            minLength: {
                                value: 6, message: 'Minimum 6 character required'
                            }
                        })}
                        onKeyUp={() => {
                            trigger('address')
                        }}
                    />
                    <p className='text-red-500 text-sm'>{errors?.address?.message}</p>

                    <label htmlFor="floating_address" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input type="number" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                        {...register('number', {
                            required: 'Number is required',

                        })}
                        onKeyUp={() => {
                            trigger('number')
                        }}
                    />
                    <p className='text-red-500 text-sm'>{errors?.number?.message}</p>

                    <label htmlFor="floating_repeat_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number</label>
                </div>
                <input className='text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2 cursor-pointer' type="submit" value="Purchases" />
            </form>

        </div>
    );
};

export default PurchaseForm;