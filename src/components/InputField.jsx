

export default function InputField(props) {
    return (<>
        <input id={`${props.id}`} className={`${props.className}`} type={`${props.type}`} placeHolder={`${props.placeholder}`} />
    </>)
}
