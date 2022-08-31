import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [navbarBtn, setNavbarBtn] = useState(false);
  const [menu, setMenu] = useState('menu1')
  const myRef = useRef(null)

  const onNavScroll = () =>{
    if (window.scrollY >= 90) {
      setNavbarBg(true)
    } else {
      setNavbarBg(false)
    }

    if (window.scrollY >= 400) {
      setNavbarBtn(true)
    } else {
      setNavbarBtn(false)
    }
  }

  const scrollDown = () => myRef.current.scrollIntoView()

  const products = {
    menu1:{title:'Branding & Marketing', img:'/assets/social-media-post.png', desc:'Market Research, Brand Development (untuk UMKM & Startups), Conceptual Rebranding, Integrated Marketing Communication, Brand Experience Development'},
    menu2:{title:'Personal Branding', img:'/assets/excellent-review.png', desc:'SMM + Personal Branding, Personal Branding Development, Personal Branding Coaching'},
    menu3:{title:'Digital & Social Media', img:'/assets/social-media-marketing-in-mobile-online.png', desc:'Digital Marketing Plan, SEO & SEM, Content Development & Marketing, Social Media Management Digital Ads Management, Website Development'},
    menu4:{title:'Design, Photo & Video', img:'/assets/marketing-strategy.png', desc:'Logo Concept & Design, Visual Guideline Corporate Identity, Marketing Tools Design Illustration Mascot Design, Packaging Design Company Profile, Proposal/Strategic Presentation, Seminar Presentation, Motion Graphic & Video'}
  }

  useEffect(()=>{
    window.addEventListener('scroll', onNavScroll);
  },[])

  return (
    <div className="App">
      <div>
        <div className="fixed container max-w-none z-20">
          <nav className={`transition-all duration-700 ${navbarBg ? 'bg-yellow-50' : 'bg-transparent'}`}>
          {/* <nav className={`transition-all duration-700 ${(props.bg || toggleNav) ? 'bg-blueLogo' :'bg-transparent'}`}> */}
            <div className="container px-6 mx-auto flex justify-between items-center">
              <div className="flex items-center sm:py-5 py-4">
                <img src='/assets/logo2-2.png' className={`transition-all duration-700 ${navbarBg ? 'md:h-4 h-3' : 'md:h-6 h-4'}`}/>
              </div>
              <a href='https://wa.me/6285773433977' target='_blank'>
                <button className={`transition-all duration-700 ${navbarBtn ? '' : 'hidden'} sm:px-3 px-2 py-1 mx-1 shadow-lg text-gray-50 hover:text-gray-100 focus:text-gray-100 font-bold sm:text-md text-xs transition-colors duration-200 transform bg-orange-500 rounded-xl focus:outline-none sm:w-auto sm:mx-1 hover:bg-orange-700`}>
                  Contact Us
                </button>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Section 1 */}
      <div style={{ backgroundImage: "url('/assets/hero2.png')"}} className="container bg-[center_right_-20rem] sm:bg-top max-w-none h-screen bg-cover sm:px-14 px-4 flex mx-auto space-y-6 py-20 flex-row items-center">
        <div className="sm:mt-10 sm:py-9 py-4 md:w-3/5 sm:w-3/5 w-full lg:mx-6 mx-2">
          <div className="md:px-10 text-left">
            <p className="text-2xl font-semibold tracking-tight font-sans text-left text-gray-800 lg:text-4xl md:text-3xl w-full lg:leading-snug leading-snug mb-8">
              Layanan Creative Agency Sebagai Solusi Branding bagi UMKM di Era Digital
            </p>
            <button onClick={scrollDown} className="px-4 py-2 mx-1 shadow-lg text-gray-50 hover:text-gray-100 focus:text-gray-100 font-bold text-lg transition-colors duration-200 transform bg-orange-500 rounded-xl focus:outline-none sm:w-auto sm:mx-1 hover:bg-orange-400 focus:bg-yellow-500 focus:ring focus:ring-orange-300 focus:ring-opacity-40">
              View More
            </button>
            <a href='https://wa.me/6285773433977' target='_blank'>
              <button className="px-4 py-2 mx-1 shadow-lg text-amber-500 hover:text-gray-100 focus:text-gray-100 font-bold text-lg transition-colors duration-200 transform bg-white border-2 border-amber-500 rounded-xl focus:outline-none sm:w-auto sm:mx-1 hover:bg-amber-500 focus:bg-yellow-500 focus:ring focus:ring-orange-300 focus:ring-opacity-40">
                Contact us
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-yellow-200 max-w-none md:px-14 px-6 flex flex-col mx-auto space-y-6 py-16 md:flex-row md:items-center">
        <div ref={myRef} className="container flex flex-col items-center md:px-4 px-1 mx-auto text-center">
          <p className="block my-20 max-w-2xl md:text-xl text-lg text-gray-900">
            <span className='text-orange-600 font-bold underline uppercase'>Kangs Creative </span>adalah sebuah Creative Agency yang menawarkan jasa dan layanan yang berfokus pada tim kreatif dan desain.Hadir untuk membantu para UMKM dalam untuk menjadi lebih optimal di dunia digital maupun periklanan mempromosikan bisnisnya
          </p>
          <p className="block max-w-2xl text-5xl mt-10 py-3 font-bold text-gray-900">
            Our Services
          </p>
          
          <div className="sm:p-5 w-full sm:w-auto overflow-hidden rounded-lg">
              <div className="grid grid-cols-2 sm:flex sm:-mx-1">
                  <button onClick={()=>setMenu('menu1')} className="w-11/12 sm:px-4 py-1 my-1 mx-auto shadow-lg text-orange-500 hover:text-gray-50 focus:text-gray-50 font-bold sm:text-lg text-xs transition-colors duration-200 transform bg-yellow-50 rounded-xl focus:outline-none sm:w-auto sm:mx-1 hover:bg-orange-500 focus:bg-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-40">
                    Branding & Marketing
                  </button>
                  
                  <button onClick={()=>setMenu('menu2')} className="w-11/12 sm:px-4 py-1 my-1 mx-auto shadow-lg text-orange-500 hover:text-gray-50 focus:text-gray-50 font-bold sm:text-lg text-xs transition-colors duration-200 transform bg-yellow-50 rounded-xl focus:outline-none sm:w-auto sm:mx-1 hover:bg-orange-500 focus:bg-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-40">
                    Personal Branding
                  </button>

                  <button onClick={()=>setMenu('menu3')} className="w-11/12 sm:px-4 py-1 my-1 mx-auto shadow-lg text-orange-500 hover:text-gray-50 focus:text-gray-50 font-bold sm:text-lg text-xs transition-colors duration-200 transform bg-yellow-50 rounded-xl focus:outline-none sm:w-auto sm:mx-1 hover:bg-orange-500 focus:bg-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-40">
                    Digital & Social Media
                  </button>

                  <button onClick={()=>setMenu('menu4')} className="w-11/12 sm:px-4 py-1 my-1 mx-auto shadow-lg text-orange-500 hover:text-gray-50 focus:text-gray-50 font-bold sm:text-lg text-xs transition-colors duration-200 transform bg-yellow-50 rounded-xl focus:outline-none sm:w-auto sm:mx-1 hover:bg-orange-500 focus:bg-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-40">
                    Design, Photo & Video
                  </button>
              </div>
          </div>
          <div className='container sm:w-3/4 w-5/6 my-3 mx-auto grid sm:grid-cols-2 grid-cols-1 flex items-center bg-yellow-100 rounded-xl shadow-xl'>
            <div className='mx-auto'>
              <img className='transition-all duration-700 w-full mx-auto sm:p-10 p-2' src={products[menu].img} />
            </div>
            <div className='text-left md:pr-16 pr-7 sm:pl-0 pl-7 pb-3'>
              <p className='transition-all duration-700 font-bold sm:text-4xl text-2xl'>{products[menu].title}</p>
              <p className='transition-all duration-700 sm:text-lg text-sm my-4'>{products[menu].desc}</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-yellow-800">
        <div className="container px-6 py-4 mx-auto">
            <div className="flex md:justify-between flex-col md:flex-row">
                <div className="w-full lg:w-2/5">
                    <div className="px-6 text-left flex items-center">
                        <div>
                          <img src='/assets/kangscreative-1.png' className='w-64'/>
                        </div>
                        <p className="max-w-md mt-2 mx-5 text-gray-100">Layanan Creative Agency Sebagai Solusi Branding bagi UMKM di Era Digital dengan konsep Ads dan Endorsement</p>
                    </div>
                </div>

                <div className="mt-6 mx-auto sm:mx-10">
                    <div className="flex items-center">
                      <a href="https://wa.me/6285773433977" target='_blank' className="mx-4 text-gray-200 text-gray-100" aria-label="Whatsapp">
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-whatsapp md:w-12 w-6 fill-current" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                      </a>

                      <a href="https://www.instagram.com/kangscreative/" target='_blank' className="mx-4 text-gray-200 text-gray-100" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-instagram md:w-12 w-6 fill-current" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </a>
                    </div>
                </div>
            </div>

            <hr className="h-px my-3 border-none bg-yellow-400"/>

            <div>
                <p className="text-center text-white">© kangscreative 2022 - All rights reserved</p>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
