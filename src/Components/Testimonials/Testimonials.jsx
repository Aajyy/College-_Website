import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;

        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackword = () => {
        if (tx < 0) {
            tx += 25;

        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }


    return (
        <div className="testimonials">
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackword} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3> Sneha Joshi</h3>
                                    <span>Engineering Pune</span>
                                </div>
                            </div>
                            <p>Faculty members here are not just teachers, but mentors. Their guidance helped me crack GATE and secure a research internship at IIT Madras.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3> Ritesh Kumar</h3>
                                    <span>Computer Science</span>
                                </div>
                            </div>
                            <p>Joining this college was the best decision. I was part of multiple hackathons and the placement training ensured I got selected by Infosys.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3> Tanvi Deshmukh</h3>
                                    <span>Information Technology</span>
                                </div>
                            </div>
                            <p>The campus life is vibrant! Whether it’s fests, clubs, or workshops, there’s always something to explore. I’ll cherish these years forever.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3> Aarav Malhotra</h3>
                                    <span>Electronics and Communication</span>
                                </div>
                            </div>
                            <p>The college environment is very supportive and encouraging. From high-tech labs to practical industry exposure, I’ve grown immensely in the past three years</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Testimonials;