'use client';

import { useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import FullscreenMenu from '@/app/components/FullscreenMenu';
import Footer from '@/app/components/Footer';
import HeroCollage from '@/app/components/HeroCollage';
import { getAssetPath } from '@/app/utils/paths';

export default function TeachersPage() {
  useEffect(() => {
    // Teacher popup modal functionality
    const teacherItems = document.querySelectorAll('.teacher_item');
    const modal = document.getElementById('teacherModal');
    const closeModal = document.querySelector('.teacher-modal_close');
    const body = document.body;

    teacherItems.forEach((item) => {
      item.addEventListener('click', function(e: Event) {
        e.preventDefault();
        const teacherName = item.getAttribute('data-teacher-name');
        const teacherImage = item.getAttribute('data-teacher-image');
        const teacherRole = item.querySelector('.teacher_eyebrow')?.textContent;

        // Update modal content
        const modalImage = document.querySelector('.teacher-modal_image') as HTMLImageElement;
        const modalName = document.querySelector('.teacher-modal_name');
        const modalRole = document.querySelector('.teacher-modal_role');

        if (modalImage && teacherImage) modalImage.src = teacherImage;
        if (modalName && teacherName) modalName.textContent = teacherName;
        if (modalRole && teacherRole) modalRole.textContent = teacherRole;

        // Show modal
        modal?.classList.add('is-visible');
        body.style.overflow = 'hidden';
      });
    });

    closeModal?.addEventListener('click', function() {
      modal?.classList.remove('is-visible');
      body.style.overflow = '';
    });

    // Close on outside click
    modal?.addEventListener('click', function(e: Event) {
      if (e.target === modal) {
        modal.classList.remove('is-visible');
        body.style.overflow = '';
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e: KeyboardEvent) {
      if (e.key === 'Escape' && modal?.classList.contains('is-visible')) {
        modal.classList.remove('is-visible');
        body.style.overflow = '';
      }
    });

    // Teachers hover effect - matches home page implementation
    const teachersSection = document.querySelector('.teachers_wrap');
    if (teachersSection) {
      const teacherItems = teachersSection.querySelectorAll('.teacher_item');
      const teachersList = teachersSection.querySelector('.teachers_list');
      const hoverBadge = teachersSection.querySelector('.teachers_hover-badge');
      const badgeText = teachersSection.querySelector('.teachers_hover-badge-text');
      const heroImage = teachersSection.querySelector('.teachers_hero-image');
      const heroImageWrap = teachersSection.querySelector('.teachers_image-wrap');

      if (hoverBadge && heroImage && badgeText && teachersList) {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        let isHovering = false;
        let animationFrame: number | null = null;
        let currentTeacherName = '';

        const defaultBadgeText = 'PROFILE &<br/>CLASSES';

        function animate() {
          if (!isHovering) return;

          const ease = 0.15;
          currentX += (mouseX - currentX) * ease;
          currentY += (mouseY - currentY) * ease;

          (hoverBadge as HTMLElement).style.left = currentX + 'px';
          (hoverBadge as HTMLElement).style.top = currentY + 'px';

          animationFrame = requestAnimationFrame(animate);
        }

        // Listen to entire teachers list container
        teachersList.addEventListener('mouseenter', function(e: MouseEvent) {
          isHovering = true;
          mouseX = e.clientX;
          mouseY = e.clientY;
          currentX = mouseX;
          currentY = mouseY;

          hoverBadge.classList.add('is-visible');
          badgeText.innerHTML = defaultBadgeText;
          animate();
        });

        teachersList.addEventListener('mouseleave', function() {
          isHovering = false;
          hoverBadge.classList.remove('is-visible');
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
        });

        teachersList.addEventListener('mousemove', function(e: MouseEvent) {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });

        // Individual teacher item hover - update image and name
        teacherItems.forEach(item => {
          item.addEventListener('mouseenter', function() {
            const teacherImageUrl = item.getAttribute('data-teacher-image');
            const teacherName = item.getAttribute('data-teacher-name');

            if (teacherImageUrl) {
              (heroImage as HTMLImageElement).src = teacherImageUrl;
            }
            if (teacherName) {
              currentTeacherName = teacherName;
            }
          });
        });

        // Hero image hover - show badge with teacher name
        if (heroImageWrap) {
          heroImageWrap.addEventListener('mouseenter', function(e: MouseEvent) {
            if (currentTeacherName) {
              isHovering = true;
              mouseX = e.clientX;
              mouseY = e.clientY;
              currentX = mouseX;
              currentY = mouseY;

              hoverBadge.classList.add('is-visible');
              badgeText.innerHTML = currentTeacherName;
              animate();
            }
          });

          heroImageWrap.addEventListener('mouseleave', function() {
            isHovering = false;
            hoverBadge.classList.remove('is-visible');
            if (animationFrame) {
              cancelAnimationFrame(animationFrame);
            }
          });

          heroImageWrap.addEventListener('mousemove', function(e: MouseEvent) {
            mouseX = e.clientX;
            mouseY = e.clientY;
          });
        }
      }
    }
  }, []);

  return (
    <>
      <Navigation />
      <FullscreenMenu />

      <HeroCollage
        imageSrc="/images/latest-photos/2023.05.18_JYTribe_Day_01_0300_1024w.webp"
        imageAlt="Line Up"
        title="LINE UP"
      />

      {/* Spacer */}
      <div style={{ height: 'var(--_spacing---space--12)' }}></div>

      {/* Intro Section (Two-Slot) - About Style with Hero Image */}
      <section className="about_wrap u-section u-position-relative">
        <div className="about_background u-cover-absolute u-zindex-negative"></div>
        <div className="about_content u-position-relative u-padding-inline-sitemargin">
          {/* Top Grid: Image + Title Block */}
          <div className="home-about_hero-grid">
            {/* Left: Full-bleed Hero Image */}
            <div className="home-about_hero-image-wrap u-breakout-left">
              <img src={getAssetPath("/images/latest-photos/2023.05.18_JYTribe_Day_01_0300_1024w.webp")} alt="Teachers" className="home-about_hero-image" />
            </div>

            {/* Right: Title Stack */}
            <div className="home-about_hero-titles">
              <h2 className="text-display-LG home-about_main-title u-text-uppercase">
                <span className="home-about_main-title-word">MEET THE</span>
                <span className="home-about_main-title-word">TEACHERS &</span>
                <span className="home-about_main-title-word">ARTISTS OF</span>
                <span className="home-about_main-title-word">TRIBE 2026</span>
              </h2>
            </div>
          </div>

          {/* Bottom Grid: Heading + Content */}
          <div className="home-about_content-grid">
            {/* Left: Large Heading */}
            <h3 className="text-h1 home-about_heading">For Tribe 2026 we invite the community to</h3>

            {/* Right: Description + CTA */}
            <div className="home-about_text-wrap">
              <p className="text-body-lg home-about_description">
                Practice with Advanced Certified and Senior Jivamukti Yoga Teachers from across the globe,
                including renowned yogis from London, New York, Barcelona, Berlin, and various other corners
                of our precious planet. This remarkable lineup features Teacher Training faculty and Studio
                directors with years of experience sharing the Jivamukti Yoga method.
              </p>
              <a href="/booking" className="button button--brand">JOIN US</a>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers List Section (Two-Slot) - Image on Right, List on Left */}
      <section className="teachers_wrap u-section u-position-relative">
        <div className="teachers_background u-cover-absolute u-zindex-negative"></div>
        <div className="teachers_content u-position-relative">

          {/* Left Column: Teacher Links */}
          <div className="teachers_list">
            {/* Teacher Item 1: Sharon Gannon */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/DSCF6955_1024w.webp")} data-teacher-name="SHARON GANNON">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/DSCF6955_1024w.webp")} alt="Sharon Gannon" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info">
                <p className="text-body-md teacher_eyebrow">Founder</p>
                <h3 className="text-h1 u-text-uppercase">SHARON GANNON</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Sharon Gannon profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 2: Yogeswari */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/yogeswari_1024w.webp")} data-teacher-name="YOGESWARI">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/yogeswari_1024w.webp")} alt="Yogeswari" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info teacher_info--offset">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">YOGESWARI</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Yogeswari profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 3: Hachi Yu */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/SS_DSC07661_IP-Focus_1024w.webp")} data-teacher-name="HACHI YU">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/SS_DSC07661_IP-Focus_1024w.webp")} alt="Hachi Yu" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info teacher_info--offset-large">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">HACHI YU</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Hachi Yu profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 4: Jules Febre */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/JulesFebre_by_FlorianMaas_27_1024w.webp")} data-teacher-name="JULES FEBRE">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/JulesFebre_by_FlorianMaas_27_1024w.webp")} alt="Jules Febre" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info teacher_info--offset-medium">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">JULES FEBRE</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Jules Febre profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 5: Rima Rabbath */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/_Z7A6422_Padmasana_1024w.webp")} data-teacher-name="RIMA RABBATH">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/_Z7A6422_Padmasana_1024w.webp")} alt="Rima Rabbath" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">RIMA RABBATH</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Rima Rabbath profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 6: Olga Oskorbina */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/2023.05.18_JYTribe_Day_01_0369_1024w.webp")} data-teacher-name="OLGA OSKORBINA">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/2023.05.18_JYTribe_Day_01_0369_1024w.webp")} alt="Olga Oskorbina" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info teacher_info--offset">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">OLGA OSKORBINA</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Olga Oskorbina profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 7: Anna Lunegova */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/DSC06488_1024w.webp")} data-teacher-name="ANNA LUNEGOVA">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/DSC06488_1024w.webp")} alt="Anna Lunegova" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info teacher_info--offset-large">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">ANNA LUNEGOVA</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Anna Lunegova profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 8: Juan Sierra */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/juan.sierra.jivamukti.yoga.teacher_1024w.webp")} data-teacher-name="JUAN SIERRA">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/juan.sierra.jivamukti.yoga.teacher_1024w.webp")} alt="Juan Sierra" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info teacher_info--offset-medium">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">JUAN SIERRA</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Juan Sierra profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 9: Andrea Kwiatkowski */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/DSC07259_1024w.webp")} data-teacher-name="ANDREA KWIATKOWSKI">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/DSC07259_1024w.webp")} alt="Andrea Kwiatkowski" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">ANDREA KWIATKOWSKI</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Andrea Kwiatkowski profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 10: Magali Lehners */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/Magali_1024w.webp")} data-teacher-name="MAGALI LEHNERS">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/Magali_1024w.webp")} alt="Magali Lehners" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info teacher_info--offset">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">MAGALI LEHNERS</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Magali Lehners profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 11: Dana Sertel */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/latest-photos/dana 1_1024w.webp")} data-teacher-name="DANA SERTEL">
              <div className="teacher_item-thumbnail-wrap">
                <img src={getAssetPath("/images/latest-photos/dana 1_1024w.webp")} alt="Dana Sertel" className="teacher_item-thumbnail" />
              </div>
              <div className="teacher_info teacher_info--offset-large">
                <p className="text-body-md teacher_eyebrow">Advanced Certified</p>
                <h3 className="text-h1 u-text-uppercase">DANA SERTEL</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Dana Sertel profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>
          </div>

          {/* Right Column: Fixed Hero Image */}
          <div className="teachers_image-wrap">
            <img src={getAssetPath("/images/teachers/Sharon%20Gannon/_MG_8528_WEB.JPG")} alt="" className="teachers_hero-image" />
          </div>

          {/* Hover Following Pink Circle */}
          <div className="teachers_hover-badge">
            <img src={getAssetPath("/images/teachers/e75d6dcce06d035f84bcec81be9c4072fcbdea02.svg")} alt="" className="teachers_hover-badge-bg" />
            <p className="teachers_hover-badge-text">PROFILE &<br />CLASSES</p>
          </div>

        </div>
      </section>

      {/* Teacher Modal - Full Screen Popup */}
      <div id="teacherModal" className="teacher-modal">
        <div className="teacher-modal_overlay"></div>
        <div className="teacher-modal_content">
          <button className="teacher-modal_close" aria-label="Close modal">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M24 8L8 24M8 8L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="teacher-modal_grid">
            {/* Left: Teacher Info */}
            <div className="teacher-modal_info">
              <p className="text-body-md teacher-modal_role">Open Class</p>
              <h2 className="text-display-lg teacher-modal_name">TEACHER NAME</h2>

              <div className="teacher-modal_bio">
                <h3 className="text-h4">About</h3>
                <p className="text-body-md">
                  A world-renowned yoga teacher and spiritual guide, bringing years of experience and wisdom to students across the globe. Their teaching style combines traditional practices with modern insights, creating transformative experiences for practitioners of all levels.
                </p>
                <p className="text-body-md">
                  Having studied with masters from various lineages, they bring a unique perspective to the practice, emphasizing both the physical and spiritual aspects of yoga.
                </p>
              </div>

              <div className="teacher-modal_classes">
                <h3 className="text-h4">Classes & Sessions</h3>
                <ul className="teacher-modal_class-list">
                  <li className="text-body-md">
                    <strong>Masterclass:</strong> Advanced techniques and philosophy
                  </li>
                  <li className="text-body-md">
                    <strong>Open Class:</strong> All-levels welcoming practice
                  </li>
                  <li className="text-body-md">
                    <strong>Workshop:</strong> Deep dive into specific practices
                  </li>
                </ul>
              </div>

              <div className="teacher-modal_links">
                <a href="#" className="button button--primary">View Schedule</a>
                <a href="#" className="button button--outline">Book Class</a>
              </div>
            </div>

            {/* Right: Teacher Image */}
            <div className="teacher-modal_image-wrap">
              <img src="" alt="" className="teacher-modal_image" />
            </div>
          </div>
        </div>
      </div>

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

      <Footer />
    </>
  );
}
