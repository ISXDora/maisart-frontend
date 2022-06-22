import { InputHTMLAttributes } from "react"
import { Input, Label } from "./style"

interface FieldFormProps {
  name: string
  input: InputHTMLAttributes<HTMLInputElement>;
}

export function FieldForm({name, input}: FieldFormProps){
  return (
    <>
      <div>
        <Label >{name}
          <Input {...input}
          />
        </Label>
      </div>
    </>
  )
  
}