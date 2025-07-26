import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import DevSphereLogo from "@/public/devsphereLogo.png";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image src={DevSphereLogo} alt="" width={35} height={35} />

              <h3 className="text-2xl pl-2">DevSphere</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Events</h3>
            <div>
              <Link
                href="https://lu.ma/devsphere"
                className="opacity-60 hover:opacity-100"
              >
                Upcoming Events
              </Link>
            </div>

            <div>
              <Link
                href="https://lu.ma/devsphere"
                className="opacity-60 hover:opacity-100"
              >
                Past Events
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link
                href="mailto:taufeeqr.btech23@rvu.edu.in, kautilyadk.btech23@rvu.edu.in?subject=GM%20GM"
                className="opacity-60 hover:opacity-100"
              >
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link
                href="https://github.com/0xDevSphere"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Github
              </Link>
            </div>

            <div>
              <Link
                href="https://www.linkedin.com/company/99369297/"
                className="opacity-60 hover:opacity-100"
              >
                Linkedin
              </Link>
            </div>

            <div>
              <Link
                href="https://www.instagram.com/devsphere.rvu"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Instagram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Credits</h3>

            <div>
              <Link
                href="https://github.com/0xDevSphere/devsphere-website/graphs/contributors"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                DevSphere Tech Team
              </Link>
            </div>
            <div>
              <Link
                href="https://github.com/nobruf"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Bruno Felipy
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; DevSphere 2025 (Open Source and Web 3.0 Club of RV
            University)
          </h3>
        </section>
      </div>
    </footer>
  );
};
