import React from 'react';
import ReactDOM from 'react-dom';
import GSAP from 'react-gsap-enhancer'; 
import SearchableTable from './SearchableTable';
import {data} from './data'; 
 
// Filterable CheatSheet Component
ReactDOM.render( <SearchableTable data={data}/>, document.getElementById('searchableTable') );