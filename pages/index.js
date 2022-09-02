import { Fragment } from "react";

import Head from "next/head";
import Image from "next/image";

import Button from "../components/UI/Buttons/Button";
import Hero from "../components/heroSection/heroSection";
import SectionLabel from "../components/UI/Labels/SectionLabel";
import ServiceCard from "../components/UI/Cards/ServiceCard";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactSection from "../components/Contact/ContactSection";

import heroImage from "../public/images/hero/digital-marketing-agency.png";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>San Francisco Digital Marketing Agency - RSO</title>
        <meta
          name="description"
          content="RSO is a full service digital marketing agency in San Francisco, offering SEO, PPC, social media & analytics expertise. Call 415-992-7711."
        />
      </Head>
      <Hero image={heroImage} alt="Digital Marketing Agency Graphic">
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          <b>Make It Easy</b>
          <br /> For Future Customers To Find You
        </h1>
        <div className="col-3" style={{ gridAutoRows: "auto" }}>
          <Button color="orange" link="/services/seo-services/">
            Search Engine Optimization
          </Button>
          <Button color="red" link="/services/manage-pay-per-click/">
            Paid Advertising
          </Button>
          <Button color="blue" link="/services/social-media-optimization/">
            Social Media Optimization
          </Button>
          <Button color="green" link="/services/web-analytics-consultation/">
            Web Analytics Consulting
          </Button>
          <Button color="purple" link="/services/web-development-services/">
            Website Development
          </Button>
          <Button color="turq" link="/services/a-b-testing/">
            A/B Testing
          </Button>
        </div>
      </Hero>
      <section>
        <div id="intro"></div>
        <div className="container">
          <h2 className="intro sub-headline">
            Your customers are <b>researching</b>, <b>making decisions</b>, and{" "}
            <b>completing purchases online</b> more than ever before. We help
            you <b>position your business</b> in all the <b>digital spaces</b>{" "}
            where it makes sense to <b>gather awareness</b>,{" "}
            <b>nuture relationships</b>, and <b>increase conversions</b>.
          </h2>
        </div>
      </section>
      <section>
        <div className="col-2 unset container">
          <div className="img-center">
            <Image
              src="/images/rso-success.png"
              alt="rso success"
              width={705}
              height={461}
            />
          </div>
          <div className="sub-intro">
            <SectionLabel red>How Do You Measure Success?</SectionLabel>
            <h2
              className="sub-headline"
              style={{ maxWidth: "515px", margin: "0 auto" }}
            >
              The <b>success</b> of your <b>digital marketing</b> is all about
              the <b>data</b> and the <b>spend</b>.
            </h2>
            <p className="sub-intro-details">
              To justify marketing expenses, you need the numbers to prove
              what&apos;s working - and what&apos;s not. We are certified in
              Google Ads and Google Analytics, and our services are supported by
              the best in the business.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel blue>What We Can Do For You</SectionLabel>
          <h2 className="sub-headline" style={{ margin: "0 auto 30px auto" }}>
            We offer a <b>full range</b> of data-driven <b>digital marketing</b>{" "}
            services:
          </h2>
        </div>
        <div className="col-3 unset full-grid container center">
          <ServiceCard
            link="/services/seo-services/"
            icon={
              <Image
                src="/images/service-icons/color/seo.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Search Engine Optimization"
            description="Drive more traffic to your website, generate leads, and grow your business."
            details={
              <ul>
                <li>Site Audits</li>
                <li>Keyword Research & Mapping</li>
                <li>Optimized Content Creation</li>
                <li>On-site & Off-site SEO</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/manage-pay-per-click/"
            icon={
              <Image
                src="/images/service-icons/color/psa.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Paid Search Advertising"
            description="Boost your brand awareness, sales, and revenue."
            details={
              <ul>
                <li>Strategy-Campaign Alignment</li>
                <li>Keyword Research & Analysis</li>
                <li>Campaign Bidding</li>
                <li>Budget Allocation & Adjustments</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/social-media-optimization/"
            icon={
              <Image
                src="/images/service-icons/color/smo.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Social Media Optimization"
            description="Build your brand awareness, expand online
            visibility, and improve your website's organic
            search results."
            details={
              <ul>
                <li>Platform Selections</li>
                <li>Content Strategy & Creation</li>
                <li>Scheduleing & Interaction</li>
                <li>Analysis & Reporting</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/web-analytics-consultation/"
            icon={
              <Image
                src="/images/service-icons/color/wac.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Web Analytics Consultation"
            description="Understand your website visitors and spend
            your budget more effectively."
            details={
              <ul>
                <li>Website Analysis</li>
                <li>Analytics Introduction & Guidance</li>
                <li>Strategy Development</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/web-development-services/"
            icon={
              <Image
                src="/images/service-icons/color/wdd.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="Web Design & Development"
            description="Offer an engaging experience for your user base 
            with web design & development."
            details={
              <ul>
                <li>Optimized Content</li>
                <li>Maintenance</li>
                <li>UX Consulting</li>
                <li>Website Rebuilds</li>
              </ul>
            }
          />
          <ServiceCard
            link="/services/a-b-testing/"
            icon={
              <Image
                src="/images/service-icons/color/ab.png"
                alt=""
                height={160}
                width={160}
              />
            }
            title="A/B Testing"
            description="Optimize your website's engagement by testing 
            variants of webpages and measuring resulting
            conversion rates."
            details={
              <ul>
                <li>A/B Testing</li>
                <li>Multivariate Testing</li>
                <li>Personalization</li>
                <li>Campaign-specific Testing</li>
              </ul>
            }
          />
        </div>
        <div className="container center">
          <h2 className="sub-headline">
            Take a look at our <b>complete list</b> of digital marketing
            services.
          </h2>
          <Button>SEE ALL SERVICES</Button>
        </div>
      </section>
      <section>
        <div className="container center">
          <SectionLabel purple>Who We&apos;ve Worked For</SectionLabel>
          <h2 className="sub-headline">
            Our <b>satisfied clients</b> come from <b>various industries</b>.
          </h2>
          <div className="col-4 unset">
            <div className="flex-center">
              <Image
                src="/images/logos/adobe.png"
                alt="Adobe logo"
                width={330}
                height={83}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/asana.png"
                alt="Asana logo"
                width={283}
                height={55}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/coleman.png"
                alt="Coleman logo"
                width={300}
                height={98}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/discovery.png"
                alt="Discovery logo"
                width={340}
                height={70}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/hp.png"
                alt="HP logo"
                width={130}
                height={130}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/post.png"
                alt="Post logo"
                width={200}
                height={140}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/total_wine.png"
                alt="Total Wine logo"
                width={300}
                height={70}
              />
            </div>
            <div className="flex-center">
              <Image
                src="/images/logos/usf.png"
                alt="University of San Francisco logo"
                width={330}
                height={90}
              />
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <ContactSection
        contactHeader={
          <h2
            className="sub-headline"
            style={{ maxWidth: "800px", margin: "0 auto 40px auto" }}
          >
            Reach out with any <b>questions</b> you have regarding{" "}
            <b>projects or estimates</b>, or request any other{" "}
            <b>information</b> you need.
          </h2>
        }
      />
    </Fragment>
  );
};

export default Home;
