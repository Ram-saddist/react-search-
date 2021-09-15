import React from 'react';
import './App.css';

class App extends React.Component{
  
  state={
    data:[
        {id:'1',name:'ram'},
        {id:'2',name:'sita'},
        {id:'3',name:'ramesh'},
        {id:'4',name:'pramod'}
    ],
    text:''
  }
  componentDidMount(){

  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:[e.target.value]
    })
  }
  render(){
    const {data}=this.state;
    let duplicate_data=[];
    const pair=this.state.text.toString().trim().toLowerCase();
    console.log(typeof pair)
    if(pair&&pair.length>0){
      duplicate_data=data.filter(i =>{
        return i.name.toLowerCase().match(pair);
      })
    }
    return(
        <div align="center">
          <input 
              name="text"
              value={this.state.text} 
              onChange={this.handleChange} 
              type="text" 
              placeholder="search"/>
          <ul>
            {
              duplicate_data.map(i=>{
                return <li className="no-bullets" key={i.id}>{i.name}</li>
              })
            }
          </ul>
          {console.log(this.state.data)}
        </div>
      )
  }
}

export default App;
