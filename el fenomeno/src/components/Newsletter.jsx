

const Newsletter = () => (
    <section className="offerings flex flex-col justify-center items-center gap-4">
        <h2 className={`font-roboto font-semibold md:text-[42px] text-[36px] text-white`}>Subscribe Newsletter</h2>
        <form>
            <div className="flex sm:w-[474px] w-[120px]">
              <input
                type="text"
                className="flex-1 px-[32px] py-[16px] rounded-l-lg focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-blue-800 px-[32px] py-[16px] border-2 border-solid border-transparent rounded-r-lg text-white hover:border-blue-800 hover:bg-transparent hover:text-blue-600 focus:outline-none">
                Subscribe
              </button>
            </div>
          </form>
        <form className="form-horizontal"></form>
          </section>
  );

export default Newsletter