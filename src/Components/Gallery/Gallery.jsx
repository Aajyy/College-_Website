import React from 'react'
import './Gallery.css'
import galleryImg_1 from '../../assets/gallery-1.png';
import galleryImg_2 from '../../assets/gallery-2.png';
import galleryImg_3 from '../../assets/gallery-3.png';
import galleryImg_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';



const Gallery = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={galleryImg_1} alt="" />
                <img src={galleryImg_2} alt="" />
                <img src={galleryImg_3} alt="" />
                <img src={galleryImg_4} alt="" />
            </div>

            <div className="gallery">
                <img src={galleryImg_1} alt="" />
                <img src={galleryImg_2} alt="" />
                <img src={galleryImg_3} alt="" />
                <img src={galleryImg_4} alt="" />
            </div>
            <button className='btn dark-btn '>See More <img src={white_arrow } alt="" /></button>
        </div>
    )
}

export default Gallery;