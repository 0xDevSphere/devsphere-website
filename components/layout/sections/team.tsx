import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import DefaultIcon from "@/public/default.jpeg";
import TaufeeqImage from "@/public/Taufeeq1.jpg";
import KautilyaImage from "@/public/Kautilya_.jpg";
import PushanImage from "@/public/Pushan.jpg";
import SagarImage from "@/public/Sagar.jpg";
import YashmeetImage from "@/public/Yashmeet.jpg";
import SamarthImage from "@/public/Samarth.jpg";
import SharuImage from "@/public/sharu.jpg";
import HarshaImage from "@/public/harsha.jpg";
import DaiwikImage from "@/public/daiwik.jpg";
import { StaticImageData } from "next/image";

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
            imageUrl: DefaultIcon,
            firstName: "Dr.Nikita",
            lastName: "Singh",
            positions: ["Faculty Co-ordinator"],
            socialNetworks: [
                // Add socials once consent is given
            ],
        },
        {
            imageUrl: TaufeeqImage,
            firstName: "Taufeeq",
            lastName: "Riyaz",
            positions: ["President"],
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
            ],
        },
        {
            imageUrl: KautilyaImage,
            firstName: "Kautilya",
            lastName: "DK",
            positions: ["Vice President"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/kautilyadk/",
                },
                {
                    name: "Github",
                    url: "https://github.com/kautilyadevaraj",
                },
            ],
        },
        {
            imageUrl: PushanImage,
            firstName: "Pushan",
            lastName: "T",
            positions: ["Tech Lead"],
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
            ],
        },
        {
            imageUrl: DefaultIcon,
            firstName: "Soumik",
            lastName: "Halder",
            positions: ["Growth and Partnerships"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/soumik7/",
                },
                {
                    name: "X",
                    url: "https://x.com/emSoumik",
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
            ],
        },
        {
            imageUrl: YashmeetImage,
            firstName: "Yashmeet",
            lastName: "Baid",
            positions: ["Events and Experiences"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/yashmeet-baid-2b269127a/",
                },
            ],
        },
        {
            imageUrl: SamarthImage,
            firstName: "Samarth",
            lastName: "Swarup K",
            positions: ["Community Manager"],
            socialNetworks: [
                // Add socials if applicable
            ],
        },
        {
            imageUrl: SharuImage,
            firstName: "Sharu G",
            lastName: "Hampali",
            positions: ["Content Manager"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/sharuhampali/",
                },
            ],
        },
        {
            imageUrl: DaiwikImage,
            firstName: "Daiwik",
            lastName: "Reddy",
            positions: ["Media Head"],
            socialNetworks: [
                // Add socials if applicable
            ],
        },
        {
            imageUrl: DefaultIcon,
            firstName: "Shreyas",
            lastName: "Abiram",
            positions: ["Cinematographer"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/shreyas-abiram-a52417290/",
                },
            ],
        },
        {
            imageUrl: HarshaImage,
            firstName: "Venkata",
            lastName: "Sushant Harsha",
            positions: ["Content Writer"],
            socialNetworks: [
                // Add socials if applicable
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
