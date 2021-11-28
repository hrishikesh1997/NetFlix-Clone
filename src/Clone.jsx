import './App.css';

function Clone (props) {
    return (
        
         
               
         
           <div className="App1">
              <h2>{props.name}</h2>
              <img src={props.img} alt="bahu" />
              <h3>{props.title}</h3>
              <a href={props.link}><button>Watch-now</button></a>
            
            </div>
           
        
        
      );
}

export default Clone;