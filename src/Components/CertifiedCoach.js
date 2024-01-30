import React from "react";
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import '../assets/style.css/CertifiedCoach.css'


const CertifiedCoach = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return (
        <>
            <div id="content" className="site-content">
                <div
                    className="entry-banner"
                    style={{
                        background: 'url(https://www.nlptrainingdubai.com/wp-content/themes/financepro/assets/img/banner.jpg) no-repeat scroll center center / cover',
                    }}
                >
                    <div className="container">
                        <div className="entry-banner-content">
                            <h1 className="entry-title">Certified NLP Practitioner &#038; Coach</h1>
                            <div className="breadcrumb-area">
                                <div className="entry-breadcrumb">

                                    <span className="breadcrumb-seperator"> - </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <img
                        height="550px"
                        width="1100px"
                        decoding="async"
                        data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/04/globalguru22.jpg"
                        className="lazyload"
                        src="imgpsh_fullsize_anim.jpg"
                        alt="Global Guru"
                    />
                    <noscript>
                        <img
                            decoding="async"
                            src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/04/imgpsh_fullsize_anim.jpg"
                            alt="Global Guru"
                        />
                    </noscript>
                </div>
                {/* <div className="wpb_single_image wpb_content_element vc_align_center">
                    <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                            <img
                                fetchpriority="high"
                                decoding="async"
                                width="960"
                                height="574"
                                alt=""
                                data-srcset="https://www.nlptrainingdubai.com/wp-content/uploads/2020/03/imgpsh_fullsize_anim.jpeg 960w, https://www.nlptrainingdubai.com/wp-content/uploads/2020/03/imgpsh_fullsize_anim-300x179.jpeg 300w, https://www.nlptrainingdubai.com/wp-content/uploads/2020/03/imgpsh_fullsize_anim-768x459.jpeg 768w"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2020/03/imgpsh_fullsize_anim.jpeg"
                                data-sizes="(max-width: 960px) 100vw, 960px"
                                className="vc_single_image-img attachment-full lazyload"
                                src="imgpsh_fullsize_anim.jpg"
                            />
                            <noscript>
                                <img
                                    fetchpriority="high"
                                    decoding="async"
                                    width="960"
                                    height="574"
                                    src="imgpsh_fullsize_anim.jpg"
                                    className="vc_single_image-img attachment-full"
                                    alt=""
                                    srcset="https://www.nlptrainingdubai.com/wp-content/uploads/2020/03/imgpsh_fullsize_anim.jpeg 960w, https://www.nlptrainingdubai.com/wp-content/uploads/2020/03/imgpsh_fullsize_anim-300x179.jpeg 300w, https://www.nlptrainingdubai.com/wp-content/uploads/2020/03/imgpsh_fullsize_anim-768x459.jpeg 768w"
                                    sizes="(max-width: 960px) 100vw, 960px"
                                />
                            </noscript>
                        </div>
                    </figure>
                </div> */}

                <div className="container" style={{ paddingTop: '30px' }}>
                    <div className="row">
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="ABNLP-Logo-01.jpg"
                                    alt="Logo 1"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="ABH-02.jpg"
                                    alt="Logo 2"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="neurosemantics.jpg"
                                    alt="Logo 3"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="iapcct-02.jpg"
                                    alt="Logo 4"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="Untitled-design-1.png"
                                    alt="Logo 5"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="Untitled-design-21.jpg"
                                    alt="Logo 6"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="CCE-01.jpg"
                                    alt="Logo 7"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="ICF-logos-03.jpg"
                                    alt="Logo 8"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="ICF-logos-02.jpg"
                                    alt="Logo 9"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="event-logo">
                                <img
                                    decoding="async"
                                    data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                    className="lazyload"
                                    src="Untitled-design-20.jpg"
                                    alt="Logo 10"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element vc_custom_1688731363504">
                                    <div className="wpb_wrapper">
                                        <h1 className="cnlp" style={{ textAlign: 'center' }}>
                                            Certified NLP Practitioner and Coach Workshop
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="cont">
                <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                        <div className="vc_column-inner vc_custom_1584353513515">
                            <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element vc_custom_1645172080022">
                                    <div className="wpb_wrapper">
                                        <p className="font-this-is">
                                            This ABNLP, ABH, ICF, ISNS &#038; IAPCCT approved &#8220;Certified NLP Practitioner &#038; Coach&#8221; program is the only program in Asia and the Middle East approved for NLP + Coaching + Hypnosis + Meta-NLP.
                                        </p>
                                        <p className="font-this-is">
                                            This workshop is for Entrepreneurs, Managers, Sales personnel, Employees, Parents, Students, Homemakers, and anyone who wants to experience and practice the skills of NLP for their Professional Development and Personal Achievement.
                                        </p>
                                        <p className="font-this-is">
                                            This is a comprehensive program and enables the participant to get personal transformation in their own life and also to get started as a Coach (Executive Coach, Life Coach, Leadership Coach, and more). We make NLP learning possible the NLP way.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner vc_custom_1645172385260">
                        <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element vc_custom_1645172369883">
                                <div className="wpb_wrapper">
                                    <p>
                                        <span className="ler">LEARNING OUTCOMES</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm">
                    <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                    <div className="wpb_text_column wpb_content_element">
                                        <div className="wpb_wrapper">
                                            <table style={{ height: '300px', textAlign: 'left' }} border="1" width="300" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                    <tr style={{ height: '206.5pt' }}>
                                                        <td valign="top" width="208">
                                                            <ul>
                                                                <li>NLP Presuppositions (Beliefs of Excellence)</li>
                                                                <li>The Communication model (Deletion, Distortion and Generalization)</li>
                                                                <li>Sensory Acuity and Calibration</li>
                                                                <li>Rapport building</li>
                                                                <li>Persuasive Language to get what you want from others</li>
                                                                <li>Parts Integration (Resolving conflict)</li>
                                                                <li>Representational Systems</li>
                                                                <li>Meta-Programs (Toward-Away, Big-Small Chunk, Match-Mismatch, Associated-Dissociated)</li>
                                                                <li>Time Line Basics</li>
                                                                <li>Coaching using Timeline</li>
                                                                <li>Aligning with your purpose</li>
                                                                <li>Perceptual Positions: How to understand others better, and avoid conflicts</li>
                                                                <li>How to get rid of bad memories</li>
                                                                <li>Circle of Excellence</li>
                                                            </ul>
                                                            <h2 className="MsoNormal" style={{ color: 'black' }}>
                                                                <b> </b>
                                                            </h2>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element">
                                    <div className="wpb_wrapper">
                                        <table style={{ height: '300px', textAlign: 'justify' }} border="1" width="350px" cellspacing="0" cellpadding="0">
                                            <tbody>
                                                <tr style={{ height: '206.5pt' }}>
                                                    <td valign="top" width="208">
                                                        <div id="bgLayers_comp-k9qulsws" className="_3wnIc" data-hook="bgLayers">
                                                            <div id="bgMedia_comp-k9qulsws" className="_2GUhU"></div>
                                                        </div>
                                                        <div className="" data-mesh-id="comp-k9qulswsinlineContent" data-testid="inline-content">
                                                            <div data-mesh-id="comp-k9qulswsinlineContent-gridContainer" data-testid="mesh-container-content">
                                                                <div id="comp-k9qulswx" className="_1Q9if" data-testid="richTextElement">
                                                                    <ul>
                                                                        <li>Sub-Modalities and applications</li>
                                                                        <li>New Behavior Generator</li>
                                                                        <li>Anchoring (Access resourceful states, whenever required)</li>
                                                                        <li>Collapsing Anchors</li>
                                                                        <li>Changing Limiting Beliefs</li>
                                                                        <li>Creating New Powerful Beliefs</li>
                                                                        <li>Swish Pattern</li>
                                                                        <li>Fast Phobic Technique</li>
                                                                        <li>Reframing</li>
                                                                        <li>Logical Levels</li>
                                                                        <li>Walt Disney Strategy</li>
                                                                        <li>Introduction to coaching models</li>
                                                                        <li>Meta Model (How challenge influences the constraints that people put for themselves)</li>
                                                                        <li>Coaching with Values</li>
                                                                        <li>Wellness Coaching Models</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element">
                                    <div className="wpb_wrapper">
                                        <table style={{ height: '300px', textAlign: 'justify' }} border="1" width="250" cellspacing="0" cellpadding="0">
                                            <tbody>
                                                <tr style={{ height: '206.5pt' }}>
                                                    <td valign="top" width="208">
                                                        <div id="bgLayers_comp-k9qulswj" className="_3wnIc" data-hook="bgLayers">
                                                            <div id="bgMedia_comp-k9qulswj" className="_2GUhU"></div>
                                                        </div>
                                                        <div className="" data-mesh-id="comp-k9qulswjinlineContent" data-testid="inline-content">
                                                            <div data-mesh-id="comp-k9qulswjinlineContent-gridContainer" data-testid="mesh-container-content">
                                                                <div id="comp-k9qulswo" className="_1Q9if" data-testid="richTextElement">
                                                                    <ul>
                                                                        <li>Introduction to Coaching</li>
                                                                        <li>Basic coaching framework</li>
                                                                        <li>Essential skills for Coaches</li>
                                                                        <li>Powerful coaching tools</li>
                                                                        <li>ICF Coaching Competencies</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br />
            <div className="cont">
                <h2 style={{ color: 'white', textAlign: 'center' }}>BENEFITS OF NLP</h2>
                <div>
                    <p style={{ color: 'white', padding: '20px' }}>Whatever you may BE whatever you may DO, this program is beneficial to YOU! Transforming the lives of Business Professionals to Homemakers.</p>
                    <p><span style={{ color: 'white' }}>✔</span> <span style={{ color: 'white' }}> Entrepreneurs and Managers learn the techniques required to increase business sales and staff motivation<br /></span><br />
                        <span style={{ color: 'white' }}>✔</span><span style={{ color: 'white' }}> Sales Personnel learn to communicate effectively and persuasively with clients<br /></span><br />
                        <span style={{ color: 'white' }}>✔</span> <span style={{ color: 'white' }}> Employees learn to interact effectively with peers and Supervisors<br /></span><br />
                        <span style={{ color: 'white' }}>✔</span> <span style={{ color: 'white' }}>Parents learn how to guide their children to a better future<br /></span><br />
                        <span style={{ color: 'white' }}>✔</span> <span style={{ color: 'white' }}> Students improve their confidence and perspective<br /></span><br />
                        <span style={{ color: 'white' }}>✔ </span> <span style={{ color: 'white' }}>Coaches get to learn models, techniques, and processes to follow that help bring about change and help people get what they want from life and achieve excellence<br /></span></p>
                    <p style={{ color: 'white' }}>NLP can help you improve your communication and influence skills quite significantly. Not only that but practicing NLP techniques will increase your resilience and your ability to master change – just as working out in a gym will build your physical strength, flexibility, and endurance.</p>
                    <p style={{ color: 'white' }}>In business, NLP can improve your results by helping you improve your leadership, sales, management, and relationships skills. In your personal life, it can help you connect to your purpose, overcome blocks, and help you navigate your own hero’s or heroine’s journey.</p>
                </div>
            </div>

            <br />

            <div className="details" style={{ width: '100%', height: '200px' }}>
                <div className="row">
                    <div className="col">
                        <div className="vc_toggle_title">
                            <p onClick={() => setOpen1(!open1)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open1}
                            >
                                <h4> + Brief Background Of NLP</h4>
                            </p>
                            <Collapse in={open1}>
                                <div id="example-collapse-text">
                                    <p className="font_9">
                                        NEURO means relating to the nervous system. The information we take in through our senses influences our neurological function. If we improve the accuracy with which we take in information, i.e. we listen better and are more observant, so we are more open to our own and other people’s experience. This means our brains have better information to help make decisions. We also increase our ability to communicate effectively – both consciously and unconsciously.
                                    </p>
                                    <p className="font_9">
                                        LINGUISTIC is about language. As we understand and are more aware of language – the words themselves as well as their structure and the way they’re spoken (speed, voice tone, rhythm) – so we get better information for making decisions and communicating consciously and unconsciously.
                                    </p>
                                    <p className="font_9">
                                        PROGRAMMING here refers to habits. We develop habits, some useful, some less useful. NLP teaches us how we can develop and encourage useful habits and reduce less useful habits.
                                    </p>
                                    <p className="font_9">
                                        So in short Neuro Linguistic Programming is about using language to program our nervous system into more useful habits. Success is often about developing the right habits in any situation.
                                    </p>
                                    <p className="font_9">
                                        Neuro Linguistic Programming was created in the 1970s by Richard Bandler and John Grinder. They studied and worked with some of the most talented psychiatrists and therapists of the day: Milton Erickson, Virginia Satir, and Fritz Perls. Contrary to most of the academics at the time, however, they took a different approach in that they focused on bringing about measurable change, rather than merely theorizing.
                                    </p>
                                    <p className="font_9">
                                        Bandler and Grinder wanted to know the psychological strategies great performers used – what they did and how they did it. They devised ways of modeling these strategies so others could replicate their performance. They then tested and refined the model with their clients. As different groups heard about its benefits, it spread across a whole range of human endeavors, including coaching, art, sport, and business.
                                    </p>
                                    <p className="font_9">
                                        John Grinder and Richard Bandler, the fathers of NLP, called their model 'neuro' because the patterns that they discovered were at the level of our neurological processes.
                                    </p>
                                    <p className="font_9">
                                        "Linguistic" to represent the ways our language reflects our neurology, and "programming" to reflect our ability to break free from our programmed behavior and choose to organize our ideas and actions in the way that we want.
                                    </p>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div className="col">
                        <div className="vc_toggle_title">
                            <p onClick={() => setOpen2(!open2)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open2}
                            >
                                <h4> + Common Misconceptions About NLP</h4>
                            </p>
                            <Collapse in={open2}>
                                <div id="example-collapse-text">
                                    <p className="font_9">Some people believe that NLP involves manipulating others into doing what you want them to do. For example, a pushy salesperson persuading you to buy something you really did not want. However, it&#8217;s the use of the tool that determines manipulation, not the tool itself. If the tool is used to disadvantage someone else, then this is manipulation. If it&#8217;s used for his or her advantage, then the tool is being used in a positive way.</p>
                                    <p className="font_9">Another misconception is that NLP is used to detect whether someone is lying by watching their eye movements. Part of developing your sensory acuity is about picking up subtle eye movements and understanding that different movements have different meanings. However, since the meanings associated with every individual&#8217;s eye movements are unique, you need to understand what they mean before you can even begin to use NLP for this purpose. It is far from being a quick and simple lie detector.</p>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="vc_toggle_title">
                            <p onClick={() => setOpen3(!open3)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open3}
                            >
                                <h4> + What You Gain By Using NLP</h4>
                            </p>
                            <Collapse in={open3}>
                                <div id="example-collapse-text">
                                    <p>
                                        <span>NLP helps you to understand the outcome that you want in a given situation, and to develop sufficient awareness to know whether you&#8217;re moving toward or away from that outcome. It teaches you to be flexible about changing your behavior, so that you can achieve the desirable goal.</span>
                                    </p>
                                    <div>
                                        <span> </span>
                                    </div>
                                    <p>
                                        <span>For example, you may want to negotiate a business contract successfully. NLP can help you become more aware of what you are saying, how you are saying it, and whether or not the other person is engaged in your presentation. Through this awareness, you can shift your behavior or your speech to re-engage them, if necessary, and to achieve your goal successfully.</span>
                                    </p>
                                    <div>
                                        <span> </span>
                                    </div>
                                    <p>
                                        <span>Here&#8217;s another example: while in a difficult discussion, you can use NLP to help you shift your perception and imagine yourself standing in the other person&#8217;s shoes. This can help you to better appreciate where they are coming from. Similarly, to wrap up the discussion, you might take a &#8220;helicopter view&#8221; of things to get a sense of the bigger picture, before zooming back down into the detail and agreeing the final outcome.</span>
                                    </p>
                                    <div>
                                        <span> </span>
                                    </div>
                                    <p>
                                        <span>NLP can also help you to increase your confidence levels in public speaking. By exploring your internal state when you are feeling confident, you can map these images and sensations across to situations in which you are less confident. Your unconscious mind picks up on these subtle shifts and increases your confidence.</span>
                                    </p>
                                </div>
                            </Collapse>


                        </div>
                    </div>
                    <div className="col">
                        <div className="vc_toggle_title">
                            <p onClick={() => setOpen4(!open4)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open4}
                            >
                                <h4> + Few Quotes From Richard Bandler (Co-founder Of NLP)</h4>
                            </p>
                            <Collapse in={open4}>
                                <div id="example-collapse-text">
                                    <ul>
                                        <li>
                                            <p>Sometimes people say,&#8217; One day you are going to look back at this and laugh.&#8217; My question is:&#8217; Why wait?</p>
                                        </li>
                                        <li>
                                            <p>Brains aren&#8217;t designed to get results; they go in directions. If you know how the brain works you can set your own directions. If you don&#8217;t, then someone else will.</p>
                                        </li>
                                        <li>
                                            <p>The easier you can make it inside your head, the easier it will make things outside your head.</p>
                                        </li>
                                        <li>
                                            <p>You are born with only two fears: fear of falling and fear of loud noise. All the rest is learned. And it&#8217;s a lot of work!</p>
                                        </li>
                                        <li>
                                            <p>If you say to yourself &#8216;It&#8217;s difficult to get up in the morning&#8217;, &#8216;It&#8217;s hard to cease smoking&#8217;, then you are already using hypnotic suggestions on yourself</p>
                                        </li>
                                        <li>
                                            <p>Disappointment requires adequate planning.</p>
                                        </li>
                                        <li>
                                            <p>Understanding why something happened does not help to reduce the problem.</p>
                                        </li>
                                        <li>
                                            <p>The fact is that there is nothing wrong with most of us that a good, clean change of attitude and some new skills wouldn&#8217;t fix.</p>
                                        </li>
                                        <li>
                                            <p>You can stop anything but a person with a good attitude.</p>
                                        </li>
                                        <li>
                                            <p>Don&#8217;t re-open old wounds in order to examine their origins. Leave them healed.</p>
                                        </li>
                                    </ul>
                                </div>
                            </Collapse>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="vc_toggle_title">
                            <p onClick={() => setOpen5(!open5)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open5}
                            >
                                <h4> +  Create Report For Excellent Outcomes</h4>                            </p>
                            <Collapse in={open5}>
                                <div id="example-collapse-text">
                                    <p className="font_9">Mirroring someone&#8217;s body language, tone of voice, or even rate of speech can help strengthen your rapport with the other person. Unconsciously, the other person picks up that you are like them – and we all tend to like people who are like us.</p>
                                    <p className="font_9">You can also connect with others by speaking the same language. We take in our experiences through our sight, hearing, feelings, and even our senses of smell and taste. Our speech reveals our preferred sensory language in a particular context.</p>
                                    <p className="font_9">Have you ever heard someone say, &#8220;I see what you mean,&#8221; &#8220;I get the picture,&#8221; &#8220;I hear what you are saying,&#8221; &#8220;That rings a bell,&#8221; &#8220;I&#8217;ve just got a gut feeling about something,&#8221; or &#8220;I&#8217;ll be in touch&#8221;? Developing the skill to pick up on this sensory language will help you to modify your use of words.</p>
                                    <p className="font_9">Additionally, by developing an awareness of the subtle shifts of body language, you get an insight into what may be going on with the other person. What do shifts in posture (tall or slumped) tell you? Have you seen someone&#8217;s face turn red while they get nervous, or go deathly pale after hearing upsetting news?</p>
                                    <p className="font_9">By delving further into the mechanics of language and how people communicate, you can identify patterns that help you to understand human behavior. Are they distorting, deleting or generalizing? Do they like options, or prefer to follow procedures? Knowing what motivates people can help you deal with them.</p>
                                </div>
                            </Collapse>


                        </div>
                    </div>
                    <div className="col">
                        <div className="vc_toggle_title">
                            {/* <h4>Create Rapport For Excellent Outcomes</h4> */}
                            <i className="bi bi-plus"></i>
                        </div>
                    </div>

                </div>
                <br />
                <div className="container-certified-coach">
                    <h2>PROGRAMMING YOU FOR SUCCESS</h2>
                    <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Ubuntu, sans-serif' }}>
                        NLP can enhance your existing communication skills to help you have a greater impact, create effortless change, and further enhance your ability to connect with people. NLP helps you improve your ability to speak persuasively and listen to others to make them feel they are understood.
                    </p>
                    <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Ubuntu, sans-serif' }}>
                        By using NLP techniques, you can speak the language of your audience so that your words have a greater impact; and create effortless change by identifying behavior that may be preventing you from achieving your goals. In short, NLP helps you to program yourself for SUCCESS.
                    </p>
                </div>
                <br />
            </div>
            <br />
            <div className="anlp">
                <p><span>All NLP certifications are accredited under ABNLP (American Board of NLP, USA) and run as per the Code of ethics laid down by ABNLP</span></p>
                <p><span>NLP Coaching Academy holds the formal ICF Accreditation, and the course is delivered by Mr. Vikram Dhar – Certified NLP Trainer, Licensed Meta-NLP Trainer and ICF Mentor Coach.</span></p>
                <p><b>​ICF also approves our 7 day NLP Practitioner &amp; Coach program for the following:</b></p>
                <ul>
                    <li>21 hours (Core competency) of ICF-CCE hours</li>
                    <li>This program also helps you to fulfill part of the requirements to earn an ICF ACC or PCC credential under the ACSTH or ACTP path (conditions apply). This is for participants who wish to earn an ICF Credential.</li>
                </ul>
            </div>
            <p>&nbsp;</p>
            <hr />
            <p>&nbsp;</p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="ABNLP-Logo-01.jpg"
                                alt="Logo 1"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="ABH-02.jpg"
                                alt="Logo 2"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="neurosemantics.jpg"
                                alt="Logo 3"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="iapcct-02.jpg"
                                alt="Logo 4"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="Untitled-design-1.png"
                                alt="Logo 5"
                            />
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="Untitled-design-21.jpg"
                                alt="Logo 6"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="CCE-01.jpg"
                                alt="Logo 7"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="ICF-logos-03.jpg"
                                alt="Logo 8"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="ICF-logos-02.jpg"
                                alt="Logo 9"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="event-logo">
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/CCE-01.jpg"
                                className="lazyload"
                                src="Untitled-design-20.jpg"
                                alt="Logo 10"
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img
                        width="60%"
                        decoding="async"
                        data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/02/nlp-img.png"
                        className="lazyload"
                        src="nlp-img.png"
                        alt="Logo 11"
                    />
                </div>
            </div>
            <br />
            <div>
                <div className="row">
                    <div className="col">
                        <h2 className="font_8" style={{ paddingLeft: '10px' }}><strong>More Powerful advantages when you enroll now</strong></h2>
                        <div className="certified" style={{ color: '#435494', textAlign: 'center' }}><strong>Early Bird Bonus</strong></div>
                        <div style={{ textAlign: 'center', paddingLeft: '20px' }}>Typically at every training program, we offer our early-bird participants a significant enrollment discount. This is done to reward everyone who’s taken the time out of their busy lives to commit to their learning and attended the training.</div>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                decoding="async"
                                data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2020/03/imgpsh_fullsize_anim-2.png"
                                className="aligncenter lazyload"
                                src="imgpsh_fullsize_anim.png"
                                alt="NLP Training"
                            />
                            <noscript>
                                <img
                                    decoding="async"
                                    className="aligncenter"
                                    src="imgpsh_fullsize_anim.png"
                                    alt="NLP Training"
                                />
                            </noscript>
                            <div className="certified" style={{ color: '#435494', textAlign: 'center' }}>
                                <strong>In course Bonus</strong>
                            </div>
                            <div>
                                <h3 className="aedget" style={{ textAlign: 'center' }}>
                                    <strong>Community Support</strong>
                                </h3>
                                <div className="abnlp" style={{ textAlign: 'center', paddingLeft: '20px' }}>
                                    Yes, this is just for you as a token of appreciation for joining our NLP tribe. You’ll be part of a special PRIVATE community interacting with fellow participants through a closed WhatsApp Group and FREE to attend Quarterly Meetups.
                                </div>
                                <div>
                                    <img
                                        decoding="async"
                                        id=""
                                        style={{ borderRadius: '50%' }}
                                        data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2021/11/Certifications_image_11zon.jpg"
                                        className="aligncenter lazyload"
                                        src="Certifications_image_11zon.jpg"
                                        alt="Community Support"
                                    />
                                    <noscript>
                                        <img
                                            decoding="async"
                                            id=""
                                            className="aligncenter"
                                            style={{ borderRadius: '50%' }}
                                            src="Certifications_image_11zon.jpg"
                                            alt="Community Support"
                                        />
                                    </noscript>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <p className="font_9" style={{ textAlign: 'center' }}>
                                Certifications
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <strong>Certified NLP Practitioner</strong>
                                <br />(ABNLP approved)
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <strong>Certified Associate Leadership<br />&amp; Executive Coach</strong>
                                <br />(ICF approved, CCE hours)
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <strong>Certified Life Coach</strong>
                                <br />(ICF approved, CCE hours)
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <strong>Certified Organizational Development Coach</strong>
                                <br />(ICF approved, CCE hours)
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <strong>Certified Business Coach</strong>
                                <br />(IAPCCT approved)
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <strong>Coaching Essentials (Neuro-Semantics)</strong>
                                <br />(International Society of Neuro-Semantics)
                            </p>
                        </div>
                    </div>
                    <div className="col" style={{ paddingRight: '20px' }}>
                        <div>
                            <p style={{ textAlign: 'center' }}>
                                <strong>Requirement</strong>
                                <br />
                                Attend 7 days of training + complete book reading assignments and submit review*
                                (please contact us for more details)
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                *E-books will be provided. Review of the book(s) to be submitted in minimum 3,000 words for each book
                                (summary of your learning’s and understanding from the book).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="trainer">
                <h2 style={{ textAlign: 'center' }}>About the Trainer</h2>
                <h3 style={{ textAlign: 'center' }}>VIKRAM DHAR</h3>
                <h4 style={{ textAlign: 'center' }}><b>Lead Trainer</b></h4>
                <div class="row">
                    <div className="col">
                        <img
                            decoding="async"
                            data-src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/04/globalguru22.jpg"
                            className="lazyload"
                            src="globalguru22.jpg"
                            alt="Global Guru"
                        />
                        <noscript>
                            <img
                                decoding="async"
                                src="https://www.nlptrainingdubai.com/wp-content/uploads/2022/04/globalguru22.jpg"
                                alt="Global Guru"
                            />
                        </noscript>
                    </div>
                    <div class="col" style={{ textAlign: 'justify', marginRight: '20px' }}><p>
                        Vikram Dhar is an internationally acclaimed ICF Coach Trainer and Mentor Coach and an NLP Trainer &amp; Coach who facilitates NLP and Coaching programs across the globe. He is also a Licensed Behavioral Master Trainer, Licensed Meta-NLP Trainer certified by Michael Hall (co-founder of Neuro-Semantics) and Certified NLP Trainer (ABNLP, USA) and Member NLP Trainer (ANLP, UK). Vikram is also a Licensed NLP Coach (Certified by Richard Bandler, co-founder of NLP) and has attended the International NLP Coach &amp; New Code Practitioner training directly with John Grinder (co-founder of NLP).
                    </p>
                        <p>
                            Vikram has been listed by Global Gurus in the World&#8217;s Top 30 NLP Professionals for 2021, 2022 &amp; 2023. He has also been listed among the top 100 coaches globally both in 2017, 2020 and 2023 and was presented with the “Talent Award” during the world coaching summit for his tremendous contribution to the world of coaching. He has co-authored the book &#8220;The Ultimate Coaching Guide&#8221;.
                        </p>
                        <p>
                            He is the founder of “NLP Coaching Academy”, holds a Master’s Degree in Computer Science from Bradley University, USA and is a modern-day Business Growth Hacker and a Business Coach. In his corporate career, he has worked with market leaders in many roles, including but not limited to IT Risk Management, Cyber Security, Business Sales, Leadership &amp; Team Development and Leadership Coaching for over a decade and a half.
                        </p>
                        <p>&nbsp;</p></div>
                    <div className="description">
                        <p>
                            If you’re excited by the potential of transforming your life, we invite you to enroll in this Program now.
                            <br />
                            You get intensive training, powerful resources, and more.
                            <br />
                            <br />
                            <p>So go ahead. ENROLL NOW and get started</p>
                            <p className="cnlp" style={{ textAlign: 'center' }}>
                                <button className="buttonStyle">
                                    Register Now
                                </button>
                            </p>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CertifiedCoach;