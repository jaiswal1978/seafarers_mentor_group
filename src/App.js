import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Data from "./Data";


const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, contactNumber, whatsAppNumber, email, prefferedMode } = faq;
    const iconStyle = { color: '#007cc4' };

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">{header}</h5>
                    <i className="fa fa-chevron-down rc-accordion-icon"></i>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                  <div className="Social-media pb-3">
                    <a href={`tel:${contactNumber}`}><FontAwesomeIcon icon={faPhone} style={iconStyle} /></a>
                    <a href={`https://wa.me/${whatsAppNumber}`}><FontAwesomeIcon icon={faWhatsapp} style={iconStyle} /></a>
                    <a href={`mailto:${email}`}><FontAwesomeIcon icon={faEnvelope} style={iconStyle} /></a>
                    </div>
                    <div className="container">
                        <div className="contact-info">
                            <p>Contact Number:</p>
                            <p>{contactNumber}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="container">
                        <div className="contact-info">
                            <p>WhatsApp Number:</p>
                            <p>{whatsAppNumber}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="container">
                        <div className="contact-info">
                            <p>Email Id:</p>
                            <p>{email}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="container">
                        <div className="contact-info">
                            <p>Preffered mode of Contact:</p>
                            <p>{prefferedMode}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function App() {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                              <h4 className="form-heading text-primary text-center mt-3">Seafarers India Mentoring Group</h4>
                              <h5 className="form-heading text-primary text-center">Contact Details</h5>
                                {Data.map((faq, index) => (
                                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
