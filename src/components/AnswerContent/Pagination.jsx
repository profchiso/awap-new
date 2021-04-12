import React from "react";
import { MemoryRouter, Route } from "react-router";
import Pagination from "@material-ui/lab/Pagination";
import { NavLink } from "react-router-dom";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pagination: {
    "& ul": {
      [theme.breakpoints.up("md")]: {
        gap: "0.5rem",
      },
    },
  },
}));

export default function PaginationNavLink(props) {
  const classes = useStyles();

  return (
    //Although the Navlink Functionality Was Just Partially Used

    <MemoryRouter initialEntries={["/answers"]} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get("page") || "1", props.count);
          return (
            <Pagination
              page={page}
              count={props.count}
              shape="rounded"
              onChange={(event, page) => {
                props.setQuestionNumber(page - 1);
                props.setValue("");
                props.setisClicked(false)
              }}
              classes={{
                root: `${"rounded p-2 shadow-awesumOne flex justify-center lg:min-w-sm"} ${
                  classes.pagination
                }`,
              }}
              renderItem={(item) => (
                <PaginationItem
                  component={NavLink}
                  to={`/pq/biology/2007/${
                    item.page === 1 ? "" : `?page=${item.page}`
                  }`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}
