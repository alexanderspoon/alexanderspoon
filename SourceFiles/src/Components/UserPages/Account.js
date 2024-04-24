import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import profile from '../../Images/about-profile.PNG'; 
import motorcycle from '../../Images/motorcycle.PNG'; 

const Account = ({ }) => {
    return (
        <Fragment>
            <div className='main-container Account'>
                <div className='container'>
                    <div className='bio'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h3>About Me</h3>
                                <p>
                                    I've been a resident of Boise, Idaho, for the past seven years. It's here that I've been pursuing my passion for interactive media and gaming at Boise State University, where I'm set to graduate in May 2024 with a Bachelor of Science in Games, Interactive Media, and Mobile Technology (GIMM).
                                </p>
                                <p>
                                    My studies have provided me with a well-rounded skillset in various aspects of game creation, web development, augmented reality (AR), virtual reality (VR), 3D modeling, visual effects, and other interactive media forms. While I have a keen interest in pursuing a career in web development, my love for game development runs a close second. I am particularly interested in the gamification of education. 
                                </p>
                                <p>
                                    During my time at Boise State, I had the opportunity to put my skills into practice as an active member of GIMM Works, a small development studio within my major. Additionally, I worked as an independent full-stack developer on a project hired by GIMM. I'm working towards pursuing a career in web development. 
                                </p>
                            </div>
                            <div className='col-md-6 image'>
                                <img src={profile} alt="Placeholder Image" />
                            </div>
                        </div>

                        <div className='row flex-column-reverse flex-md-row'>
                            <div className='col-md-6 image'>
                                <img src={motorcycle} alt="Placeholder Image" />
                            </div>
                            <div className='col-md-6 '>
                                <h3>Hobbies</h3>
                                <p>
                                    Moving away from the technology, I also enjoy riding and maintaining my motorcycle. I got my first bike in 2023 which is a 2006 Honda Shadow Aero 750. I've yet to go on any road trips, but I'm looking forward to when I have the opportunity.
                                </p>
                                <p>
                                    As one might expect, playing video games is a major hobby of mine. Recently, I've been spending a lot of time with Helldivers 2, but some of my all-time favorites include Noita, Beat Saber, and the indie masterpiece Hollow Knight. 
                                </p>
                                <p>
                                    I enjoy exploring my creative side through photography. I have a Nikon D5100 and am slowly building my collection of equipment, I love experimenting with lighting and capturing moments in time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='kudos'>
                        <h3>Kudos</h3>
                        <p>
                            Collaboration is at the heart of most projects, and I've been fortunate to work alongside many talented individuals who have contributed their expertise in various areas. From design and development to art assets and valuable feedback, these are just some of the remarkable people who have played a significant role in the projects I've been involved with, in no particular order.
                        </p>
                        <div className='kudos-people'>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/brendon-whitford/">Brendon Whitford</a></span>
                            <span className='role'> (Full Stack Web Developer). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/brandonbenoit/">Brandon Benoit</a></span>
                            <span className='role'> (Project Manager). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/sydneyareinert/">Sydney Reinert</a></span>
                            <span className='role'> (3D Artist). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/brady-l-williamson/">Brady Williamson</a></span>
                            <span className='role'> (VFX Artist). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/sarina-lloyd-3a8a68198/">Sarina Lloyd</a></span>
                            <span className='role'> (3D Artist). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/zekewandeler/">Zeke Wandeler</a></span>
                            <span className='role'> (UX/UI Designer). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/heavenleerust/">Heaven Rust</a></span>
                            <span className='role'> (Narrative Designer). </span>
                            <span className='name'><a target="_blank" href="https://www.linkedin.com/in/ryna-hall-96312720b/">Ryna Hall</a></span>
                            <span className='role'> (Software Developer). </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

function mapState(state) {
    const { session } = state;
    return { session };
}

const actionCreators = {
};

const connection = connect(mapState, actionCreators)(Account);
export { connection as Account };