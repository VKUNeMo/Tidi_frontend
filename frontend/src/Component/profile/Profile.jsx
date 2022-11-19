import {useSelector} from "react-redux";
import {useState} from "react";
import "./profile.css"

const Profile = () => {
    const raw = useSelector(state => state?.auth.login.currentUser.data);
    const user = raw?.user;
    const [image, setImage] = useState(<div>Image Helloooooo</div>);
    const handleChangeAvatar = (event) => {
        const reader = new FileReader()
        console.log(event.target.files[0]);
        // reader.readAsText(event.target.files[0]);
        // console.log(reader);
    }

    return (
        <div className={"profile-user-container"}>
            <div className={"banner-icon-container"}>
                <div className={"banner-icon-user-profile"}>
                    <div className={"banner-container"}>
                        <img src="https://cdn.donmai.us/sample/ba/e1/sample-bae16303318463017678ef25cb052152.jpg"
                             className={"banner-user-profile"} alt=""/>
                        <div className={"edit-banner-show"}>
                            <span>Edit</span>
                            <i className="fa-solid fa-pen"></i>
                        </div>
                    </div>

                    <label>
                        <div className={"logo-user-container"}>
                            <img src={user.avatar} className={"icon-user-profile"} alt="" />
                            <div>
                                <i className="fa-regular fa-pen-to-square logo-edit-logo-user"></i>
                            </div>
                        </div>
                        <input type="file" hidden={true} onChange={(e) => handleChangeAvatar(e)}/>
                    </label>
                    <div className="ovewview-username-container hover-show-edit">
                        <h3>{user.fullname || user.username}<i className="fa-solid fa-pen wait-hover-edit"></i></h3>
                        <span>Username: {user.username}</span>
                    </div>
                </div>

            </div>
            <div className={"info-user-profile hover-show-edit"}>
                <h4>Email: {user.email}<i className="fa-solid fa-pen wait-hover-edit"></i></h4>
            </div>
        </div>
    )
};

export default Profile;
