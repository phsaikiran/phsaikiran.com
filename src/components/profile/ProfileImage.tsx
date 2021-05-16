import React from "react";
import profile from "images/profile.jpg";

type Props = {}
type State = {}

class ProfileImage extends React.Component<Props, State> {
    state: State = {};

    render = () => {
        return (
            <img className={"w-64 h-64 rounded-full bg-blu"}
                 src={profile}
                 alt={"profile image"}
                 height={256}
                 width={256}
            />
        );
    }
}

export default ProfileImage;
