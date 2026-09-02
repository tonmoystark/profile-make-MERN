import { useEffect, useState } from "react"
import axios from "axios"
import Button from "../ui/Button"

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
    

  return (
    <div className="flex-col md:flex-row flex gap-4 ">
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
        <Button text="Edit" variant="primary" />
        <Button text="Delete" variant="danger" />
    </div>
</div>
        )) : <div>
            Sorry! Nothing to show yet
        </div>}
        
    </div>
  )
}

export default ProfileCard