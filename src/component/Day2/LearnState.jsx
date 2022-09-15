import React from "react";
import { ReactDOM } from "react";
class Header extends React.Component{
    state={
        count:'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    }
    render(){
        const Cong=()=>{
            const dog='https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
            const cat='https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
            const count=this.state.count===dog?cat:dog
            this.setState({count})
        }
        const Clear=()=>{
            this.setState({count:0})
        }
        return(
            <div className="hello">
                <img src={this.state.count} alt="" />
                <input type="button" value="Sunbmit" onClick={Cong}/>
                <input type="button" value="Xóa" onClick={Clear}/>
            </div>
        )
    }
}
export default Header