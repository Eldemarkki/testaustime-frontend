import { createStyles, useMantineTheme } from "@mantine/core";
import { BlinkingDot } from "../BlinkingDot/BlinkingDot";

export type CurrentStatusProps = {
  projectName: string
}

const useStyles = createStyles(theme => ({
  container: {
    display: "flex",
    padding: "0.6rem 0.8rem",
    borderColor: theme.colors.green[5],
    borderStyle: "solid",
    borderWidth: 2,
    alignSelf: "flex-start",
    borderRadius: 8,
    alignItems: "center",
    gap: "0.8rem"
  }
}));

export const CurrentStatus = ({ projectName }: CurrentStatusProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return <div className={classes.container}>
    <BlinkingDot color={theme.colors.green[5]} /> {projectName}
  </div>;
};
