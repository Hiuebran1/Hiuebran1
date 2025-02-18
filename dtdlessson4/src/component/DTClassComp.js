import React,{Component} from "react";

class DTCLassComp extends Component{
    constructor(props){
        super(props);
        this.state={
            fullname:'do dung',
            age:19,
            phone:"1234567890"
        } 
    }
    changeinfo =(ev)=>{
        this.setState({
            fullname:"do tien dung2"
        });
    }
    render(){
        let user = this.props.renderuser;
    return(
        <div className="alert-alert-success">
                <h2>
                    trinh bay du lieu tu state
                </h2>
                <p>
                    fullname: {this.state.fullname}
                </p>
                <p>
                    age: {this.state.age}
                </p>
                <p>
                    phone: {this.state.phone}
                </p>
                <hr/>
                <button className='btn-btn-primary' onClick={this.changeinfo}> change info </button> 
                <hr/>
                <h3>lay du lieu tu props</h3>
                <p>name:{this.props.rendername}</p>
                
            </div>
        );
    }
}
export default DTCLassComp;