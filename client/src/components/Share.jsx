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

  // const handleShare = () => {
  //   // Logic to share information via selected social media
  //   const phone = '+254742604'
  //   let url = `http://localhost:4000/viewmeal/${id}`;
  //   const message = encodeURIComponent(`Check out this recipe: ${url}`)
  //   // let url = `https://wa.me/${phone}/?text=${message}`

  //   // const message = `Check out this recipe: ${url}`;

  //   switch (selectedSocialMedia) {
  //     case 'whatsapp':
  //       url = `https://wa.me/${phone}/?text=${message}`;
  //       break;
  //     case 'twitter':
  //       url = `https://twitter.com/intent/tweet?text=${message}`;
  //       break;
  //     case 'facebook':
  //       url = `https://www.facebook.com/sharer/sharer.php?u=${message}`;
  //       break;
  //     default:
  //       break;
  //   }

  //   if (url !== `http://localhost:4000/viewmeal/${id}`) {
  //     window.open(url, '_blank');
  //   }
  // };
  // const handleShare = () => {
  //   const phone = '+254742604943';
  //   const message = encodeURIComponent(`Check out this recipe: http://localhost:4000/viewmeal/${id}`);
    
  //   let url;
  //   switch (selectedSocialMedia) {
  //     case 'whatsapp':
  //       url = `https://wa.me/${phone}/?text=${message}`;
  //       break;
  //     case 'twitter':
  //       url = `https://twitter.com/intent/tweet?text=${message}`;
  //       break;
  //     case 'facebook':
  //       url = `https://www.facebook.com/sharer/sharer.php?u=http://localhost:4000/viewmeal/${id}`;
  //       break;
  //     default:
  //       break;
  //   }
  
  //   if (url) {
  //     window.open(url, '_blank');
  //   }
  // };
  // const handleShare = () => {
  //   const phone = '+254742604943';
  //   const recipeUrl = `http://localhost:4000/viewmeal/${id}`;
  //   const message = encodeURIComponent(`Check out this recipe: ${recipeUrl}`);
  
  //   let url = '';
  
  //   switch (selectedSocialMedia) {
  //     case 'whatsapp':
  //       url = `https://wa.me/${phone}/?text=${message}`;
  //       break;
  //     case 'twitter':
  //       url = `https://twitter.com/intent/tweet?text=${message}`;
  //       break;
  //     case 'facebook':
  //       url = `https://www.facebook.com/sharer/sharer.php?u=${recipeUrl}`;
  //       break;
  //     default:
  //       break;
  //   }
  
  //   if (url !== '') {
  //     window.open(url, '_blank');
  //   }
  // };
  // const handleShare = () => {
  //   const phone = '+254742604943';
  //   const url = `http://localhost:4000/viewmeal/${id}`;
  //   const message = encodeURIComponent(`Check out this recipe: ${url}`);
  
  //   switch (selectedSocialMedia) {
  //     case 'whatsapp':
  //       window.open(`https://wa.me/${phone}/?text=${message}`, '_blank');
  //       break;
  //     case 'twitter':
  //       window.open(`https://twitter.com/intent/tweet?text=${message}&url=${url}`, '_blank');
  //       break;
  //     case 'facebook':
  //       window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const handleShare = () => {
    // Logic to share information via selected social media
    const recipeUrl = `/viewmeal/${id}`;
    const message = encodeURIComponent(`Check out this recipe: ${recipeUrl}`);
  
    switch (selectedSocialMedia) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${message}${recipeUrl}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${message}${recipeUrl}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${recipeUrl}`, '_blank');
        break;
      default:
        break;
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
