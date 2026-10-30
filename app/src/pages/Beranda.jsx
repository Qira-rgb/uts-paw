import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'


export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className="beranda">
      <h1 className="beranda-judul">Destinasi Wisata Alam</h1>
      <p className="beranda-tema">Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p className="beranda-ringkasan">
          Informasi tempat wisata yang menarik di Provinsi Lampung. 
          Ada {items.length} tugas dalam {jumlahKategori} kategori.
        </p>
      )}
      <Link to="/koleksi">Lihat semua koleksi destinasi</Link>
    </section>
  )
}