import React from 'react';
import { useForm } from 'react-hook-form';

import { toast, ToastContainer } from 'react-toastify';
const AddTools = () => {
    const { register, handleSubmit, watch, formState: { errors }, trigger, reset } = useForm();

    const imageSotrageKey = `0ca5c9cdb23add3ecfaff014d8e4ad9c`

    const handleAddProduct = async data => {
        const image = data.image[0]
        const url = `https://api.imgbb.com/1/upload?key=${imageSotrageKey}`
        const formData = new FormData();
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    console.log(img, 'img-url');
                    const tools = {
                        name: data.name,
                        price: data.price,
                        availableQuantity: data.availableQuantity,
                        minOrderQuantity: data.minOrderQuantity,
                        details: data.details,
                        image: img
                    }
                    //send data to db
                    fetch(`https://hardware-server.up.railway.app/tools`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(tools)
                    })
                        .then(res => res.json())
                        .then(inserted => {

                            if (inserted.insertedId) {
                                toast.success(`Hurray!!New tools.${data.name} added successfully`);

                                reset()
                            }
                            else {
                                toast.error('Failed to add a tools')
                            }
                        }


                        )
                }

                console.log('imgbb', result);
            })


    }
    return (
        <div>
            <form className='mt-10 text-3xl md:w-1/2 w-3/4 mx-auto text-center' onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="product Name"
                        className="input input-bordered w-full"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="price"
                        className="input input-bordered w-full"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">AvailableQuantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="availableQuantity"
                        className="input input-bordered w-full"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'availableQuantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">MinOrderQuantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="availableQuantity"
                        className="input input-bordered w-full"
                        {...register("minOrderQuantity", {
                            required: {
                                value: true,
                                message: 'minOrderQuantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea
                        row={5} col={20}
                        type="number"
                        placeholder="details"
                        className="input input-bordered w-full"
                        {...register("details", {
                            required: {
                                value: true,
                                message: 'details is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>





                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms md:w-1/4  hover:font-medium px-5 py-2 rounded-md text-sm font-bold cursor-pointer' type="submit" value="Add" />
            </form>

        </div>
    );
};

export default AddTools;