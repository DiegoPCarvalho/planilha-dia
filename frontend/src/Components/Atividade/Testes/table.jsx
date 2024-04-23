import React from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import axios from 'axios';
import Url from "../../Url/Url";
const baseUrl = Url("Geral");

const tableHead = {
  CLiente: "Cliente",
  id: "id",
  Equipamento: "Equip.",
  Modelo: "Modelo",
  Servico: "Serviço",
  NS: "NS"
};

const Table = () => {
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState([]);

  const searchData = React.useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        collection
          .filter((item) => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );

  async function list(){
    const tabelaNome = await axios(baseUrl).then(resp => resp.data)
    let dadoNome = []

    for (let i = 0; i < tabelaNome.length; i++) {
        if ((localStorage.usuario === tabelaNome[i].Tecnico) && (this.state.ano === tabelaNome[i].Ano) && (this.state.mes === tabelaNome[i].Mes)) {
            dadoNome.push(
                { ...tabelaNome[i] }
            )
        }
    }

   setCollection(dadoNome)
}

  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(collection.slice(from, to));
  };

  const tableRows = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    const columnData = tableCell.map((keyD, i) => {
      return <td key={i}>{key[keyD]}</td>;
    });

    return <tr key={index}>{columnData}</tr>;
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <>
      <div class="search">
        <input
          placeholder="Search Campaign"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>{headRow()}</tr>
        </thead>
        <tbody className="trhover">{tableData()}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={collection.length}
      />
    </>
  );
};
export default Table;
