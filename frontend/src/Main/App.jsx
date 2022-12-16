import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.min.js";
import "datatables.net-buttons/js/buttons.html5.min.js";
import"datatables.net-buttons/js/buttons.print.min.js";
import "../Explorer/dataTables.buttons.min.css";

import "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";
import "jszip/dist/jszip";

import React from 'react';
import Routes from './Routes';

export default function App() {
    return(
        <div className='app'>
            <Routes />
        </div>
    )
}
