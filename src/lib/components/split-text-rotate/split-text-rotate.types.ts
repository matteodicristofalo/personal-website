export type SplitTextRotateProps = {
  text: string;
  rotateOptions?: RotateOptions;
};

type RotateOptions = {
  duration: number;
  stagger: number;
};

export type Word = Character[];

type Character = {
  char: string;
  delay: number;
};
