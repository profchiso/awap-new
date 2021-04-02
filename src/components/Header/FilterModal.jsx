import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiTextField-root": {
      width: "80%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperTwo: {
    backgroundColor: "#fff",
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: "500px",
    minHeight: "310px",
  },
}));

export default function FilterModal(props) {
  const classes = useStyles();

  //
  const [value, setValue] = React.useState("showAll");

  const handleCheckChange = (event) => {
    setValue(event.target.value);
  };

  //
  const anchorRef = React.useRef(null);

  const [openModal, setModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-haspopup="true"
          onClick={handleModalOpen}
          className="flex items-center"
        >
          {props.children}
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleModalClose}
        closeAfterIncorrectition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={`${classes.paperTwo} flex outline-none text-center`}>
            <FormControl component="fieldset" className="w-full">
            <h3 className="font-normal pt-1">Filter</h3>

              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleCheckChange}
                className="my-auto"
              >
                <div className="flex justify-center gap-12  -mr-12">
                  <div>
                    <div>
                      <FormControlLabel
                        value="showAll"
                        control={<Radio color="primary" />}
                        label="Show All"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="Correct"
                        control={<Radio color="primary" />}
                        label="Correct"
                        className="pt-12"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <FormControlLabel
                        value="Incorrect"
                        control={<Radio color="primary" />}
                        label="Incorrect"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="Unanswered"
                        control={<Radio color="primary" />}
                        label="Unanswered"
                        className="pt-12"
                      />
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </FormControl>

            <span>
              <Button onClick={handleModalClose} >
                <CloseRoundedIcon />
              </Button>
            </span>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
