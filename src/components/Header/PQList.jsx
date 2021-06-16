import React, {useState} from "react";
import {connect} from "react-redux"
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import {selectPastQuestionSubject} from "../../redux/actions/practiceQuestion"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuItem: {
    marginTop: 4,
    marginBottom: 4,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function SimpleMenu(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [waecSSCESubmenu, setwaecSSCESubmenu] = useState(false)
  const [umeSubmenu, setumeSubmenu] = useState(false)
  const [waecJSCESubmenu, setwaecJSCESubmenu] = useState(false)

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const waecSSCEHover =()=>{
    setwaecSSCESubmenu(true)
    setumeSubmenu(false)
    setwaecJSCESubmenu(false)
  }
  const umeHover =()=>{
    setumeSubmenu(true)
    setwaecSSCESubmenu(false)
    setwaecJSCESubmenu(false)
  }
  const waecJSCEHover =()=>{
    setwaecJSCESubmenu(true)
    setumeSubmenu(false)
    setwaecSSCESubmenu(false)
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        // onMouseLeave={handleClose}
      >
         <span className="capitalize font-body font-normal">
            Past Questions
          </span>
      </Button>

      <Menu
        // id="simple-menu"
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        PaperProps={{
          style: {
            left: '50%',
            transform: 'translateX(-10%) translateY(52%)',
          }
        }}
      >
      
        <div className="flex mx-8 my-4 gap-x-4">
          <div className="flex flex-col gap-0.5">
            <MenuItem
              className={`${classes.menuItem} font-body font-normal flex rounded-lg`}
              onMouseOver={waecSSCEHover}
            >
              <span className="font-body font-normal flex-1 pr-8 py-1">
                WAEC (SSCE)
              </span>
              <span className="justify-self-end">
                <FiChevronRight />
              </span>
            </MenuItem>
            <MenuItem
              className={`${classes.menuItem} font-body font-normal flex rounded-lg`}
              onMouseOver={umeHover}
            >
              <span className="font-body font-normal flex-1 pr-8 py-1">
                UME (SSCE)
              </span>
              <span className="justify-self-end">
                <FiChevronRight />
              </span>
            </MenuItem>
            <MenuItem
              className={`${classes.menuItem} font-body font-normal flex rounded-lg`}
              onMouseOver={waecJSCEHover}
            >
              <span className="font-body font-normal flex-1 pr-8 py-1">
                WAEC (JSCE)
              </span>
              <span className="justify-self-end">
                <FiChevronRight />
              </span>
            </MenuItem>
          </div>


          {waecSSCESubmenu ?
          <div className="bg-f8 p-4">
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/subject-choose-year" className="w-48 " >
              <span className="font-body font-normal text-gray-800" onClick={()=>props.selectPastQuestionSubject("Biology")}>
                Biology
              </span>
            </Link>
          </MenuItem>
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/subject-choose-year" className="w-48 " >
              <span className="font-body font-normal text-gray-800" onClick={()=>props.selectPastQuestionSubject("Chemistry")}>
                Chemistry
              </span>
            </Link>
          </MenuItem>
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/subject-choose-year" className="w-48 " >
              <span className="font-body font-normal text-gray-800" onClick={()=>props.selectPastQuestionSubject("Physics")}>
                Physics
              </span>
            </Link>
          </MenuItem>
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/subject-choose-year" className="w-48 " >
              <span className="font-body font-normal text-gray-800" onClick={()=>props.selectPastQuestionSubject("Math")}>
                Math
              </span>
            </Link>
          </MenuItem>
        </div> : `` }
          
        {umeSubmenu ?
          <div className="bg-f8 p-4">
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/math" className="w-48 ">
              <span className="font-body font-normal text-gray-800">
                Math
              </span>
            </Link>
          </MenuItem>
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/english" className="w-48 ">
              <span className="font-body font-normal text-gray-800">
                English
              </span>
            </Link>
          </MenuItem>
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/physics" className="w-48 ">
              <span className="font-body font-normal text-gray-800">
                Physics
              </span>
            </Link>
          </MenuItem>
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/chemistry" className="w-48 ">
              <span className="font-body font-normal text-gray-800">
                Chemistry
              </span>
            </Link>
          </MenuItem>
        </div> : `` }

        {waecJSCESubmenu ?
          <div className="bg-f8 p-4">
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/english" className="w-48 ">
              <span className="font-body font-normal text-gray-800">
                English
              </span>
            </Link>
          </MenuItem>
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/math" className="w-48 ">
              <span className="font-body font-normal text-gray-800">
                Math
              </span>
            </Link>
          </MenuItem>
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/basic-science" className="w-48 ">
              <span className="font-body font-normal text-gray-800">
                Basic Science
              </span>
            </Link>
          </MenuItem>
          <MenuItem
            className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
            onClick={handleClose}
          >
            <Link to="/pq/basic-tech" className="w-48 ">
              <span className="font-body font-normal text-gray-800">
                Basic Tech
              </span>
            </Link>
          </MenuItem>
        </div> : `` }

       
        </div>
      </Menu>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {selectPastQuestionSubject})(SimpleMenu);