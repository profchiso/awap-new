import Pagination from "@material-ui/lab/Pagination";
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
      <Pagination
        showFirstButton
        showLastButton
        count={props.count}
        boundaryCount={2}
        shape="rounded"
        onChange={(event, page) => props.handlePaginationChange(page)}
        classes={{
          root: `${"rounded p-2 shadow-awesumOne flex justify-center lg:min-w-sm"} ${
            classes.pagination
          }`,
        }}
        renderItem={(item) => <PaginationItem {...item} />}
      />
  );
}
