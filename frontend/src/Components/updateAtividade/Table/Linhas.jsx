import React from "react"
import { dataCorreta } from "../config"
import UseAppData from "../../../data/hook/UseAppData"

export default function Linhas(props) {
    const { deletar } = UseAppData();

    return props.list.map(registro => {
        return (
            <tr key={(registro.id)}>
                <td>{registro.id}</td>
                <td>{dataCorreta(registro.Data)}</td>
                <td>{registro.OS}</td>
                <td>{registro.Cliente}</td>
                <td>{registro.Equipamento}</td>
                <td>{registro.Modelo}</td>
                <td>{registro.NS}</td>
                <td>{registro.Servico}</td>
                <td className="d-flex justify-content-around p-3">
                    {registro.Estagio === '' ? (<div className="d-flex justify-content-around align-items-center">
                        <button className="btn btn-warning mx-2"
                        // onClick={() => load(registro)}
                        >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger mx-2"
                        // onClick={() => confirmar(registro)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                    ) : (
                        <div className="d-flex align-items-center">
                            <button className="btn btn-danger mx-2"
                                onClick={() => deletar(registro)}
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    )}
                </td>
            </tr>
        )
    })
}