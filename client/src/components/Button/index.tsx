interface Props{
    name: string;
    className: any;
    icon?: any;
    IconClassname?: any;
}

function Button(props: Props) {
    return (
    <button className={props?.className}>
        <img src={props?.icon} alt="" className={props?.IconClassname}/>
        {props?.name}
    </button>
)
}

export default Button;