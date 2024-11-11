import MicrosoftLogo from "@/public/microsoft-logo-svgrepo-com.svg";
import Image from "next/image";

export default function MicrosoftIcon() {
    return (
        <Image
            src={MicrosoftLogo}
            alt="Microsoft Logo"
            style={{
                width: "auto",
                height: "8rem",
            }}
        />
    );
}
