import { ReactElement } from "react";

interface ButtonInterface {
    title: string,
    size: "lg" | "sm" | "md";
    startIcon? :ReactElement;
    endIcon? :ReactElement;
    variant: "primary" | "secondary";
} 

const sizeStyles = {
    "lg" : "px-8 py-4",
    "md" : "px-4 py-2",
    "sm" : "px-2 py-1",
}

const variants = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-400 text-white"
}

export function Button(props : ButtonInterface) {

    return <button className={sizeStyles[props.size] + " rounded-lg p-4 m-4 " + variants[props.variant]}>
        <div className="flex items-center ">
            <span className="text-xs">{props.startIcon}</span>
            <span className="pl-2 pr-2">{props.title}</span>
            <span className="text-xs">{props.endIcon}</span>
        </div>
        
    </button>
}

 