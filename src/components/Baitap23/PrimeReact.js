// MyComponent.jsx
import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../../styles/PrimeReact.css'

const PrimeReact = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 3, name: 'Jane Doe', age: 30 },
    { id: 4, name: 'Jane Doe', age: 30 },
    { id: 5, name: 'Jane Doe', age: 30 },
  ];

  return (
    <div>
      <h1>Demo PrimeReact Components</h1>

      <Button label="Click Me" />

      <div style={{ marginTop: '20px' }}>
        <span>Input Text: </span>
        <InputText />
      </div>

      <Message severity="info" text="This is an info message." />

      <TabView>
        <TabPanel header="Tab 1">
          <p>Content of Tab 1</p>
        </TabPanel>
        <TabPanel header="Tab 2">
          <p>Content of Tab 2</p>
        </TabPanel>
      </TabView>

      <DataTable value={data}>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="age" header="Age"></Column>
      </DataTable>
    </div>
  );
};

export default PrimeReact;
