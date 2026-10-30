export default function HeroSection() {
  return (
<section className="hero" id="beranda">
<div className="container">
      <div className="badge reveal-on-scroll"><i></i> PILIHAN HUNIAN 2026</div>
      <div className="background reveal-on-scroll">Temukan Hunian Pilihan di <em>Cupu Mekar Indah<br />Bahuan Mekar Indah<br />Limus Lestari</em></div>
      <p className="scroll-reveal">Jelajahi denah, foto, dan pilihan tipe hunian dari Cahaya Alif Medal. Hubungi tim marketing untuk informasi terbaru mengenai harga, ukuran, dan ketersediaan.</p>

      <div className="product-card reveal-on-scroll reveal-delay" id="foto-properti">
        <div className="grid-top">
          <div className="denah">
            <img src="images/Denah%20rumah%20cupu.jpg" alt="Denah rumah Cupu Mekar Indah" />
            <img src="images/denah%20Rumah%201.jpg" alt="Denah rumah pilihan 1" />
            <img src="images/denah%20rumah%202.jpg" alt="Denah rumah pilihan 2" />
            <img src="images/denah%20rumah%203.jpg" alt="Denah rumah pilihan 3" />
          </div>
          <div className="info">
            <div className="interior-box">
              <div className="interior-heading">
                <span className="interior-heading-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7"/></svg></span>
                <strong>Interior</strong>
              </div>
              <ul>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11.5 9-7.5 9 7.5M5.5 10v10h13V10M9 20v-6h6v6"/></svg><span>Kamar Tidur</span></li>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4ZM6 10V6a2 2 0 0 1 2-2h1M4 21v-2M20 21v-2"/></svg><span>Dapur</span></li>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16v7H4zM6 12V9a6 6 0 0 1 12 0v3M8 16h.01M16 16h.01M7 21v-2M17 21v-2"/></svg><span>Kamar Mandi</span></li>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17h18l-1.5-6h-15L3 17ZM5 17v3M19 17v3M6 11l1-4h10l1 4M7 14h.01M17 14h.01"/></svg><span>Carport</span></li>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 11.5 8-6.5 8 6.5V20H4v-8.5ZM9 20v-5h6v5M8 10h.01M16 10h.01"/></svg><span>Ruang Tamu</span></li>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11h18v9H3zM5 11V7h14v4M7 7V5h10v2M6 15h2m3 0h2m3 0h2"/></svg><span>Meja Kompor &amp; Wastafel</span></li>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11h18v9H3zM5 11V8l2-3h10l2 3v3M7 15h.01M17 15h.01M8 20v-2m8 2v-2"/></svg><span>Garasi</span></li>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8h18M5 8V5h14v3M7 8v2m5-2v2m5-2v2M8 13h8v7H8zM10 13v-2h4v2m-2 2v3"/></svg><span>Dak &amp; Toren 250 L</span></li>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 5 13h6l-1 9 9-12h-6z"/></svg><span>Listrik 900&#8211;1300 Watt</span></li>
                <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3s6 6.2 6 11a6 6 0 1 1-12 0c0-4.8 6-11 6-11ZM9 15a3 3 0 0 0 3 3"/></svg><span>Air Sibel</span></li>
              </ul>
            </div>
            <div className="info-box dark">
              <div className="price-label">Uang Muka Mulai dari</div>
              <div className="dp-value">50%</div>
            </div>
          </div>
        </div>
        <div className="photos">
          <div className="photo-with-badge">
            <img src="images/Cupu%20mekar%20indah%20dapur.jpg" alt="Area dapur Cupu Mekar Indah" />
            <div className="interior-badge"><strong>Area Dapur</strong></div>
          </div>
          <div className="interior-photo">
            <img src="images/CUPU%20ruang%20tamu.jpg" alt="Ruang tamu Cupu Mekar Indah" />
            <div className="interior-badge"><strong>Ruang Tamu</strong></div>
          </div>
          <div className="photo-with-badge">
            <img src="images/Cupu%20mekar%20indah%20kamar.jpg" alt="Kamar tidur Cupu Mekar Indah" className="bedroom-image" />
            <div className="interior-badge"><strong>Kamar Tidur</strong></div>
          </div>
          <div className="photo-with-badge">
            <img src="images/kamar%20mandi.jpg" alt="Kamar mandi Cupu Mekar Indah" />
            <div className="interior-badge"><strong>Kamar Mandi</strong></div>
          </div>
          <div className="photo-with-badge">
            <img src="images/area%20void.jpg" alt="Area void Cupu Mekar Indah" />
            <div className="interior-badge"><strong>Area Void</strong></div>
          </div>
          <div className="photo-with-badge">
            <img src="images/carport.jpg" alt="Carport Cupu Mekar Indah" />
            <div className="interior-badge"><strong>Carport</strong></div>
          </div>
        </div>
        <div className="property-tags">
          <span className="property-tag">&#10003; AJB</span>
          <span className="property-tag">&#10003; Siap Dibangun</span>
          <span className="property-tag">&#10003; Kavling Hook &amp; Standar</span>
        </div>
      </div>
    </div>
</section>
  );
}
