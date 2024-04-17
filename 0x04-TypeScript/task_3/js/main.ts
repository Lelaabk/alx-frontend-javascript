// main.ts

// <reference path="./crud.d.ts"/>

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

//Create object called row with type RowElement
const row:RowElement = {
  firstName: 'Guillame',
  lastName: 'Salva'
}

// Insert new row and store returned ID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with age field
const updatedRow: RowElement = {...row, age: 23 };

// Call updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);