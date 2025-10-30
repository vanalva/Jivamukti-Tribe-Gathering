import Navigation from '@/app/components/Navigation'
import FullscreenMenu from '@/app/components/FullscreenMenu'
import Footer from '@/app/components/Footer'

export default function AboutTribePage() {
  return (
    <>
      <Navigation />
      <FullscreenMenu />

      {/* Hero Section with Collage - About Variant */}
      <section className="hero_wrap u-section u-position-relative">
        <div className="hero_background u-cover-absolute u-zindex-negative"></div>
        <div className="hero_content u-position-relative hero-collage_content hero-collage_content--about u-navbar-offset">

          {/* Logo Branding (Top Left) */}
          <div className="hero-collage_logo-wrap">
            <div className="image-wrap image-wrap--freeform" style={{maxWidth: 'clamp(200px, 25vw, 400px)'}}>
              <img src="/images/tribe-short-logotype-currentcolor.svg" alt="Jivamukti Yoga The Tribe Gathering" className="image-wrap__img image-wrap__img--contain" />
            </div>
          </div>

          {/* Hero Image (Right Side) */}
          <div className="hero-collage_image-wrap">
            <img src="/images/about/09afe8e0497238bff34238caf01764bc0124c60f.png" alt="Yoga gathering with harmonium" className="hero-collage_image" />
          </div>

          {/* Bottom Title (Left Side, Overlapping) */}
          <h1 className="hero-collage_title-bottom" data-gsap-slide-up>ABOUT<br />THE TRIBE</h1>

        </div>
      </section>

      {/* Satsang Definition Section */}
      <section className="plan_wrap u-position-relative">
        <div className="u-cover-absolute u-zindex-negative"></div>
        <div className="plan_content u-position-relative" style={{display: 'block'}}>

          {/* Title (Full Width) */}
          <h2 className="text-h1 u-text-uppercase u-weight-bold" style={{lineHeight: '1.1', marginBottom: 'var(--_spacing---space--8)'}} data-gsap-fade-in>
            LIVE WITH THE ANTICIPATION THAT SOMETHING INCREDIBLE MIGHT HAPPEN AT ANY TIME
          </h2>

          {/* Two Column Layout */}
          <div className="plan_content u-position-relative">
            {/* Left: Image */}
            <div className="image-wrap">
              <img src="/images/5b99e425860ca2de7aadd16e2b46c27e2f8bb0bd.png" alt="Satsang yoga gathering with singing" className="image" />
            </div>

            {/* Right: Text */}
            <div>
              <p className="text-body-lg">
                Satsang is often defined as the company of like-minded people in pursuit of the truth. When a tribe's common interest is pursuit of truth – then it is a satsang. The Jivamukti Yoga Global Satsang is a tribe. In the context of Jivamukti Yoga Global Satsang, this means gathering with fellow practitioners who are committed to the pursuit of truth, liberation from suffering, and the creation of a more peaceful and harmonious world.
              </p>
              <p className="text-body-lg" style={{marginTop: 'var(--_spacing---space--6)'}}>
                If we pare down the word tribe "to its simplest meaning, (it is ...) a name for the first human communities that formed beyond the primal bonds of kinship — the beginnings of the great experiment we call society, which taught us to be human." We are bringing the word tribe and our gathering back to the roots, giving us the opportunity to share the experience of being human.
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
              <h2 className="text-h2 u-text-uppercase u-weight-bold" style={{lineHeight: '1.1', marginBottom: 'var(--_spacing---space--6)'}}>
                SATSANG IS OFTEN DEFINED AS THE COMPANY OF LIKE-MINDED PEOPLE IN PURSUIT OF THE TRUTH. WHEN A TRIBE'S COMMON INTEREST IS PURSUIT OF TRUTH – THEN IT IS A SATSANG. THE JIVAMUKTI YOGA GLOBAL SATSANG IS A TRIBE.
              </h2>
              <p className="text-body-md">
                If we pare down the word tribe "to its simplest meaning, (it is ...) a name for the first human communities that formed beyond the primal bonds of kinship — the beginnings of the great experiment we call society, which taught us to be human." We are bringing the word tribe and our gathering back to the roots, giving us the opportunity to share the experience of being human.
              </p>
            </div>

            {/* Text Block 2 */}
            <div className="sticky-scroll_text-block">
              <p className="text-body-md">
                Satsang, or the company of like-minded individuals, is a powerful tool for personal and collective growth. By gathering with others who share our interests and values, we can create a supportive and inspiring environment that helps us overcome obstacles, deepen our understanding, and cultivate positive qualities. In the context of Jivamukti Yoga Global Satsang, this means gathering with fellow practitioners who are committed to the pursuit of truth, liberation from suffering, and the creation of a more peaceful and harmonious world.
              </p>
            </div>

            {/* Text Block 3 */}
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
                <img src="/images/b2e6f04b7887b367f983a6110e4a8284e6a68a51.png" alt="Yoga gathering" className="image-wrap__img" />
              </div>
            </div>

            {/* Image 2 */}
            <div className="sticky-scroll_image-block">
              <div className="image-wrap image-wrap--portrait-tall">
                <img src="/images/591f764ede3428fa1ba9f50bf041b55ae6d899b8.png" alt="Yoga gathering" className="image-wrap__img" />
              </div>
            </div>

            {/* Image 3 */}
            <div className="sticky-scroll_image-block">
              <div className="image-wrap image-wrap--portrait-tall">
                <img src="/images/74031a8237b7e9853781a8bd6535aaa724fe77c7.png" alt="Yoga gathering" className="image-wrap__img" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* What is a Tribe Section */}
      <section className="u-position-relative" style={{padding: '0 var(--site--margin)'}}>

        {/* Large Title */}
        <h1 className="text-display-xl u-text-uppercase u-weight-bold u-height-full" style={{lineHeight: '0.8', marginBottom: 'var(--_spacing---space--12)'}} data-gsap-scale>WHAT IS A TRIBE?</h1>

        {/* Complex Grid Layout */}
        <div className="tribe-grid">
          {/* Row 1: Two columns */}
          <div className="tribe-grid_row">
            {/* Left: Two sub-columns */}
            <div className="tribe-grid_left">
              <div className="tribe-grid_sub-left">
                <p className="text-h4 u-text-uppercase">FOR TRIBE 2025 WE INVITE THE COMMUNITY TO</p>
              </div>
              <div className="tribe-grid_sub-right">
                <h2 className="text-h1 u-text-uppercase u-weight-bold">EXPLORE ROME</h2>
              </div>
            </div>
            {/* Right: Empty for now */}
            <div className="tribe-grid_right"></div>
          </div>

          {/* Row 2: Two columns */}
          <div className="tribe-grid_row">
            {/* Left: Empty */}
            <div className="tribe-grid_left"></div>
            {/* Right: The Tribe Gathering */}
            <div className="tribe-grid_right">
              <p className="text-h4 u-weight-bold">THE TRIBE GATHERING</p>
            </div>
          </div>

          {/* Row 3: Image and Description */}
          <div className="tribe-grid_row">
            <div className="tribe-grid_left">
              <div className="image-wrap image-wrap--portrait-tall">
                <img src="/images/092fedd95acea573e490f295ffe91dcd566d4724.png" alt="Rome Gathering" className="image-wrap__img" />
              </div>
            </div>
            <div className="tribe-grid_right">
              <p className="text-body-md">
                Jivamukti Tribe Gathering is a four-day yoga festival celebrating life and expressing our love and devotion through collective yoga practice, chanting, meditation and satsang. For the first time ever, Stavanger welcomes the worldwide yoga community to join us at our annual gathering, featuring classes with top Jivamukti Yoga teachers from around the world. Our evening lineup will feature kirtan, concerts and satsang.
              </p>
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

      {/* Holy Beings Intro Section */}
      <section className="u-position-relative u-margin-top-8 u-margin-bottom-8" style={{padding: '0 var(--site--margin)'}}>
        <div className="plan_content u-position-relative">
          {/* Left: Title */}
          <div>
            <h2 className="text-h2 u-text-uppercase u-weight-bold" style={{lineHeight: '0.85'}}>HOLY BEINGS FROM AROUND THE WORLD</h2>
          </div>
          {/* Right: Description and CTA */}
          <div className="u-flex-vertical-nowrap u-gap-4">
            <p className="text-body-lg">FOR TRIBE 2025 WE INVITE THE COMMUNITY TO</p>
            <p className="text-body-md">
              Jivamukti Tribe Gathering is a four-day yoga festival celebrating life and expressing our love and devotion through collective yoga practice, chanting, meditation and satsang. For the first time ever, Stavanger welcomes the worldwide yoga community to join us at our annual gathering, featuring classes with top Jivamukti Yoga teachers from around the world. Our evening lineup will feature kirtan, concerts and satsang. For Jivamukti students, teachers, and yoga lovers from all across the world! EVERYONE, regardless of age or level, if you are student, teacher, many years practitioner, or new to yoga, is welcome!
            </p>
            <a href="/booking" className="button button--primary u-margin-top-4">JOIN US</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
