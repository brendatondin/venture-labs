import React from 'react'
import { useState } from 'react'
import S from './FormLast.module.css'

const FormLast = ({ dadosForm, handleChange, handleClick}) => {
    useState
    return (
        <form className={S.container}>

            <fieldset className={S.fieldset}>

                <label htmlFor="">Data de Nascimento</label>
                <input type="date"
                    value={dadosForm.data}
                    onChange={(e) => handleChange(e, 'data')} />

            </fieldset>

            <fieldset className={S.fieldset}>

                <label htmlFor="">CPF</label>
                <input type="text"
                    value={dadosForm.cpf}
                    onChange={(e) => handleChange(e, 'cpf')} />

            </fieldset>

            <fieldset className={S.fieldset}>

                <label htmlFor="">Renda</label>
                <input type="texto"
                    value={dadosForm.renda}
                    onChange={(e) => handleChange(e, 'renda')} />

            </fieldset>

            <button onClick={handleClick}>Salvar</button>
        </form>
    )
}


export default FormLast