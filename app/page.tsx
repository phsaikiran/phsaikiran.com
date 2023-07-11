import Image from 'next/image'

export default function Home() {
    return (
        <div className={"text-center max-w-screen-lg xl:max-w-screen-xl mx-auto"}>
            <div className={"flex flex-col items-center justify-center h-screen"}>
                <div className={"p-1 border-2 border-blu rounded-full mb-3"}>
                    <Image src="/profile.jpg" alt="profile picture" className="w-32 h-32 rounded-full" width={800} height={800}/>
                </div>
                <div className={"text-5xl pt-10 text-blu"}><code>Sai Prudhivi</code></div>
                <div className={"text-2xl pb-10 text-blu"}><code>MS Computer Science @ UT Dallas</code></div>
                <div className={"space-x-5"}>
                    <a href={"/Sai_Prudhivi_Resume.pdf"} target={"_blank"} rel={"noreferrer"}>
                        <Image src="/resume.svg" alt="resume" width={40} height={40} className="inline-block"/>
                    </a>
                    <a href={"https://www.linkedin.com/in/phsaikiran/"} target={"_blank"} rel={"noreferrer"}>
                        <Image src="/linkedin.svg" alt="linkedin" width={40} height={40} className="inline-block"/>
                    </a>
                    <a href={"https://github.com/phsaikiran"} target={"_blank"} rel={"noreferrer"}>
                        <Image src="/github.svg" alt="github" width={40} height={40} className="inline-block"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
