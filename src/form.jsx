import './form.css'
const Form = ({onformSubmit})=>{

    return (
        <>
        <form>
        <Input type="text" name="title" id="fortitle"/>
        <Input type="textarea" name="decsription" id="decription" />
        <Button type="submit" name="submit" submited = {onformSubmit}/>
        </form>
        </>
        
    )
     
}

const Input = ({type,name,id})=>{
    // const type = props.type
    // const name = props.name
    return (
        <p>
        <label htmlFor={id}>{name}</label>
        <br/>
        <input id={id} type={type}/>
        </p>
    )
    
}

const Button = ({type,name,submited}) =>{
    return <button type={type} onClick={submited}>{name}</button>
}

export default Form