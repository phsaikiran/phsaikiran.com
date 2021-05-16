import React from "react";
import profile from "images/profile.jpg";
import linkedin from "images/linkedin.svg";
import github from "images/github.svg";

type Props = {}
type State = {}

export class App extends React.Component<Props, State> {
    state: State = {};

    render = () => {
        return (
            <div className={"text-center max-w-screen-lg xl:max-w-screen-xl mx-auto"}>
                <div className={"flex flex-col items-center justify-center h-screen"}>
                    <div className={"p-1 border-2 border-blu rounded-full mb-3"}>
                        <img className={"w-64 h-64 rounded-full bg-blu"}
                             src={profile}
                             alt={"profile image"}
                             height={256}
                             width={256}
                        />
                    </div>
                    <div className={"text-5xl pt-10 text-blu"}><code>P H Sai Kiran</code></div>
                    <div className={"text-2xl pb-10 text-blu"}><code>Applications Engineer at Oracle</code></div>
                    <div className={"space-x-5"}>
                        <a href={"https://www.linkedin.com/in/phsaikiran/"} target={"_blank"} rel={"noreferrer"}>
                            <img className={"w-10 h-10 inline-block"}
                                 src={linkedin}
                                 alt={"linkedin logo"}
                                 height={40}
                                 width={40}
                            />
                        </a>
                        <a href={"https://github.com/phsaikiran"} target={"_blank"} rel={"noreferrer"}>
                            <img className={"w-10 h-10 inline-block"}
                                 src={github}
                                 alt={"github logo"}
                                 height={40}
                                 width={40}
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
