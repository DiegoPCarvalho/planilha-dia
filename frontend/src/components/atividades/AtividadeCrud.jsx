import React from "react";
import Main from "../template/Main";
import Modal from "../modal/Modal";

const headerProps = {
    icon: 'newspaper-o',
    title: 'Atividade',
    subtitle: 'Lista de Atividades'
}

export default props =>
    <React.Fragment>
        <Main {...headerProps}>
            <Modal />
        </Main>
    </React.Fragment>

