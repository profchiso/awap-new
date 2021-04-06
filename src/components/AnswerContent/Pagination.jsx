import React from "react";
import { MemoryRouter, Route } from "react-router";
import Pagination from "@material-ui/lab/Pagination";
import { NavLink } from "react-router-dom";
import PaginationItem from "@material-ui/lab/PaginationItem";

export default function PaginationNavLink(props) {

  return (

    //ALTHOUGH THE NAVLINK FUNCTIONALITY WAS JUST PARTIALLY USED

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
              onChange={props.setQuestionNumber(page-1)}
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
