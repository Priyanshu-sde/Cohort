export interface ButtonProps {
    variants:"primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void;
}

export const Button = (props: ButtonProps) => {
    return <button></button>
}

<Button variants="primary" size="md" onClick={() => {}} text="hellio" ></Button>