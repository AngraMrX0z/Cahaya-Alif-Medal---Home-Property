export default function ContactSection() {
  return (
<section className="section gray" id="kontak">
<div className="container">
      <h2 className="scroll-reveal">Konsultasi Properti</h2>
      <p className="scroll-reveal">Ceritakan kebutuhan Anda. Tim marketing Cahaya Alif Medal siap membantu memberikan informasi properti.</p>
      <form className="contact-form scroll-reveal">
        <input type="text" name="nama" placeholder="Nama lengkap" required />
        <input type="tel" name="wa" placeholder="Nomor WhatsApp aktif" required />
        <textarea name="alamat" placeholder="Alamat lengkap Anda" aria-label="Alamat Lengkap Anda" rows="3" autoComplete="street-address" required></textarea>
        <select name="minat" required>
          <option value="" disabled>Pilih properti yang diminati</option>
          <option>Cupu Mekar Indah</option>
          <option>Bahuan Mekar Indah</option>
          <option>Limus Lestari</option>
        </select>
        <button type="submit" className="btn whatsapp-submit">
          <span className="whatsapp-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12.04 2a9.87 9.87 0 0 0-8.43 15l-1.3 4.75 4.86-1.28A9.9 9.9 0 1 0 12.04 2Zm0 17.95a8.02 8.02 0 0 1-4.09-1.12l-.29-.17-2.88.76.77-2.81-.19-.3a8.02 8.02 0 1 1 6.68 3.64Zm4.4-6.01c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.46-.07 1.44-.59 1.64-1.16.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z"/>
            </svg>
          </span>
          <span>Lanjutkan ke WhatsApp</span>
        </button>
      </form>
      <dialog className="agent-dialog" aria-labelledby="agent-dialog-title">
        <div className="agent-dialog-header">
          <div>
            <h3 id="agent-dialog-title">Pilih Marketing</h3>
            <p>Pilih kontak marketing untuk membuka WhatsApp dengan pesan yang sudah disiapkan. Periksa pesannya, lalu tekan Kirim.</p>
          </div>
          <button className="agent-dialog-close" type="button" aria-label="Tutup pilihan agen">&times;</button>
        </div>
        <div className="agent-options">
          <a className="agent-option" data-number="6282120776124" href="#" target="_blank" rel="noopener noreferrer">
            <span><strong>Rangga</strong><small>+62 821-2077-6124</small></span>
            <span className="agent-option-arrow" aria-hidden="true">&rarr;</span>
          </a>
          <a className="agent-option" data-number="6285186663627" href="#" target="_blank" rel="noopener noreferrer">
            <span><strong>Agus Aditya</strong><small>+62 851-8666-3627</small></span>
            <span className="agent-option-arrow" aria-hidden="true">&rarr;</span>
          </a>
          <a className="agent-option" data-number="6281283825737" href="#" target="_blank" rel="noopener noreferrer">
            <span><strong>Jefry</strong><small>+62 812-8382-5737</small></span>
            <span className="agent-option-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </dialog>
    </div>
</section>
  );
}
