import { Link } from "react-router-dom"
function Login(){
    return(
        <div class="h-screen w-screen bg-[#e4e4c4] flex items-center justify-center">
              <div class="bg-[#ffffff] relative text-black text-sm rounded-lg p-8 w-[70%] h-[60%] flex flex-col items-center lg:w-[30%]">
              <form class="w-full flex flex-col items-center space-y-4" action="../Homepage/index.html" method="POST">
              <img src="/logo.jpg" class="w-24 h-24 rounded-md" alt="Logo"/>
              <h1 class="my-4 text-center text-black font-bold text-xl">Login in to your account</h1>
              <label for="email" class="w-full h-2"><b>Enter Email Id</b></label>
              <input id="email" type="text" placeholder="Email" class="w-full bg-white border border-[#000000] rounded p-2 h-7" />
              <label for="password" class="w-full h-2"><b>Password</b></label>
              <input id="password" type="password" placeholder="Password" class="w-full bg-white border border-[#000000] rounded p-2 h-7"/>
              <div className="w-[30%] h-10 flex justify-center items-center ">
              <Link to={"/"}><button type="button" class="bg-yellow-200 px-5 py-2 rounded-2xl hover:scale-[1.08] transition-all"><b>Login</b></button></Link>
              </div>
              <Link to={"/Signup"}><p class="w-full text-center my-2  ">Forgot your password? <a href="../register/register1/index.html" class="text-blue-500">Click here to Reset</a></p></Link>
              
              </form>      
              </div>
        </div>
    )
}
export default Login