
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../ui/Button";

const EditProfile = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [bio, setBio] = useState("");

    useEffect(() => {

        axios
            .get(`http://localhost:3000/profiles/${id}`)
            .then((res) => {
                const profile = res.data.profile;

                setName(profile.name);
                setBio(profile.bio);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [id]);

    const updateHandler = async (e) => {
        e.preventDefault();

        try {

            await axios.patch(`http://localhost:3000/profiles/${id}`, {
                name,
                bio
            });

            navigate("/");

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="bg-pink-800 min-h-screen">

            <NavBar />

            <div className="flex justify-center px-4 py-12">

                <form
                    onSubmit={updateHandler}
                    className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
                >

                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Edit Profile
                    </h1>

                    <p className="text-gray-500 mb-8">
                        Update your profile information.
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200"
                        />

                    </div>

                    <div className="mb-8">

                        <label
                            htmlFor="bio"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Bio
                        </label>

                        <textarea
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200"
                        />

                    </div>

                    <Button 
                        type={'submit'}
                        text={'Update Profile'}
                        variant={'general'}
                        classes={'w-full hover:cursor-pointer font-bold'}
                    />

                </form>

            </div>

        </div>
    );
};

export default EditProfile;
