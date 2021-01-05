import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Restaurants from './components/restaurants/Restaurants';
import axios from 'axios';
import './App.css';


const { REACT_APP_GITHUB_CLIENT_ID } = process.env;

const App2 = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalHitCount,  setTotalHitCount] = useState(1);

  const maxPage = Math.ceil(totalHitCount / 12);

  const onNextClick = () => {
    setPage(page + 1);
  }

  const onPrevClick = () => {
    setPage(page - 1);
  }

  useEffect(async () => {
    // this.setState({ loading: true });
    setLoading(true);

    const res = await axios.get(`https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${REACT_APP_GITHUB_CLIENT_ID}&areacode_l=AREAL2254&hit_per_page=12&offset_page=${page}`);

    setRestaurants(res.data.rest);
    setLoading(false);
    setTotalHitCount(Math.min(1000, res.data.total_hit_count));
  }, [page]);

    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Restaurants loading={loading} restaurants={restaurants}/>
        </div>
        <div>
          <button onClick={onPrevClick} disabled={page === 1}>前</button>
          {page} / {maxPage}
          <button onClick={onNextClick} disabled={page === maxPage}>次</button>
        </div>
      </div>
    );
}



export default App2;