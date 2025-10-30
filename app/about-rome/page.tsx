'use client';

import Navigation from '@/app/components/Navigation';
import FullscreenMenu from '@/app/components/FullscreenMenu';
import Footer from '@/app/components/Footer';
import { useFilteredScheduleInteractions } from '@/app/hooks/useFilteredScheduleInteractions';

export default function AboutRomePage() {
  // Use the reusable filtered schedule interactions hook
  useFilteredScheduleInteractions();

  return (
    <>
      <Navigation />
      <FullscreenMenu />

      {/* Hero Section with Collage (Two-Slot) */}
      <section className="hero_wrap u-section u-position-relative">
        <div className="hero_background u-cover-absolute u-zindex-negative"></div>
        <div className="hero_content u-position-relative hero-collage_content hero-collage_content--about-rome u-navbar-offset">
          {/* Top Title "ABOUT" */}
          <h1 className="hero-collage_title-top">ABOUT</h1>

          {/* Center-Right Image (vintage café scene) */}
          <div className="hero-collage_image-wrap">
            <img src="/images/about-rome-hero/cd1552bdfd9a6257407b683a42557f7b73a0364d.png" alt="Vintage Rome café scene" className="hero-collage_image" />
          </div>

          {/* Bottom Title "ROME" */}
          <div className="hero-collage_title-bottom">ROME</div>
        </div>
      </section>

      {/* Plan Experience Section (Two-Slot) */}
      <section className="plan_wrap u-section u-position-relative">
        <div className="plan_background u-cover-absolute u-zindex-negative"></div>
        <div className="plan_content plan_content--centered u-position-relative">
          <div className="plan_text-group">
            <h2 className="text-h2 u-text-uppercase">PLAN TODAY YOUR TRIBE EXPERIENCE</h2>
            <p className="text-body-md plan_subtitle">Yogi's Guide on Google Maps</p>
            <p className="text-body-md plan_description">
              Whether it's your first time in Stavanger or you're looking for new inspiration,
              we've gathered some of our favourite and trusted food recommendations, accommodation,
              cultural landmarks and more to help you facilitate your Tribe in Stavanger.
            </p>
          </div>
          <div className="plan_cta-group">
            <a href="#" className="button button--primary">OPEN IN GOOGLE MAPS</a>
            <div className="plan_venues">
              <h3 className="text-nav u-text-uppercase">VENUES</h3>
              <p className="text-body-sm">
                JIVAMUKTI YOGA Rome, Avaldsnesgata 95B<br />
                FISKEPIREN, Fiskepiren 1, 4013 Stavanger
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="filter_wrap u-section u-position-relative">
        <div className="filter_background u-cover-absolute u-zindex-negative"></div>
        <div className="filter_content u-position-relative">
          <div className="filter_tabs">
            <button className="filter_tab filter_tab--active" data-filter="all">ALL</button>
            <button className="filter_tab" data-filter="restaurant">RESTAURANT</button>
            <button className="filter_tab" data-filter="cafes">CAFÉS</button>
            <button className="filter_tab" data-filter="hotels">HOTELS</button>
            <button className="filter_tab" data-filter="culture">CULTURE</button>
          </div>
        </div>
      </section>

      {/* Listings Section (Two-Slot) - Using Schedule Structure */}
      <section className="schedule_wrap u-section u-position-relative">
        <div className="schedule_background u-cover-absolute u-zindex-negative"></div>
        <div className="schedule_content u-position-relative">

          {/* Cafés Category */}
          <div className="day_wrap" data-category="cafes">
            <div className="day_header">
              <h2 className="text-h1 u-text-uppercase">HISTORIC CENTER</h2>
              <h2 className="text-h1 u-text-uppercase">CAFÉS</h2>
            </div>

            <div className="day_table">
              {/* Row 1: Antico Caffè - Monolink Layout */}
              <div className="day_row-item day_row-item--monolink">
                <div className="day_row-image-inline">
                  <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Antico Caffè" className="day_row-image-inline__img" />
                </div>
                <div className="day_row-item--monolink-content">
                  <div className="day_row day_row--monolink" data-image="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png">
                    <div className="day_row-title">
                      <h3 className="text-h3 u-text-uppercase">Antico Caffè</h3>
                    </div>
                    <div className="day_row-cta">
                      <a href="#" className="button button--outline button--icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        FIND ON MAP
                      </a>
                    </div>
                  </div>
                  <div className="day_row-content day_row-content--monolink">
                    <div className="day_row-content-text">
                      <p className="text-body-md">A historic café in the heart of Rome serving authentic Italian espresso and traditional pastries since 1760.</p>
                      <div className="day_row-content-meta">
                        <p className="text-body-sm"><strong>Location:</strong> Via della Rotonda, 12, 00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong> Mon-Sun, 7:00 - 22:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Tazza d'Oro */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png">
                  <div className="text-body-lg">Near Pantheon</div>
                  <div className="text-h4 u-text-center">Tazza d'Oro</div>
                  <div className="text-body-lg u-text-right">Caffè</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png" alt="Tazza d'Oro" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Tazza d'Oro</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Famous for their granita di caffè, this café near the Pantheon is a must-visit for coffee enthusiasts exploring Rome.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via degli Orfani, 84<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sun<br />7:00 - 20:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 3: Luminari */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png">
                  <div className="text-body-lg">Modern</div>
                  <div className="text-h4 u-text-center">Luminari</div>
                  <div className="text-body-lg u-text-right">Specialty</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png" alt="Luminari" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Luminari</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Modern café with specialty roasts and plant-based options, perfect for yogis seeking healthy alternatives.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via del Governo Vecchio, 20<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sat<br />8:00 - 19:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 4: Eustachio */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png">
                  <div className="text-body-lg">Neighborhood</div>
                  <div className="text-h4 u-text-center">Eustachio</div>
                  <div className="text-body-lg u-text-right">Traditional</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png" alt="Eustachio" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Eustachio</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Charming neighborhood café known for their secret coffee blend and warm, welcoming atmosphere.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Piazza Sant'Eustachio, 82<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sun<br />6:30 - 23:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 5: Caffè Greco */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png">
                  <div className="text-body-lg">Est. 1760</div>
                  <div className="text-h4 u-text-center">Caffè Greco</div>
                  <div className="text-body-lg u-text-right">Via Condotti</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Caffè Greco" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Caffè Greco</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Rome's oldest bar, opened in 1760, frequented by artists and intellectuals throughout history.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via dei Condotti, 86<br />00187 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sun<br />9:00 - 21:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 6: Sant'Eustachio Il Caffè */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png">
                  <div className="text-body-lg">Near Senate</div>
                  <div className="text-h4 u-text-center">Sant'Eustachio Il Caffè</div>
                  <div className="text-body-lg u-text-right">Espresso Bar</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png" alt="Sant'Eustachio Il Caffè" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Sant'Eustachio Il Caffè</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Famous for their Gran Caffè, this Roman institution serves some of the best espresso in the city.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Piazza Sant'Eustachio, 82<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sun<br />8:30 - 01:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 7: Roscioli Caffè */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png">
                  <div className="text-body-lg">Bakery & Café</div>
                  <div className="text-h4 u-text-center">Roscioli Caffè</div>
                  <div className="text-body-lg u-text-right">Campo de' Fiori</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png" alt="Roscioli Caffè" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Roscioli Caffè</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Artisan bakery and café offering specialty coffee alongside freshly baked pastries and Roman pizza.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Piazza Benedetto Cairoli, 16<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sat<br />7:00 - 20:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 8: Barnum Café */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png">
                  <div className="text-body-lg">Monti District</div>
                  <div className="text-h4 u-text-center">Barnum Café</div>
                  <div className="text-body-lg u-text-right">Modern</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png" alt="Barnum Café" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Barnum Café</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Hip café in the trendy Monti neighborhood, serving organic coffee, smoothies, and healthy brunches.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via del Boschetto, 87<br />00184 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sun<br />9:00 - 20:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="day_image image-wrap image-wrap--square u-overflow-hidden">
              <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Rome Cafés" className="image-wrap__img" />
            </div>

            <div className="day_cta">
              <button className="button button--outline load-more-btn">LOAD MORE</button>
            </div>
          </div>

          {/* Restaurants Category */}
          <div className="day_wrap" data-category="restaurant">
            <div className="day_header">
              <h2 className="text-h1 u-text-uppercase">TRASTEVERE</h2>
              <h2 className="text-h1 u-text-uppercase">RESTAURANTS</h2>
            </div>

            <div className="day_table">
              {/* Row 1: Trattoria da Enzo */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png">
                  <div className="text-body-lg">Traditional</div>
                  <div className="text-h4 u-text-center">Trattoria da Enzo</div>
                  <div className="text-body-lg u-text-right">Trastevere</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Trattoria da Enzo" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Trattoria da Enzo</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Authentic Roman cuisine in a cozy family-run trattoria. Famous for their carbonara and cacio e pepe.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via dei Vascellari, 29<br />00153 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sat<br />12:30 - 15:00, 19:30 - 23:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 2: La Pergola */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png">
                  <div className="text-body-lg">Fine Dining</div>
                  <div className="text-h4 u-text-center">La Pergola</div>
                  <div className="text-body-lg u-text-right">3 Michelin Stars</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png" alt="La Pergola" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">La Pergola</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Rome's only three-Michelin-starred restaurant offering exceptional cuisine with panoramic city views.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via Alberto Cadlolo, 101<br />00136 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Tue-Sat<br />19:30 - 22:30</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 3: Felice a Testaccio */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png">
                  <div className="text-body-lg">Roman Classics</div>
                  <div className="text-h4 u-text-center">Felice a Testaccio</div>
                  <div className="text-body-lg u-text-right">Testaccio</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png" alt="Felice a Testaccio" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Felice a Testaccio</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Historic trattoria famous for inventing cacio e pepe, serving authentic Roman dishes since 1936.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via Mastro Giorgio, 29<br />00153 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sat<br />12:30 - 15:00, 19:30 - 23:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 4: Armando al Pantheon */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png">
                  <div className="text-body-lg">Family-Run</div>
                  <div className="text-h4 u-text-center">Armando al Pantheon</div>
                  <div className="text-body-lg u-text-right">Near Pantheon</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png" alt="Armando al Pantheon" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Armando al Pantheon</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Traditional family restaurant near the Pantheon, serving classic Roman recipes passed down through generations.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Salita de' Crescenzi, 31<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Fri<br />12:00 - 15:00, 19:00 - 23:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 5: Pizzarium Bonci */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png">
                  <div className="text-body-lg">Pizza al Taglio</div>
                  <div className="text-h4 u-text-center">Pizzarium Bonci</div>
                  <div className="text-body-lg u-text-right">Prati</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Pizzarium Bonci" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Pizzarium Bonci</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Renowned pizza by the slice shop by master pizza maker Gabriele Bonci, featuring creative seasonal toppings.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via della Meloria, 43<br />00136 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sun<br />11:00 - 22:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 6: Flavio al Velavevodetto */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png">
                  <div className="text-body-lg">Local Favorite</div>
                  <div className="text-h4 u-text-center">Flavio al Velavevodetto</div>
                  <div className="text-body-lg u-text-right">Testaccio</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png" alt="Flavio al Velavevodetto" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Flavio al Velavevodetto</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Authentic Roman trattoria beloved by locals, known for generous portions and traditional recipes.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via di Monte Testaccio, 97<br />00153 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sat<br />12:30 - 15:00, 19:30 - 23:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 7: Glass Hostaria */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png">
                  <div className="text-body-lg">Contemporary</div>
                  <div className="text-h4 u-text-center">Glass Hostaria</div>
                  <div className="text-body-lg u-text-right">1 Michelin Star</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png" alt="Glass Hostaria" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Glass Hostaria</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Modern Michelin-starred restaurant in Trastevere offering innovative takes on traditional Italian cuisine.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Vicolo del Cinque, 58<br />00153 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Tue-Sun<br />19:30 - 23:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 8: Tonnarello */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png">
                  <div className="text-body-lg">Trastevere Classic</div>
                  <div className="text-h4 u-text-center">Tonnarello</div>
                  <div className="text-body-lg u-text-right">Casual Dining</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png" alt="Tonnarello" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Tonnarello</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Lively trattoria in the heart of Trastevere, famous for their homemade pasta and vibrant atmosphere.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via della Paglia, 1<br />00153 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sun<br />12:30 - 15:00, 19:00 - 23:30</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">FIND ON MAP</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="day_image image-wrap image-wrap--square u-overflow-hidden">
              <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Rome Restaurants" className="image-wrap__img" />
            </div>

            <div className="day_cta">
              <button className="button button--outline load-more-btn">LOAD MORE</button>
            </div>
          </div>

          {/* Hotels Category */}
          <div className="day_wrap" data-category="hotels">
            <div className="day_header">
              <h2 className="text-h1 u-text-uppercase">VIA VENETO</h2>
              <h2 className="text-h1 u-text-uppercase">HOTELS</h2>
            </div>

            <div className="day_table">
              {/* Row 1: Hotel Eden */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png">
                  <div className="text-body-lg">Luxury</div>
                  <div className="text-h4 u-text-center">Hotel Eden</div>
                  <div className="text-body-lg u-text-right">5 Stars</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png" alt="Hotel Eden" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Hotel Eden</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Iconic luxury hotel with breathtaking views of Rome, renowned for its impeccable service and elegance.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via Ludovisi, 49<br />00187 Roma</p>
                        <p className="text-body-sm"><strong>Check-in:</strong><br />15:00<br />Check-out: 12:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">BOOK NOW</a>
                  </div>
                </div>
              </div>

              {/* Row 2: Trastevere Boutique */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png">
                  <div className="text-body-lg">Boutique</div>
                  <div className="text-h4 u-text-center">Trastevere Boutique</div>
                  <div className="text-body-lg u-text-right">4 Stars</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png" alt="Trastevere Boutique" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Trastevere Boutique</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Charming boutique hotel in the heart of Trastevere, Rome's most vibrant neighborhood.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Vicolo del Piede, 2<br />00153 Roma</p>
                        <p className="text-body-sm"><strong>Check-in:</strong><br />14:00<br />Check-out: 11:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">BOOK NOW</a>
                  </div>
                </div>
              </div>

              {/* Row 3: Hotel Hassler */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png">
                  <div className="text-body-lg">Spanish Steps</div>
                  <div className="text-h4 u-text-center">Hotel Hassler</div>
                  <div className="text-body-lg u-text-right">5 Stars</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Hotel Hassler" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Hotel Hassler</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Legendary hotel atop the Spanish Steps, offering panoramic views and classic Roman luxury since 1893.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Piazza Trinità dei Monti, 6<br />00187 Roma</p>
                        <p className="text-body-sm"><strong>Check-in:</strong><br />15:00<br />Check-out: 12:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">BOOK NOW</a>
                  </div>
                </div>
              </div>

              {/* Row 4: Hotel de Russie */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png">
                  <div className="text-body-lg">Piazza del Popolo</div>
                  <div className="text-h4 u-text-center">Hotel de Russie</div>
                  <div className="text-body-lg u-text-right">5 Stars</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png" alt="Hotel de Russie" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Hotel de Russie</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Elegant retreat near Piazza del Popolo with stunning terraced gardens, a favorite of artists and celebrities.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via del Babuino, 9<br />00187 Roma</p>
                        <p className="text-body-sm"><strong>Check-in:</strong><br />15:00<br />Check-out: 12:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">BOOK NOW</a>
                  </div>
                </div>
              </div>

              {/* Row 5: Hotel Campo de' Fiori */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png">
                  <div className="text-body-lg">Historic Center</div>
                  <div className="text-h4 u-text-center">Hotel Campo de' Fiori</div>
                  <div className="text-body-lg u-text-right">3 Stars</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png" alt="Hotel Campo de' Fiori" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Hotel Campo de' Fiori</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Charming hotel with a rooftop terrace overlooking Rome's famous flower market and historic piazza.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via del Biscione, 6<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Check-in:</strong><br />14:00<br />Check-out: 11:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">BOOK NOW</a>
                  </div>
                </div>
              </div>

              {/* Row 6: Palazzo Manfredi */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png">
                  <div className="text-body-lg">Colosseum View</div>
                  <div className="text-h4 u-text-center">Palazzo Manfredi</div>
                  <div className="text-body-lg u-text-right">5 Stars</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png" alt="Palazzo Manfredi" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Palazzo Manfredi</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Exclusive boutique hotel with spectacular Colosseum views, combining ancient charm with modern luxury.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via Labicana, 125<br />00184 Roma</p>
                        <p className="text-body-sm"><strong>Check-in:</strong><br />15:00<br />Check-out: 12:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">BOOK NOW</a>
                  </div>
                </div>
              </div>

              {/* Row 7: The Inn at the Roman Forum */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png">
                  <div className="text-body-lg">Roman Forum</div>
                  <div className="text-h4 u-text-center">The Inn at the Roman Forum</div>
                  <div className="text-body-lg u-text-right">Boutique</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="The Inn at the Roman Forum" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">The Inn at the Roman Forum</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Unique boutique hotel built over ancient Roman ruins, offering a one-of-a-kind historical experience.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via degli Ibernesi, 30<br />00184 Roma</p>
                        <p className="text-body-sm"><strong>Check-in:</strong><br />14:00<br />Check-out: 11:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">BOOK NOW</a>
                  </div>
                </div>
              </div>

              {/* Row 8: Rome Cavalieri Waldorf Astoria */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png">
                  <div className="text-body-lg">Monte Mario</div>
                  <div className="text-h4 u-text-center">Rome Cavalieri</div>
                  <div className="text-body-lg u-text-right">5 Stars</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png" alt="Rome Cavalieri" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Rome Cavalieri</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Grand hilltop resort offering breathtaking city panoramas, a world-class spa, and Michelin-starred dining.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via Alberto Cadlolo, 101<br />00136 Roma</p>
                        <p className="text-body-sm"><strong>Check-in:</strong><br />15:00<br />Check-out: 12:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">BOOK NOW</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="day_image image-wrap image-wrap--square u-overflow-hidden">
              <img src="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png" alt="Rome Hotels" className="image-wrap__img" />
            </div>

            <div className="day_cta">
              <button className="button button--outline load-more-btn">LOAD MORE</button>
            </div>
          </div>

          {/* Culture Category */}
          <div className="day_wrap" data-category="culture">
            <div className="day_header">
              <h2 className="text-h1 u-text-uppercase">ANCIENT ROME</h2>
              <h2 className="text-h1 u-text-uppercase">CULTURE</h2>
            </div>

            <div className="day_table">
              {/* Row 1: Colosseum */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png">
                  <div className="text-body-lg">Ancient</div>
                  <div className="text-h4 u-text-center">The Colosseum</div>
                  <div className="text-body-lg u-text-right">Iconic</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Colosseum" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">The Colosseum</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">The iconic amphitheater of ancient Rome, a must-visit monument that stands as a testament to Roman engineering.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Piazza del Colosseo, 1<br />00184 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Daily<br />9:00 - 19:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">GET TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 2: Vatican Museums */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png">
                  <div className="text-body-lg">Art & History</div>
                  <div className="text-h4 u-text-center">Vatican Museums</div>
                  <div className="text-body-lg u-text-right">Sistine Chapel</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png" alt="Vatican Museums" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Vatican Museums</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">World-renowned museums housing incredible art collections and the breathtaking Sistine Chapel.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Viale Vaticano<br />00165 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sat<br />9:00 - 18:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">GET TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 3: Roman Forum */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png">
                  <div className="text-body-lg">Ancient Ruins</div>
                  <div className="text-h4 u-text-center">Roman Forum</div>
                  <div className="text-body-lg u-text-right">Historical</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png" alt="Roman Forum" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Roman Forum</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">The heart of ancient Rome's political and commercial life, featuring impressive ruins and historical monuments.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Via della Salara Vecchia<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Daily<br />9:00 - 19:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">GET TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 4: Galleria Borghese */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png">
                  <div className="text-body-lg">Art Museum</div>
                  <div className="text-h4 u-text-center">Galleria Borghese</div>
                  <div className="text-body-lg u-text-right">Masterpieces</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png" alt="Galleria Borghese" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Galleria Borghese</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Exquisite art gallery showcasing works by Bernini, Caravaggio, and Raphael in a stunning villa setting.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Piazzale Scipione Borghese, 5<br />00197 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Tue-Sun<br />9:00 - 19:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">GET TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 5: Pantheon */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png">
                  <div className="text-body-lg">Ancient Temple</div>
                  <div className="text-h4 u-text-center">The Pantheon</div>
                  <div className="text-body-lg u-text-right">Architectural Marvel</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Pantheon" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">The Pantheon</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Remarkably preserved Roman temple featuring the world's largest unreinforced concrete dome.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Piazza della Rotonda<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Mon-Sun<br />9:00 - 19:00</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">GET TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 6: Trevi Fountain */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png">
                  <div className="text-body-lg">Baroque</div>
                  <div className="text-h4 u-text-center">Trevi Fountain</div>
                  <div className="text-body-lg u-text-right">Iconic</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png" alt="Trevi Fountain" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Trevi Fountain</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Rome's most famous fountain, a stunning Baroque masterpiece where tradition says to toss a coin for good luck.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Piazza di Trevi<br />00187 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />24/7<br />Open all day</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">VIEW ON MAP</a>
                  </div>
                </div>
              </div>

              {/* Row 7: Castel Sant'Angelo */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png">
                  <div className="text-body-lg">Castle Museum</div>
                  <div className="text-h4 u-text-center">Castel Sant'Angelo</div>
                  <div className="text-body-lg u-text-right">Fortress</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/7d29901f5346ba603ddea32124ea9e141f10879a.png" alt="Castel Sant'Angelo" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Castel Sant'Angelo</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Historic fortress offering panoramic views and fascinating history from Hadrian's mausoleum to papal refuge.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Lungotevere Castello, 50<br />00193 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Daily<br />9:00 - 19:30</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">GET TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 8: Capitoline Museums */}
              <div className="day_row-item">
                <div className="day_row" data-image="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png">
                  <div className="text-body-lg">Public Museum</div>
                  <div className="text-h4 u-text-center">Capitoline Museums</div>
                  <div className="text-body-lg u-text-right">World's Oldest</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src="/images/about-rome/cd1552bdfd9a6257407b683a42557f7b73a0364d.png" alt="Capitoline Museums" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Capitoline Museums</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">The world's oldest public museum, featuring exceptional collections of classical sculpture and Renaissance art.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Location:</strong><br />Piazza del Campidoglio, 1<br />00186 Roma</p>
                        <p className="text-body-sm"><strong>Hours:</strong><br />Tue-Sun<br />9:30 - 19:30</p>
                      </div>
                    </div>
                    <a href="#" className="button day_row-buy-button">GET TICKETS</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="day_image image-wrap image-wrap--square u-overflow-hidden">
              <img src="/images/about-rome/4a713401a3c5003f4d6d0eb078f7211df90acebd.png" alt="Rome Culture" className="image-wrap__img" />
            </div>

            <div className="day_cta">
              <button className="button button--outline load-more-btn">LOAD MORE</button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
