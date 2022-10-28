import Meta from '../components/global/meta'

import Scripts from '../components/global/scripts'
import Script from 'next/script'
import Head from 'next/head'

export default function Home() {
  return (
    <>    
      <link rel="stylesheet" type="text/css" href="/css/home.css"/>
      <Meta/>
      <Scripts/> 
      <main>
        <div className='main-container'>
            <section id="section1">
                <div className='title' data-appear-on-scroll="false">
                    <h1>
                        TABERNACLE<br/><span>OF SALVATION</span><br/> <span>YOUTH</span>
                    </h1>
                </div>
                <div className='cross-picture-container' data-appear-on-scroll="false">
                    <div className='cross-picture'>
                </div>
                </div>
                <div className='trapazoid-container' data-appear-on-scroll="false">
                    <div className='trapazoid'>
                        <h3>But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin.<br/>1 John 1:7</h3> 
                    </div>
                </div>
            </section>
            
            <div className='seperation-line'></div>

            <section id="section2">
                <h3 className='about-us' data-appear-on-scroll="false">
                    “We are the youth of Tabernacle of Salvation. Add some other text here. Sample text to follow. Potato wedges probably are not best for relationships. He had a vague sense that trees gave birth to dinosaurs. The light in his life was actually a fire burning all around him.”
                    <div className='quotes'></div>
                </h3>
                <a className='learn-more' href="/about-us" data-appear-on-scroll="false">Learn More</a>
            </section>
            
            <div className='seperation-line'></div>
            
            <section id="section3">
                <h2 className='heading' data-appear-on-scroll="false">Contact</h2>
                <h3 className='contact-info' data-appear-on-scroll="false">Contact us for more information<br/>
                    tosy.youth@gmail.com || 13891 Asheville Hwy, Inman, SC 29349</h3>
                <a id="instagram-icon" href="https://www.instagram.com/t.o.s.youth/" data-appear-on-scroll="false">
                    <svg viewBox="0 0 164 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="instagram-icon-path" fillRule="evenodd" clipRule="evenodd" d="M42.6014 14.0424C27.2068 16.932 16.8719 25.5216 11.7387 39.6936L9.92976 44.6876L9.74034 80.8416C9.52386 122.178 9.6362 123.485 14.1811 132.5C18.9776 142.014 27.716 148.971 39.0783 152.322C44.4202 153.898 113.675 154.307 121.356 152.808C136.701 149.814 147.897 139.628 152.265 124.688C153.882 119.153 154.342 54.916 152.827 46.122C150.185 30.7888 139.477 19.1228 123.918 14.6248C118.785 13.1412 50.0274 12.6484 42.6014 14.0424ZM119.741 27.8384C130.329 30.2732 137.608 37.9692 139.684 48.9228C141.108 56.4376 140.197 118.495 138.602 122.605C135.768 129.91 130.335 135.41 123.162 138.236C118.191 140.194 49.5616 140.876 43.0118 139.032C33.278 136.292 27.1243 130.253 24.5737 120.938C23.0526 115.381 23.3421 49.9928 24.9099 45.078C27.9501 35.548 33.8344 30.1748 43.8827 27.7532C49.0339 26.5116 114.291 26.5848 119.741 27.8384ZM118.195 38.1336C113.922 39.0264 111.469 42.1 111.469 46.5604C111.469 54.9008 122.984 57.6812 127.512 50.4348C131.39 44.2312 125.599 36.586 118.195 38.1336ZM71.8722 48.1408C44.1582 55.2236 34.9545 89.2396 55.3885 109.062C73.0816 126.227 103.515 121.564 114.684 99.9768C129.254 71.8172 103.106 40.1576 71.8722 48.1408ZM91.751 62.9916C101.088 67.4776 106.465 77.6768 104.477 87.1264C100.641 105.354 78.1292 112.185 65.0764 99.0824C47.054 80.9912 68.5844 51.8604 91.751 62.9916Z" fill="#000"/>
                        <defs>
                            <radialGradient id="instagram-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.7333 170.667) rotate(-59.6308) scale(174.628 176.832)">
                                <stop stopColor="#FDF497"/>
                                <stop offset="0.421875" stopColor="#FD5949"/>
                                <stop offset="0.619867" stopColor="#D6249F"/>
                                <stop offset="0.984375" stopColor="#285AEB"/>
                            </radialGradient>
                        </defs>
                    </svg>                
                </a>
            </section>
        </div>
      </main>
    </>
  )
}
