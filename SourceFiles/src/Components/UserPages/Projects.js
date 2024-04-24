import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { gsap } from 'gsap';

import Modal from 'react-bootstrap/Modal';
import brush from '../../Images/brush.svg'; 
import controller from '../../Images/controller.svg'; 
import people from '../../Images/people.svg'; 
import website from '../../Images/website.svg'; 
import projectData from '../../Data/ProjectData'

const Projects = ({}) => {
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState(false);
    const [transformedSquare, setTransformedSquare] = useState([4]);
    const [selectedSkill, setSelectedSkill] = useState(projectData[3]);
    const imageUrls = [brush, controller, people, website];
    
    const handleClose = () => setShow(false);
    const handleShow = (value, info) => {
         setModalInfo(info); 
        setShow(value);
    };

    const handleSquareClick = (index) => {
        setTransformedSquare([index]);
        setSelectedSkill(projectData[index - 1])
        const anchor = document.getElementById("PageTop");
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        gsap.fromTo('.paragraph', { opacity: 0 }, { opacity: 1, duration: .5 });
        gsap.fromTo('.portfolio', { opacity: 0 }, { opacity: 1, duration: .5 });
        gsap.fromTo('.tool', { opacity: 0 }, { opacity: 1, duration: .5 });
        gsap.fromTo('.category-name', { opacity: 0 }, { opacity: 1, duration: .5 });
    }, [selectedSkill]); 

    const progressBar = ( currentPoints, totalPoints ) => {        
        const percentage = (currentPoints / totalPoints) * 100;
        const fillerStyles = {
            width: `${percentage}%`,
        };
        return (
          <div className='progressBar'>
                <div className='containerStyles'>
                    <div className='fillerStyles' style={fillerStyles}>
                        <span className='labelStyles'>{currentPoints}% 
                            <div className='labelCarrot'></div>
                        </span>
                        
                    </div>
                </div>
          </div>
        );
    };
    
    return (
        <Fragment>
            <ModalComponent show={show} info={modalInfo} handleClose={handleClose}/>
            <div className='main-container Projects'>

                <div className='main-body'>

                    <div className='center'>
                        <h6 className='not-completed'>Content Not Updated. Expected 4/25/2024</h6>

                        <h1>Pick a Category</h1>
                        <div className='arrow'>^</div>
                    </div>
                    <div className="menu-wheel" id="PageTop">
                        {[1, 2, 3, 4].map((index) => (
                            <div
                                key={index}
                                className={`square ${transformedSquare.includes(index) ? 'transformed' : ''}`}
                                onClick={() => handleSquareClick(index)}
                            >
                                <img src={imageUrls[index - 1]} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </div>
                    <div className='decoration'>
                        <div className="dec-line"></div>
                        <div className="dec-line"></div>
                        <div className="dec-line"></div>
                        <div className="dec-line"></div>
                    </div>
                    <div className="back-line">
                        {["Art", "Game Dev", "Leadership", "Web Dev"].map((category, index) => (
                            <div key={index} className={`title ${transformedSquare.includes(index + 1) ? 'bold-title' : ''}`}>{category}</div>
                        ))}
                    </div>
                </div>

                <div className='container skills'>

                    <h2 className='category-name'>{selectedSkill.category}</h2>

                    <div className='underline'></div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='paragraph'>{selectedSkill.p1}</p>
                            <p className='paragraph'>{selectedSkill.p2}</p>
                            <p className='paragraph'>{selectedSkill.p3}</p>
                        </div>

                        <div className='col-md-6'>
                            <h3>Skill Emphasis</h3>

                            {selectedSkill.skillPercents.map((skillPercent, index) => (
                                <Fragment key={index}>
                                    <h5>{selectedSkill.skills[index]}</h5>
                                    {progressBar(skillPercent, 100)}
                                </Fragment>
                            ))}

                            <h3 className='tool-title'>Tools/Programs</h3>

                            <div className='toolbox'>
                                <div className='row flex-container'>
                                    {selectedSkill.tools.map((tool, index) => (
                                        <Fragment key={index}>
                                            <img className='tool' src={tool} alt="Placeholder Image" />
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='Portfolio-title'>
                        <h3>My Work</h3><span>{selectedSkill.portfolio.length} items</span>
                    </div>
                    
                    <div className='flex-container portfolio-container'>
                        {selectedSkill.portfolio.map((portfolioItem, key) => (
                            <Fragment key={key}>
                                    <div className="portfolio" onClick={() => handleShow(true, portfolioItem)}>
                                        <img src={portfolioItem.image} alt={portfolioItem.image} className="image" />
                                        <div className="middle">
                                            <h5 className="text"><strong>{portfolioItem.title}</strong></h5>
                                            <h6 className="text">{portfolioItem.subTitle}</h6>
                                        </div>
                                    </div>
                            </Fragment>
                        ))}
                    </div>

                </div>

            </div>
        </Fragment>
    );
};

const ModalComponent = ({show, info, handleClose}) => {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className='modal-content'>
                <img src={info.image} alt="Sample Image" className="image modal-img" />
                <h5><strong>{info.title}</strong></h5>
                <h6>{info.subTitle}</h6>
                <p>{info.description}</p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
}

function mapState(state) {
    const { session } = state;
    return { session };
}

const actionCreators = {
};

const connection = connect(mapState, actionCreators)(Projects);
export { connection as Projects };