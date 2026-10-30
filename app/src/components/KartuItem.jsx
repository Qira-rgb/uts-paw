import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, kabupaten, hargaTiket, jamBuka } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`} className="kartu-aksi">{judul}</Link>
      </h3>
      <p>
        {kategori} · Jam Buka: {jamBuka}
      </p>
    </article>
  )
}