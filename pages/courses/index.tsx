import React from "react";

interface Props {
  text: string;
}

const TextField: React.FC<Props> = (props) => {
  const [text, setText] = React.useState<string | null>(null);

  React.useEffect(() => {
    setText("hello there");
  });

  return <div>{text}</div>;
};

export default TextField;

