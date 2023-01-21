import Main from "../Template/Main";
import './EmBreve.css'

const HeaderProps = {
    icon: 'times',
    title: "Em Breve"
}

export default function EmBreve(){
    return(
        <Main {...HeaderProps}>
            <div className="btn-pisca col-12 d-flex justify-content-center display-1">Em Breve!</div>
        </Main>
    )
}