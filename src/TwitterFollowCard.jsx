import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing) // useState devuelve un array con dos elementos, el primero es el estado actual y el segundo es una función que permite actualizar el estado

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  const text = isFollowing ? 'Siguiendo' : 'Seguir'; // Si initialIsFollowing es undefined, undefined es un valor falsy en JavaScript
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt='avatar' />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}