import React,{Component}from 'react';
class Header extends Component{
  constructor(props, context){
    super(props,context);
    this.state={
        name:'Prajjwal',
        class:'Prajjwal',
    }
}
componentWillReceiveProps(nextprops){
this.setState({name:nextprops.name})
}
render() {
    return(
        <div>
            {this.state.name}
        </div>
    );
}
}
export default Header;