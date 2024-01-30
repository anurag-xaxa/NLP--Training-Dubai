import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../assets/style.css/Owl.css';

// ------------- Images ----------------
import img1 from '../assets/images/Screenshot_1.png'
import img2 from '../assets/images/Screenshot_2.png'
import img3 from '../assets/images/Screenshot_3.png'
import img4 from '../assets/images/Screenshot_4.png'
import img5 from '../assets/images/Screenshot_5.png'
import img6 from '../assets/images/Screenshot_6.png'
import img7 from '../assets/images/Screenshot_7.png'
import img8 from '../assets/images/Screenshot_8.png'
import img9 from '../assets/images/Screenshot_9.png'
import img10 from '../assets/images/Screenshot_10.png'


const Owl = () => {
   const options={
        // loop: true,
        margin:2,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    };
    return (
        <>
            
            <OwlCarousel
                className='owl-theme'
                items="3"   
                autoplay
                nav
                dots
                loop
                {...options}
            >
                <div className='item'>
                    {/* <h4>1</h4> */}
                    <img className="slider-image" src={img1} alt="Slide 1" />

                </div>
                <div className='item'>
                    {/* <h4>2</h4> */}
                    <img className="slider-image" src={img2} alt="Slide 2" />

                </div>
                <div className='item'>
                    {/* <h4>3</h4> */}
                    <img className="slider-image" src={img3} alt="Slide 3" />

                </div>
                <div className='item'>
                    {/* <h4>4</h4> */}
                    <img className="slider-image" src={img4} alt="Slide 4" />

                </div>
                <div className='item'>
                    {/* <h4>5</h4> */}
                    <img className="slider-image" src={img5} alt="Slide 5" />
                </div>                
                <div className='item'>
                    {/* <h4>1</h4> */}
                    <img className="slider-image" src={img6} alt="Slide 6" />

                </div>
                <div className='item'>
                    {/* <h4>2</h4> */}
                    <img className="slider-image" src={img7} alt="Slide 7" />

                </div>
                <div className='item'>
                    {/* <h4>3</h4> */}
                    <img className="slider-image" src={img8} alt="Slide 8" />

                </div>
                <div className='item'>
                    {/* <h4>4</h4> */}
                    <img className="slider-image" src={img9} alt="Slide 9" />

                </div>
                <div className='item'>
                    {/* <h4>5</h4> */}
                    <img className="slider-image" src={img10} alt="Slide 10" />
                </div>                
            </OwlCarousel>
        </>
    )
}

export default Owl;