const Duong=()=>{
    const getName=()=>{
        alert("Xin chào anh Nguyễn Văn Duong nhé");
    }
    return(
        <div className="hi">
            <h1>Hãy click vào để lấy tên của tối nhá các bạn trẻ</h1>
            <input type="button" value="getTen" onClick={getName} />
        </div>
    )
}
export default Duong