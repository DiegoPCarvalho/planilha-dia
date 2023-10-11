import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Formulario from '../Atividade/FormularioPage/Formulario';
import Tabela from '../Atividade/TabelaPage/Tabela';
import './TabAtividade.css'

//pages

function TabAtividade(props) {
  return (
    <Tabs
      defaultActiveKey="Formulario"
      transition={true}
      id="fill-tab-example"
      className="mb-2 bg-secondary rounded-start rounded-end"
      variant="pills"
      fill
      style={{fontWeight: "bold", padding: '10px'}}
    >
      <Tab eventKey="Formulario" title="Formulario">
        <Formulario />
      </Tab>
      <Tab eventKey="Tabela" title="Tabela">
        <Tabela/>
      </Tab>
      <Tab eventKey="Relatorio" title="Relatorio">
      </Tab>
    </Tabs>
  );
}

export default TabAtividade;