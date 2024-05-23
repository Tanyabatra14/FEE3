import React from 'react'
import './section1.css'

const Section1 = () => {
  return (
      <div className="wrapper">
          <img className="place-your-image-here-double-click-to-edit" src="images/place_your_image_here_dou_7.png" alt="" width="602" height="477"/>
          <div className="design">
            <img className="buttom" src="images/buttom_15.png" alt="" width="152" height="40"/>
            <div className="wrapper-5">
              <div className="row group">
                <img className="graphics" src="images/graphics.png" alt="" width="220" height="221"/>
                <img className="graphic-two" src="images/graphic_two.png" alt="" width="219" height="219"/>
              </div>
            </div>
          </div>
          <div className="text-2">
            <img className="tittle" src="images/tittle_7.png" alt="How happy are you?" width="359" height="155" title="How happy are you?"/>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <p className="buttom-2">Read more</p>
            <img className="subtittle" src="images/subtittle_2.png" alt="Happiness in numbers" width="234" height="105" title="Happiness in numbers"/>
            <p className="description-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <p className="buttom-3">Read More &gt;</p>
          </div>
        </div>
  )
}

export default Section1
