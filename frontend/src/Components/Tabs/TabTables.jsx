import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//pages
import Usuarios from '../Admin/Usuarios';
import Equipamentos from '../Admin/Equipamento';
import Servico from '../Admin/Servico';
import Contrato from '../Admin/Contrato';
import Departamento from '../Admin/Departamento';
import Banco from '../Admin/Banco';

function TabAdmin(props) {
  return (
    <Tabs
      defaultActiveKey="janeiro"
      transition={true}
      id="noanim-tab-example"
      className="mb-2 bg-light"
      fill
      style={{fontWeight: "bold"}}
    >
      <Tab eventKey="Usuarios" title="Usuarios">
        <Usuarios />
      </Tab>
      <Tab eventKey="Equipamento" title="Equipamento">
        <Equipamentos />
      </Tab>
      <Tab eventKey="Serviço" title="Serviço">
        <Servico />
      </Tab>
      <Tab eventKey="Contrato" title="Contrato">
        <Contrato />
      </Tab>
      <Tab eventKey="Departamento" title="Departamento">
        <Departamento />
      </Tab>
      <Tab eventKey="Banco" title="Banco">
        <Banco />
      </Tab>
    </Tabs>
  );
}

export default TabAdmin;