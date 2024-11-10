import TenacityDarkMode from "@/public/Tenacity-White.svg";
import TenacityLightMode from "@/public/Tenacity-Black.svg";
import Image from "next/image";

export default function TenacityIcon() {
    return (
        <>
            <Image
                src={TenacityDarkMode}
                alt="Tenacity Icon Dark Mode"
                style={{
                    width: "auto",
                    height: "2.5rem",
                }}
                className="hidden dark:block"
            />
            <Image
                src={TenacityLightMode}
                alt="Tenacity Icon Light Mode"
                style={{
                    width: "auto",
                    height: "2.5rem",
                }}
                className="dark:hidden"
            />
        </>
    );
}
