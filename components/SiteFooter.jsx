export default function SiteFooter() {
  return (
<footer>
<div className="container footer-content scroll-reveal">
      <div className="footer-brand">
        <a className="office-pin" href="https://maps.app.goo.gl/uhANsNzK1D7RiQAD9" target="_blank" rel="noopener noreferrer" aria-label="PIN KANTOR - buka lokasi kantor di peta">
          <svg className="office-pin-mark" viewBox="0 0 64 80" aria-hidden="true" focusable="false">
            <path d="M32 75S6 43 6 28a26 26 0 1 1 52 0C58 43 32 75 32 75Z"/>
            <circle cx="32" cy="28" r="13"/>
          </svg>
          <span>PIN KANTOR</span>
        </a>
        <div>
          <small>Property PT. Cahaya Alif Medal</small>
          <a className="footer-location" href="https://maps.app.goo.gl/uhANsNzK1D7RiQAD9" target="_blank" rel="noopener noreferrer">
            Jl. Cupu No. 126, RT 02/RW 08, Rancamanyar, Kec. Baleendah, Kabupaten Bandung, Jawa Barat 40375
          </a>
        </div>
      </div>
      <div><small>&copy; 2026 Property PT. Cahaya Alif Medal. All rights reserved.<br />Marketing Gallery PT. Cahaya Alif Medal</small></div>
    </div>
</footer>
  );
}
