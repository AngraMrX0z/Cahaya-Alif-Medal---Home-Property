export default function SiteHeader() {
  return (
<header>
<div className="container nav">
      <a className="logo" href="#top" aria-label="Property Cahaya Alif Medal - kembali ke beranda">
        <span className="logo-mark">
          <img src="images/logo%20home%20page%20cam.jpeg" alt="Logo Cahaya Alif Medal" />
        </span>
        <div className="logo-text">
          <strong>Property Cahaya Alif Medal</strong>
        </div>
      </a>
      <ul className="nav-links" id="primary-navigation" hidden>
        <li><a href="#beranda">Beranda</a></li>
        <li><a href="#foto-properti">Denah &amp; Foto</a></li>
        <li><a href="#tipe-properti">Tipe Properti</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
      <div className="nav-actions">
        <a href="#kontak" className="btn">Hubungi Marketing</a>
        <button className="menu-toggle" type="button" aria-label="Buka menu navigasi" aria-expanded="false" aria-controls="primary-navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
</header>
  );
}
