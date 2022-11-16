export default function Home() {
  return (
    <div className="p-5">
      <div>
        <h2 className="text-2xl">IT support</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-cyan-100 p-5 rounded-xl">
              <img src="/courses/GoogleITSupport.png" alt="" />
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">Google IT Support</h3>
            </div>
            <p className="text-sm mt-1 leading-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, sed.
            </p>
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">$200</div>
              <button className="bg-purple-500 text-white py-1 px-3 rounded-xl font-bold text-xl">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
