import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchResult.module.css'
import Header from '../../components/base/Header/index'
import up from '../../assets/img/up.png'
import CardTicket from '../../components/base/CardTicket';

const SearchResult = () => {
    return (
        <>
            <div style={{ background: "#F5F6FA", width: "100%", height: "100vh" }}>
                <Header />
                <div className='container-fluid pe-5 ps-5' style={{ background: "#F5F6FA", width: "1366px", height: "1725px" }}>
                    <div className='row'>
                        {/* left filter */}
                        <div className='col col-lg-4'
                        >
                            <div className="d-flex justify-content-between my-3 d-none d-lg-flex align-items-center">
                                <h5>
                                    <b>Filter</b>
                                </h5>
                                <button className="btn btn-transparent text-primary">
                                    <b>Reset</b>
                                </button>
                            </div>
                            <div className="card" style={{ width: "98%", border: "none", listStyle: "none", borderRadius: "15px" }}>
                                <div className="d-flex justify-content-between mt-4 pe-3 ps-3">
                                    <b>Transit</b>
                                    <img
                                        className='mt-2'
                                        src={up}
                                        alt='up'
                                        style={{ width: '14px', height: '10px' }}
                                    />
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">Direct
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3 ">Transit
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">Transit 2+
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <hr className='m-3 mb-0' />
                                </ul>
                                <div className="d-flex justify-content-between mt-4 pe-3 ps-3">
                                    <b>Facilities</b>
                                    <img
                                        className='mt-2'
                                        src={up}
                                        alt='up'
                                        style={{ width: '14px', height: '10px' }}
                                    />
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">Luggage
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3 ">In-Flight Meal
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">Wi-fi
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <hr className='m-3 mb-0' />
                                </ul>
                                <div className="d-flex justify-content-between mt-4 pe-3 ps-3">
                                    <b>Departure Time</b>
                                    <img
                                        className='mt-2'
                                        src={up}
                                        alt='up'
                                        style={{ width: '14px', height: '10px' }}
                                    />
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">00:00 - 06:00
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3 ">06:00 - 12:00
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">12:00 - 18:00
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">18:00 - 24:00
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <hr className='m-3 mb-0' />
                                </ul>
                                <div className="d-flex justify-content-between mt-4 pe-3 ps-3">
                                    <b>Time Arrived</b>
                                    <img
                                        className='mt-2'
                                        src={up}
                                        alt='up'
                                        style={{ width: '14px', height: '10px' }}
                                    />
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">00:00 - 06:00
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3 ">06:00 - 12:00
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">12:00 - 18:00
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">18:00 - 24:00
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <hr className='m-3 mb-0' />
                                </ul>
                                <div className="d-flex justify-content-between mt-4 pe-3 ps-3">
                                    <b>Airlines</b>
                                    <img
                                        className='mt-2'
                                        src={up}
                                        alt='up'
                                        style={{ width: '14px', height: '10px' }}
                                    />
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">Garuda Indonesia
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3 ">Air Asia
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">Lion Air
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <hr className='m-3 mb-0' />
                                </ul>
                                <div className="d-flex justify-content-between mt-4 pe-3 ps-3">
                                    <b>Ticket Price</b>
                                    <img
                                        className='mt-2'
                                        src={up}
                                        alt='up'
                                        style={{ width: '14px', height: '10px' }}
                                    />
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3">Direct
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3 ">Transit
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pe-3 ps-3 mb-5">Transit 2+
                                        <input
                                            type='checkbox'
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* right ticket result */}
                        <div className='col col-lg-8'
                        >
                            <div className="d-flex justify-content-between my-3 d-none d-lg-flex align-items-center">
                                <h5>
                                    <b>Select Ticket <span className="ms-2 text-secondary" style={{ fontSize: "14px", fontWeight: "600" }}>(6 flight found)</span></b>
                                </h5>
                                <button className="btn btn-transparent ">
                                    <b className='me-3' >Sort by</b>
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.3097 16.6888L9.43312 13.8123C9.22563 13.6048 9.1219 13.3329 9.1219 13.0609C9.1219 12.789 9.22563 12.5171 9.43312 12.3096C9.84806 11.8947 10.5208 11.8947 10.9357 12.3096L11.9985 13.3724L11.9985 2.23291C11.9985 1.64611 12.4742 1.17041 13.061 1.17041C13.6478 1.17041 14.1235 1.64611 14.1235 2.23291L14.1235 13.3724L15.1862 12.3096C15.6011 11.8947 16.2739 11.8947 16.6888 12.3096C17.1037 12.7246 17.1037 13.3973 16.6888 13.8123L13.8122 16.6888C13.3973 17.1037 12.7246 17.1037 12.3097 16.6888ZM5.00156 14.186L5.00156 3.62761L6.06429 4.69037C6.47923 5.10528 7.15196 5.10528 7.5669 4.69037C7.98184 4.2754 7.98184 3.6027 7.5669 3.18773L4.69035 0.311179C4.27541 -0.103727 3.60268 -0.103727 3.18774 0.311179L0.31119 3.18773C0.103704 3.39522 -2.30485e-05 3.66712 -2.30604e-05 3.93905C-2.30723e-05 4.21099 0.103704 4.48289 0.311189 4.69037C0.726129 5.10528 1.39886 5.10528 1.8138 4.69037L2.87653 3.62761L2.87653 14.186C2.87653 14.7728 3.35223 15.2485 3.93903 15.2485C4.52583 15.2485 5.00156 14.7728 5.00156 14.186Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <CardTicket />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResult