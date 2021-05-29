import React, { useState } from "react";
import { ReactComponent as NextIcon } from "../../assets/svgs/NextIcon.svg";
import aplusIcon from "../../assets/svgs/AplusIcon.svg";
import selfPacedLearning from "../../assets/svgs/SelfPacedLearning.svg";
import testTimer from "../../assets/svgs/TestTimer.svg";
import ERM from "../../assets/svgs/ERM.svg";
import someb from "../../assets/images/somebody3.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MobileHeader from "../Header/MobileHeader";
import ExploreContentSenior from "../ExploreClasses/Index";
import ExploreContentJunior from "../ExploreClasses/ExploreContentJunior";
import SwipeableTextMobileStepper from "../Carousels/SingleCarousel";
import TextCarousel from "../Carousels/TextCarousel";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import { connect } from "react-redux";
import { Button, Modal } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Backdrop from "@material-ui/core/Backdrop";
import { ReactComponent as Gmail } from "../../assets/svgs/Gmail.svg";
import { ReactComponent as Facebook } from "../../assets/svgs/FaceBook.svg";
import { ReactComponent as Twitter } from "../../assets/svgs/Twitter.svg";
import { ReactComponent as Whatsapp } from "../../assets/svgs/Whatsapp.svg";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuItem: {
    fontFamily: "Google Sans",
  },
  border: {
    borderColor: "rgba(6,69,134, 0.1)",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  xlarge: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  bottomNav: {
    width: "100%",
    height: "60px",
  },
}));

function HomeBody(props) {
  const { token } = props.loginReducer;
  // console.log('props', props);
  const [open, setOpen] = useState(false);

  const [secondaySchoolContent, setsecondaySchoolContent] = React.useState(
    <ExploreContentSenior />
  );

  const handleSS = () => {
    setsecondaySchoolContent(<ExploreContentSenior />);
  };

  const handleJSS = () => {
    setsecondaySchoolContent(<ExploreContentJunior />);
  };
  const classes = useStyles();

  const [studentClass, setstudentClass] = React.useState("SS1-3 (Grade 9-12)");

  const handleChange = (event) => {
    setstudentClass(event.target.value);
  };
  const { width } = useWindowDimensions();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            className={`${classes.paper} flex outline-none text-center w-full max-w-xl`}
          >
            <div className="py-12 flex-1 -mr-12">
              <h3>Share On</h3>
              <div className="flex  font-medium justify-content-center">
                <div className="flex gap-24 pt-8 font-medium justify-content-center mx-auto text-left">
                  <div>
                    <a href="mailto:">
                      <Button className="flex gap-4 ">
                        <EmailShareButton url="https://awesumedge.com/" subject="Join AwesumEdge" body="We Teach to Create Impact and Enrich Lives. Sign up today!" title="Join AwesumEdge: We Teach to Create Impact and Enrich Lives. Sign up today!" >
                          <EmailIcon  size={48} round={true} />
                        </EmailShareButton>
                        <span className="font-body capitalize text-base pl-3">
                          Gmail
                        </span>
                      </Button>
                    </a>
                    <br /> <br />
                    <Button className="flex gap-4">
                      <WhatsappShareButton url="https://awesumedge.com/" title="Join AwesumEdge: We Teach to Create Impact and Enrich Lives. Sign up today!" >
                        <WhatsappIcon  size={48} round={true} />
                      </WhatsappShareButton>
                      <span className="font-body capitalize text-base pl-3">
                        Whatsapp
                      </span>
                    </Button>
                  </div>

                  <div>
                    <Button className="flex gap-4 ">
                      <FacebookShareButton url="https://awesumedge.com/" title="Join AwesumEdge: We Teach to Create Impact and Enrich Lives. Sign up today!" hashtag="AwesumEdge">
                        <FacebookIcon size={48} round={true} />
                      </FacebookShareButton>
                      <span className="font-body capitalize text-base pl-3">
                        Facebook
                      </span>
                    </Button>
                    <br /> <br />
                    <Button className="flex gap-4">
                      <TwitterShareButton url="https://awesumedge.com/" title="Join AwesumEdge: We Teach to Create Impact and Enrich Lives. Sign up today!" hashtag="AwesumEdge">
                        <TwitterIcon  size={48} round={true} />
                      </TwitterShareButton>
                      <span className="font-body capitalize text-base pl-3">
                        Twitter
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <span>
              <Button onClick={handleClose}>
                <CloseRoundedIcon />
              </Button>
            </span>
          </div>
        </Fade>
      </Modal>

      <div className="bg-mobileAwesum sm:bg-awesum bg-cover bg-center bg-no-repeat text-white  px-6 sm:px-16 pb-40 sm:pb-96">
        <div className="block sm:hidden">
          <MobileHeader />
        </div>

        <div className="flex">
          <div>
            <p className="pt-16 sm:pt-32 pb-8 sm:pb-12 text-xl  md:text-3xl lg:text-4xl whitespace-nowrap">
              Curious Learners Change the World
            </p>
            <p className="text-md sm:text-lg lg:text-xl pb-8">
              Courses for Secondary/High School Students
            </p>
            {token ? (
              // INSERT A SHARE MODAL
              <Link to="/">
                <button
                  className="bg-white text-primary text-md lg:text-lg py-4 mt-8 md:mt-32 px-16 rounded-md font-body rounded-full"
                  onClick={handleOpen}
                >
                  Invite a Friend
                </button>
              </Link>
            ) : (
              <Link to="/sign-up">
                <button className="bg-white text-primary text-md lg:text-lg py-4 mt-8 md:mt-32 px-20 rounded-md font-body rounded-full">
                  Get Started
                </button>
              </Link>
            )}
          </div>
          <div className="items-center right-5 hidden lg:flex">
            <img src={ERM} alt="erm" className="mt-24" />
          </div>
        </div>
      </div>

      <h3 className="text-2xl md:text-4xl text-center mt-0 md:mt-24 md:mb-12 font-medium text-primary">
        <span className="font-normal sm:font-medium">Why Learn with </span>
        <span>AwesumEdge </span>
      </h3>

      <div className="flex flex-1 py-8 px-4 justify-around gap-0 sm:gap-4">
        <div className="text-center text-primary pb-4  max-w-1/3">
          <img src={testTimer} className="mx-auto px-2" alt="" />

          <p className="text-sm md:text-base px-2">
            {width < 480
              ? `Prepare Adequately`
              : `Prepare Adequately for your Test/Exam`}
          </p>
        </div>
        <div className="text-center text-primary pb-4 max-w-1/3">
          <img src={aplusIcon} className="mx-auto px-2" alt="" />
          <p className="text-sm md:text-base px-1">
            Excellent Result Guaranteed
          </p>
        </div>
        <div className="text-center text-primary pb-4 max-w-1/3 ">
          <img src={selfPacedLearning} alt="" className="mx-auto px-2" />
          <p className="text-sm md:text-base">Self Paced Learning</p>
        </div>
      </div>

      <div className="text-center mt-32 sm:mt-64 pb-8 px-6 sm:px-16 ">
        <p className="text-primary text-2xl sm:text-4xl  font-medium">
          Explore Our Classes
        </p>

        <div className="flex justify-end items-center content-center">
          <div className="mt-8">
            <FormControl
              variant="outlined"
              className={`${classes.formControl} transform scale-90 lg:scale-100 `}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Class
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={studentClass}
                onChange={handleChange}
                label="class"
              >
                <MenuItem
                  value="JSS1-3 (Grade 7-9)"
                  className={classes.menuItem}
                  onClick={handleJSS}
                >
                  JSS1-3 (Grade 7-9)
                </MenuItem>
                <MenuItem
                  value="SS1-3 (Grade 9-12)"
                  className={classes.menuItem}
                  onClick={handleSS}
                >
                  SS1-3 (Grade 9-12)
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mt-8 pl-8 flex items-center">
            <p className="text-primary text-sm pr-2 my-auto whitespace-nowrap">
              SEE ALL
            </p>
            <NextIcon className="text-sm " />
          </div>
        </div>
      </div>

      <div className="flex px-7 sm:max-w-6xl mx-auto">
        {secondaySchoolContent}
      </div>

      <br />

      {/* COMMENT: THIS SECTION IS BEING WORKED ON */}

      <div className="flex flex-wrap justify-center items-center text-center text-light mt-64  px-2">
        <SwipeableTextMobileStepper />
        <div className="max-w-xl sm:pl-12 sm:pr-4">
          <h3 className="py-4 text-center pt-8 lg:pt-0">
            <TextCarousel />
          </h3>
          <Link to="/sign-up" className={`${token ? "hidden" : ""}`}>
            <button className="text-white bg-primary shadow-primary px-24 py-2.5 mt-8 rounded-full focus:outline-none text-base font-semibold font-body lg:text-xl">
              Join
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center text-center  mt-32 sm:mt-64 pb-40">
        <h3 className="relative top-44 lg:top-48 text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          What Our Users Say
        </h3>

        <div className="bg-bodyLightBlue bg-cover bg-center bg-no-repeat py-48 lg:py-64 w-full">
          <div className="bg-card bg-cover bg-center bg-no-repeat sm:py-30 lg:pt-36 lg:pb-60 pt-12 pb-24 max-w-5/6 md:max-w-3/4 mx-auto text-primary text-center">
            <div className=" pb-4">
              {width < 1024 ? (
                <Avatar
                  alt="user"
                  src={someb}
                  className={`${classes.large} mx-auto sm:w-auto`}
                />
              ) : (
                <Avatar
                  alt="user"
                  src={someb}
                  className={`${classes.xlarge} mx-auto sm:w-auto`}
                />
              )}
              <p className="py-2  text-sm md:text-lg sm:py-4 opacity-75">Ayo</p>
            </div>
            <div className="opacity-50 text-sm md:text-lg top-0 ">
              <p className="sm:whitespace-nowrap">
                I love the past questions, and how they were solved.
              </p>
              <p className="whitespace-nowrap">
                They helped me prepare well for my exams !
              </p>
            </div>
          </div>
          {token ? (
            <Link to="/">
              <button className="text-white bg-primary text-md lg:text-lg py-4 mt-8 md:mt-32 px-16 font-body rounded-full">
                Invite a Friend
              </button>
            </Link>
          ) : (
            <Link to="/sign-up">
              <button className="text-white bg-primary text-md lg:text-lg py-4 mt-8 md:mt-32 px-20 font-body rounded-full">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(HomeBody);
