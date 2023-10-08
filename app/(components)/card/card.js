export default function Card(props){
    return(
    <div className="bg-blue-500 text-lg font-bold h-48 mt-10">
        <h1 className="pt-10 flex justify-center text-2xl">{props.title}</h1>
        <h1 className="pb-10 pt-3 flex justify-center">{props.description}</h1>
    </div>)
}