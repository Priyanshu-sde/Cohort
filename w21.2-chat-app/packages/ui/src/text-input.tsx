interface PropType {
    placeholder: string;
}

export function TextInput ({
    placeholder
} : PropType) {
    return <input placeholder={placeholder} style={{

    }}></input>
}