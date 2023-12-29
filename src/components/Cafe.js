import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HostelItem from './HostelItem'; // Assuming HostelItem renders hostel details

const Cafe = ({ hostelList }) => {
    const [showHostelsWithCafe, setShowHostelsWithCafe] = useState(false);
    const [showHostelsWithoutCafe, setShowHostelsWithoutCafe] = useState(false);
    const navigate = useNavigate(); // Hook to navigate to different routes

    const handleToggleDisplay = (isCafeSection) => {
        if (isCafeSection) {
            setShowHostelsWithCafe(true);
            setShowHostelsWithoutCafe(false);
            navigate('/hostels/cafe/:true'); // Change route to /hostels/cafe/withCafe
        } else {
            setShowHostelsWithCafe(false);
            setShowHostelsWithoutCafe(true);
            navigate('/hostels/cafe/:false'); // Change route to /hostels/cafe/withoutCafe
        }
    };

    return (
        <Accordion>
            <h3 className="cafe-option" onClick={() => handleToggleDisplay(true)}>
                Hostels With Cafes
            </h3>

            {showHostelsWithCafe && (
                <>
                    {hostelList
                        .filter((hostel) => hostel.cafe === true)
                        .map((hostel, index) => (
                            <Accordion.Item eventKey={`withCafe${index}`} key={index}>
                                <HostelItem hostel={hostel} />
                            </Accordion.Item>
                        ))}
                </>
            )}

            <h3 className="cafe-option" onClick={() => handleToggleDisplay(false)}>
                Hostels Without Cafes
            </h3>

            {showHostelsWithoutCafe && (
                <>
                    {hostelList
                        .filter((hostel) => hostel.cafe === false)
                        .map((hostel, index) => (
                            <Accordion.Item eventKey={`withoutCafe${index}`} key={index}>
                                <HostelItem hostel={hostel} />
                            </Accordion.Item>
                        ))}
                </>
            )}
        </Accordion>
    );
};

export default Cafe;
