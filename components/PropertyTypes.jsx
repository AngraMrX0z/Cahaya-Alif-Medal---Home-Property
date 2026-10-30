export default function PropertyTypes() {
  return (
<section className="section" id="tipe-properti">
<div className="container">
      <h2 className="section-title scroll-reveal">Pilihan Properti Cahaya Alif Medal</h2>
      <p className="section-intro scroll-reveal">Bandingkan tipe dan ukuran properti yang tersedia. Hubungi tim marketing untuk informasi harga dan ketersediaan terkini.</p>
      <div className="cards">
        <button className="card scroll-reveal" type="button" aria-label="Pilih properti Cupu Mekar Indah">
          <div className="property-card-image">
            <img src="images/Cupu%20Mekar%20Indah%2021x25.jpg" alt="Properti tipe 21 &times; 25 di Cupu Mekar Indah" className="cupu-mi-image" />
            <span className="property-card-title">Cupu Mekar Indah</span>
          </div>
          <div className="card-body">
            <b>Tipe 21 &times; 25</b><br /><small>Luas tanah 21 m&sup2; &middot; Luas bangunan 25 m&sup2;</small><br /><b className="property-price">Rp 130 juta</b><br /><span className="card-promo-label">Promo terbatas untuk 15 unit hunian</span><strong className="card-cashback">Cashback 5 Jt</strong>
            <span className="card-action">Pilih Tipe Properti <span className="card-action-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></span></span>
          </div>
        </button>
        <button className="card scroll-reveal" type="button" aria-label="Pilih properti Bahuan Mekar Indah">
          <div className="property-card-image">
            <img src="images/Bahuan%20mekar%20indah.jpeg" alt="Properti tipe 25 &times; 40 di Bahuan Mekar Indah" className="bahuan-mi-image" />
            <span className="property-card-title">Bahuan Mekar Indah</span>
          </div>
          <div className="card-body">
            <b>Tipe 25 &times; 40</b><br /><small>Luas tanah 40 m&sup2; &middot; Luas bangunan 25 m&sup2;</small><br /><b className="property-price">Rp 165 juta</b>
            <span className="card-action">Pilih Tipe Properti <span className="card-action-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></span></span>
          </div>
        </button>
        <button className="card scroll-reveal" type="button" aria-label="Pilih properti Limus Lestari">
          <div className="property-card-image">
            <img src="images/Limus%20Lestari.jpeg" alt="Properti tipe 30 &times; 50 di Limus Lestari" className="limus-lestari-image" />
            <span className="property-card-title">Limus Lestari</span>
          </div>
          <div className="card-body">
            <b>Tipe 30 &times; 50</b><br /><small>Luas tanah 50 m&sup2; &middot; Luas bangunan 30 m&sup2;</small><br /><b className="property-price">Rp 215 juta</b>
            <span className="card-action">Pilih Tipe Properti <span className="card-action-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></span></span>
          </div>
        </button>
      </div>
      <dialog className="type-dialog" aria-labelledby="type-dialog-title">
        <div className="type-dialog-header">
          <div>
            <h3 id="type-dialog-title">Pilih Tipe Properti</h3>
            <p>Pilih tipe hunian yang ingin Anda tanyakan kepada tim marketing.</p>
          </div>
          <button className="type-dialog-close" type="button" aria-label="Tutup pilihan tipe">&times;</button>
        </div>
        <div className="type-options"></div>
      </dialog>
      <dialog className="image-lightbox" aria-label="Tampilan gambar properti">
        <button className="image-lightbox-close" type="button" aria-label="Tutup gambar">&times;</button>
        <img className="image-lightbox-image" alt="" />
        <p className="image-lightbox-caption"></p>
      </dialog>
      <div className="property-disclaimer scroll-reveal">
        <div>
          <strong>Butuh informasi lebih lanjut?</strong>
          <p>Konsultasikan pilihan tipe, ukuran, harga, atau ketersediaan properti dengan tim marketing kami.</p>
        </div>
        <a className="disclaimer-whatsapp" href="#kontak">Hubungi via WhatsApp</a>
      </div>
    </div>
</section>
  );
}
