import { X } from 'lucide-react';
import '../../../styles/RidersFullProfile.css';

export default function RidersFullProfile({rider, setViewingRider, setIsPaused}) {
    return (
        <div className="modal-container">
            <div className="modal-card">

                <button 
                    className="close-modal-btn" 
                    onClick={() => {
                        setViewingRider(null);
                        setIsPaused(false);
                    }}
                >
                    <X size={24} />
                </button>

                <div className="rider-full-profile-content">
                    <img className='rider-full-profile-image' src={rider.profileImg.src} alt={rider.profileImg.alt} />
                    <h2>{rider.name}</h2>
                    <p>{rider.shortBio}</p>
                </div>
            </div>
        </div>
    );
}
