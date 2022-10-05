import React, {useState} from "react";
import { Link } from "gatsby";
import bars from '../img/bars.png';
import cancel from '../img/cancel.png';

const Navbar = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const onHamClick = () => {
      setOpenMobileMenu(true);        
  }

return (
  <nav className='flex pt-4 pb-2 justify-around lg:justify-between mx-0 lg:mx-32 px-4 lg:px-32 items-center'>
    <Link to="/">
        <span className='italic font-bold text-primary'>Ayuda</span>content
    </Link> 

      <div             
          className={`hidden lg:flex justify-center items-center`}
      >
          <ul 
              className=' lg:flex items-center space-x-10 text-darker'
              style={{fontSize:'15px'}}    
          >                              
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>            
          </ul>            
      </div>

      <div 
          className="lg:block hidden"
      >
          <Link to="/products">
              <button 
                  className="px-6 py-3 text-white text-sm             
                  font-semibold rounded-full border 
                  border-purple-200 bg-primary"
              >
                Get Started
              </button>
          </Link> 
      </div>

      {
          openMobileMenu?
          (
              <div 
                  className="mobileMenu absolute top-0 left-0 pt-10
                   h-screen lg:hidden block bg-white z-40 w-full"
              >
                  <ul   
                      className='space-y-8 text-center'              
                      style={{fontSize:'42px'}}    
                  >
                    <div 
                        className='cursor-pointer mb-6 flex justify-center items-center'                             
                    >
                      <img
                        src={cancel}
                        alt="cancel icon"
                        className='text-center'
                        onClick={()=>setOpenMobileMenu(false)}  
                      />            
                    </div>

                    <Link to="/">
                      <span className='italic font-bold text-primary'>Ayuda</span>content
                  </Link> 

                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                    <Link className="navbar-item" to="/products">
                      Products
                    </Link>
                    <Link className="navbar-item" to="/blog">
                      Blog
                    </Link>
                  </ul>
              </div>

          )
          :
          ""
      }
      

      <div 
          className='lg:hidden block cursor-pointer'
          onClick={onHamClick}    
      >
          <img
              src={bars}
              alt="hamburger icon"
              className='h-5'
          />            
      </div>

      
  </nav>
)
}

export default Navbar



// <div className="navbar-start has-text-centered">
//                   <Link className="navbar-item" to="/about">
//                     About
//                   </Link>
//                   <Link className="navbar-item" to="/products">
//                     Products
//                   </Link>
//                   <Link className="navbar-item" to="/blog">
//                     Blog
//                   </Link>
//                   <Link className="navbar-item" to="/contact">
//                     Contact
//                   </Link>
//                   <Link className="navbar-item" to="/contact/examples">
//                     Form Examples
//                   </Link>
//                 </div>