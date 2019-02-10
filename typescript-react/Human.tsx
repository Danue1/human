import React, { FC } from "react";

const Children: FC = ({ children }) => <div>{children}</div>;

const Id = Children;
const Name = Children;
const Age = Children;
const Description = Children;

export const Human: FC = () => (
  <>
    <Id>@human</Id>
    <Name>human</Name>
    <Age>17</Age>
    <Description>New Human</Description>
  </>
);
