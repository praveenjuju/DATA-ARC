import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>
      {liked && <p>You liked this post!</p>}
    </div>
  );
}

export default LikeButton;
