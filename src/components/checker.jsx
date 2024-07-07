export function Checker(){
    return(
        < div className="h-full bg-[#F6F0DB] w-full  items-center flex flex-col">
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
                   </div> 
                </div>
            </nav>
        <div class="container mx-auto w-11/12 md:w-4/5 mt-24">
            
        <header class="flex flex-col md:flex-row items-center py-5">
            <div class="w-24 h-24 bg-gray-300 rounded-full mb-4 md:mb-0 md:mr-5">
                <img src="#" alt="#" class="w-full h-full rounded-full"/>
            </div>
            <div class="flex flex-col items-center md:items-start">
                <h1 class="m-0 font-bold text-center md:text-left">NAME</h1>
                <p class="my-1">Examiner</p>
                <p class="my-1">Volunteer since 2020</p>
                <button class="bg-yellow-300 border-none p-2 cursor-pointer mt-2 md:mt-0 font-bold  hover:bg-yellow-400 rounded-md">Edit Profile</button>
            </div>
        </header>
        <div class="flex items-center my-5">
            <input type="text" placeholder="Search ..." class="flex-grow p-2 border border-gray-300 rounded-l"/>
            <button class="p-2 bg-gray-300 border-none cursor-pointer rounded-r  hover:bg-gray-400"><i class="fa fa-search"></i></button>
        </div>
        <div class="my-5">
            <h2 class="mb-5 font-bold text-center md:text-left">AUDIO-BOOKS TO BE CHECKED:</h2>
            <div class="flex flex-col md:flex-row border border-gray-300 p-5 bg-white">
                <img src="#" alt="#" class="w-full md:w-36 h-48 mb-4 md:mb-0 md:mr-5"/>
                <div class="flex flex-col flex-grow">
                    <h3 class="m-0 font-bold">Book Name</h3>
                    <p class="my-1 font-bold">Author Name:</p>
                    <p class="my-1 font-bold">Recorded by:</p>
                    <a href="#" class="text-blue-500 underline my-2">Link to the Audio book</a>
                    <button class="bg-gray-300 border-none p-2 cursor-pointer my-2 w-full md:w-32 font-bold  hover:bg-gray-400">DOWNLOAD</button>
                    <textarea placeholder="Remarks:" class="p-2 border border-gray-300 rounded my-2 h-24"></textarea>
                    <button class="bg-gray-300 border-none p-2 cursor-pointer my-2 w-full md:w-32 font-bold  hover:bg-gray-400">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}