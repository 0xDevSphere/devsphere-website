"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { SiGithub, SiMicrosoft, SiMozilla } from "react-icons/si";
import TenacityIcon from "@/components/icons/tenacity-icon";
// NOTE TO DEVELOPERS - only use icons from react-icons and
//  preferably the simple icons category (Icon prevfixed with Si and imported from react-icons/si)

interface sponsorsProps {
    icon: JSX.Element;
    name: string;
}

const sponsors: sponsorsProps[] = [
    {
        icon: <SiGithub />,
        name: "GitHub",
    },
    {
        icon: <SiMicrosoft />,
        name: "Microsoft",
    },
    {
        icon: <SiMozilla />,
        name: "Mozilla",
    },
    {
        icon: <TenacityIcon />,
        name: "",
    },
];

export const SponsorsSection = () => {
    return (
        <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
            <h2 className="text-lg md:text-xl text-center mb-6">
                Brands We Work With
            </h2>

            <div className="mx-auto">
                <Marquee
                    className="gap-[3rem]"
                    fade
                    innerClassName="gap-[3rem]"
                    pauseOnHover
                >
                    {sponsors.map(({ icon, name }) => (
                        <div
                            key={name}
                            className="flex space-x-2 items-center text-xl md:text-2xl font-medium"
                        >
                            {icon}
                            <p className="text-xl md:text-2xl font-medium">
                                {name}
                            </p>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};
