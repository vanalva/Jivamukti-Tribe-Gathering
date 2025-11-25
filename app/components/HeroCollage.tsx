import { getAssetPath } from '../utils/paths'

interface HeroCollageProps {
  imageSrc: string
  imageAlt: string
  title: string
}

export default function HeroCollage({ imageSrc, imageAlt, title }: HeroCollageProps) {
  return (
    <section className="hero_wrap u-section u-position-relative">
      <div className="hero_background u-cover-absolute u-zindex-negative"></div>
      <div className="hero_content u-position-relative hero-collage_content hero-collage_content--with-navbar">
        {/* Hero Image (Left - 40% max width, full height) */}
        <div className="hero-collage_image-wrap">
          <img src={getAssetPath(imageSrc)} alt={imageAlt} className="hero-collage_image" />
        </div>

        {/* Logo (Top Right) */}
        <div className="hero-collage_logo-wrap">
          <div className="image-wrap image-wrap--freeform">
            <img src={getAssetPath("/images/tribe-short-logotype-currentcolor.svg")} alt="Jivamukti Yoga The Tribe Gathering" className="image-wrap__img image-wrap__img--contain" />
          </div>
        </div>

        {/* Title (Bottom Right) */}
        <h1 className="hero-collage_title-bottom" data-gsap-slide-up>{title}</h1>
      </div>
    </section>
  )
}
