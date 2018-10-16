

    import React,{ Component } from 'react';
    import './App.css';
    
    class Comment extends Component {
        constructor(props){
           super(props);
        this.state={
            title: 'Kindly leave your thoughts below',
            act:0,
            index:'',
            datas:[]
        }
      }
      
      fSubmit= (e) =>{
           e.preventDefault();
           console.log('try');
           
           let datas=this.state.datas;
           let cm=this.refs.cm.value;
           let cmnt=this.refs.cmnt.value;
           
           if(this.state.act===0){
               let data={
               cm,cmnt
           }
           
           datas.push(data);
           
           
           }else{
               let index=this.state.index;
               datas[index].cm=cm;
               datas[index].cmnt=cmnt;

               
           }
           
           
           this.setState({
            datas:datas,
            act:0
           });
           
           this.refs.myForm.reset();
           
      }
      
       fRemove=(i)=> {
           let datas = this.state.datas;
           datas.splice(i,1);
            this.setState({
                datas:datas
            });
          this.refs.myForm.reset();
           
       }
       fEdit=(i) => {
          let data=this.state.datas[i];
          this.refs.cm.value=data.cm;
          this.refs.cmnt.value=data.cmnt;
          this.setState({
            act:1,
            index:i
          });
           
        }
     
        render() {
            let datas = this.state.datas;
            return(
              <div className="Comment">
              <h2>{this.state.title}</h2>
              <form ref="myForm" className="myForm">
                
                 <input type="text" ref="cm" placeholder="Your name"  />
                <div >
                 <textarea   ref="cmnt" placeholder="Add a comment"></textarea>
                 </div>
                  <button onClick={(e)=>this.fSubmit(e)} className="myButton"> submit</button>
              </form>
              <pre>
              {
                  datas.map((data,i) =>
                   <li  className="myList">
                        {data.cm}<br/>
                        <div id='cma'>
                       {data.cmnt}</div>
                       <button onClick={()=>this.fRemove(i)} className="myListButton">remove</button>
                       <button onClick={()=>this.fEdit(i)} className="myListButton">edit</button>
                      
                        
                    </li>   
              )}
             </pre>
              </div>
              );
        }
    }
     export default Comment;	