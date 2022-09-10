import React from 'react'

const Notcore = ({ isim, aciklama, tarih }) => {
  return (
    <div className='not'>
      <h3>İsim : {isim} </h3>
      <p>Açıklama : {aciklama}</p>
      <p>Tarih : {tarih}</p>
    </div>
  )
}

export default Notcore