import React, { useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { IoMdShareAlt } from 'react-icons/io'
import { useParams } from 'react-router-dom';

const Share = ({ url}) => {

  const { id } = useParams();
  const [isSocialMediaVisible, setSocialMediaVisible] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState('');

  const handleShareClick = () => {
    setSocialMediaVisible(!isSocialMediaVisible);
    setSelectedSocialMedia('');
  };

  const handleSocialMediaClick = (socialMedia) => {
    setSelectedSocialMedia(socialMedia);
  };

  const handleShare = () => {
    // Logic to share information via selected social media
    const phone = '+254742604943'
    let url = `http://localhost:4000/viewmeal/${id}`;
    const message = encodeURIComponent(`Check out this recipe: ${url}`)
    // let url = `https://wa.me/${phone}/?text=${message}`

    // const message = `Check out this recipe: ${url}`;

    switch (selectedSocialMedia) {
      case 'whatsapp':
        url = `https://wa.me/${phone}/?text=${message}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${message}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${message}`;
        break;
      default:
        break;
    }

    if (url !== `http://localhost:4000/viewmeal/${id}`) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className='p-4'>
      {/* Share icon */}
      <button onClick={handleShareClick}>
        <IoMdShareAlt />
      </button>
<div className='flex gap-5'>


      {/* Social media icons (hidden by default) */}
      {isSocialMediaVisible && (
        <div className='flex flex-row gap-5 mb-5 mt-5'>
          <button onClick={() => handleSocialMediaClick('whatsapp')}>
            <AiOutlineWhatsApp />
          </button>
          <button onClick={() => handleSocialMediaClick('twitter')}>
            <FaTwitter />
          </button>
          <button onClick={() => handleSocialMediaClick('facebook')}>
            <FaFacebook />
          </button>
        </div>
      )}

      {/* Share button for selected social media */}
      {selectedSocialMedia !== '' && (
        <button onClick={handleShare} className='border-l border-black p-1'>
          Share on {selectedSocialMedia.toUpperCase()}
        </button>
      )}
    </div>
    </div>
  );
};

export default Share;
