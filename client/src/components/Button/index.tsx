interface Props{
    name: string;
}

function Button(props: Props) {
    return (
    <button className="w-40 bg-white rounded-full p-2 font-bold text-[1.5rem] ml-10 mt-4 tracking-widest">
        {props?.name}
    </button>
)
}

export default Button;