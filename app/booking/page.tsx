import Navigation from '@/app/components/Navigation';
import FullscreenMenu from '@/app/components/FullscreenMenu';
import Footer from '@/app/components/Footer';
import { getAssetPath } from '@/app/utils/paths';

export default function BookingPage() {
  return (
    <>
      <Navigation />
      <FullscreenMenu />

      {/* Hero Section - Booking Variant */}
      <section className="hero_wrap u-section u-position-relative">
        <div className="hero_background u-cover-absolute u-zindex-negative"></div>
        <div className="hero_content u-position-relative hero-collage_content hero-collage_content--schedule u-navbar-offset">
          {/* Center Image (behind text on left) */}
          <div className="hero-collage_image-wrap">
            <img src={getAssetPath("/images/booking/4a713401a3c5003f4d6d0eb078f7211df90acebd.png")} alt="Yoga practice" className="hero-collage_image" />
          </div>

          {/* Main Title */}
          <h1 className="hero-collage_title-bottom">BOOKING</h1>
        </div>
      </section>

      {/* Download App Section (Two-Slot) - WITH MAX-WIDTH CONTAINER */}
      <section className="plan_wrap u-position-relative">
        <div className="u-cover-absolute u-zindex-negative"></div>
        <div className="plan_content u-position-relative" style={{ maxWidth: 'var(--max-width--main)', marginInline: 'auto' }}>
          {/* Left: Text and Buttons */}
          <div className="u-flex-vertical-nowrap u-gap-4">
            <h2 className="text-h1 u-text-uppercase">DOWNLOAD THE OFFICIAL TRIBE APP</h2>
            <p className="text-body-md">to book your tickets and reserve your spot for classes and sessions</p>
            {/* App Store Button */}
            <div className="u-margin-top-2">
              <a href="#" className="button button--primary">DOWNLOAD APP</a>
            </div>
          </div>
          {/* Right: Phone Mockup */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <img src={getAssetPath("/images/booking/2d80b05e8b5c338dbf6e9da3beaaab42c5b228ea.png")} alt="Tribe App Mockup" className="image" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Full 4 Day Pass Pricing Section (Two-Slot) - FULL WIDTH */}
      <section className="plan_wrap u-position-relative">
        <div className="u-cover-absolute u-zindex-negative"></div>
        <div className="plan_content u-position-relative">
          {/* Left: Sticky Title */}
          <div className="pricing_title-sticky">
            <h2 className="text-h1 u-text-uppercase">FULL 4 DAY PASS</h2>
          </div>
          {/* Right: Pricing Cards */}
          <div className="u-flex-vertical-nowrap u-gap-8">
            {/* Early Bird Card */}
            <div className="card_primary_wrap">
              <div className="card_primary_element u-flex-vertical-nowrap u-gap-4 u-padding-6">
                <div className="u-flex-vertical-nowrap u-gap-2">
                  <h3 className="text-h4 u-text-uppercase">EARLY BIRD ACCESS</h3>
                  <p className="text-h1">€400</p>
                </div>
                <div className="u-flex-vertical-nowrap u-gap-3">
                  <div className="u-flex-horizontal-nowrap u-gap-2 u-align-items-center">
                    <p className="text-body-md">Regular Price</p>
                    <p className="text-body-md" style={{ textDecoration: 'line-through', opacity: 0.5 }}>€500</p>
                  </div>
                  <p className="text-body-md">Until February 2nd, 2025</p>
                  <p className="text-body-md">Registration & Payment via</p>
                  <a href="#" className="button button--outline button--small u-margin-top-4">OPEN APP</a>
                </div>
              </div>
            </div>

            {/* Regular Access Card */}
            <div className="card_primary_wrap">
              <div className="card_primary_element u-flex-vertical-nowrap u-gap-4 u-padding-6">
                <div className="u-flex-vertical-nowrap u-gap-2">
                  <h3 className="text-h4 u-text-uppercase">REGULAR ACCESS</h3>
                  <p className="text-h1">€500</p>
                </div>
                <div className="u-flex-vertical-nowrap u-gap-3">
                  <p className="text-body-md" style={{ visibility: 'hidden' }}>Placeholder</p>
                  <p className="text-body-md">From February 2nd, 2025</p>
                  <p className="text-body-md">Registration & Payment via</p>
                  <a href="#" className="button button--outline button--small u-margin-top-4">OPEN APP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 300HR Certified Pricing Section (Two-Slot) - FULL WIDTH */}
      <section className="plan_wrap u-position-relative">
        <div className="u-cover-absolute u-zindex-negative"></div>
        <div className="plan_content u-position-relative">
          {/* Left: Sticky Title with Badge */}
          <div className="pricing_title-sticky">
            <h2 className="text-h1 u-text-uppercase">300HR CERTIFIED</h2>
            <div style={{ marginTop: 'var(--_spacing---space--6)' }}>
              <img src={getAssetPath("/images/booking/25bb7dcf5cfa8aca2ea5270273ee7376d9b3094a.svg")} alt="300HR Badge" className="logo-300hr" style={{ width: '320px', height: 'auto' }} />
            </div>
          </div>
          {/* Right: Pricing Cards */}
          <div className="u-flex-vertical-nowrap u-gap-8">
            {/* Early Bird Card */}
            <div className="card_primary_wrap">
              <div className="card_primary_element u-flex-vertical-nowrap u-gap-4 u-padding-6">
                <div className="u-flex-vertical-nowrap u-gap-2">
                  <h3 className="text-h4 u-text-uppercase">EARLY BIRD ACCESS</h3>
                  <p className="text-h1">€300</p>
                </div>
                <div className="u-flex-vertical-nowrap u-gap-3">
                  <div className="u-flex-horizontal-nowrap u-gap-2 u-align-items-center">
                    <p className="text-body-md">Regular Price</p>
                    <p className="text-body-md" style={{ textDecoration: 'line-through', opacity: 0.5 }}>€400</p>
                  </div>
                  <p className="text-body-md">Until February 2nd, 2025</p>
                  <p className="text-body-md">Registration & Payment via</p>
                  <a href="#" className="button button--outline button--small u-margin-top-4">OPEN APP</a>
                </div>
              </div>
            </div>

            {/* Regular Access Card */}
            <div className="card_primary_wrap">
              <div className="card_primary_element u-flex-vertical-nowrap u-gap-4 u-padding-6">
                <div className="u-flex-vertical-nowrap u-gap-2">
                  <h3 className="text-h4 u-text-uppercase">REGULAR ACCESS</h3>
                  <p className="text-h1">€400</p>
                </div>
                <div className="u-flex-vertical-nowrap u-gap-3">
                  <p className="text-body-md" style={{ visibility: 'hidden' }}>Placeholder</p>
                  <p className="text-body-md">From February 2nd, 2025</p>
                  <p className="text-body-md">Registration & Payment via</p>
                  <a href="#" className="button button--outline button--small u-margin-top-4">OPEN APP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 75HR Graduates Pricing Section (Two-Slot) - FULL WIDTH */}
      <section className="plan_wrap u-position-relative">
        <div className="u-cover-absolute u-zindex-negative"></div>
        <div className="plan_content u-position-relative">
          {/* Left: Sticky Title with Badge */}
          <div className="pricing_title-sticky">
            <h2 className="text-h1 u-text-uppercase">75HR GRADUATES</h2>
            <div style={{ marginTop: 'var(--_spacing---space--6)' }}>
              <img src={getAssetPath("/images/booking/cb7eabd9bfccf13f4e03c4f5bd9e130691825a57.svg")} alt="75HR Badge" className="logo-75hr" style={{ width: '180px', height: 'auto' }} />
            </div>
          </div>
          {/* Right: Pricing Cards */}
          <div className="u-flex-vertical-nowrap u-gap-8">
            {/* Early Bird Card */}
            <div className="card_primary_wrap">
              <div className="card_primary_element u-flex-vertical-nowrap u-gap-4 u-padding-6">
                <div className="u-flex-vertical-nowrap u-gap-2">
                  <h3 className="text-h4 u-text-uppercase">EARLY BIRD ACCESS</h3>
                  <p className="text-h1">€300</p>
                </div>
                <div className="u-flex-vertical-nowrap u-gap-3">
                  <div className="u-flex-horizontal-nowrap u-gap-2 u-align-items-center">
                    <p className="text-body-md">Regular Price</p>
                    <p className="text-body-md" style={{ textDecoration: 'line-through', opacity: 0.5 }}>€400</p>
                  </div>
                  <p className="text-body-md">Until February 2nd, 2025</p>
                  <p className="text-body-md">Registration & Payment via</p>
                  <a href="#" className="button button--outline button--small u-margin-top-4">OPEN APP</a>
                </div>
              </div>
            </div>

            {/* Regular Access Card */}
            <div className="card_primary_wrap">
              <div className="card_primary_element u-flex-vertical-nowrap u-gap-4 u-padding-6">
                <div className="u-flex-vertical-nowrap u-gap-2">
                  <h3 className="text-h4 u-text-uppercase">REGULAR ACCESS</h3>
                  <p className="text-h1">€400</p>
                </div>
                <div className="u-flex-vertical-nowrap u-gap-3">
                  <p className="text-body-md" style={{ visibility: 'hidden' }}>Placeholder</p>
                  <p className="text-body-md">From February 2nd, 2025</p>
                  <p className="text-body-md">Registration & Payment via</p>
                  <a href="#" className="button button--outline button--small u-margin-top-4">OPEN APP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
