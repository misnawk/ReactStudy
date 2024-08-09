import React from "react";

type NameProps = {
  name: string;
};

export const Name = ({ name }: NameProps) => {
  return <div>안녕하세요, 저의 이름은 {name} 입니다.</div>;
};
