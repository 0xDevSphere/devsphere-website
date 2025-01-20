"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Link href="./DAProgram">
            <Badge variant="outline" className="text-sm py-2">
              <span className="mr-2 text-primary">
                <Badge>✨</Badge>
              </span>
              <span>DA Program is now live!</span>
            </Badge>
          </Link>

          <div className="max-w-screen-lg mx-auto text-center text-3xl md:text-6xl font-bold leading-relaxed">
            <h1>
              Welcome To
              <span className="text-transparent px-2 bg-gradient-to-r from-[#7e9fd7] to-primary bg-clip-text ml-2">
                DevSphere <br />
              </span>
              <span className="text-sm md:text-4xl">
                Build · Collaborate · Transform
              </span>{" "}
              <br />
            </h1>
          </div>

          <p className="max-w-screen-md mx-auto text-lg text-muted-foreground">
            {`A place for builders, learners, and tech enthusiasts who want to create a future that’s more open, connected, and decentralized.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <a href="https://forms.gle/ZaXY3jk2NP1zeSK66" target="_blank">
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Join Now
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </a>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="./DAProgram">
                Be an Apprentice
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
