import { Link } from "react-router-dom";
function Signup2() {
  return (
    <div class="h-screen bg-[#e4e4c4] flex items-center justify-center">
      <div class="bg-[#ffffff] text-black text-lg rounded-lg p-8 w-[70%]  flex flex-col items-center lg:w-[30%]">
    <form class="w-full flex flex-col items-center space-y-2">
      <img src="logo.jpg" class="w-24 h-24 rounded-md" alt="Logo"/>
      <h1 class="my-4 text-center text-black font-bold text-xl">Sign in to your account</h1>
      
      <label for="role" class="w-full text-sm"><b>Select Role</b></label>
      <select id="role" class="w-full bg-white border border-[#000000] rounded p-2 text-sm">
        <option value="recorder">Recorder</option>
        <option value="checker">Checker</option>
        <option value="editor">Editor</option>
      </select>

      <label for="training-status " class="w-full text-sm"><b>Training Status</b></label>
      <select id="training-status" class="w-full bg-white border border-[#000000] rounded p-2 text-sm">
        <option value="done">Done</option>
        <option value="not-done">Not Done</option>
      </select>

      <label for="preferred-language" class="w-full text-sm"><b>Preferred Language</b></label>
      <select id="preferred-language" class="w-full bg-white border border-[#000000] rounded p-2 text-sm">
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="marathi">Marathi</option>
      </select>

      <div className="w-full h-[20%] flex justify-center items-center ">
          <Link to={"/Login"}><button
            type="button"
            class="w-[100%] bg-yellow-200 mt-5 text-black  px-5 py-2 rounded-2xl cursor-pointer text-sm overflow-hidden hover:scale-[1.08] transition-all"
            
          >
            <b>Register New Account</b>
          </button>
          </Link>
          </div>
    </form>
  </div>
    </div>
  );
}
export default Signup2;
