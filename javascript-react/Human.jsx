import React from "react";

const Children = ({ children }) => <div>{children}</div>;

const Id = Children;
const Name = Children;
const Age = Children;
const Description = Children;

export const Human = () => (
  <>
    <Id>@human</Id>
    <Name>human</Name>
    <Age>17</Age>
    <Description>New Human</Description>
  </>
);
