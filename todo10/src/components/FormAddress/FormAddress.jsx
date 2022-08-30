import React from 'react'
import { useState } from 'react'
import S from './FormAddress.module.css'

const FormAddress = ({ dadosForm, handleChange, handleClick}) => {
    useState
    return (
        <form className={S.container}>

            <fieldset className={S.fieldset}>

                <label htmlFor="">CEP</label>
                <input type="text"
                    value={dadosForm.cep}
                    onChange={(e) => handleChange(e, 'cep')} />

            </fieldset>

            <fieldset className={S.fieldset}>

                <label htmlFor="">Endereço1</label>
                <input type="text"
                    value={dadosForm.endereco1}
                    onChange={(e) => handleChange(e, 'endereco1')} />

            </fieldset>

            <fieldset className={S.fieldset}>

                <label htmlFor="">Endereco2</label>
                <input type="texto"
                    value={dadosForm.endereco2}
                    onChange={(e) => handleChange(e, 'endereco2')} />

            </fieldset>

            <button onClick={handleClick}>Próximo</button>
        </form>
    )
}

export default FormAddress