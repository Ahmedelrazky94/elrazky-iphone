import apple from "../assets/images/apple.svg"
import search from "../assets/images/search.svg"
import bag from "../assets/images/bag.svg"


export const Nav = () => {
  return (
    <section>
      <div className="flex justify-around"> 
        <div className="py-4"><a href="#"><img width={"18vw"} src={apple} /></a></div>
      <div className="flex justify-center gap-6 py-4">
        <a className="text-gray-400 hover:text-white" href="store">Store</a>
        <a  className="text-gray-400 hover:text-white" href="mac">Mac</a>
        <a  className="text-gray-400 hover:text-white" href="iphone">Iphone</a>
        <a  className="text-gray-400 hover:text-white" href="support">Support</a>
      </div>
      <div className="flex py-4 gap-x-6">
        <a href="#"><img width={"18vw"} src={bag} /></a>
        <a href="#"><img width={"18vw"} src={search} /></a>
      </div>
      </div>
    </section>
  )
}