import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="h-screen flex">
            {/* LEFT */}
            <div className="w-[100%] lg:w-[50%] xl:w-[50%] p-4 flex flex-col">
                <div className="w-[100%] h-[50px] items-start m-2">
                    <Link href="/">
                        <Image
                            src="/angle-left.png"
                            alt="back arrow"
                            width={25}
                            height={25}
                        />
                    </Link>
                </div>
                <div className="w-[100%] h-[100%] flex flex-col items-center justify-center gap-3">
                    <h1 className="p-4 font-bold text-xl">
                        Ingresa a tu cuenta
                    </h1>
                    <input
                        className="w-[300] border border-gray-300 rounded-lg pl-4 p-2 text-sm"
                        placeholder="Email"></input>
                    <input
                        className="w-[300] border border-gray-300 rounded-lg pl-4 p-2 text-sm"
                        placeholder="Password"></input>
                    <button className="bg-black w-[300] h-[40] rounded-lg text-md text-white font-semibold hover:bg-black/80">
                        Registrar
                    </button>
                    <span className="font-semibold text-gray-400 text-sm">
                        Registra una cuenta{" "}
                        <Link
                            className="text-blue-500 underline"
                            href="/sign-in">
                            Sign-in
                        </Link>
                    </span>
                </div>
                <div className="w-[100%] h-[50px] flex items-center justify-center gap-6 text-blue-500">
                    <a className="flex gap-1 items-center" href="">
                        <div className="w-[16] h-[16]">
                            <Image
                                src="/world.png"
                                alt="world icon"
                                width={16}
                                height={16}
                            />
                        </div>
                        <span>español</span>
                    </a>
                    <a className="flex gap-1 items-center" href="">
                        <div className="w-[16] h-[16]">
                            <Image
                                src="/help.png"
                                alt="help icon"
                                width={16}
                                height={16}
                            />
                        </div>

                        <span>Ayuda</span>
                    </a>
                </div>
            </div>
            {/* RIGHT */}
            <div className="hidden lg:block w-[50%] xl:w-[50%] bg-[#F7F8FA] h-[100%] relative overflow-hidden">
                <Image
                    src="/login.png"
                    fill
                    className="object-cover absolute top-1/2 left-1/2 -translate-x-1.2 -translate-y-1.2"
                    alt="Your description"
                />
            </div>
        </div>
    );
};

export default LoginPage;
