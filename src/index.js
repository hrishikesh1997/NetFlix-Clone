import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clone from './Clone';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1 className="head">Netflix original Series</h1>
    <div className="App">
    <Clone 
    name="Bahubali"
    img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnIM8CU0VO9BpthgIHGJM_mG6xDcC5uOpY-FIuILs0r4wJcc6F"
    title="NetFlix Original serieas"
    link="https://www.netflix.com/in/title/80204117"
    />
    <Clone 
    
    name="Bahubali 2"
    img="https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Baahubali-2-The-Conclusion.jpg"
    title="NetFlix Original serieas"
    link="https://www.netflix.com/in/title/80203996"
    />
    
    <Clone 
    
    name="Singham"
    img="https://occ-0-4110-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSw8VcS9UgZ7_aaAnHXqGJAulvX3CchJ5jPXSIImAz8Ej94oIwYaaErwjvE9LLw5Ow_DkVdrLu9NcB2EG7qStTnlFwjs4JkqywZ-.png?r=633"
    title="NetFlix Original serieas"
    link="https://www.netflix.com/in/title/70217385"
    />
    
    <Clone 
    
    name="Race"
    img="https://occ-0-4110-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfhZoiS1HD4SmQMmew7-Qzpl9iCA_LIVR17ONGqS3vHPKre_33zHU6TFo9Bixnb0xh8XOJRGto7QEhTclxN81Xp9ullqosJTXIRz.png?r=0bb"
    title="NetFlix Original serieas"
    link="https://www.netflix.com/in/title/70096752"
    />
    
    <Clone 
    
    name="Lakshay"
    img="https://occ-0-4110-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABd4z9WHyl6SJv9fyNDHxOgPP4cbX8rKQXOtsAXAPnjSCeQ-iLv_Tq3yzkVCeQhyOGcgqA4CKGHsrxU18k4PdYiah3jjAE4617LrA.png?r=939"
    title="NetFlix Original serieas"
    link="https://www.netflix.com/in/title/70001237"
    />
    
    <Clone 
    
    name="Aganipath"
    img="https://occ-0-4110-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfAexG3OIJPJH_Fl0AphFEI_PDz-AXKg_H_pypN8D7rwJ3bZPe7uxVXqfJ7E_wPOaF9zcXrOU7R5L-EntCNMNBBCltpbZE1G95LF.png?r=e59"
    title="NetFlix Original serieas"
    link="https://www.netflix.com/in/title/81244367"
    />
    
   
   </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
