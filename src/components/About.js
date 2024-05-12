import React from 'react';
// import { Link } from 'react-router-dom';

export default function About(props) {
    
    // const [myStyle,setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    //  })
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    }
    //  const [btntext,setBtnText] = useState("Enable Dark Mode")
     
    //  const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //        setmyStyle({
    //           color:'white',
    //           backgroundColor:'black',
    //           border:'1px solid white'
    //        })
    //        setBtnText("Enable light mode");
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable dark mode");
    //     }
    //  }

  return (
        <div className='container my-2' style={{color:props.mode === 'dark'?'white':'#042743'}}>
            <h2>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    My-App gives you a way to analyse your text quickly and efficinetly. Be it word count, character count or 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    My-App is a free character counter tool that provides instant character count & word count statistics for a given text. My-App reports the number of words and character .thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browser such as chrome , Firefox , Internet Explore ,Safari ,opera . It suits to count character in facebook ,blog books ,excel document ,pdf documnet ,essays ,etc.
                </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
  )
}
