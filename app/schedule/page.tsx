'use client';

import Navigation from '@/app/components/Navigation';
import FullscreenMenu from '@/app/components/FullscreenMenu';
import Footer from '@/app/components/Footer';
import { useScheduleInteractions } from '@/app/hooks/useScheduleInteractions';
import { getAssetPath } from '@/app/utils/paths';

export default function SchedulePage() {
  // Use the reusable schedule interactions hook
  useScheduleInteractions();

  return (
    <>
      <Navigation />
      <FullscreenMenu />

      {/* Hero Section with Collage (Two-Slot) - Schedule Variant */}
      <section className="hero_wrap u-section u-position-relative">
        <div className="hero_background u-cover-absolute u-zindex-negative"></div>
        <div className="hero_content u-position-relative hero-collage_content hero-collage_content--schedule u-navbar-offset">
          {/* Hero Image (Center-Left) */}
          <div className="hero-collage_image-wrap">
            <img src={getAssetPath("/images/schedule/a442d6830fad7ef1ff33d36fa9a2b8092d9650d2.png")} alt="Schedule planning with notebook" className="hero-collage_image" />
          </div>

          {/* Logo Branding (Right) */}
          <div className="hero-collage_logo-wrap">
            <img src={getAssetPath("/images/tribe-short-logotype-currentcolor.svg")} alt="Jivamukti Yoga The Tribe Gathering" className="hero-collage_logo" />
          </div>

          {/* Bottom Title (Full Width) */}
          <h1 className="hero-collage_title-bottom">SCHEDULE</h1>
        </div>
      </section>

      {/* CTA Section (Two-Slot) */}
      <div className="cta_wrap u-section u-position-relative">
        <div className="cta_background u-cover-absolute"></div>
        <div className="cta_content u-position-relative">
          <p className="text-h4 u-text-uppercase u-text-center" style={{ color: 'var(--swatch--light-100)' }}>Download our entire schedule</p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="button button--primary">Digital Version</a>
            <a href="#" className="button button--secondary">PDF Version</a>
          </div>
        </div>
      </div>

      {/* Schedule Section (Two-Slot) */}
      <section className="schedule_wrap u-section u-position-relative">
        <div className="schedule_background u-cover-absolute u-zindex-negative"></div>
        <div className="schedule_content u-position-relative">

          {/* Day 1 */}
          <div className="day_wrap">
            <div className="day_header">
              <h2 className="text-h1 u-text-uppercase">SEPT 09</h2>
              <h2 className="text-h1 u-text-uppercase">FRIDAY</h2>
            </div>

            <div className="day_table">
              {/* Row 1: Masterclass */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/friday-photo.png")}>
                  <div className="text-body-lg">10:00 | 11:30</div>
                  <div className="text-h4 u-text-center">Masterclass</div>
                  <div className="text-body-lg u-text-right">Olga Oskorbina</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/friday-photo.png")} alt="Masterclass" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Masterclass</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Join us for an intensive masterclass session where you'll deepen your practice and explore advanced techniques with experienced teachers. This session is designed to challenge and inspire practitioners of all levels.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 09, 2025<br />10:00 - 11:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 2: Open Class */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/saturday-photo.png")}>
                  <div className="text-body-lg">12:00 | 13:30</div>
                  <div className="text-h4 u-text-center">Open Class</div>
                  <div className="text-body-lg u-text-right">Jules Fbre</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/saturday-photo.png")} alt="Open Class" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Open Class</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Experience a welcoming and dynamic open class suitable for all levels. Connect with the community and enjoy a flowing practice that energizes body and mind.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 09, 2025<br />12:00 - 13:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 3: Lecture */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/friday-photo.png")}>
                  <div className="text-body-lg">14:00 | 15:30</div>
                  <div className="text-h4 u-text-center">Lecture</div>
                  <div className="text-body-lg u-text-right">Sharon Gannon</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/friday-photo.png")} alt="Lecture" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Lecture</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Dive deep into the philosophy and wisdom of yoga through engaging lectures that explore ancient teachings and their relevance in modern life.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 09, 2025<br />14:00 - 15:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 4: Workshop */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/saturday-photo.png")}>
                  <div className="text-body-lg">16:00 | 17:30</div>
                  <div className="text-h4 u-text-center">Workshop</div>
                  <div className="text-body-lg u-text-right">Anna Lunegova</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/saturday-photo.png")} alt="Workshop" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Workshop</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Participate in hands-on workshops designed to refine your technique, explore specific aspects of practice, and gain practical skills you can take home.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 09, 2025<br />16:00 - 17:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 5: Open Class */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/friday-photo.png")}>
                  <div className="text-body-lg">18:00 | 19:30</div>
                  <div className="text-h4 u-text-center">Open Class</div>
                  <div className="text-body-lg u-text-right">Andrea Kwiatkowski</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/friday-photo.png")} alt="Open Class" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Open Class</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Join our evening open class for a rejuvenating practice that helps you unwind and connect with your inner self after a full day.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 09, 2025<br />18:00 - 19:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 6: Concert */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/saturday-photo.png")}>
                  <div className="text-body-lg">20:00 | 21:30</div>
                  <div className="text-h4 u-text-center">Concert</div>
                  <div className="text-body-lg u-text-right">Magali Lehners</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/saturday-photo.png")} alt="Concert" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Concert</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">End your day with an inspiring concert featuring live music that celebrates the spirit of yoga and community. Let the sounds transport you to a place of peace and joy.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 09, 2025<br />20:00 - 21:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Grand Hall<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="day_image image-wrap image-wrap--square u-overflow-hidden">
              <img src={getAssetPath("/images/schedule/friday-photo.png")} alt="Day 1" className="image-wrap__img" />
            </div>

            <div className="day_cta">
              <a href="/booking" className="button button--outline">JOIN US</a>
            </div>
          </div>

          {/* Day 2 */}
          <div className="day_wrap">
            <div className="day_header">
              <h2 className="text-h1 u-text-uppercase">SEPT 10</h2>
              <h2 className="text-h1 u-text-uppercase">SATURDAY</h2>
            </div>

            <div className="day_table">
              {/* Row 1: Masterclass */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/saturday-photo.png")}>
                  <div className="text-body-lg">10:00 | 11:30</div>
                  <div className="text-h4 u-text-center">Masterclass</div>
                  <div className="text-body-lg u-text-right">Rima Rabbath</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/saturday-photo.png")} alt="Masterclass" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Masterclass</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Join us for an intensive masterclass session where you'll deepen your practice and explore advanced techniques with experienced teachers. This session is designed to challenge and inspire practitioners of all levels.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 10, 2025<br />10:00 - 11:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 2: Open Class */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/friday-photo.png")}>
                  <div className="text-body-lg">12:00 | 13:30</div>
                  <div className="text-h4 u-text-center">Open Class</div>
                  <div className="text-body-lg u-text-right">Dana Sertel</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/friday-photo.png")} alt="Open Class" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Open Class</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Experience a welcoming and dynamic open class suitable for all levels. Connect with the community and enjoy a flowing practice that energizes body and mind.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 10, 2025<br />12:00 - 13:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 3: Lecture */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/saturday-photo.png")}>
                  <div className="text-body-lg">14:00 | 15:30</div>
                  <div className="text-h4 u-text-center">Lecture</div>
                  <div className="text-body-lg u-text-right">Moritz Camilla</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/saturday-photo.png")} alt="Lecture" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Lecture</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Dive deep into the philosophy and wisdom of yoga through engaging lectures that explore ancient teachings and their relevance in modern life.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 10, 2025<br />14:00 - 15:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 4: Workshop */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/friday-photo.png")}>
                  <div className="text-body-lg">16:00 | 17:30</div>
                  <div className="text-h4 u-text-center">Workshop</div>
                  <div className="text-body-lg u-text-right">Juan Sierra</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/friday-photo.png")} alt="Workshop" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Workshop</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Participate in hands-on workshops designed to refine your technique, explore specific aspects of practice, and gain practical skills you can take home.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 10, 2025<br />16:00 - 17:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 5: Open Class */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/saturday-photo.png")}>
                  <div className="text-body-lg">18:00 | 19:30</div>
                  <div className="text-h4 u-text-center">Open Class</div>
                  <div className="text-body-lg u-text-right">Magali Lehners</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/saturday-photo.png")} alt="Open Class" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Open Class</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Join our evening open class for a rejuvenating practice that helps you unwind and connect with your inner self after a full day.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 10, 2025<br />18:00 - 19:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Main Studio<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>

              {/* Row 6: Concert */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/schedule/friday-photo.png")}>
                  <div className="text-body-lg">20:00 | 21:30</div>
                  <div className="text-h4 u-text-center">Concert</div>
                  <div className="text-body-lg u-text-right">Andrea Kwiatkowski</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/schedule/friday-photo.png")} alt="Concert" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Concert</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">End your day with an inspiring concert featuring live music that celebrates the spirit of yoga and community. Let the sounds transport you to a place of peace and joy.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br />September 10, 2025<br />20:00 - 21:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br />Grand Hall<br />Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <a href="/booking" className="button day_row-buy-button">BUY TICKETS</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="day_image image-wrap image-wrap--square u-overflow-hidden">
              <img src={getAssetPath("/images/schedule/saturday-photo.png")} alt="Day 2" className="image-wrap__img" />
            </div>

            <div className="day_cta">
              <a href="/booking" className="button button--outline">JOIN US</a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
