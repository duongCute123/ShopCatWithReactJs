import duong from '../../../imges/broo.PNG'
const Header = () => {
    return (
        <div className="header">
            <ul>
                <li>
                    <a href="">Trang chủ</a>
                </li>
                <li>
                    <a href="">Trang chủ</a>
                </li>
                <li>
                    <a href="">Trang thông tin</a>
                </li>
                <li>
                    <a href="">Trang liên hệ</a>
                </li>
                <li>
                    <a href="">Trang lấy em</a>
                </li>
            </ul>
        </div>
    )
}

const Center = () => {
    return (
        <div className="center">
            <div className="center1">
                <img src={duong} alt="gaixinh" />
                <div className="">
                    <h1>Sản phẩm thuốc hồi trinh</h1>
                    <p>Đấy là sản phẩm được phát triển bởi Phạm thoại</p>
                </div>
            </div>
            <div className="center2">
                <img src="" alt="" />
                <div className="">
                    <h1>Sản phẩm thuốc hồi trinh</h1>
                    <p>Đấy là sản phẩm được phát triển bởi Phạm thoại</p>
                </div>
            </div>
            <div className="center3">
                <img src="" alt="" />
                <div className="">
                    <h1>Sản phẩm thuốc hồi trinh</h1>
                    <p>Đấy là sản phẩm được phát triển bởi Phạm thoại</p>
                </div>
            </div>
        </div>
    )
}
const ListMap=()=>{
    const list=["HTML","CSS","React js","JavaScrip"];
    const listmap=list.map((lists)=><li key={lists}>{lists}</li>)
    return listmap;
    console.log(listmap)
}
const Main=()=>{
    return(
        <div className="main">
            <Header/>
            <Center/>
            <div>
                <p>
                    Các ngôn ngữ được áp dụng trong này là:
                </p>
                <ListMap/>
            </div>
        </div>
    )
}
export default Main