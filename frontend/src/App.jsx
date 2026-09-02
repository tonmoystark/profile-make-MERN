import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProfileForm from './pages/ProfileForm'
import AllProfiles from './pages/AllProfiles'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllProfiles />} />
        <Route path='/create-profiles' element={<ProfileForm />} />
      </Routes>
    </Router>
  )
}

export default App