import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import Button from '../ui/Button'

const ProfileForm = () => {

    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [image, setImage] = useState(null)

    const formHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("name", name)
        formData.append("bio", bio)
        formData.append("image", image)

        const response = await axios.post("http://localhost:3000/create-profiles", formData)

        console.log(response.data);

        setName("")
        setBio("")
        setImage(null)
    }

    return (
        <div className="bg-pink-800 min-h-screen">
            <NavBar />

            <div className="flex justify-center px-4 py-12">
                <form
                    onSubmit={formHandler}
                    className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
                >
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Create Profile
                    </h1>

                    <p className="text-gray-500 mb-8">
                        Add your information and profile image.
                    </p>

                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200"
                        />
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="bio"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Bio
                        </label>

                        <input
                            type="text"
                            id="bio"
                            name="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Tell us about yourself"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200"
                        />
                    </div>

                    <div className="mb-8">
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Image
                        </label>

                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-600 file:mr-4 file:border-0 file:rounded-md file:bg-pink-100 file:px-4 file:py-2 file:font-medium file:text-pink-700 hover:file:bg-pink-200"
                        />
                    </div>


                    <Button type={'submit'} text={'Create Profile'} variant={'general'} classes={'w-full font-semibold hover:cursor-pointer'} />
                </form>
            </div>
        </div>
    )
}

export default ProfileForm