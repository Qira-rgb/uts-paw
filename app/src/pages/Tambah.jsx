import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Pantai', jamBuka: '', hargaTiket: '', kabupatenkota: '' }

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const simpan = (e) => {
    e.preventDefault()
      if (form.judul.trim().length < 3) {
      setGalat('Destinasi wajib diisi, minimal 3 karakter.')
      return
    }
    if (form.kabupatenkota.trim() === '') {
      setGalat('Wajib diisi.')
      return
    }
    if (form.jamBuka.trim() === '') {
      setGalat('Wajib diisi.')
      return
    }
    if (form.hargaTiket.trim() === '') {
      setGalat('Wajib diisi.')
      return
    }

    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Destinasi</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}


      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Pantai</option>
        <option>Kuliner</option>
        <option>Budaya</option>
        <option>Gunung</option>
        <option>Perbukitan</option>
      </select>

      <label htmlFor="kabupatenkota">Kabupaten/Kota</label>
      <input id="kabupatenkota" name="kabupatenkota" value={form.kabupatenkota} onChange={ubah} placeholder="Lampung Selatan" />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="hargaTiket">Harga Tiket/Biaya Masuk (Rp) (minimal harga menu jika kuliner)</label>
      <input id="hargaTiket" name="hargaTiket" value={form.hargaTiket} onChange={ubah} placeholder="100000" />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="jamBuka">Jam Buka</label>
      <input id="jamBuka" name="jamBuka" value={form.jamBuka} onChange={ubah} placeholder="Contoh: 08.00 - 17.00 atau 24 jam" />
      {galat && <p role="alert">{galat}</p>}

      <button type="submit">Simpan</button>

    </form>
  )
}