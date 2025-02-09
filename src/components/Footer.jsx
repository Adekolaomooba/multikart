import React, { useState } from 'react'
import logo from '../assets/images/headerImages/headerlogo.png'

export default function Footer() {

  const myAccountList = [
    { id: 1, list: 'Women' },
    { id: 2, list: 'Clothing' },
    { id: 3, list: 'Accessoies' },
    { id: 4, list: 'Featured' }
  ]

  const whyWeChooseList = [
    { id: 5, list: 'Shipping & Return' },
    { id: 6, list: 'Secure Shopping' },
    { id: 7, list: 'Gallary' },
    { id: 8, list: 'Affiliates' },
    { id: 9, list: 'Contacts' }
  ]

  const storeInfo = [
    { id: 10, list: 'Multikart Demo Store, Demo store India 345-659' },
    { id: 11, list: 'Call Us: 123-456-7898' },
    { id: 12, list: 'Email Us: Support@Fiot.com' },
    { id: 13, list: 'Fax: 123456' }
  ]

  const [hovered, setHovered] = useState(null)

  return (
    <div className=' w-full h-[45vh] bg-gray-50 '>
      <div className=' max-w-[1400px] mx-auto px-2 '>
        <div className=' flex justify-center py-8 '>
          <div className=' border-r border-gray-300 w-full hidden lg:block '>
            <h3 className=' font-bold '>KNOW IT ALL FIRST</h3>
            <p className=' text-sm '>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
          </div>
          <div className=' w-full flex justify-center lg:justify-end gap-3  '>
            <input type="email" placeholder='Enter your email'
              className=' bg-white h-10 border border-gray-300 p-2
                    w-[350px] rounded ' />
            <button className=' bg-[#ff4c3b] h-10 text-white px-5 text-sm border border-[#ff4c3b]
                      hover:bg-white hover:text-black transition-all duration-300 ease-in-out '>
              SUBSCRIBE
            </button>
          </div>
        </div>
        <hr className=' border-gray-300 ' />
        <div className=' w-full hidden sm:flex md:flex lg:flex sm:flex-wrap md:flex-wrap lg:flex-nowrap gap-20 py-14 '>
          <div className=' w-full flex  '>
            <div className=' w-full '>
              <img src={logo} alt="" />
              <p className=' text-sm text-gray-500 leading-10 mt-3 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
              <div className=' flex gap-10 mt-8 '>
                <i className=' pi pi-instagram hover:text-[#ff4c3b] cursor-pointer '></i>
                <i className=' pi pi-facebook hover:text-[#ff4c3b] cursor-pointer '></i>
                <i className=' pi pi-google hover:text-[#ff4c3b] cursor-pointer '></i>
                <i className=' pi pi-twitter hover:text-[#ff4c3b] cursor-pointer '></i>
                <i className=' pi pi-instagram hover:text-[#ff4c3b] cursor-pointer '></i>
                <i className=' pi pi-wifi hover:text-[#ff4c3b] cursor-pointer '></i>
              </div>
            </div>
            <div className=' w-full  '>
              <div className=' w-fit ml-auto sm:mr-auto '>
                <h3 className=' font-bold mb-5 '>MY ACCOUNT</h3>
                <ul className=' overflow-hidden '>
                  {
                    myAccountList.map((li, index) => {
                      const isHovered = li.id === hovered
                      return (
                        <li key={index}
                          className=' text-sm w-fit text-gray-500 mb-2 cursor-pointer '
                          onMouseEnter={() => setHovered(li.id)}
                          onMouseLeave={() => setHovered(null)}>
                          {li.list}
                          <hr className={`border-[#ff4c3b] w-full -translate-x-full
                                        ${isHovered && ('translate-x-0')}
                                        transition-all duration-300 ease-in-out`} />
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className=' w-full flex px-5 bg '>
            <div className=' w-full '>
              <div className=' w-fit mr-auto '>
                <h3 className=' font-bold mb-5 '>WHY WE CHOOSE</h3>
                <ul className=' overflow-hidden '>
                  {
                    whyWeChooseList.map((li, index) => {
                      const isHovered = li.id === hovered
                      return (
                        <li key={index}
                          className=' text-sm w-fit text-gray-500 mb-2 cursor-pointer '
                          onMouseEnter={() => setHovered(li.id)}
                          onMouseLeave={() => setHovered(null)}>
                          {li.list}
                          <hr className={`border-[#ff4c3b] w-full -translate-x-full
                                        ${isHovered && ('translate-x-0')}
                                        transition-all duration-300 ease-in-out`} />
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className=' w-full  '>
              <div className=' w-fit mr-auto '>
                <h3 className=' font-bold mb-5 '>STORE INFORMATION</h3>
                <ul className=' overflow-hidden w-[200px] '>
                  {
                    storeInfo.map((info, index) => {
                      return (
                        <li key={index}
                          className=' text-sm w-fit text-gray-500 mb-5 cursor-auto flex gap-2 '>
                            <i className={`${index==0 ? 'pi pi-map-marker' : 
                                            index==1 ? 'pi pi-phone' :
                                            index==2 ? 'pi pi-envelope' :
                                            index==3 ? 'pi pi-telegram' : ''}`}></i>
                          <p>{info.list}</p>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* FOR SMALL SCREEN */}
        <div></div>
      </div>
    </div>
  )
}
