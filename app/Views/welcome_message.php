<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Studio Theater UNISBA - Official Cinema & Theater XXI</title>
  <meta name="description" content="Website Resmi Studio Theater UNISBA (Universitas Islam Bandung). Jadwal tayang pementasan drama, teater mahasiswa, festival film, dan pemesanan tiket online XXI Cinema.">
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="<?= base_url('assets/css/style.css'); ?>">
</head>
<body>

  <!-- Top Announcement Bar -->
  <div class="top-announcement">
    <span class="badge-gold"><i class="fas fa-crown"></i> XXI OFFICIAL</span>
    <span>Selamat Datang di Website Resmi <strong>Studio Theater UNISBA</strong> — Nikmati Sensasi Pementasan Teater & Cinema 4K Laser.</span>
  </div>

  <!-- Main Sticky Header -->
  <header class="site-header">
    <div class="header-container">
      
      <!-- Brand Logo -->
      <a href="<?= base_url(); ?>" class="brand-logo-wrapper">
        <img src="<?= base_url('assets/images/unisba-logo-official.jpg'); ?>" alt="Studi Teater UNISBA Logo" class="brand-logo-img" style="border-radius:50%; border:2px solid var(--accent-gold);" onerror="this.onerror=null; this.src='<?= base_url('assets/images/images.jpg'); ?>';">
        <div class="brand-title">
          <span class="brand-title-main">STUDI TEATER</span>
          <span class="brand-title-sub">UNISBA BANDUNG</span>
        </div>
      </a>

      <!-- Location Selector -->
      <div class="location-selector">
        <i class="fas fa-map-marker-alt" style="color:var(--accent-gold);"></i>
        <select id="location-select">
          <option value="hall-main">UNISBA Student Center Hall</option>
          <option value="studio-1">Studio 1 XXI Dolby Atmos</option>
          <option value="studio-2">Studio 2 XXI 4K Laser</option>
          <option value="auditorium">Auditorium Utama Tamansari</option>
        </select>
      </div>

      <!-- Main Navigation Links -->
      <nav>
        <ul class="nav-links">
          <li><button class="nav-btn active" data-tab="now-showing"><i class="fas fa-film"></i> Sedang Tayang</button></li>
          <li><button class="nav-btn" data-tab="upcoming"><i class="fas fa-calendar-alt"></i> Akan Datang</button></li>
          <li><button class="nav-btn" data-tab="studios"><i class="fas fa-door-open"></i> Teater & Studio</button></li>
          <li><button class="nav-btn" data-tab="my-tickets"><i class="fas fa-ticket-alt"></i> Tiket Saya</button></li>
        </ul>
      </nav>

      <!-- Header Search Action -->
      <div class="header-actions">
        <div class="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" id="search-input" placeholder="Cari pementasan teater...">
        </div>
      </div>

    </div>
  </header>

  <!-- Hero Section: Featured Showcase Carousel -->
  <section class="hero-section" id="sec-hero">
    <div class="carousel-container" id="hero-carousel">
      <!-- Slides dynamically rendered via JS -->
    </div>
    <div class="carousel-indicators" id="carousel-indicators"></div>
  </section>

  <!-- Main Content Container -->
  <main class="main-container">

    <!-- Section 1: Sedang Tayang (Now Showing) -->
    <section id="sec-now-showing">
      <div class="section-header">
        <div>
          <h2 class="section-title"><i class="fas fa-play-circle" style="color:var(--accent-gold);"></i> Sedang Tayang di UNISBA</h2>
          <p class="section-subtitle">Jadwal pementasan drama teater & pemutaran film hari ini</p>
        </div>

        <!-- Filter Tags -->
        <div class="filter-tags">
          <button class="tag-btn active" data-category="all">Semua Genre</button>
          <button class="tag-btn" data-category="drama">Drama</button>
          <button class="tag-btn" data-category="musikal">Musikal</button>
          <button class="tag-btn" data-category="sejarah">Sejarah</button>
          <button class="tag-btn" data-category="komedi">Komedi</button>
        </div>
      </div>

      <!-- Movie / Performance Grid -->
      <div class="shows-grid" id="shows-grid">
        <!-- Rendered dynamically by JavaScript -->
      </div>
    </section>

    <!-- Section 2: Akan Datang (Upcoming Shows) -->
    <section id="sec-upcoming" style="display: none;">
      <div class="section-header">
        <div>
          <h2 class="section-title"><i class="fas fa-clock" style="color:var(--accent-gold);"></i> Akan Datang (Upcoming)</h2>
          <p class="section-subtitle">Pementasan teater dan pemutaran film mendatang di Studio XXI UNISBA</p>
        </div>
      </div>

      <div class="shows-grid">
        <div class="show-card">
          <div class="card-poster">
            <div class="poster-placeholder">
              <i class="fas fa-masks-theater"></i>
              <span style="font-weight:700;">Festival Film Pendek 2026</span>
              <span style="font-size:0.75rem; color:var(--accent-gold); margin-top:6px;">Rilis September 2026</span>
            </div>
            <div class="poster-badges">
              <span class="badge-age">SU</span>
              <span class="badge-studio">Auditorium</span>
            </div>
          </div>
          <div class="card-body">
            <span class="card-genre">Festival & Kompetisi</span>
            <h3 class="card-title">Festival Film Pendek Mahasiswa UNISBA 2026</h3>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px;">Ajang unjuk karya kreasi sinematografi mahasiswa Fakultas Ilmu Komunikasi UNISBA.</p>
            <button class="btn-primary-xxi" style="width:100%; justify-content:center; font-size:0.8rem;">
              <i class="fas fa-bell"></i> Ingatkan Saya
            </button>
          </div>
        </div>

        <div class="show-card">
          <div class="card-poster">
            <div class="poster-placeholder">
              <i class="fas fa-music"></i>
              <span style="font-weight:700;">Genta Musikal Nusantara</span>
              <span style="font-size:0.75rem; color:var(--accent-gold); margin-top:6px;">Rilis Oktober 2026</span>
            </div>
            <div class="poster-badges">
              <span class="badge-age">SU</span>
              <span class="badge-studio">Studio 1 XXI</span>
            </div>
          </div>
          <div class="card-body">
            <span class="card-genre">Musikal Nusantara</span>
            <h3 class="card-title">Genta Musikal Nusantara: Jejak Kebangsaan</h3>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px;">Kolaborasi orkestra dan teater mahasiswa mengangkat kekayaan lagu daerah.</p>
            <button class="btn-primary-xxi" style="width:100%; justify-content:center; font-size:0.8rem;">
              <i class="fas fa-bell"></i> Ingatkan Saya
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Teater & Studio Info -->
    <section id="sec-studios" style="display: none;">
      <div class="section-header">
        <div>
          <h2 class="section-title"><i class="fas fa-building" style="color:var(--accent-gold);"></i> Teater & Studio XXI UNISBA</h2>
          <p class="section-subtitle">Fasilitas pementasan berstandar internasional di Kampus Tamansari UNISBA</p>
        </div>
      </div>

      <div class="studios-section">
        <h3 style="color:var(--accent-gold-light); margin-bottom:14px;">Daftar Studio Studio Theater UNISBA</h3>
        
        <div class="studios-grid">
          
          <div class="studio-item-card">
            <div class="studio-badge-title">
              <h4><i class="fas fa-film" style="color:var(--accent-gold);"></i> Studio 1 XXI</h4>
              <span class="badge-studio">Dolby Atmos</span>
            </div>
            <p style="font-size:0.85rem; color:var(--text-muted);">Studio bioskop utama dengan tata suara Dolby Atmos 7.1 Surround, layar perak 4K, dan kursi recline mewah berkapasitas 150 kursi.</p>
            <div class="studio-features">
              <span class="feat-tag">Dolby Atmos</span>
              <span class="feat-tag">Layar Silver 4K</span>
              <span class="feat-tag">VIP Recliner</span>
              <span class="feat-tag">AC Central</span>
            </div>
          </div>

          <div class="studio-item-card">
            <div class="studio-badge-title">
              <h4><i class="fas fa-theater-masks" style="color:var(--accent-gold);"></i> Studio 2 XXI</h4>
              <span class="badge-studio">4K Projection</span>
            </div>
            <p style="font-size:0.85rem; color:var(--text-muted);">Studio khusus pementasan teater intim dan pemutaran sinema indie dengan tata panggung akustik presisi berkapasitas 120 kursi.</p>
            <div class="studio-features">
              <span class="feat-tag">Panggung Akustik</span>
              <span class="feat-tag">Proyektor 4K</span>
              <span class="feat-tag">Kursi Ergonomis</span>
            </div>
          </div>

          <div class="studio-item-card">
            <div class="studio-badge-title">
              <h4><i class="fas fa-university" style="color:var(--accent-gold);"></i> Auditorium Utama UNISBA</h4>
              <span class="badge-studio">Grand Hall</span>
            </div>
            <p style="font-size:0.85rem; color:var(--text-muted);">Gedung auditorium utama untuk pergelaran teater kolosal, wisuda seni, dan festival film nasional berkapasitas 500 penonton.</p>
            <div class="studio-features">
              <span class="feat-tag">Kapasitas 500+</span>
              <span class="feat-tag">Lighting Rig Modern</span>
              <span class="feat-tag">Amphitheater Seating</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 4: Tiket Saya (My Tickets History) -->
    <section id="sec-my-tickets" style="display: none;">
      <div class="section-header">
        <div>
          <h2 class="section-title"><i class="fas fa-ticket-alt" style="color:var(--accent-gold);"></i> Tiket & QR Pass Saya</h2>
          <p class="section-subtitle">Daftar tiket pementasan yang telah Anda pesan di Studio Theater UNISBA</p>
        </div>
      </div>

      <div id="user-tickets-list">
        <!-- Rendered dynamically via JavaScript -->
      </div>
    </section>

  </main>

  <!-- MODAL 1: Interactive XXI Seat Selection & Ticket Booking Workflow -->
  <div class="modal-backdrop" id="booking-modal">
    <div class="modal-window">
      
      <div class="modal-header">
        <div class="modal-title-box">
          <h3 id="booking-show-title">Pesan Tiket Teater</h3>
          <p id="booking-show-subtitle">Studio XXI UNISBA</p>
        </div>
        <button class="btn-close-modal" id="btn-close-booking"><i class="fas fa-times"></i></button>
      </div>

      <div class="modal-body">
        
        <!-- Workflow Steps -->
        <div class="booking-steps">
          <div class="step-item active"><span class="step-num">1</span> Jam Tayang</div>
          <div class="step-item active"><span class="step-num">2</span> Pilih Kursi</div>
          <div class="step-item active"><span class="step-num">3</span> XXI Snack</div>
          <div class="step-item"><span class="step-num">4</span> E-Tiket Pass</div>
        </div>

        <!-- Schedule Time Slots -->
        <h4 style="font-size:0.9rem; color:var(--accent-gold-light); margin-bottom:8px;">1. Pilih Jam Tayang Hari Ini (19 Agu 2026)</h4>
        <div class="schedule-options" id="schedule-slots">
          <!-- Rendered dynamically -->
        </div>

        <!-- Cinema Curved Screen -->
        <div class="screen-container">
          <div class="screen-graphic"></div>
          <span class="screen-text"><i class="fas fa-desktop"></i> LAYAR THEATER / PANGGUNG PEMENTASAN</span>
        </div>

        <!-- Seat Matrix Grid -->
        <div class="seats-matrix" id="seats-matrix">
          <!-- Rendered dynamically -->
        </div>

        <!-- Seat Legend -->
        <div class="seat-legend">
          <div class="legend-item">
            <div class="legend-sample legend-available"></div>
            <span>Tersedia</span>
          </div>
          <div class="legend-item">
            <div class="legend-sample legend-selected"></div>
            <span>Dipilih</span>
          </div>
          <div class="legend-item">
            <div class="legend-sample legend-occupied"></div>
            <span>Terisi</span>
          </div>
        </div>

        <!-- Concessions / Snack Add-on -->
        <h4 style="font-size:0.9rem; color:var(--accent-gold-light); margin-top:20px; margin-bottom:8px;">
          <i class="fas fa-popcorn" style="color:var(--accent-gold);"></i> 2. Tambah XXI Snack & Drink (Opsional)
        </h4>
        <div class="concession-items" id="concession-list">
          <!-- Rendered dynamically -->
        </div>

        <!-- Booking Summary Footer -->
        <div class="booking-summary-bar" style="margin-top: 20px;">
          <div class="summary-info">
            <div class="seats-chosen">Kursi: <span id="summary-seats" style="color:var(--accent-gold);">-</span></div>
            <div class="price-total" id="summary-total-price">Rp 0</div>
          </div>
          <button class="btn-primary-xxi" id="btn-confirm-checkout" disabled>
            Konfirmasi & Bayar <i class="fas fa-arrow-right"></i>
          </button>
        </div>

      </div>

    </div>
  </div>

  <!-- MODAL 2: E-Ticket Receipt & QR Code Modal -->
  <div class="modal-backdrop" id="receipt-modal">
    <div class="modal-window" style="max-width: 480px;">
      
      <div class="modal-header">
        <div class="modal-title-box">
          <h3>E-Ticket XXI Studio UNISBA</h3>
          <p>Tunjukkan QR Code ini di pintu masuk teater</p>
        </div>
        <button class="btn-close-modal"><i class="fas fa-times"></i></button>
      </div>

      <div class="modal-body" style="background:#0f172a; padding: 24px;">
        
        <div class="ticket-receipt">
          <div class="ticket-header">
            <h4>STUDIO THEATER UNISBA</h4>
            <p>Universitas Islam Bandung • Tamansari</p>
            <div style="font-size:0.75rem; font-weight:800; color:var(--primary-xxi); margin-top:4px;" id="ticket-code-text">UNISBA-849302</div>
          </div>

          <div class="ticket-details">
            <div class="ticket-detail-item">
              <label>Pementasan</label>
              <span id="ticket-show-name">Layar Terkembang</span>
            </div>
            <div class="ticket-detail-item">
              <label>Studio</label>
              <span id="ticket-show-studio">Studio 1 Dolby Atmos</span>
            </div>
            <div class="ticket-detail-item">
              <label>Jadwal</label>
              <span id="ticket-show-time">Hari Ini • 18:45</span>
            </div>
            <div class="ticket-detail-item">
              <label>Nomor Kursi</label>
              <span id="ticket-show-seats">B4, B5</span>
            </div>
            <div class="ticket-detail-item" style="grid-column: 1 / -1;">
              <label>Total Pembayaran</label>
              <span id="ticket-show-price" style="color:var(--primary-xxi-dark); font-size:1.1rem;">Rp 70.000</span>
            </div>
          </div>

          <div class="qr-code-box">
            <canvas id="ticket-qr-canvas" width="140" height="140"></canvas>
            <p style="font-size:0.7rem; color:#64748b; margin-top:4px;">Scan QR Pass ini di Gate XXI Studio UNISBA</p>
          </div>
        </div>

        <button class="btn-primary-xxi" style="width:100%; margin-top:20px; justify-content:center;" onclick="window.print()">
          <i class="fas fa-print"></i> Cetak / Simpan E-Tiket
        </button>

      </div>

    </div>
  </div>

  <!-- MODAL 3: Video Trailer Modal -->
  <div class="modal-backdrop" id="trailer-modal">
    <div class="modal-window" style="max-width: 800px; background:#000;">
      <div class="modal-header" style="background:#111;">
        <div class="modal-title-box">
          <h3>Official Trailer</h3>
          <p>Studio Theater UNISBA XXI</p>
        </div>
        <button class="btn-close-modal" id="btn-close-trailer"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-body" style="padding:0; aspect-ratio:16/9;">
        <iframe id="trailer-iframe" width="100%" height="100%" src="" title="Trailer Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-container">
      
      <div class="footer-brand">
        <h3>STUDIO THEATER UNISBA</h3>
        <p>Pusat pementasan seni drama, teater mahasiswa, dan festival sinematografi Universitas Islam Bandung. Mengusung konsep bioskop XXI Cineplex modern.</p>
      </div>

      <div class="footer-links">
        <h4>Navigasi</h4>
        <ul>
          <li><a href="#"><i class="fas fa-chevron-right"></i> Sedang Tayang</a></li>
          <li><a href="#"><i class="fas fa-chevron-right"></i> Akan Datang</a></li>
          <li><a href="#"><i class="fas fa-chevron-right"></i> Jadwal Studio</a></li>
          <li><a href="#"><i class="fas fa-chevron-right"></i> Syarat & Ketentuan</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Kontak & Lokasi</h4>
        <ul>
          <li><i class="fas fa-map-marker-alt"></i> Jl. Tamansari No. 1, Bandung, Jawa Barat</li>
          <li><i class="fas fa-envelope"></i> theater@unisba.ac.id</li>
          <li><i class="fas fa-phone"></i> (022) 4203368</li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Studio Theater UNISBA. All Rights Reserved. Inspired by XXI Cineplex (m.21cineplex.com).</p>
    </div>
  </footer>

  <!-- Mobile Bottom Navigation Bar -->
  <nav class="mobile-nav">
    <ul class="mobile-nav-items">
      <li class="mobile-nav-item active" data-tab="now-showing">
        <i class="fas fa-film"></i>
        <span>Tayang</span>
      </li>
      <li class="mobile-nav-item" data-tab="upcoming">
        <i class="fas fa-calendar-alt"></i>
        <span>Akan Datang</span>
      </li>
      <li class="mobile-nav-item" data-tab="studios">
        <i class="fas fa-door-open"></i>
        <span>Teater</span>
      </li>
      <li class="mobile-nav-item" data-tab="my-tickets">
        <i class="fas fa-ticket-alt"></i>
        <span>Tiket Saya</span>
      </li>
    </ul>
  </nav>

  <!-- Application Engine JS -->
  <script src="<?= base_url('assets/js/app.js'); ?>"></script>
</body>
</html>
