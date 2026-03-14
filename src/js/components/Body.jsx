const Body = () => {
  return (
    <>
      <div className="row p-8">
        <h1 class="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Better Data
          </span>{" "}
          Scalable AI.
        </h1>
        <p class="text-lg font-normal text-body lg:text-xl">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5"
        >
          Join the Waitlist
        </button>
      </div>
    </>
  );
};

export default Body;
