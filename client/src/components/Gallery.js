// import CloseIcon from '@mui/icons-material/Close';
import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import loader from '../assets/images/loader.gif';
import './gallery.css' ;

// import Img1 from './image/church.jpg';
// import Img2 from './image/cafe.jpg';
// import Img3 from './image/Sacre.jpg';
// import Img4 from './image/london.jpg';
// import Img5 from './image/pyramid.jpg';
// import Img6 from './image/time-square.jpg';
// import Img7 from './image/paris.jpg';
// import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';


const Images = img => (
  <div className="col-lg-4 col-sm-6">
      <Link to={"/react-survey/" + img.image_id}>
          <div className="row">
              <div className="col-md-3 logo">
                  <img src={img.image_link} />
              </div>
              <div className="col-md-9 detail">
                  {/* <p>{props.source.description}</p> */}
                  <span className="mark">{img.image_tag}</span>
              </div>
          </div>
      </Link>
  </div>
)


function Gallery() {
  const [model,setModel] = useState(false);
  const [tempingSrc, setTempImgSrc] = useState('');

  const API_URI = process.env.REACT_APP_API_URL; 
    useEffect(() => {
        fetch(`${API_URI}/surveys`)
        .then((res) => res.json())
        .then((data) => {
          data = data.filter((e) => "code" in e);
           console.log(data);
            const z = data.map((v) => (
                <option key = {v._id} value={v._id}>
                    {v.image_id}
                    {v.image_tag}
                </option>
            ))
            const getImg = (imgSrc) => {
              setTempImgSrc(imgSrc);
              setModel(true);

            }
            
        })
    }, []);

    
  
    
      // return (
  
      // );
}

     
export default Gallery;


    // let data =[
    //     {
    //       id:1,
    //       imgSrc: Img1,
    //     }, 
    //     {
    //       id:2,
    //       imgSrc: Img2,
    //     },
    //     {
    //       id:3,
    //       imgSrc:Img3,
    //     },
    //     {
    //       id:4,
    //       imgSrc:Img4,
    //     },
    //     {
    //       id:5,
    //       imgSrc:Img5,
    //     },
    //     {
    //       id:6,
    //       imgSrc:Img6,
    //     },
    //     {
    //       id:7,
    //       imgSrc:Img7,
    //     }
    //   ]

    // <>
    // <div className={model? "model open" : "model"}>
    //     <img src ={tempingSrc} />
    //     {/* <CloseIcon/> */}


    // </div>
    // <div className='gallery'>
    //     {data.map((item,index)  => {
    //       return (
    //         <div className='pics' key={index} onClick={() => getSpaceUntilMaxLength(item.imgSrc)}>
    //           <img src={item.imgSrc} style={{width: '100%'}} />
    //         </div>
    //       )
    //     })}

    // </div>
    // </>

