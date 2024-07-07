import { Link } from "react-router-dom";
function Signup() {
  return (
    <div class="h-screen bg-[#e4e4c4] flex items-center justify-center">
      <div class="bg-[#ffffff] text-black  text-lg rounded-lg p-8 w-[70%] lg:w-[30%] ">
        <form class="w-[100%] flex flex-col items-center space-y-2">
          <img src="logo.jpg" class="w-24 h-24 rounded-md" alt="Logo" />
          <h1 class="my-4  text-center text-black font-bold text-xl">
            Sign in to your account
          </h1>
          
            <div className=" w-full ">
              <label for="Username" class="w-full text-sm">
                <b>Enter Username</b>
              </label>
              <input
                id="Username"
                type="text"
                placeholder="Username"
                class="w-full bg-white border border-[#000000] rounded p-2 h-8 text-sm"
              />
            </div>
            <div className=" w-full ">
              <label for="FullName" class="w-full text-sm">
                <b>Full Name</b>
              </label>
              <input
                id="FullName"
                type="text"
                placeholder="FullName"
                class="w-full bg-white border border-[#000000] rounded p-2 h-8 text-sm"
              />
            </div>
          
          
            <div className=" w-full ">
              <label for="PhNo" class="w-full text-sm">
                <b>Phone number</b>
              </label>
              <input
                id="PhNo"
                type="text"
                placeholder="PhNo"
                class="w-full bg-white border border-[#000000] rounded p-2 h-8 text-sm"
              />
            </div>
            <div className=" w-full ">
              <label for="email" class="w-full text-sm">
                <b>Enter Email Id</b>
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                class="w-full bg-white border border-[#000000] rounded p-2 h-8 text-sm"
              />
            </div>
          

          
            <div className=" w-full ">
              <label for="Password" class="w-full text-sm">
                <b>Enter Password </b>
              </label>
              <input
                id="Password"
                type="Password"
                placeholder="Password"
                class="w-full bg-white border border-[#000000] rounded p-2 h-8 text-sm"
              />
            </div>
          <div className="w-full h-[20%] flex justify-center items-center ">
          <Link to={"/Signup2"}><button
            type="button"
            class="w-[100%] bg-yellow-200 text-black  px-5 py-2 rounded-2xl cursor-pointer text-sm overflow-hidden hover:scale-[1.08] transition-all"
            
          >
            <b>Next</b>
          </button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
