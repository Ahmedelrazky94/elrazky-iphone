export const Footer = () => {
return(
    <section className="bg-black w-2/3 m-auto">
        <div className="flex">
            <p className="text-gray-400 font-semibold text-sm">More Ways to shop : <a href="#" className="text-blue-800 underline">Find an apple store</a> or <a href="#" className="text-blue-800 underline">{' '} Other retails</a> near you <br/>or call 015-1546-464</p>
        </div>
        <div className="h-[1px] my-4 bg-gray-400 w-full"></div>
        <div className="flex justify-between pb-6 max-md:flex-col max-md:gap-y-3">
        <p className="text-gray-400 font-semibold text-sm">copyright all right reserved to <a className="text-sky-500" href="https://ahmedelrazky.web.app/">elrazky</a> </p>
        <p className="text-gray-400 font-semibold text-sm">
            <a href="#" className="mx-2 max-md:m-0 max-md:mr-3">Privacy Policy </a>
            <a href="#" className="mx-2 max-md:m-0 max-md:mr-3"> Term of use </a>
            <a href="#" className="mx-2 max-md:m-0 max-md:mr-3"> Legal </a>
            <a href="#" className="mx-2 max-md:m-0 max-md:mr-3"> Site map </a>
            </p>
        </div>
    </section>
)
}