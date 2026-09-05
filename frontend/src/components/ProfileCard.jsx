import { useEffect, useState } from "react"
import axios from "axios"
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom"

const ProfileCard = () => {

    const [profiles, setProfiles] = useState([])

    useEffect(() => {
      
    axios.get("http://localhost:3000/profiles").then((res) => {
        console.log(res.data.profiles)
        setProfiles(res.data.profiles)
    }).catch((err) => {
        console.log(err)
    })
      
    }, [])

    const navigate = useNavigate()

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/profiles/${id}`)
            setProfiles(prevProfiles => prevProfiles.filter(profile => profile._id !== id))
        } catch {
            console.log("delete button not working")
        }
    }
    

  return (
    <div className="flex-col md:flex-row flex ">
        {profiles.length > 0 ? profiles.map((profile, idx) => (
            <div key={idx} className="w-80 bg-pink-600 m-5 rounded-2xl shadow-lg overflow-hidden">
    <div className="h-64 bg-gray-100">
        <img
            src={profile.image}
            alt="this is a pic"
            className="w-full h-full object-cover"
        />
    </div>

    <div className="px-6 pt-6">
        <h1 className="text-2xl font-bold text-gray-800">
            {profile.name}
        </h1>

        <p className="text-gray-900 leading-relaxed">
            {profile.bio}
        </p>
    </div>
    <div className="flex gap-2 ml-5 my-4">
        <Button text="Edit" variant="primary" onClick={() => navigate(`/edit-profiles/${profile._id}`)} />
        <Button text="Delete" variant="danger" onClick={() => deleteHandler(profile._id)} />
    </div>
</div>
        )) : <div>
            <h1 className="text-2xl font-semibold text-rose-950">Sorry! Nothing to show yet</h1>
        </div>}
        
    </div>
  )
}

export default ProfileCard