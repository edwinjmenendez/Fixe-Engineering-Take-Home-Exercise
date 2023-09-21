import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'

const Resturant = ({ data }) => {
  const { id, name, supportEmail, createdOn, locations } = data;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${id}`, { state: { data } });
  }

  return (
    <div key={id} onClick={handleClick} className='resturant-container'>
      <p>{id}</p>
      <p>{name}</p>
      <p>{supportEmail}</p>
      <p>{createdOn}</p>
      <p>{locations.length}</p>
    </div>
  )
}

export default Resturant