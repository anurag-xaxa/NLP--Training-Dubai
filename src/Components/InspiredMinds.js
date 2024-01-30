import React from "react";
import img1 from '../assets/images/learning.jpg';
import img2 from '../assets/images/brand.jpg';
import img3 from '../assets/images/WhatsApp-Image.jpg';
import '../assets/style.css/InspiredMinds.css';

const InspiredMinds = () => {

    return (
        <>
            <div
                className="entry-banner-img"
            >
                <div className="outer-container">

                    <div className="container">
                        <div className="row" style={{ paddingTop: '100px' }}>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <h2 className="img-content">YES TO</h2>
                                <h2 className="img-content">INSPIRED</h2>
                                <h2 className="img-content">MINDS</h2>
                            </div>
                            <div className="vertical-line col-md-1 col-lg-1"></div>
                            <div className="youth col-sm-12 col-md-5 col-lg-5" style={{ textAlign: 'center', color: 'whitesmoke' }}>
                                <p>Youth</p>
                                <p>Empowerment</p>
                                <p>Program for Children</p>
                                <p>between</p>
                                <p>10 &amp; 16 years</p>
                            </div>

                        </div>
                    </div>
                    <div className="empower col-md-12">Empower youth with knowledge, skills &amp; confidence</div>
                    {/* <h1 className="entry-title">Advanced Diploma in NLP & Coaching</h1> */}
                </div>
            </div>
            <div className="heading">
                <h3 className="heading-h3">The Purpose:</h3>
                <p>To empower,our youth with the knowledge, skills and confidence to conduct themselves with poise and professionalism</p>
                <h3 className="heading-h3">The Plan:</h3>
                <p>The Purpose of this program is &#8220;To empower our youth with the knowledge, skills and confidence to conduct themselves with poise and professionalism&#8221;. Great sustainable learning through interactive sessions using Neuro Linguistic Programming (NLP) tools, group discussion, role plays, hands-on application and simulations. A module per month running for nine months.</p>
                <p>The sessions happen every Sunday from 10:00 am to 12:00 Noon. We cover one module each month (8-10 hours), where the participants understand concepts and imbibe them through interactive sessions like group discussion, role plays, hands-on application and simulations and use Neuro Linguistic Programming (NLP) tools to sustain their learning.</p>
            </div>
            <div className="">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">

                        <h4 className="heading-h4 col-sm">What you will learn</h4>
                        <ul style={{ paddingLeft: '80px', paddingTop: '20px' }}>
                            <li>YES to Effortless Communication</li>
                            <li>YES to Self-Leadership</li>
                            <li>YES to Interpersonal Development</li>
                            <li>YES to Personal and Social Grooming</li>
                            <li>YES to Project Management Skills</li>
                            <li>YES to Teamwork and Cooperation</li>
                            <li>YES to Healthy Living</li>
                            <li>YES to Social Skills Development</li>
                            <li>YES to Social Responsibility</li>
                        </ul>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{ padding: '3rem' }}>
                        <img
                            height="450px"
                            width="500px"
                            decoding="async"
                            data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/04/globalguru22.jpg"
                            className="img-fluid"
                            src={img1}
                            alt="fullsize_anim"
                        />
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg" href="#">Register Now</button>
            <div className="brand">
                <img
                    height="450px"
                    width="600px"
                    decoding="async"
                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/04/globalguru22.jpg"
                    className="img-fluid"
                    src={img2}
                    alt="fullsize_anim"
                />
            </div>
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{ padding: '3rem' }}>
                        <img
                            height="450px"
                            width="600px"
                            decoding="async"
                            data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/04/globalguru22.jpg"
                            className="img-fluid"
                            src={img3}
                            alt="fullsize_anim"
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6" style={{textAlign:'justify', padding: '3rem'}}>
                        <h2 style={{textAlign:'left'}}>About the Trainer</h2>
                        <h3>Ms. Zakiya Yassin</h3>
                        <p>Ms. Zakiya Yassin is a compassionate parenting and wellbeing coach with a lot of experience in working with parents and children. Besides her passion to empower children she also specializes in working with inquisitive parents through their healing journey while making them aware of themselves and supporting them in their conscious parenting. She specializes in positive parenting based on Neuro Science studies.</p>
                        <p>Ms. Zakia has completed her BSC from Abu Dhabi University in UAE and is currently pursuing her MSC in Psychology Counselling and Mental Health from UK. She is also an NLP Practitioner &amp; Coach and also an Emotional Intelligence Coach. As a hobby Ms. Zakiya also authors children story books.</p>

                    </div>
                </div>
            </div>


        </>
    )
}

export default InspiredMinds;