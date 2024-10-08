import React, { useState } from 'react'
import Header from '../../component/Header/Header'
import './home.css'
import ExploreMenu from '../../component/ExplorMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'


const Home = () => {
    const [category, setCategory] = useState("");
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload />
        </div>
    )
}

export default Home
