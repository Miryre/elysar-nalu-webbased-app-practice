const Navbar = () => {
  return (
    <>
      <nav className="bg-[#080f10]/85 backdrop-blur-md border-b border-[#3eb8c0]/10">
        <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <h1>
                  <span style={{ color: "var(--text)" }}>na</span>
                  <em style={{ color: "var(--teal-glow)" }}>lu</em>
                </h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex ms-auto space-x-4">
                  <a
                    href="#"
                    aria-current="page"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white"
                  >
                    The Gap
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Tide
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Market
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Safety
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <el-dropdown className="relative ml-3">
                <el-menu
                  anchor="bottom end"
                  popover
                  className="w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                  >
                    Your profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </el-menu>
              </el-dropdown>
            </div>
          </div>
        </div>

        <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              aria-current="page"
              className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </el-disclosure>
      </nav>
    </>
  );
};

export default Navbar;
