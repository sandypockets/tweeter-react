import React from 'react';

export const Profile = () => {
  return(
    <header className="page-header">
      <div className="profile-image">
        <img alt={'some-alt-text'} src="/images/profile-hex.png" />
      </div>
      <br />
      <div className="profile-name">
        <h2>Zac A</h2>
      </div>
    </header>
  )
}