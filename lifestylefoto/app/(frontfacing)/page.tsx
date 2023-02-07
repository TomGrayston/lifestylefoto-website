import Image from "next/image";

export default function HomePage() {
    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <Image
                    src="/background.webp"
                    alt="Newly married couple dancing"
                    fill
                    className='object-cover w-full h-full ' />
                <h1 className="text-white absolute text-[4rem] mini:text-[3rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-sans">
                    LifestyleFoto
                </h1>
            </div>
            <div className='flex items-center justify-center h-screen bg-blue-200'>
            </div>
        </>
    );
}