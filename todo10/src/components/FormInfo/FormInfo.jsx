import React from 'react'
import { useState } from 'react'
import S from './FormInfo.module.css'

const FormInfo = ({ dadosForm, handleChange, handleClick }) => {
    useState
    return (
        <form className={S.container}>

            <fieldset className={S.fieldset}>

                <label htmlFor="">Nome</label>
                <input type="text"
                    value={dadosForm.nome}
                    onChange={(e) => handleChange(e, 'nome')} />

            </fieldset>

            <fieldset className={S.fieldset}>

                <label htmlFor="">Sobremone</label>
                <input type="text"
                    value={dadosForm.sobrenome}
                    onChange={(e) => handleChange(e, 'sobrenome')} />

            </fieldset>

            <fieldset className={S.fieldset}>

                <label htmlFor="">Email</label>
                <input type="email"
                    value={dadosForm.email}
                    onChange={(e) => handleChange(e, 'email')} />

            </fieldset>

            <fieldset className={S.fieldset}>

                <label htmlFor="">Telefone</label>
                <input type="tel"
                    value={dadosForm.telefone}
                    onChange={(e) => handleChange(e, 'telefone')} />

            </fieldset>

            <button onClick={handleClick}>Próximo</button>
        </form>
    )
}

export default FormInfo