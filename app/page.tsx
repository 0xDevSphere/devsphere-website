import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
    title: "DevSphere",
    description: "Open Source & Web 3.0 Club of RV University",
    openGraph: {
        type: "website",
        url: "https://github.com/0xDevSphere/devsphere-website.git",
        title: "DevSphere",
        description: "Open Source & Web 3.0 Club of RV University",
        images: [
            {
                url: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=820,height=234.28571428571428/calendar-cover-images/wy/0051222f-2ffb-4c14-9a8e-342c6324fa66",
                width: 1200,
                height: 630,
                alt: "DevSphere Club",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://github.com/0xDevSphere",
        title: "DevSphere",
        description: "Open Source & Web 3.0 Club of RV University",
        images: [
            "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=820,height=234.28571428571428/calendar-cover-images/wy/0051222f-2ffb-4c14-9a8e-342c6324fa66",
        ],
    },
};

export default function Home() {
    return (
        <>
            <HeroSection />
            <SponsorsSection />
            <BenefitsSection />
            <FeaturesSection />
            {/* <ServicesSection /> */}
            <TestimonialSection />
            <TeamSection />
            <CommunitySection />
            {/* <PricingSection /> */}
            {/* <ContactSection /> */}
            <FAQSection />
            <FooterSection />
        </>
    );
}
