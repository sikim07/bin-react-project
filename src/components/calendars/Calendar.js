import { makeStyles } from "@mui/styles";

export default function Calendar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.mainFirst}>calendar</div>
    </div>
  );
}

const useStyles = makeStyles({
  main: {
    height: "inherit",
    width: "100%",
    float: "right"
  },
  mainFirst: {
    height: "50%",
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#FEFBF3",
    border: "1px solid",
    display: "inline-block"
  }
});
