export type SplitTextRotateProps = {
  text: string;
  rotateOptions?: RotateOptions;
};

type RotateOptions = {
  duration: number;
  stagger: number;
};
