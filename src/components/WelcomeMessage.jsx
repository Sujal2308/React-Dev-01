import { useState } from "react";
let WelcomeMessage = () =>{
    let [brands,setBrands] = useState(["React","Angular","Vue"]);
    let filteredData =()=>setBrands(brands.filter((data)=>data!=="React"))
    return(
        // Write your JSX code here.
        <div>
            {brands.map((data,index)=><h1 key={index}>{data}</h1>)}
            <button onClick={filteredData}>Filter</button>

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
            <p className="tracking-widest text-2xl text-center underline decoration-indigo-500 decoration-5 ">Letter Spacing</p>
            <p className="tracking-tight text-2xl">Letter Spacing</p>

            {/* Decoration & transformation */}
            <div className=" m-10 bg-pink-300 p-10 flex flex-col space-y-5 text-center">
                <p className="text-2xl font-sans underline decoration-3 underline-offset-4">Hello There</p>
                <p className=" text-2xl font-serif uppercase">Hello There</p>
                <p className="text-2xl font-mono underline underline-offset-8">Hello There</p>
            </div>

            {/* Width and height and sizes in Tailwind */}
            <div className="m-10 bg-black p-10">
                <div className=" w-1/2 h-16  bg-blue-500">1</div> 
                <div className="mt-5 w-auto  bg-green-500">2</div>
                <div className="mt-5 w-1/4 bg-yellow-500">3</div>
            </div>

            {/* Border in Tailwind */}
            <div className="bg-red-500 p-20 my-10 mx-10 relative">
                <div className="absolute bg-blue-500 p-10 w-20 h-1/2 top-0 left-0"></div>
                <div className="absolute bg-violet-500 p-10 w-20 h-1/2 top-0 right-0"></div>
                <div className="absolute bg-green-500 p-10 w-20 h-1/2 bottom-0 left-0"></div>
                <div className="absolute bg-yellow-500 p-10 w-20 h-1/2 bottom-0 right-0"></div>
                <div className="absolute bg-yellow-500 p-10 w-20 h-1/2 top-1/4 left-1/2"></div>
            </div>
            {/* Borders*/}
            <h1 className="border-5 border-red-400 text-2xl font-mono p-5 mx-10 mb-10 w-60 text-center ">hello world</h1>
            <h1 className="border-l-5 bg-amber-300 border-red-400 text-2xl font-mono p-5 mx-10 mb-10 ">hello world</h1>

            {/* FlexBox */}
           <div className="flex  justify-end space-x-10 border-4 mx-10 py-20 bg-blue-500">
            <div className="bg-teal-400 p-10 order-3">01</div>
            <div className="bg-teal-400 p-10 order-2">02</div>
            <div className="bg-teal-400 p-10 order-1">03</div>
            <div className="bg-teal-400 p-10 order-0 mr-10">04</div>
           </div>

           {/* Grid Index */}
           <div className="border-2 grid grid-cols-2 grid-rows-3 my-10 mx-10 gap-5 w-200">
            <div className="bg-violet-600 p-5 row-span-3">01</div>
            <div className="bg-violet-600 p-5 row-span-2">02</div>
            <div className="bg-violet-600 p-5">03</div>
            <div className="bg-violet-600 p-5">04</div>
            <div className="bg-violet-600 p-5">05</div>
            <div className="bg-violet-600 p-5">06</div>
            <div className="bg-violet-600 p-5">07</div>
            
           </div>
        </div>
    )
}
export default WelcomeMessage;
