import { useEffect, useState } from "react"
import { useReserveDataMutate } from "../../../hooks/useReserveDataMutate";
import { ReserveData } from "../../../interface/ReserveData";
import "./modal.css"

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any): void
}
interface ModalProps{
    closeModal(): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}>
            </input>
        </>
    )
}
export function CreateModal(){
    const [location, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess }= useReserveDataMutate();

    const submit = () => {
        const dataReserve: ReserveData = {
            location,
            price,
            image
        }
        mutate(dataReserve)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre uma nova reserva</h2>
                <form className="input-container">
                    <Input label="localização" value={location} updateValue={setTitle}/>
                    <Input label="valor" value={price} updateValue={setPrice}/>
                    <Input label="imagem" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">Adicionar</button>
            </div>
        </div>
    )
}