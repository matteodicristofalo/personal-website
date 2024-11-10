export type SplitTextRevealProps = {
  text: string;
  splitType?: SplitType;
  revealOptions?: Partial<RevealOptions>;
};

type SplitType = "char" | "word";

type RevealOptions = {
  duration: number;
  stagger: number;
};

export type AnimatedSpanProps = {
  text: string;
  delay: number;
};
