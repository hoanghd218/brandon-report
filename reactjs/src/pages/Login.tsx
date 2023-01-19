export default function Login() {
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center bg-slate-50">
        <div className="absolute bg-slate-50 opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center">
             
                <div style={{"height":"130px"}}>
                <img src="/img/logo-home.png" />
                </div>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              {/* form */}
              <div className="mt-5">
                <div className="mb-4">
                  <label className="block text-grey-darker text-sm font-bold mb-2">
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-grey-darker text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                </div>
                <footer className="">
                  <button
                    id="button"
                    type="button"
                    className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-sky-400 hover:bg-sky-500 hover:shadow-lg focus:outline-none"
                  >
                    Login
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
