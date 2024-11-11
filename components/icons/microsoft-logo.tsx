import MicrosoftLogo from "@/public/Microsoft-Logo-White.webp";
import Image from "next/image";

export default function MicrosoftIcon() {
    return (
        <Image
            src={MicrosoftLogo}
            alt="Microsoft Logo"
            style={{
                width: "auto",
                height: "4rem",
            }}
        />
    );
}
