import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()  
  const navigate = useNavigate()
  const { items, loading, hapus } = useKoleksi()
  const item = items.find((i) => String(i.id) === id)

  if (loading) return <p>Memuat data...</p>
    if (!item) {

  return (
    <section>
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
    </section>
  )
}
  const konfirmasiHapus = () => {
    if (window.confirm(`Hapus "${item.judul}"?`)) {
      hapus(item.id)
      navigate('/koleksi')
    }
  }

return (
    <section>
      <h1>{item.judul}</h1>
      <dl>
        <dt>Kategori</dt>
        <dd>{item.kategori}</dd>
        <dt>Jam Buka</dt>
        <dd>{item.jamBuka}</dd>
        <dt>Harga Tiket</dt>
        <dd>{item.hargaTiket}</dd>
        <dt>Kabupaten/Kota</dt>
        <dd>{item.kabupatenkota}</dd>
        
      </dl>
            <div className="aksi">
        <button type="button" onClick={konfirmasiHapus}>
          Hapus
        </button>
      <Link to="/koleksi" className="koleksi-aksi">Kembali</Link>
            </div>
    </section>
  )
}