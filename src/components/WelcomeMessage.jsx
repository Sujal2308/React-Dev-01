let WelcomeMessage = () =>{
    return(
        // Write your JSX code here.
        <div>
            <h1 className="text-green-500 text-2xl">Welcome to the world of React!</h1>
            <br/>
            <p className="bg-violet-500 text-3xl text-white">Let's build something cool.</p>
            <br/>
            <p className="text-2xl text-red-500 line-through">Happy coding!</p>
            <br/>
            <input type="checkbox" className="accent-yellow-500" checked/>
            <input type="checkbox" className="accent-red-500 "/>
            <input type="checkbox" className="accent-violet-500 "/>
            <br></br>
            <p className="text-[#fb6f92] text-2xl">Arbitrary Colors</p>
           
            {/* Padding & Margin in Tailwind */}
            <p className="bg-yellow-400 p-4 mt-4 mx-4 font-mono text-2xl font-bold">Hello Tailwind UI</p>

            {/* Flexing in Tailwind */}
            <div>
                <div className="flex space-x-5 ml-10 mt-10 ">
                    <div className="bg-red-500 p-10">1</div>
                    <div className="bg-blue-500 p-10">2</div>
                    <div className="bg-green-500 p-10">3</div>
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-5 mx-10 mt-10  ">
                    <div className="bg-indigo-500 p-5">1</div>
                    <div className="bg-yellow-500 p-5">2</div>
                    <div className="bg-blue-500 p-5">3</div>
                </div>
            </div>
            {/* Letter Spacing (tracking) & alignment in Tailwind */}
            <p className="tracking-widest text-2xl text-center">Letter Spacing</p>
            <p className="tracking-tight text-2xl">Letter Spacing</p>
        </div>
    )
}
export default WelcomeMessage;
