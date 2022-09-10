import React from 'react'
import AdminLayout from '../../../components/layout/AdminLayout'
import Notcore from './notcore'

const Not = () => {
  const icerik = [
    { isim: '1. Sınıf', aciklama: 'Ahmet Öğretmen', tarih: '01/01/2023' },
    { isim: '2. Sınıf', aciklama: 'Fatma Öğretmen', tarih: '21/01/2020' },
    { isim: '3. Sınıf', aciklama: 'Ali Öğretmen', tarih: '01/01/2024' },
  ]

  return (
    <AdminLayout>
      {/* <Notcore isim={icerik[0].isim} aciklama={icerik[0].aciklama} tarih={icerik[0].tarih} />
      <Notcore isim={icerik[1].isim} aciklama={icerik[1].aciklama} tarih={icerik[1].tarih} />
      <Notcore isim='3. Sınıf' aciklama='Ali Öğretmen' tarih='06/01/2025' /> */}
      {icerik.map((notu, i) => {
        return <Notcore key={i} isim={notu.isim} aciklama={notu.aciklama} tarih={notu.tarih} />
      })}
    </AdminLayout>
  )
}

export default Not
