import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import DefaultIcon from "@/public/default.jpeg";
import RitamImage from "@/public/ritam.jpg";
import SamImage from "@/public/sam.jpg";
import PushanImage from "@/public/Pushan.jpg";
import SagarImage from "@/public/Sagar.jpg";
import PuniImage from "@/public/puneetha.jpeg";
import SamarthImage from "@/public/Samarth.jpg";
import JathinImage from "@/public/jathin.png";
import KautilyaImage from "@/public/Kautilya_.jpg";
import LalithImage from "@/public/lalith.png";
import TaufeeqImage from "@/public/taufeeq.jpeg";

import MerinThomasImage from "@/public/ProfMerin.png";

import { StaticImageData } from "next/image";
import { SiInstagram } from "react-icons/si";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
    imageUrl: StaticImageData;
    firstName: string;
    lastName: string;
    positions: string[];
    socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
    name: string;
    url: string;
}
export const TeamSection = () => {
    const teamList: TeamProps[] = [
        {
            imageUrl: MerinThomasImage,
            firstName: "Prof. Merin",
            lastName: "Thomas",
            positions: ["Faculty Co-ordinator"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/dr-merin-thomas/",
                },
            ],
        },
        {
            imageUrl: RitamImage,
            firstName: "Ritam",
            lastName: "Rao",
            positions: ["President"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/ritam-rao-86503a2b6",
                },
                {
                    name: "Github",
                    url: "https://github.com/RitamRoa",
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/ritam.rao",
                },
            ],
        },
        {
            imageUrl: SamImage,
            firstName: "Samarth",
            lastName: "Kadam",
            positions: ["Vice President"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/samarth-kadam-008563331/",
                },
                {
                    name: "Github",
                    url: "https://github.com/IamSamk",
                },
                
            ],
        },
        {
            imageUrl: PushanImage,
            firstName: "Pushan",
            lastName: "T",
            positions: ["Founder & Tech Lead"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/pushant/",
                },
                {
                    name: "Github",
                    url: "https://github.com/pushan2005",
                },
                {
                    name: "X",
                    url: "https://x.com/broken_nokia",
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/pushan_fillertext/",
                },
            ],
        },
        
        {
            imageUrl: SagarImage,
            firstName: "Sagar",
            lastName: "N Rao",
            positions: ["Design Lead"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/sagar-n-rao-1a883b2ab/",
                },
                {
                    name: "Github",
                    url: "https://github.com/SagarNRao/",
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/sagar_n_rao_man/",
                },
            ],
        },
        {
            imageUrl: PuniImage,
            firstName: "Puneetha",
            lastName: "Shankar",
            positions: ["Events and Experiences"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/puneetha-s-shankar-079261328/",
                },
                {
                    name: "Github",
                    url: "https://github.com/Puneetha-S-Shankar",
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/_puneethaa?igsh=MXhpcG1mdDk1eGJrbg==",
                },
            ],
        },
        {
            imageUrl: JathinImage,
            firstName: "Jathin",
            lastName: "Kirani",
            positions: ["Media - Content Lead"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/jathin-kirani-nagaraj-2252152b7/",
                },
              {
                    name: "Github",
                    url: "https://github.com/Jathin-KN",
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/jack.k_28?igsh=MTZycms0NzNocjFxMA==",
                },
            ],
        },
        {
            imageUrl: LalithImage,
            firstName: "B.Lalith",
            lastName: "Aditya",
            positions: ["Media - Cinematography lead"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/lalith-aditya-b-0a99b3312/",
                },
            
            ],
        },
        {
            imageUrl: TaufeeqImage,
            firstName: "Taufeeq",
            lastName: "Riyaz",
            positions: ["Founder & Advisor"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/taufeeq/",
                },
                {
                    name: "Github",
                    url: "https://github.com/0xtaufeeq",
                },
                {
                    name: "X",
                    url: "https://x.com/0xtaufeeq",
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/0xtaufeeq/",
                },
            ],
        },
        {
            imageUrl: KautilyaImage,
            firstName: "Kautilya",
            lastName: "DK",
            positions: ["Advisor"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/kautilyadk/",
                },
                {
                    name: "Github",
                    url: "https://github.com/kautilyadevaraj",
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/kautilyadevraj/",
                },
            ],
        },
    ];
    const socialIcon = (socialName: string) => {
        switch (socialName) {
            case "LinkedIn":
                return <LinkedInIcon />;
            case "Github":
                return <GithubIcon />;
            case "X":
                return <XIcon />;
            case "Instagram":
                return <SiInstagram className="h-[1.125rem] w-[1.125rem]"/>;
        }
    };

    return (
        <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
            <div className="text-center mb-8">
                <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                    Team
                </h2>

                <h2 className="text-3xl md:text-4xl text-center font-bold">
                    The Team Behind DevSphere
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamList.map(
                    (
                        {
                            imageUrl,
                            firstName,
                            lastName,
                            positions,
                            socialNetworks,
                        },
                        index
                    ) => (
                        <Card
                            key={index}
                            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
                        >
                            <CardHeader className="p-0 gap-0">
                                <div className="h-full overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt=""
                                        width={300}
                                        height={300}
                                        className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                                    />
                                </div>
                                <CardTitle className="py-6 pb-4 px-6">
                                    {firstName}
                                    <span className="text-primary ml-2">
                                        {lastName}
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            {positions.map((position, index) => (
                                <CardContent
                                    key={index}
                                    className={`pb-0 text-muted-foreground ${
                                        index === positions.length - 1 && "pb-6"
                                    }`}
                                >
                                    {position}
                                    {index < positions.length - 1 && (
                                        <span>,</span>
                                    )}
                                </CardContent>
                            ))}

                            <CardFooter className="space-x-4 mt-auto">
                                {socialNetworks.map(({ name, url }, index) => (
                                    <Link
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        className="hover:opacity-80 transition-all"
                                    >
                                        {socialIcon(name)}
                                    </Link>
                                ))}
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
