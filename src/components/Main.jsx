import { Link } from "react-router-dom"
import { useRef } from "react"

export function Main(){
    
    
    return (
        <>
          <div className="h-full bg-[#F6F0DB] w-full  items-center flex flex-col">
            <nav className="flex justify-between z-10 px-5 items-center h-[10%] fixed w-screen bg-black lg:px-10">
                <img className="h-[80%] w-[10%] rounded-lg lg:h-[70%] lg:w-[3%] hover:cursor-pointer" src="/logo.jpg " alt="" />
                <svg className="h-[80%] w-[10%] lg:hidden" width="800px" height="800px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Editable-line" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><line fill="none" id="XMLID_103_" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="7" x2="25" y1="16" y2="16"/><line fill="none" id="XMLID_102_" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="7" x2="25" y1="25" y2="25"/><line fill="none" id="XMLID_101_" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="7" x2="25" y1="7" y2="7"/></svg>           
                <div className="hidden lg:h-[80%] lg:w-[100%] lg:ml-[30%] lg:text-white lg:flex gap-8 justify-end items-center">
                  <ul className="h-[100%] w-[40%] flex justify-between items-center">
                    <li className="hover:cursor-pointer">Home</li>
                    <li className="hover:cursor-pointer">Trending</li>
                    <li className="hover:cursor-pointer">Persona</li>
                    <li className="hover:cursor-pointer">Contact Us</li>
                  </ul>
                  <div className="w-[30%] h-[100%] justify-center items-center gap-20 flex">
                  <Link to={"/Login"}><button className="h-[50%] w-[200%] rounded-xl bg-white text-black hover:scale-[1.05] transition-all hover:text-white hover:bg-black hover:border-2 hover:border-white">Login</button></Link>
                  <Link to={"/Signup"}><button className="h-[50%] w-[200%] rounded-xl bg-white text-black hover:scale-[1.05] transition-all hover:text-white hover:bg-black hover:border-2 hover:border-white">Sign Up</button></Link>
                  </div> 
                </div>
            </nav>
            <div className="h-full w-[90%] flex flex-col  items-center  mt-[18%] lg:mt-[8%]">
                 <div className="h-[15%] p-5 w-[100%] flex justify-center items-center bg-white rounded-md">
                  <p className="text-sm  font-semibold text-center ">परम पूज्य गुरुजी और परम वंदनीय माताजी के आशीर्वाद से और आपके और आपके जैसे अन्य परिजनों के माध्यम से रिकार्ड हुए अनेकों औडियो पुस्तक available हैं ! आप इसको जन जन तक पहुंचाने में अपनी भागीदारी निभा सकते हैं !</p>
                 </div>
                 <div className="mt-12 flex bg-white rounded-md p-5 flex-col items-center lg:flex-row  ">
                   <video className="w-[100%] lg:w-[60%] " src="/music.mp4" autoPlay loop muted></video>
                   <div className="flex flex-col justify-center items-center  lg:w-[30%] lg:h-[20%] lg:flex lg:flex-col lg:justify-center lg:items-center ">
                   <h1 className="text-4xl font-semibold mt-16 lg:m-0 lg:p-0 lg:text-5xl lg:mb-5">सुनो और जानें</h1>
                   <button className="bg-black mt-2 text-white px-5 py-2 rounded-3xl text-[13px] font-bold hover:bg-white hover:scale-[1.05] transition-all hover:text-black hover:border-black hover:border-2 ">सीखना शुरू करें</button>
                   </div>
                 </div>
                 <div className="mt-16 flex bg-white p-5 rounded-md w-[100%] flex-col items-center ">
                   <h1 className="text-2xl font-semibold mt-5">TRENDING </h1>
                   <div className="w-[100%] h-[200px] flex gap-5 items-center bg-white p-5 lg:h-[400px]">
                       <div className="w-[25%] h-[90%] bg-yellow-100 rounded-xl lg:w-[20%]">
    
                       </div>
                       <div className="w-[25%] h-[90%] bg-yellow-100 rounded-xl lg:w-[20%]">
    
                       </div>
                       <div className="w-[25%] h-[90%] bg-yellow-100 rounded-xl lg:w-[20%]">
    
                       </div>
                   </div>
                   
                 </div>
                 <div className="mt-10 flex  w-[100%] p-5 flex-col justify-center items-center lg:w-[100%] lg:h-[600px]">
                 <h1 className="text-2xl font-semibold ">PERSONA </h1>
                 <div className="w-[60%] lg:w-[100%] lg:h-[100%]  lg:flex lg:justify-center lg:items-center ">
                 <Link to={"/Recorder"}><div className="flex flex-col items-center m-5 bg-white rounded-xl transition-all transform hover:scale-[1.10]  hover:border-black hover:border-2 lg:flex-col lg:flex lg:justify-center lg:items-center lg:w-[20%] lg:m-10">
                     <img className="h-[50%] w-[50%] mt-5 " src="/user.png" alt="" />
                     <h2>RECORDER</h2>
                 </div></Link>
                 <Link to={"/Checker"}><div className="flex flex-col items-center m-5 bg-white rounded-xl transition-all transform hover:scale-[1.10] hover:border-black hover:border-2 lg:flex-col lg:flex lg:justify-center lg:items-center lg:w-[20%] lg:m-10">
                     <img className="h-[50%] w-[50%] mt-5" src="/user.png" alt="" />
                     <h2>CHECKER</h2>
                 </div></Link>
                 <Link to={"/Editor"}><div className="flex flex-col items-center m-5 bg-white rounded-xl transition-all transform hover:scale-[1.10] hover:border-black hover:border-2 lg:flex-col lg:flex lg:justify-center lg:items-center lg:w-[20%] lg:m-10">
                     <img className="h-[50%] w-[50%] mt-5" src="/user.png" alt="" />
                     <h2>EDITOR</h2>
                 </div></Link>
                 </div>
                 <div className="h-[10%] lg:h-[15%] p-5 w-[100%] flex justify-center items-center bg-white rounded-md mb-5">
                  <p className="text-sm  font-semibold text-center ">क्षमा कीजिएगा अगर औडियो पुस्तक आपके चयन किये हुए विषय के अनुसार नहीं है॥ यह इसलिए हो सकता है अगर चयनित विषय में अब औडियो पुस्तक शेष न रही हों...
                  आवश्यक सूचना: औडियो पुस्तक सुनने हेतु आप गूगल प्लेसटोर से निःशुल्क Audiomack ऐप्लकैशन डाउनलोड कीजिएगा </p>
                 </div>
                 </div>
                 
            </div>
            <footer className=" group h-[50%] p-5 w-[100%] text-white flex flex-col items-center bg-black lg:flex-row lg:flex lg:justify-center lg:items-center lg:gap-20 ">
            <div className="hidden lg:flex lg:flex-col lg:h-[200px]">
            <h1 className="text-xl m-5  border-white border-b-2"> Usefull Links</h1>
                <div className="flex gap-16 m-5 lg:flex-col ">
                  <ul>
                  <li className="hover:cursor-pointer">Home</li>
                    <li className="hover:cursor-pointer">Trending</li>
                    <li className="hover:cursor-pointer">Persona</li>
                    <li className="hover:cursor-pointer">Contact Us</li>
                  </ul>
                  
                </div>
                </div>
              <div className="lg:h-[200px] flex flex-col justify-center items-center lg:justify-start ">
            <h1 className="text-xl m-5  border-white border-b-2">Follow Us</h1>
                <div className="flex gap-16 ">
                  <img src="/3.svg" alt="" />
                  <img src="/4.svg" alt="" />
                  <img src="/5.svg" alt="" />
                  
                </div>
                </div>
                <div className="lg:h-[200px] flex flex-col justify-center items-center lg:justify-start">
                <h1 className="text-xl m-5  border-white border-b-2">Contact Us</h1>
                <div className="flex gap-16 ">
                  <h1>Email:   xyz@gmail.com</h1>
                  
                </div>
                </div>
            </footer>
           
          </div>
        </>
      )
    
}