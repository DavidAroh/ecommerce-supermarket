import React, { useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import '../styles/LikedButton2.css'; 

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-button2">
      <button onClick={handleLikeClick}>
        {liked ? <IoHeartSharp color="#009444" size={24} /> : <IoHeartOutline color="orange" size={24} />}
      </button>
    </div>
  );
};

export default LikeButton;
