import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="max-w-5xl flex flex-col w-[100%] h-[100%] justify-center m-auto">
            <div className="flex h-[50px]  p-4 w-[100%]">
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start gap-4">
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block font-bold text-black text-xl">
                        Vocations
                    </span>
                </Link>
            </div>
        </div>
    );
}
