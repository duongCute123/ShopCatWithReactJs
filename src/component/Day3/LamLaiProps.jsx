//Cách làm 1 chuyển props
const Hello=(props)=>{
    return(
        <div className="hello">
            <h1>Khóa học về{props.duong.title}</h1>
            <p>Tên của tôi là {props.duong.name}</p>
            <p>Tôi đang cố gắng hoàn thiện khó học với React</p>

            <p>Chúc bạn thành công nhé dương</p>
        </div>
    )
}
//Cách làm 2 với props
const HeyBro=(props)=>{
    const {
        title,
        name
    }=this.props.duong
    return(
        <div className="bro">
            <h1>Khóa học về{props.duong.title}</h1>
            <p>Tên của tôi là {props.duong.name}</p>
            <p>Tôi đang cố gắng hoàn thiện khó học với React</p>
            <p>Chúc bạn thành công nhé dương</p>
        </div>
    )
}
const Xong=()=>{
    const duong={
        title:"React Js",
        name:"Nguyễn Văn Dương"
    }
    return(
        <div className="hi">
            <Hello duong={duong}/>
        </div>
    )
}
export default Xong