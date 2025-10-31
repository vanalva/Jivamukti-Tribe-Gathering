'use client'

import PageTemplate from './components/PageTemplate'
import Script from 'next/script'
import { useEffect } from 'react'
import Link from 'next/link'
import { useScheduleInteractions } from './hooks/useScheduleInteractions'
import { getAssetPath } from './utils/paths'

export default function Home() {
  // Use the reusable schedule interactions hook
  useScheduleInteractions()

  useEffect(() => {

    // Teachers hover effect
    const teachersSection = document.querySelector('.teachers_wrap')
    if (teachersSection) {
      const teacherItems = teachersSection.querySelectorAll('.teacher_item')
      const teachersList = teachersSection.querySelector('.teachers_list')
      const hoverBadge = teachersSection.querySelector('.teachers_hover-badge')
      const badgeText = teachersSection.querySelector('.teachers_hover-badge-text')
      const heroImage = teachersSection.querySelector('.teachers_hero-image')
      const heroImageWrap = teachersSection.querySelector('.teachers_image-wrap')

      if (hoverBadge && heroImage && badgeText && teachersList) {
        let mouseX = 0
        let mouseY = 0
        let currentX = 0
        let currentY = 0
        let isHovering = false
        let animationFrame: number | null = null
        let currentTeacherName = ''

        const defaultBadgeText = 'PROFILE &<br/>CLASSES'

        function animate() {
          if (!isHovering) return

          const ease = 0.15 // Match schedule section for smooth following
          currentX += (mouseX - currentX) * ease
          currentY += (mouseY - currentY) * ease

          ;(hoverBadge as HTMLElement).style.left = currentX + 'px'
          ;(hoverBadge as HTMLElement).style.top = currentY + 'px'

          animationFrame = requestAnimationFrame(animate)
        }

        // Listen to entire teachers list container (like schedule table)
        teachersList.addEventListener('mouseenter', function(e: MouseEvent) {
          isHovering = true
          mouseX = e.clientX
          mouseY = e.clientY
          currentX = mouseX
          currentY = mouseY

          hoverBadge.classList.add('is-visible')
          badgeText.innerHTML = defaultBadgeText
          animate()
        })

        teachersList.addEventListener('mouseleave', function() {
          isHovering = false
          hoverBadge.classList.remove('is-visible')
          if (animationFrame) {
            cancelAnimationFrame(animationFrame)
          }
        })

        teachersList.addEventListener('mousemove', function(e: MouseEvent) {
          mouseX = e.clientX
          mouseY = e.clientY
        })

        // Individual teacher item hover - just update image and name
        teacherItems.forEach(item => {
          item.addEventListener('mouseenter', function() {
            const teacherImageUrl = item.getAttribute('data-teacher-image')
            const teacherName = item.getAttribute('data-teacher-name')

            if (teacherImageUrl) {
              ;(heroImage as HTMLImageElement).src = teacherImageUrl
            }
            if (teacherName) {
              currentTeacherName = teacherName
            }
          })
        })

        // Hero image hover - show badge with teacher name
        if (heroImageWrap) {
          heroImageWrap.addEventListener('mouseenter', function(e: MouseEvent) {
            if (currentTeacherName) {
              isHovering = true
              mouseX = e.clientX
              mouseY = e.clientY
              currentX = mouseX
              currentY = mouseY

              hoverBadge.classList.add('is-visible')
              badgeText.innerHTML = currentTeacherName
              animate()
            }
          })

          heroImageWrap.addEventListener('mouseleave', function() {
            isHovering = false
            hoverBadge.classList.remove('is-visible')
            badgeText.innerHTML = defaultBadgeText
            if (animationFrame) {
              cancelAnimationFrame(animationFrame)
            }
          })

          heroImageWrap.addEventListener('mousemove', function(e: MouseEvent) {
            mouseX = e.clientX
            mouseY = e.clientY
          })
        }
      }
    }
  }, [])

  const additionalScripts = (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" strategy="lazyOnload" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" strategy="lazyOnload" />
      <Script src={getAssetPath("/js/gsap/config.js")} strategy="lazyOnload" />
      <Script src={getAssetPath("/js/gsap/menu.js")} strategy="lazyOnload" />
    </>
  )

  return (
    <PageTemplate logoPath={getAssetPath("/images/tribe-isotype.svg")} additionalScripts={additionalScripts}>
      {/* Hero Section (Two-Slot Pattern) */}
      <section className="hero_wrap u-section u-position-relative">
        <div className="hero_background u-cover-absolute u-zindex-negative"></div>
        <div className="hero_content u-position-relative">
          {/* Main Centered Hero Logo */}
          <div className="hero_logo_wrap image-wrap image-wrap--freeform u-position-absolute u-overflow-hidden">
            <img src={getAssetPath("/images/tribe-full-logotype.svg")} alt="Rome Tribe Gathering main logo" className="image-wrap__img image-wrap__img--contain" />
          </div>

          {/* Floating Image - Top Left */}
          <div className="hero_floating_image hero_floating_image-topleft image-wrap image-wrap--freeform u-position-absolute u-overflow-hidden u-breakout-left">
            <img src={getAssetPath("/images/home/2da02ff94df3cd60517f142332eb30b6507f41a7.png")} alt="Decorative image" className="image-wrap__img" />
          </div>

          {/* Floating Image - Bottom Right */}
          <div className="hero_floating_image hero_floating_image-bottomright image-wrap image-wrap--freeform u-position-absolute u-overflow-hidden u-breakout-right">
            <img src={getAssetPath("/images/home/a0ae6d2cf367288b9d878ec5a791313fc7726b61.png")} alt="Decorative image" className="image-wrap__img" />
          </div>
        </div>
      </section>

      {/* About Section (Two-Slot Pattern) */}
      <section className="about_wrap u-section u-position-relative">
        <div className="about_background u-cover-absolute u-zindex-negative"></div>
        <div className="about_content u-position-relative u-padding-inline-sitemargin">
          {/* Top Grid: Image + Title Block */}
          <div className="home-about_hero-grid">
            {/* Left: Full-bleed Hero Image */}
            <div className="home-about_hero-image-wrap u-breakout-left">
              <img src={getAssetPath("/images/home/06ea1ba9c542368e72407fdb4c53018a67ea6dcb.png")} alt="Yoga Festival" className="home-about_hero-image" />
            </div>

            {/* Right: Title Stack */}
            <div className="home-about_hero-titles">
              <p className="text-h4 home-about_date u-text-uppercase">SEPT<br/>2026</p>
              <h2 className="text-display-xl home-about_main-title u-text-uppercase">
                <span className="home-about_main-title-word">LET&apos;S</span>
                <span className="home-about_main-title-word">EXPLORE</span>
                <span className="home-about_main-title-word">ROME</span>
              </h2>
              <p className="text-h1 home-about_subtitle u-text-uppercase">WITH THE TRIBE</p>
            </div>
          </div>

          {/* Bottom Grid: Heading + Content */}
          <div className="home-about_content-grid">
            {/* Left: Large Heading */}
            <h3 className="text-h1 home-about_heading">Jivamukti Tribe Gathering is a four-day yoga festival</h3>

            {/* Right: Description + CTA */}
            <div className="home-about_text-wrap">
              <p className="text-body-lg home-about_description">celebrating life and expressing our love and devotion through collective yoga practice, chanting, meditation and satsang. For the first time ever, Rome welcomes the worldwide yoga community to join us at our annual gathering, featuring classes with top Jivamukti Yoga teachers from around the world.</p>
              <Link href="/booking" className="button button--brand">JOIN US</Link>
            </div>
          </div>
        </div>
      </section>

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
                <div className="day_row" data-image={getAssetPath("/images/home/b2a1fb87cf82c5e5870cd73a5814f50c99da688d.png")}>
                  <div className="text-body-lg">10:00 | 11:30</div>
                  <div className="text-h4 u-text-center">Masterclass</div>
                  <div className="text-body-lg u-text-right">Moritz Camilla</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/home/b2a1fb87cf82c5e5870cd73a5814f50c99da688d.png")} alt="Masterclass" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Masterclass</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Join us for an intensive masterclass session where you&apos;ll deepen your practice and explore advanced techniques with experienced teachers. This session is designed to challenge and inspire practitioners of all levels.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br/>September 09, 2025<br/>10:00 - 11:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br/>Main Studio<br/>Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <Link href="/booking" className="button day_row-buy-button">BUY TICKETS</Link>
                  </div>
                </div>
              </div>

              {/* Row 2: Open Class */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/home/06ea1ba9c542368e72407fdb4c53018a67ea6dcb.png")}>
                  <div className="text-body-lg">12:00 | 13:30</div>
                  <div className="text-h4 u-text-center">Open Class</div>
                  <div className="text-body-lg u-text-right">Moritz Camilla</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/home/06ea1ba9c542368e72407fdb4c53018a67ea6dcb.png")} alt="Open Class" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Open Class</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Experience a welcoming and dynamic open class suitable for all levels. Connect with the community and enjoy a flowing practice that energizes body and mind.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br/>September 09, 2025<br/>12:00 - 13:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br/>Main Studio<br/>Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <Link href="/booking" className="button day_row-buy-button">BUY TICKETS</Link>
                  </div>
                </div>
              </div>

              {/* Row 3: Lecture */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/home/7daed26c9efac9c483a5692dcacb5545bffe955f.png")}>
                  <div className="text-body-lg">14:00 | 15:30</div>
                  <div className="text-h4 u-text-center">Lecture</div>
                  <div className="text-body-lg u-text-right">Moritz Camilla</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/home/7daed26c9efac9c483a5692dcacb5545bffe955f.png")} alt="Lecture" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Lecture</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Dive deep into the philosophy and wisdom of yoga through engaging lectures that explore ancient teachings and their relevance in modern life.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br/>September 09, 2025<br/>14:00 - 15:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br/>Main Studio<br/>Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <Link href="/booking" className="button day_row-buy-button">BUY TICKETS</Link>
                  </div>
                </div>
              </div>

              {/* Row 4: Workshop */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/home/2da02ff94df3cd60517f142332eb30b6507f41a7.png")}>
                  <div className="text-body-lg">16:00 | 17:30</div>
                  <div className="text-h4 u-text-center">Workshop</div>
                  <div className="text-body-lg u-text-right">Moritz Camilla</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/home/2da02ff94df3cd60517f142332eb30b6507f41a7.png")} alt="Workshop" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Workshop</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Participate in hands-on workshops designed to refine your technique, explore specific aspects of practice, and gain practical skills you can take home.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br/>September 09, 2025<br/>16:00 - 17:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br/>Main Studio<br/>Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <Link href="/booking" className="button day_row-buy-button">BUY TICKETS</Link>
                  </div>
                </div>
              </div>

              {/* Row 5: Open Class */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/home/a0ae6d2cf367288b9d878ec5a791313fc7726b61.png")}>
                  <div className="text-body-lg">18:00 | 19:30</div>
                  <div className="text-h4 u-text-center">Open Class</div>
                  <div className="text-body-lg u-text-right">Moritz Camilla</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/home/a0ae6d2cf367288b9d878ec5a791313fc7726b61.png")} alt="Open Class" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Open Class</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">Join our evening open class for a rejuvenating practice that helps you unwind and connect with your inner self after a full day.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br/>September 09, 2025<br/>18:00 - 19:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br/>Main Studio<br/>Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <Link href="/booking" className="button day_row-buy-button">BUY TICKETS</Link>
                  </div>
                </div>
              </div>

              {/* Row 6: Concert */}
              <div className="day_row-item">
                <div className="day_row" data-image={getAssetPath("/images/home/7722cfd11034b26e6d4969dcb62baf1375e5a951.png")}>
                  <div className="text-body-lg">20:00 | 21:30</div>
                  <div className="text-h4 u-text-center">Concert</div>
                  <div className="text-body-lg u-text-right">Moritz Camilla</div>
                </div>
                <div className="day_row-content">
                  <div className="day_row-content-grid">
                    <div className="day_row-content-image image-wrap image-wrap--portrait-tall u-overflow-hidden">
                      <img src={getAssetPath("/images/home/7722cfd11034b26e6d4969dcb62baf1375e5a951.png")} alt="Concert" className="image-wrap__img" />
                    </div>
                    <div className="day_row-content-text">
                      <div className="day_row-content-main">
                        <h3 className="text-h1">Concert</h3>
                        <div className="day_row-content-description">
                          <p className="text-body-md">End your day with an inspiring concert featuring live music that celebrates the spirit of yoga and community. Let the sounds transport you to a place of peace and joy.</p>
                        </div>
                      </div>
                      <div className="day_row-content-details">
                        <p className="text-body-sm"><strong>Date & Time:</strong><br/>September 09, 2025<br/>20:00 - 21:30</p>
                        <p className="text-body-sm"><strong>Location:</strong><br/>Grand Hall<br/>Via dei Coronari, 42</p>
                      </div>
                    </div>
                    <Link href="/booking" className="button day_row-buy-button">BUY TICKETS</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="day_image image-wrap image-wrap--square u-overflow-hidden">
              <img src={getAssetPath("/images/home/7722cfd11034b26e6d4969dcb62baf1375e5a951.png")} alt="Day 1" className="image-wrap__img" />
            </div>

            <div className="day_cta">
              <Link href="/schedule" className="button button--outline">VIEW ALL DAYS SCHEDULE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Line Up Section (Two-Slot) - Using Teachers Component */}
      <section className="teachers_wrap u-section u-position-relative">
        <div className="teachers_background u-cover-absolute u-zindex-negative"></div>

        {/* Section Title - Full Width Above Content */}
        <h2 className="text-display-xl u-text-center teachers_title">LINE UP</h2>

        <div className="teachers_content teachers_content--reversed u-position-relative">
          {/* Left Column: Teacher Links */}
          <div className="teachers_list">
            {/* Teacher Item 1: Sharon Gannon */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/teachers/Sharon Gannon/_MG_8528_WEB.JPG")} data-teacher-name="SHARON GANNON">
              <div className="teacher_info">
                <p className="text-body-md teacher_eyebrow">Open Class</p>
                <h3 className="text-h1 u-text-uppercase">SHARON GANNON</h3>
              </div>
              <Link href="/teachers" className="teacher_arrow" aria-label="View Sharon Gannon profile">
                <img src={getAssetPath("/images/home/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </Link>
            </div>

            {/* Teacher Item 2: Yogeswari */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/teachers/Yogeswari/2018.02.27_Jivamukti_TT_Yogeswari-051.jpg")} data-teacher-name="YOGESWARI">
              <div className="teacher_info teacher_info--offset">
                <p className="text-body-md teacher_eyebrow">Open Class</p>
                <h3 className="text-h1 u-text-uppercase">YOGESWARI</h3>
              </div>
              <Link href="/teachers" className="teacher_arrow" aria-label="View Yogeswari profile">
                <img src={getAssetPath("/images/home/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </Link>
            </div>

            {/* Teacher Item 3: Hachi Yu */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/teachers/Hachi/2023.05.18_JYTribe_Day_01_0335.jpg")} data-teacher-name="HACHI YU">
              <div className="teacher_info teacher_info--offset-large">
                <p className="text-body-md teacher_eyebrow">Masterclass</p>
                <h3 className="text-h1 u-text-uppercase">HACHI YU</h3>
              </div>
              <Link href="/teachers" className="teacher_arrow" aria-label="View Hachi Yu profile">
                <img src={getAssetPath("/images/home/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </Link>
            </div>

            {/* Teacher Item 4: Jules Febre */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/home/b2a1fb87cf82c5e5870cd73a5814f50c99da688d.png")} data-teacher-name="JULES FEBRE">
              <div className="teacher_info teacher_info--offset-medium">
                <p className="text-body-md teacher_eyebrow">Lecture</p>
                <h3 className="text-h1 u-text-uppercase">JULES FEBRE</h3>
              </div>
              <Link href="/teachers" className="teacher_arrow" aria-label="View Jules Febre profile">
                <img src={getAssetPath("/images/home/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </Link>
            </div>
          </div>

          {/* Right Column: Fixed Hero Image */}
          <div className="teachers_image-wrap">
            <img src={getAssetPath("/images/home/b2a1fb87cf82c5e5870cd73a5814f50c99da688d.png")} alt="" className="teachers_hero-image" />
          </div>

          {/* Hover Following Pink Circle */}
          <div className="teachers_hover-badge">
            <img src={getAssetPath("/images/home/e75d6dcce06d035f84bcec81be9c4072fcbdea02.svg")} alt="" className="teachers_hover-badge-bg" />
            <p className="teachers_hover-badge-text">PROFILE &<br/>CLASSES</p>
          </div>
        </div>

        {/* View All Button - Full Width Below Content */}
        <div className="teachers_cta">
          <Link href="/teachers" className="button button--outline">VIEW ALL LINE UP</Link>
        </div>
      </section>

      {/* Looking Back Section (Two-Slot Pattern) */}
      <section className="lookback_wrap u-section u-position-relative">
        <div className="lookback_background u-cover-absolute u-zindex-negative"></div>
        <div className="lookback_content u-position-relative">
          <h2 className="text-display-lg home-lookback_title u-text-uppercase">LOOKING BACK AT THE</h2>

          <div className="home-lookback_image-wrap image-wrap image-wrap--portrait-tall u-overflow-hidden">
            <img src={getAssetPath("/images/home/7daed26c9efac9c483a5692dcacb5545bffe955f.png")} alt="Tribe Gathering 2025" className="image-wrap__img" />
          </div>

          <h3 className="text-display-lg home-lookback_subtitle u-text-uppercase">TRIBE GATHERING 2025</h3>
        </div>
      </section>

      {/* Rome Section (Two-Slot Pattern) */}
      <section className="rome_wrap u-section u-position-relative">
        <div className="rome_background u-cover-absolute u-zindex-negative"></div>
        <div className="rome_content u-position-relative home-rome_content">

          {/* Video with Play Button */}
          <div className="home-rome_video-wrap">
            <img src={getAssetPath("/images/home/316df861ded7b263ef32eb137a4493c780bc65b8.png")} alt="Rome Architecture" className="home-rome_video-image" />
            <button className="home-rome_play-button" aria-label="Play video">
              <img src={getAssetPath("/images/home/784c6eb6959d89300ded47aa5c49463892148c55.svg")} alt="" className="home-rome_play-icon" />
            </button>
          </div>

          {/* ITALY Text */}
          <h2 className="home-rome_title u-text-uppercase">ITALY</h2>

        </div>
      </section>
    </PageTemplate>
  )
}
