export default function coursesCard(props){
    return(
    <div className="text-red-600">
        <h1>{props.name}</h1>
        <h1>{props.code}</h1>
        <h1>{props.description}</h1>
    </div>)
}