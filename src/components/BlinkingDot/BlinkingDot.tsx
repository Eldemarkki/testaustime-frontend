import { createStyles, keyframes } from "@mantine/core";

const anim = keyframes({
  "from": {
    opacity: 0.6
  },
  "50%": {
    opacity: 1
  },
  "to": {
    opacity: 0.6
  }
});

const useStyles = createStyles(() => ({
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    animation: `${anim} 1s ease-in-out infinite`
  }
}));

export type BlinkingDotProps = {
  color: React.CSSProperties["color"] | undefined,
  animationDuration?: React.CSSProperties["animationDuration"] | undefined
}

export const BlinkingDot = ({ color, animationDuration = "2s" }: BlinkingDotProps) => {
  const { classes } = useStyles();

  return <div
    className={classes.dot}
    style={{
      backgroundColor: color,
      animationDuration
    }}
  />;
};
