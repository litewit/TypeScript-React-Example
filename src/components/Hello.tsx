import * as React from "react";

export interface HelloProps { developer: string, compiler: string; framework: string; }

function Hello(props: HelloProps) {
  
    return (
        <h1>Hello from {props.developer}, {props.compiler} and {props.framework}!</h1>
    );
}
  
export default Hello;