import * as React from "react";

export interface HelloProps { developer: string, compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.developer}, {props.compiler} and {props.framework}!</h1>;