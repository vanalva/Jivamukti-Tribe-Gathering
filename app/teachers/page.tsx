'use client';

import { useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import FullscreenMenu from '@/app/components/FullscreenMenu';
import Footer from '@/app/components/Footer';
import { getAssetPath } from '@/app/utils/paths';

export default function TeachersPage() {
  useEffect(() => {
    // TWO HOVER EFFECTS:
    // 1. Pink circle badge follows cursor
    // 2. Fixed hero image on right changes to teacher's photo
    const teachersSection = document.querySelector('.teachers_wrap');

    if (!teachersSection) return;

    const teacherItems = teachersSection.querySelectorAll('.teacher_item');
    const hoverBadge = teachersSection.querySelector('.teachers_hover-badge');
    const heroImage = teachersSection.querySelector('.teachers_hero-image') as HTMLImageElement;

    if (!hoverBadge || !heroImage) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;
    let animationFrame: number | null = null;

    function animate() {
      if (!isHovering) return;

      const ease = 0.15;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      (hoverBadge as HTMLElement).style.left = currentX + 'px';
      (hoverBadge as HTMLElement).style.top = currentY + 'px';

      animationFrame = requestAnimationFrame(animate);
    }

    teacherItems.forEach(item => {
      item.addEventListener('mouseenter', function(e: Event) {
        // EFFECT 1: Show pink circle badge following cursor
        isHovering = true;
        const mouseEvent = e as MouseEvent;
        mouseX = mouseEvent.clientX;
        mouseY = mouseEvent.clientY;
        currentX = mouseX;
        currentY = mouseY;

        hoverBadge?.classList.add('is-visible');
        animate();

        // EFFECT 2: Change fixed hero image on right
        const teacherImageUrl = (this as HTMLElement).getAttribute('data-teacher-image');
        if (teacherImageUrl) {
          heroImage.src = teacherImageUrl;
        }
      });

      item.addEventListener('mouseleave', function() {
        isHovering = false;
        hoverBadge?.classList.remove('is-visible');
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      });

      item.addEventListener('mousemove', function(e: Event) {
        const mouseEvent = e as MouseEvent;
        mouseX = mouseEvent.clientX;
        mouseY = mouseEvent.clientY;
      });
    });
  }, []);

  return (
    <>
      <Navigation />
      <FullscreenMenu />

      {/* Hero Section with Collage (Two-Slot) */}
      <section className="hero_wrap u-section u-position-relative">
        <div className="hero_background u-cover-absolute u-zindex-negative"></div>
        <div className="hero_content u-position-relative hero-collage_content u-navbar-offset">
          {/* Top Title */}
          <h1 className="hero-collage_title-top">THE</h1>

          {/* Center Image */}
          <div className="hero-collage_image-wrap">
            <img src={getAssetPath("/images/teachers/46a6be97cb1ecd2a2893d61d7f6bcc3761fa50d5.png")} alt="Teachers" className="hero-collage_image" />
          </div>

          {/* Bottom Title */}
          <h2 className="hero-collage_title-bottom">LINE UP</h2>
        </div>
      </section>

      {/* Intro Section (Two-Slot) - Using Plan Style */}
      <section className="plan_wrap u-section u-position-relative">
        <div className="plan_background u-cover-absolute u-zindex-negative"></div>
        <div className="plan_content plan_content--centered u-position-relative">
          <div className="plan_text-group">
            <h2 className="text-h2 u-text-uppercase">HOLY BEINGS FROM AROUND THE WORLD</h2>
            <p className="text-body-md plan_subtitle">For Tribe 2025 we invite the community to</p>
            <p className="text-body-md plan_description">
              Practice with Advanced Certified and Senior Jivamukti Yoga Teachers from across the globe,
              including renowned yogis from London, New York, Barcelona, Berlin, and various other corners
              of our precious planet. This remarkable lineup features Teacher Training faculty and Studio
              directors with years of experience sharing the Jivamukti Yoga method.
            </p>
          </div>
          <div className="plan_cta-group">
            <a href="/booking" className="button button--primary">JOIN US</a>
            <div className="plan_venues">
              <h3 className="text-nav u-text-uppercase">FEATURED TEACHERS</h3>
              <p className="text-body-sm">
                Sharon Gannon, Yogeswari, Hachi Yu<br />
                Jules Febre, and many more luminaries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers List Section (Two-Slot) */}
      <section className="teachers_wrap u-section u-position-relative">
        <div className="teachers_background u-cover-absolute u-zindex-negative"></div>
        <div className="teachers_content u-position-relative">

          {/* Left Column: Teacher Links */}
          <div className="teachers_list">
            {/* Teacher Item 1: Sharon Gannon */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/teachers/Sharon%20Gannon/_MG_8528_WEB.JPG")}>
              <div className="teacher_info">
                <p className="text-body-md teacher_eyebrow">Open Class</p>
                <h3 className="text-h1 u-text-uppercase">SHARON GANNON</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Sharon Gannon profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 2: Yogeswari */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/teachers/Yogeswari/2018.02.27_Jivamukti_TT_Yogeswari-051.jpg")}>
              <div className="teacher_info teacher_info--offset">
                <p className="text-body-md teacher_eyebrow">Open Class</p>
                <h3 className="text-h1 u-text-uppercase">YOGESWARI</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Yogeswari profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 3: Hachi Yu */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/teachers/Hachi/2023.05.18_JYTribe_Day_01_0335.jpg")}>
              <div className="teacher_info teacher_info--offset-large">
                <p className="text-body-md teacher_eyebrow">Masterclass</p>
                <h3 className="text-h1 u-text-uppercase">HACHI YU</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Hachi Yu profile">
                <img src={getAssetPath("/images/teachers/a6a9d170229ebfdceff4645f9c57d5ba83f93601.svg")} alt="" className="teacher_arrow-icon" />
              </a>
            </div>

            {/* Teacher Item 4: Jules Febre */}
            <div className="teacher_item" data-teacher-image={getAssetPath("/images/teachers/Jules/2017.05.30_YogaPalais_Jules-122.jpg")}>
              <div className="teacher_info teacher_info--offset-medium">
                <p className="text-body-md teacher_eyebrow">Lecture</p>
                <h3 className="text-h1 u-text-uppercase">JULES FEBRE</h3>
              </div>
              <a href="#" className="teacher_arrow" aria-label="View Jules Febre profile">
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

      <Footer />
    </>
  );
}
