import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const DATA = [{ id: '3', judul: 'Taman Nasional Way Kambas', kategori: 'Budaya', jamBuka: '08.00 - 18.00 WIB', hargaTiket: '20000', kabupaten: 'Lampung Timur' }]

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(DATA))))
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('menampilkan data hasil fetch di halaman koleksi', async () => {
  buka('/koleksi/3')
  expect(await screen.findByText('Taman Nasional Way Kambas')).toBeInTheDocument()
})

test('form menolak judul kosong', async () => {
  buka('/tambah')
  await userEvent.click(screen.getByRole('button', { name: 'Simpan' }))
  expect(screen.getByRole('alert')).toHaveTextContent('Destinasi wajib diisi')
})

test('id yang tidak ada menampilkan pesan tidak ditemukan', async () => {
  buka('/koleksi/999')
  expect(await screen.findByText(/tidak ditemukan/i)).toBeInTheDocument()
})

test('alamat yang tidak dikenal menampilkan halaman 404', async () => {
  buka('/alamat-ngawur')
  expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument()
})