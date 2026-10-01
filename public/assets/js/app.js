/**
 * Studio Theater UNISBA - Interactive Application Engine
 * Inspired by XXI Cineplex (m.21cineplex.com)
 * Updated with Authentic Studi Teater UNISBA Productions & Official Images
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Data Pementasan Asli Studi Teater UNISBA ---
  const SHOWS_DATA = [
    {
      id: 'show-1',
      title: 'Safari Sastra Maret: Sadar Dasar',
      genre: 'Safari Sastra & Teater',
      category: 'drama',
      duration: '120 Min',
      rating: 'SU',
      studio: 'Studio 1 XXI Dolby Atmos',
      director: 'Studi Teater Universitas Islam Bandung (Periode 25/26)',
      cast: 'Tim Pementasan Studi Teater UNISBA',
      synopsis: 'Pertunjukan drama teater dan pembacaan sastra kolosal Safari Sastra Maret: Sadar Dasar yang mempersembahkan karya refleksi budaya, estetika, dan kebangsaan oleh Studi Teater UNISBA.',
      poster: 'assets/images/poster-safari-sastra.jpg',
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      schedules: ['13:00', '15:30', '18:45', '21:00'],
      price: 35000,
      isFeatured: true
    },
    {
      id: 'show-2',
      title: 'Suaka Marga Sastra: Simfoni Cinta',
      genre: 'Drama Musikal & Sastra',
      category: 'musikal',
      duration: '110 Min',
      rating: '13+',
      studio: 'Auditorium Utama UNISBA',
      director: 'Studi Teater UNISBA (Periode 25/26)',
      cast: 'Aktor & Musisi Studi Teater UNISBA',
      synopsis: 'Eksplorasi seni peran dan alunan nada emosional dalam pementasan Suaka Marga Sastra: Simfoni Cinta, mengisahkan kedalaman rasa, cinta, dan perjuangan dalam harmoni panggung.',
      poster: 'assets/images/poster-suaka-marga-sastra.jpg',
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      schedules: ['14:00', '16:30', '19:30'],
      price: 40000,
      isFeatured: true
    },
    {
      id: 'show-3',
      title: 'Anarkis Itu Mati Kebetulan',
      genre: 'Komedi Satir & Teater Modern',
      category: 'komedi',
      duration: '95 Min',
      rating: '13+',
      studio: 'Studio 2 4K Laser',
      director: 'Indra Apriyana (Karya Dario Fo)',
      cast: 'Wildan Mubarok (Orang Gila) & Tim Pertunjukan',
      synopsis: 'Adaptasi komedi satir legendaris karya Dario Fo dalam Ujian Akhir Seni Pertunjukan Teater. Peran Si Orang Gila memutarbalikkan logika kepolisian dengan humor komikal yang tajam!',
      poster: 'assets/images/poster-anarkis-itu-mati.jpg',
      trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      schedules: ['13:15', '16:00', '18:30', '20:45'],
      price: 35000,
      isFeatured: true
    }
  ];

  // Concession Snacks Data
  const SNACKS_DATA = [
    { id: 'snack-1', name: 'Popcorn XXI Studio UNISBA (Caramel)', price: 25000 },
    { id: 'snack-2', name: 'Combo XXI Boba & Popcorn', price: 40000 },
    { id: 'snack-3', name: 'Crispy Nachos & Cheese Dip', price: 30000 }
  ];

  // State Management
  let currentActiveTab = 'now-showing';
  let activeCategoryFilter = 'all';
  let currentSearchQuery = '';
  let selectedShowForBooking = null;
  let selectedTimeSlot = null;
  let selectedSeats = [];
  let selectedSnacks = [];
  let userTickets = JSON.parse(localStorage.getItem('unisba_user_tickets') || '[]');

  // --- Initial Render & Event Listeners ---
  initNavigation();
  initSearch();
  initCategoryFilters();
  initCarousel();
  renderShowsGrid();
  renderMyTickets();

  // Navigation Tabs Switch
  function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn, .mobile-nav-item');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        if (!targetTab) return;

        // Update active class
        document.querySelectorAll('.nav-btn, .mobile-nav-item').forEach(b => b.classList.remove('active'));
        document.querySelectorAll(`[data-tab="${targetTab}"]`).forEach(b => b.classList.add('active'));

        currentActiveTab = targetTab;
        handleTabVisibility();
      });
    });
  }

  function handleTabVisibility() {
    const nowShowingSection = document.getElementById('sec-now-showing');
    const upcomingSection = document.getElementById('sec-upcoming');
    const studiosSection = document.getElementById('sec-studios');
    const myTicketsSection = document.getElementById('sec-my-tickets');
    const heroSection = document.getElementById('sec-hero');

    // Reset display
    nowShowingSection.style.display = 'none';
    upcomingSection.style.display = 'none';
    studiosSection.style.display = 'none';
    myTicketsSection.style.display = 'none';
    if (heroSection) heroSection.style.display = 'none';

    if (currentActiveTab === 'now-showing') {
      nowShowingSection.style.display = 'block';
      if (heroSection) heroSection.style.display = 'block';
    } else if (currentActiveTab === 'upcoming') {
      upcomingSection.style.display = 'block';
    } else if (currentActiveTab === 'studios') {
      studiosSection.style.display = 'block';
    } else if (currentActiveTab === 'my-tickets') {
      myTicketsSection.style.display = 'block';
      renderMyTickets();
    }
  }

  // --- Hero Carousel Auto Slider ---
  function initCarousel() {
    const carouselContainer = document.getElementById('hero-carousel');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    if (!carouselContainer) return;

    const featuredShows = SHOWS_DATA.filter(s => s.isFeatured);
    carouselContainer.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    featuredShows.forEach((show, index) => {
      // Slide HTML
      const slide = document.createElement('div');
      slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
      slide.style.backgroundImage = `linear-gradient(90deg, rgba(11, 14, 20, 0.95) 0%, rgba(11, 14, 20, 0.45) 100%), url('${show.poster}')`;

      slide.innerHTML = `
        <div class="carousel-overlay">
          <div class="carousel-content">
            <span class="carousel-tag"><i class="fas fa-star"></i> Pementasan Studi Teater UNISBA</span>
            <h2 class="carousel-title">${show.title}</h2>
            <p class="carousel-desc">${show.synopsis}</p>
            <div class="carousel-actions">
              <button class="btn-primary-xxi btn-open-booking" data-id="${show.id}">
                <i class="fas fa-ticket-alt"></i> Beli Tiket Now
              </button>
              <button class="btn-secondary-xxi btn-open-trailer" data-url="${show.trailerUrl}">
                <i class="fas fa-play"></i> Trailer
              </button>
            </div>
          </div>
        </div>
      `;
      carouselContainer.appendChild(slide);

      // Indicator
      const ind = document.createElement('div');
      ind.className = `indicator ${index === 0 ? 'active' : ''}`;
      ind.addEventListener('click', () => setCarouselSlide(index));
      indicatorsContainer.appendChild(ind);
    });

    let currentSlide = 0;
    setInterval(() => {
      currentSlide = (currentSlide + 1) % featuredShows.length;
      setCarouselSlide(currentSlide);
    }, 5000);

    function setCarouselSlide(idx) {
      const slides = carouselContainer.querySelectorAll('.carousel-slide');
      const inds = indicatorsContainer.querySelectorAll('.indicator');
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
      inds.forEach((n, i) => n.classList.toggle('active', i === idx));
    }
  }

  // --- Category Filters & Search ---
  function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.tag-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategoryFilter = btn.getAttribute('data-category');
        renderShowsGrid();
      });
    });
  }

  function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderShowsGrid();
    });
  }

  // --- Render Movie / Performance Grid ---
  function renderShowsGrid() {
    const grid = document.getElementById('shows-grid');
    if (!grid) return;

    let filtered = SHOWS_DATA.filter(show => {
      const matchCat = activeCategoryFilter === 'all' || show.category === activeCategoryFilter;
      const matchSearch = show.title.toLowerCase().includes(currentSearchQuery) || 
                          show.genre.toLowerCase().includes(currentSearchQuery) ||
                          show.synopsis.toLowerCase().includes(currentSearchQuery);
      return matchCat && matchSearch;
    });

    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <i class="fas fa-film" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--accent-gold);"></i>
          <p>Tidak ada pementasan teater yang cocok dengan kriteria pencarian.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(show => {
      const card = document.createElement('div');
      card.className = 'show-card';
      card.innerHTML = `
        <div class="card-poster">
          <img src="${show.poster}" alt="${show.title}" onerror="this.onerror=null; this.src='assets/images/images.jpg';">
          <div class="poster-badges">
            <span class="badge-age">${show.rating}</span>
            <span class="badge-studio">${show.studio}</span>
          </div>
        </div>
        <div class="card-body">
          <span class="card-genre">${show.genre}</span>
          <h3 class="card-title">${show.title}</h3>
          <div class="card-meta">
            <span><i class="far fa-clock"></i> ${show.duration}</span>
            <span><i class="fas fa-star" style="color:var(--accent-gold);"></i> 5.0</span>
          </div>
          <div class="card-actions">
            <button class="btn-card-trailer btn-open-trailer" data-url="${show.trailerUrl}">
              <i class="fas fa-play"></i> Trailer
            </button>
            <button class="btn-card-buy btn-open-booking" data-id="${show.id}">
              <i class="fas fa-ticket-alt"></i> Beli Tiket
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    // Attach Event Listeners to Buttons
    document.querySelectorAll('.btn-open-trailer').forEach(btn => {
      btn.addEventListener('click', () => {
        const trailerUrl = btn.getAttribute('data-url');
        openTrailerModal(trailerUrl);
      });
    });

    document.querySelectorAll('.btn-open-booking').forEach(btn => {
      btn.addEventListener('click', () => {
        const showId = btn.getAttribute('data-id');
        openBookingModal(showId);
      });
    });
  }

  // --- Trailer Modal Handler ---
  function openTrailerModal(url) {
    const modal = document.getElementById('trailer-modal');
    const iframe = document.getElementById('trailer-iframe');
    if (!modal || !iframe) return;

    iframe.src = url;
    modal.classList.add('active');
  }

  const closeTrailerBtn = document.getElementById('btn-close-trailer');
  if (closeTrailerBtn) {
    closeTrailerBtn.addEventListener('click', () => {
      const modal = document.getElementById('trailer-modal');
      const iframe = document.getElementById('trailer-iframe');
      if (modal) modal.classList.remove('active');
      if (iframe) iframe.src = '';
    });
  }

  // --- XXI Seat Booking Modal Workflow ---
  function openBookingModal(showId) {
    selectedShowForBooking = SHOWS_DATA.find(s => s.id === showId);
    if (!selectedShowForBooking) return;

    selectedTimeSlot = selectedShowForBooking.schedules[0];
    selectedSeats = [];
    selectedSnacks = [];

    // Populate Modal Info
    document.getElementById('booking-show-title').textContent = selectedShowForBooking.title;
    document.getElementById('booking-show-subtitle').textContent = `${selectedShowForBooking.genre} • ${selectedShowForBooking.studio}`;

    renderScheduleSlots();
    renderSeatGrid();
    renderSnacksList();
    updateBookingSummary();

    const bookingModal = document.getElementById('booking-modal');
    if (bookingModal) bookingModal.classList.add('active');
  }

  function renderScheduleSlots() {
    const slotsContainer = document.getElementById('schedule-slots');
    if (!slotsContainer) return;
    slotsContainer.innerHTML = '';

    selectedShowForBooking.schedules.forEach(time => {
      const btn = document.createElement('button');
      btn.className = `time-slot-btn ${time === selectedTimeSlot ? 'active' : ''}`;
      btn.innerHTML = `
        <div class="time">${time}</div>
        <div class="studio">${selectedShowForBooking.studio}</div>
      `;
      btn.addEventListener('click', () => {
        selectedTimeSlot = time;
        renderScheduleSlots();
        renderSeatGrid();
      });
      slotsContainer.appendChild(btn);
    });
  }

  function renderSeatGrid() {
    const matrix = document.getElementById('seats-matrix');
    if (!matrix) return;
    matrix.innerHTML = '';

    const rows = ['A', 'B', 'C', 'D', 'E'];
    const cols = 10;
    const occupiedSeatsList = ['A3', 'A4', 'B6', 'C5', 'C6', 'D2'];

    rows.forEach(rowLabel => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'seat-row';

      const label = document.createElement('span');
      label.className = 'row-label';
      label.textContent = rowLabel;
      rowDiv.appendChild(label);

      for (let c = 1; c <= cols; c++) {
        const seatId = `${rowLabel}${c}`;
        const seatBtn = document.createElement('button');
        const isOccupied = occupiedSeatsList.includes(seatId);
        const isSelected = selectedSeats.includes(seatId);

        seatBtn.className = `seat ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`;
        seatBtn.textContent = c;

        if (!isOccupied) {
          seatBtn.addEventListener('click', () => {
            if (selectedSeats.includes(seatId)) {
              selectedSeats = selectedSeats.filter(id => id !== seatId);
            } else {
              selectedSeats.push(seatId);
            }
            renderSeatGrid();
            updateBookingSummary();
          });
        }
        rowDiv.appendChild(seatBtn);
      }
      matrix.appendChild(rowDiv);
    });
  }

  function renderSnacksList() {
    const snacksContainer = document.getElementById('concession-list');
    if (!snacksContainer) return;
    snacksContainer.innerHTML = '';

    SNACKS_DATA.forEach(snack => {
      const card = document.createElement('div');
      const isSelected = selectedSnacks.some(s => s.id === snack.id);
      card.className = `snack-card ${isSelected ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="snack-title">${snack.name}</div>
        <div class="snack-price">Rp ${snack.price.toLocaleString('id-ID')}</div>
        <button class="btn-secondary-xxi" style="padding:4px 10px; font-size:0.75rem; margin-top:4px;">
          ${isSelected ? '<i class="fas fa-check"></i> Ditambahkan' : '+ Tambahkan'}
        </button>
      `;
      card.addEventListener('click', () => {
        if (isSelected) {
          selectedSnacks = selectedSnacks.filter(s => s.id !== snack.id);
        } else {
          selectedSnacks.push(snack);
        }
        renderSnacksList();
        updateBookingSummary();
      });
      snacksContainer.appendChild(card);
    });
  }

  function updateBookingSummary() {
    const seatsText = document.getElementById('summary-seats');
    const totalPriceText = document.getElementById('summary-total-price');
    const checkoutBtn = document.getElementById('btn-confirm-checkout');

    if (seatsText) {
      seatsText.textContent = selectedSeats.length > 0 ? selectedSeats.join(', ') : '-';
    }

    const ticketTotal = selectedSeats.length * selectedShowForBooking.price;
    const snackTotal = selectedSnacks.reduce((acc, curr) => acc + curr.price, 0);
    const grandTotal = ticketTotal + snackTotal;

    if (totalPriceText) {
      totalPriceText.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
    }

    if (checkoutBtn) {
      checkoutBtn.disabled = selectedSeats.length === 0;
      checkoutBtn.style.opacity = selectedSeats.length === 0 ? '0.5' : '1';
    }
  }

  // Confirm Checkout & Generate E-Ticket
  const checkoutBtn = document.getElementById('btn-confirm-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (selectedSeats.length === 0) return;

      const ticketTotal = selectedSeats.length * selectedShowForBooking.price;
      const snackTotal = selectedSnacks.reduce((acc, curr) => acc + curr.price, 0);
      const grandTotal = ticketTotal + snackTotal;

      const ticketCode = 'UNISBA-' + Math.floor(100000 + Math.random() * 900000);
      const newBooking = {
        bookingId: ticketCode,
        showTitle: selectedShowForBooking.title,
        studio: selectedShowForBooking.studio,
        date: 'Hari Ini (19 Agu 2026)',
        time: selectedTimeSlot,
        seats: selectedSeats.join(', '),
        seatCount: selectedSeats.length,
        totalPaid: grandTotal,
        snacks: selectedSnacks.map(s => s.name).join(', '),
        createdAt: new Date().toISOString()
      };

      // Save ticket to state & localStorage
      userTickets.unshift(newBooking);
      localStorage.setItem('unisba_user_tickets', JSON.stringify(userTickets));

      // Close Booking Modal and Show E-Ticket Receipt Modal
      document.getElementById('booking-modal').classList.remove('active');
      showTicketReceiptModal(newBooking);
    });
  }

  function showTicketReceiptModal(ticket) {
    document.getElementById('ticket-code-text').textContent = ticket.bookingId;
    document.getElementById('ticket-show-name').textContent = ticket.showTitle;
    document.getElementById('ticket-show-studio').textContent = ticket.studio;
    document.getElementById('ticket-show-time').textContent = `${ticket.date} • ${ticket.time}`;
    document.getElementById('ticket-show-seats').textContent = ticket.seats;
    document.getElementById('ticket-show-price').textContent = `Rp ${ticket.totalPaid.toLocaleString('id-ID')}`;

    // Draw Simulated Canvas QR Code
    const qrCanvas = document.getElementById('ticket-qr-canvas');
    if (qrCanvas) {
      const ctx = qrCanvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, qrCanvas.width, qrCanvas.height);
      ctx.fillStyle = '#004838';
      for (let i = 10; i < qrCanvas.width - 10; i += 10) {
        for (let j = 10; j < qrCanvas.height - 10; j += 10) {
          if (Math.random() > 0.4) {
            ctx.fillRect(i, j, 8, 8);
          }
        }
      }
      ctx.fillRect(10, 10, 30, 30);
      ctx.fillRect(qrCanvas.width - 40, 10, 30, 30);
      ctx.fillRect(10, qrCanvas.height - 40, 30, 30);
    }

    const receiptModal = document.getElementById('receipt-modal');
    if (receiptModal) receiptModal.classList.add('active');
  }

  // Close Modals
  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) modal.classList.remove('active');
    });
  });

  // Render My Tickets Tab
  function renderMyTickets() {
    const ticketsContainer = document.getElementById('user-tickets-list');
    if (!ticketsContainer) return;

    if (userTickets.length === 0) {
      ticketsContainer.innerHTML = `
        <div style="text-align: center; padding: 50px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <i class="fas fa-ticket-alt" style="font-size: 3rem; color: var(--accent-gold); margin-bottom: 12px;"></i>
          <h3 style="color:#fff;">Belum Ada Tiket Dipesan</h3>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-top:6px;">Pilih pementasan teater favorit Anda di menu Sedang Tayang untuk memesan tiket XXI Studio UNISBA.</p>
        </div>
      `;
      return;
    }

    ticketsContainer.innerHTML = '';
    userTickets.forEach(ticket => {
      const card = document.createElement('div');
      card.className = 'studio-item-card';
      card.style.display = 'flex';
      card.style.justifyContent = 'space-between';
      card.style.alignItems = 'center';
      card.style.marginBottom = '14px';

      card.innerHTML = `
        <div>
          <div style="display:flex; gap:8px; align-items:center; margin-bottom:6px;">
            <span class="badge-gold" style="font-size:0.7rem; padding:2px 6px; border-radius:4px; background:var(--accent-gold); color:#000; font-weight:800;">E-TICKET VERIFIED</span>
            <span style="font-size:0.8rem; color:var(--text-muted);">${ticket.bookingId}</span>
          </div>
          <h4 style="color:#fff; font-size:1.1rem;">${ticket.showTitle}</h4>
          <p style="color:var(--accent-gold-light); font-size:0.85rem;">${ticket.studio} | ${ticket.time} | Kursi: ${ticket.seats}</p>
        </div>
        <button class="btn-primary-xxi btn-view-pass" style="padding:6px 14px; font-size:0.8rem;" data-id="${ticket.bookingId}">
          <i class="fas fa-qrcode"></i> Lihat QR Pass
        </button>
      `;
      ticketsContainer.appendChild(card);
    });

    document.querySelectorAll('.btn-view-pass').forEach(btn => {
      btn.addEventListener('click', () => {
        const bId = btn.getAttribute('data-id');
        const found = userTickets.find(t => t.bookingId === bId);
        if (found) showTicketReceiptModal(found);
      });
    });
  }
});
