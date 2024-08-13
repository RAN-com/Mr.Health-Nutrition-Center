import React from 'react'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import {Routes,Route} from 'react-router-dom'
import Nutrition from '../Pages/Nutrition'
import About from '../user/About'
// import Form from '../Pages/Form'
import NutritionInfo from '../Form/NutritionInfo'
import NutritionDeficiencies from '../Form/Nutrition'
import VitaminsList from '../Form/Vitaminlist'
import CareersForm from '../../Compontents/CareerFrom/Careers'
import WellnessCoachOverview from '../Detalis/Details'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/Nutrition' element={<Nutrition/>}/>
        {/* <Route path='/Form' element={<Form/>}/> */}
        <Route path="about/:id" element={<About />} />
        <Route path="/from" element={<NutritionInfo />} />
        <Route path="/fro" element={<NutritionDeficiencies />} />
        <Route path="/fr" element={<VitaminsList />} />
        <Route path="/fr" element={<VitaminsList />} />
        <Route path="/Careers" element={<CareersForm />} />
        <Route path="/Detalis" element={<WellnessCoachOverview />} />
    </Routes>
  )
}

export default Routers