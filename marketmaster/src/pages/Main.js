import React from 'react'
import { Outlet } from 'react-router-dom'
import Slider from '../layout/Slider'
import Header from '../layout/Header';

class Main extends React.Component {
  render() {
    return <div className='app'>
      <div className='m-slide'>
        <Slider />
      </div>
      <div className='m-content'>
        <Header />
        {/*dynamic pages */}
        <Outlet />
      </div>
    </div>
  }
}
export default Main