import Navigation from '@/app/components/Navigation'
import FullscreenMenu from '@/app/components/FullscreenMenu'
import Footer from '@/app/components/Footer'
import { getAssetPath } from '@/app/utils/paths'

export default function AboutTribePage() {
  return (
    <>
      <Navigation />
      <FullscreenMenu />

      {/* Hero Section with Collage - Long Title Layout */}
      <section className="hero_wrap u-section u-position-relative">
        <div className="hero_background u-cover-absolute u-zindex-negative"></div>
        <div className="hero_content u-position-relative hero-collage_content hero-collage_content--long-title u-navbar-offset">
          {/* Logo (Top Left) */}
          <div className="hero-collage_logo-wrap">
            <div className="image-wrap image-wrap--freeform">
              <img src={getAssetPath("/images/tribe-short-logotype-currentcolor.svg")} alt="Jivamukti Yoga The Tribe Gathering" className="image-wrap__img image-wrap__img--contain" />
            </div>
          </div>

          {/* Title (Left side, flows naturally) */}
          <h1 className="hero-collage_title-bottom" data-gsap-slide-up>ABOUT<br />THE TRIBE</h1>

          {/* Hero Image (Bottom Right) */}
          <div className="hero-collage_image-wrap">
            <img src={getAssetPath("/images/about/09afe8e0497238bff34238caf01764bc0124c60f.png")} alt="Yoga gathering with harmonium" className="hero-collage_image" />
          </div>
        </div>
      </section>

      {/* Satsang Definition Section */}
      <section className="plan_wrap u-position-relative">
        <div className="u-cover-absolute u-zindex-negative"></div>
        <div className="plan_content u-position-relative" style={{display: 'block'}}>

          {/* Two Column Layout */}
          <div className="plan_content u-position-relative">
            {/* Left: Image */}
            <div className="image-wrap">
              <img src={getAssetPath("/images/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png")} alt="Satsang yoga gathering with singing" className="image" />
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="text-h1 u-text-uppercase u-weight-bold" style={{lineHeight: '1.1', marginBottom: 'var(--_spacing---space--4)'}}>
                Hurry home to your real home, which is OM
              </h2>
              <h3 className="text-h3" style={{marginBottom: 'var(--_spacing---space--6)'}}>
                Shri Brahmananda Sarasvati
              </h3>
              <p className="text-body-lg">
                Jivamukti Tribe Gathering is a four-day yoga festival celebrating life and expressing our love and devotion through collective yoga practice, chanting, meditation and satsang. For the first time ever, Stavanger welcomes the worldwide yoga community to join us at our annual gathering, featuring classes with top Jivamukti Yoga teachers from around the world. Our evening lineup will feature kirtan, concerts and satsang.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Sticky Scroll Section with Three Blocks */}
      <section className="sticky-scroll_wrap u-position-relative">
        <div className="sticky-scroll_content">

          {/* Sticky Text Container */}
          <div className="sticky-scroll_text-container">

            {/* Text Block 1 */}
            <div className="sticky-scroll_text-block">
              <h2 className="text-h2 u-text-uppercase u-weight-bold" style={{marginBottom: 'var(--_spacing---space--4)'}}>
                WHAT IS A SATSANG?
              </h2>
              <h3 className="text-h3 u-text-uppercase u-weight-bold" style={{lineHeight: '1.1', marginBottom: 'var(--_spacing---space--6)'}}>
                SATSANG IS OFTEN DEFINED AS THE COMPANY OF LIKE-MINDED PEOPLE IN PURSUIT OF THE TRUTH. WHEN A TRIBE'S COMMON INTEREST IS PURSUIT OF TRUTH – THEN IT IS A SATSANG. THE JIVAMUKTI YOGA GLOBAL SATSANG IS A TRIBE.
              </h3>
            </div>

            {/* Text Block 2 */}
            <div className="sticky-scroll_text-block">
              <h2 className="text-h2 u-text-uppercase u-weight-bold" style={{marginBottom: 'var(--_spacing---space--6)'}}>
                WHAT IS A TRIBE?
              </h2>
              <p className="text-body-md">
                If we pare down the word tribe "to its simplest meaning, (it is ...) a name for the first human communities that formed beyond the primal bonds of kinship — the beginnings of the great experiment we call society, which taught us to be human." We are bringing the word tribe and our gathering back to the roots, giving us the opportunity to share the experience of being human.
              </p>
            </div>

            {/* Text Block 3 */}
            <div className="sticky-scroll_text-block">
              <p className="text-body-md">
                Satsang, or the company of like-minded individuals, is a powerful tool for personal and collective growth. By gathering with others who share our interests and values, we can create a supportive and inspiring environment that helps us overcome obstacles, deepen our understanding, and cultivate positive qualities. In the context of Jivamukti Yoga Global Satsang, this means gathering with fellow practitioners who are committed to the pursuit of truth, liberation from suffering, and the creation of a more peaceful and harmonious world.
              </p>
            </div>

            {/* Text Block 4 */}
            <div className="sticky-scroll_text-block">
              <p className="text-body-md">
                Through the experience of satsang, we can also tap into the wisdom and insights of others, and benefit from their perspectives, experiences, and expertise. This can expand our horizons, challenge our assumptions, and help us see things from a new and more enlightened perspective. Moreover, the bonds that we form through satsang can be transformative, fostering a sense of community, belonging, and shared purpose that can sustain us through the challenges of life. Ultimately, satsang is about creating a space where we can connect with others on a deeper level, share our journey, and support each other in becoming the best version of ourselves.
              </p>
            </div>

          </div>

          {/* Scrolling Images Container */}
          <div className="sticky-scroll_images-container">

            {/* Image 1 */}
            <div className="sticky-scroll_image-block">
              <div className="image-wrap image-wrap--portrait-tall">
                <img src={getAssetPath("/images/about/2023.05.18_JYTribe_Day_01_0043_2560w.webp")} alt="Yoga gathering" className="image-wrap__img" />
              </div>
            </div>

            {/* Image 2 */}
            <div className="sticky-scroll_image-block">
              <div className="image-wrap image-wrap--portrait-tall">
                <img src={getAssetPath("/images/591f764ede3428fa1ba9f50bf041b55ae6d899b8.png")} alt="Yoga gathering" className="image-wrap__img" />
              </div>
            </div>

            {/* Image 3 */}
            <div className="sticky-scroll_image-block">
              <div className="image-wrap image-wrap--portrait-tall">
                <img src={getAssetPath("/images/74031a8237b7e9853781a8bd6535aaa724fe77c7.png")} alt="Yoga gathering" className="image-wrap__img" />
              </div>
            </div>

            {/* Image 4 */}
            <div className="sticky-scroll_image-block">
              <div className="image-wrap image-wrap--portrait-tall">
                <img src={getAssetPath("/images/092fedd95acea573e490f295ffe91dcd566d4724.png")} alt="Yoga gathering" className="image-wrap__img" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Navigation Links Section (Three Large CTAs) */}
      <section className="u-position-relative" style={{width: '100%'}} data-gsap-stagger="fast" data-gsap-anim="slideUp">
        {/* LINE UP */}
        <a href="/teachers" className="nav-link_wrap">
          <h2 className="nav-link_link text-h1 u-text-uppercase">LINE UP</h2>
        </a>
        {/* SCHEDULE */}
        <a href="/schedule" className="nav-link_wrap">
          <h2 className="nav-link_link text-h1 u-text-uppercase">SCHEDULE</h2>
        </a>
        {/* REGISTER */}
        <a href="/booking" className="nav-link_wrap">
          <h2 className="nav-link_link text-h1 u-text-uppercase">REGISTER</h2>
        </a>
      </section>

      <Footer />
    </>
  )
}
