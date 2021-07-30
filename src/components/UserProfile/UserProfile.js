import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Toolbar from "@material-ui/core/Toolbar";
// import AppBar from "@material-ui/core/AppBar";
// import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "./MainContent";
import Search from "./Search";
import About from "./About";
import SocialMedia from "./SocialMedia";
import UserBioTabs from "./userBio";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outer: {
    display: "grid",
    gridTemplateColumns: "2fr 7fr",
  },
  Sidebar: {
    backgroundColor: "#457b9d",
    height: "100vh",
  },
  topRight: {
    display: "grid",
    gridTemplateColumns: "10fr 1fr 1fr",
    padding: "0 3.5rem",
  },
  topIcons: {
    marginRight: "25px",
    color: "#457B9D",
    fontSize: "35px",
    borderRadius: "100%",
    cursor: "pointer",
    justifySelf: "right",
  },
  mainContent: {
    padding: "2rem",
  },
}));

export default function UserProfile(props) {
  const classes = useStyles();
  // const creator = JSON.parse(localStorage.getItem("profileData"));
  const creator = useSelector((state) => state);
  return (
    <div className={classes.outer}>
      <div className={classes.Sidebar}>
        <ProfileSidebar
          name={
            creator.profileInfo.personalInfo.firstName +
            " " +
            creator.profileInfo.personalInfo.lastName
          }
          role={creator.userData.role}
          category={creator.profileInfo.categories.Category}
          location={creator.profileInfo.personalInfo.state}
          image={creator.userData.profileImg}
        />
      </div>
      <div className={classes.mainContent}>
        <div className={classes.topRight}>
          <Search />
          <ChatBubbleIcon className={classes.topIcons} />
          <NotificationsIcon className={classes.topIcons} />
        </div>
        <MainContent creator={creator} />
        {/* <Divider /> */}
        <UserBioTabs />

        {/* {props.item === "About" && <About />}
        {props.item === "SocialMedia" && <SocialMedia />} */}
      </div>
    </div>
  );
}