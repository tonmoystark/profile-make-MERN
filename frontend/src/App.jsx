import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProfileForm from './pages/ProfileForm'
import AllProfiles from './pages/AllProfiles'
import EditProfile from './pages/EditProfile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllProfiles />} />
        <Route path='/create-profiles' element={<ProfileForm />} />
        <Route path={`/edit-profiles/:id`} element={<EditProfile />} />
      </Routes>
    </Router>
  )
}

export default App