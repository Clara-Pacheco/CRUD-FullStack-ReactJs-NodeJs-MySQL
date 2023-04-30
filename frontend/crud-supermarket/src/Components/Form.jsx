/* eslint-disable react/prop-types */
import { useRef } from 'react'

import { Container, InputArea, Label, Input } from './Form.js'

export function Form(){
  const ref= useRef()

  return (
    <Container ref={ref}>
      <InputArea>
        <Label>Id do produto</Label>
        <Input name="id" type='number' />
      </InputArea>

      <InputArea>
        <Label>Nome do Produto</Label>
        <Input name="nome" type='text' />
      </InputArea>

      <InputArea>
        <Label>Quantidade em Estoque</Label>
        <Input name="qtd" type='number' />
      </InputArea>

      <InputArea>
        <Label>Seção</Label>
        <Input name="secao" type='text' />
      </InputArea>


    </Container>
  )
}