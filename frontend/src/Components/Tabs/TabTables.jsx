// // // import Tab from 'react-bootstrap/Tab';
// // // import Tabs from 'react-bootstrap/Tabs';

// // // import TabelaMes from '../Atividade/TabelaMeses';

// // // function NoAnimationExample(props) {
// // //   return (
// // //     <Tabs
// // //       defaultActiveKey="janeiro"
// // //       transition={false}
// // //       id="noanim-tab-example"
// // //       className="mb-2"
// // //     >
// // //       <Tab eventKey="janeiro" title="Janeiro">
// // //         <TabelaMes listar={props.listJan}/>
// // //       </Tab>
// // //       <Tab eventKey="fevereiro" title="Fevereiro">
// // //       <TabelaMes listar={props.listFev}/>
// // //       </Tab>
// // //       <Tab eventKey="marco" title="Março">
// // //       <TabelaMes listar={props.listMar}/>
// // //       </Tab>
// // //       <Tab eventKey="abril" title="Abril">
// // //       <TabelaMes listar={props.listAbr}/>
// // //       </Tab>
// // //       <Tab eventKey="maio" title="Maio">
// // //       <TabelaMes listar={props.listMai}/>
// // //       </Tab>
// // //       <Tab eventKey="junho" title="Junho">
// // //       <TabelaMes listar={props.listJun}/>
// // //       </Tab>
// // //       <Tab eventKey="Julho" title="Julho">
// // //       <TabelaMes listar={props.listJul}/>
// // //       </Tab>
// // //       <Tab eventKey="agosto" title="Agosto">
// // //       <TabelaMes listar={props.listAgo}/>
// // //       </Tab>
// // //       <Tab eventKey="setembro" title="Setembro">
// // //       <TabelaMes listar={props.listSet}/>
// // //       </Tab>
// // //       <Tab eventKey="outubro" title="Outubro">
// // //       <TabelaMes listar={props.listOut}/>
// // //       </Tab>
// // //       <Tab eventKey="novembro" title="Novembro">
// // //       <TabelaMes listar={props.listNov}/>
// // //       </Tab>
// // //       <Tab eventKey="dezembro" title="Dezembro">
// // //       <TabelaMes listar={props.listDez}/>
// // //       </Tab>
// // //     </Tabs>
// // //   );
// // // }

// // import React from "react";
// // import cloneDeep from "lodash/cloneDeep";
// // import throttle from "lodash/throttle";
// // import Pagination from "rc-pagination";
// // import "rc-pagination/assets/index.css";
// // import "./estilo.css";


// // const tableHead = {
// //   name: "Campaign Name",
// //   parentId: "Campaign Id",
// //   campaignType: "Type",
// //   status: "Status",
// //   channel: "Channel",
// //   action: "Actions"
// // };

// // const allData = [
// //   {name: "A", parentId: 1, campaignType: "1234", status: "status", channel:"chaneç", action: "actions"},
// //   {name: "B", parentId: 2, campaignType: "1234", status: "status", channel:"chaneç", action: "actions"},
// //   {name: "C", parentId: 3, campaignType: "1234", status: "status", channel:"chaneç", action: "actions"},
// //   {name: "D", parentId: 4, campaignType: "1234", status: "status", channel:"chaneç", action: "actions"},
// //   {name: "1234", parentId: 5, campaignType: "1234", status: "status", channel:"chaneç", action: "actions"},
// //   {name: "6666", parentId: 6, campaignType: "1234", status: "status", channel:"chaneç", action: "actions"},
// //   {name: "1234", parentId: 7, campaignType: "1234", status: "status", channel:"chaneç", action: "actions"},
// // ]

// // const Table = () => {
// //   const countPerPage = 5;
// //   const [value, setValue] = React.useState("");
// //   const [currentPage, setCurrentPage] = React.useState(1);
// //   const [collection, setCollection] = React.useState(
// //     cloneDeep(allData.slice(0, countPerPage))
// //   );
// //   const searchData = React.useRef(
// //     throttle(val => {
// //       const query = val.toLowerCase();
// //       setCurrentPage(1);
// //       const data = cloneDeep(
// //         allData
// //           .filter(item => item.name.toLowerCase().indexOf(query) > -1)
// //           .slice(0, countPerPage)
// //       );
// //       setCollection(data);
// //     }, 400)
// //   );

// //   React.useEffect(() => {
// //     if (!value) {
// //       updatePage(1);
// //     } else {
// //       searchData.current(value);
// //     }
// //   }, [value]);

// //   const updatePage = p => {
// //     setCurrentPage(p);
// //     const to = countPerPage * p;
// //     const from = to - countPerPage;
// //     setCollection(cloneDeep(allData.slice(from, to)));
// //   };

// //   const tableRows = rowData => {
// //     const { key, index } = rowData;
// //     const tableCell = Object.keys(tableHead);
// //     const columnData = tableCell.map((keyD, i) => {
// //       return <td key={i}>{key[keyD]}</td>;
// //     });

// //     return <tr key={index}>{columnData}</tr>;
// //   };

// //   const tableData = () => {
// //     return collection.map((key, index) => tableRows({ key, index }));
// //   };

// //   const headRow = () => {
// //     return Object.values(tableHead).map((title, index) => (
// //       <td key={index}>{title}</td>
// //     ));
// //   };

// //   return (
// //     <>
// //       <div class="search">
// //         <input
// //           placeholder="Search Campaign"
// //           value={value}
// //           onChange={e => setValue(e.target.value)}
// //         />
// //       </div>
// //       <table>
// //         <thead>
// //           <tr>{headRow()}</tr>
// //         </thead>
// //         <tbody className="trhover">{tableData()}</tbody>
// //       </table>
// //       <Pagination
// //         pageSize={countPerPage}
// //         onChange={updatePage}
// //         current={currentPage}
// //         total={allData.length}
// //       />
// //     </>
// //   );
// // };
// // export default Table;


// import React from 'react';
// import { MDBDataTable } from 'mdbreact';

// const DatatablePage = (props) => {
//   const data = {
//     columns: [
//       {
//         label: 'Id',
//         field: 'id',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'OS',
//         field: 'OS',
//         sort: 'asc',
//         width: 270
//       },
//     //   {
//     //     label: 'Office',
//     //     field: 'office',
//     //     sort: 'asc',
//     //     width: 200
//     //   },
//     //   {
//     //     label: 'Age',
//     //     field: 'age',
//     //     sort: 'asc',
//     //     width: 100
//     //   },
//     //   {
//     //     label: 'Start date',
//     //     field: 'date',
//     //     sort: 'asc',
//     //     width: 150
//     //   },
//     //   {
//     //     label: 'Salary',
//     //     field: 'salary',
//     //     sort: 'asc',
//     //     width: 100
//     //   }
//     ],
//     rows: props.listFev
//   };

//   return (
//     <MDBDataTable
//       striped
//       bordered
//       small
//       data={data}
//     />
//   );
// }

// export default DatatablePage;