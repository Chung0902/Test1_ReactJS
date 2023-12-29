import React from 'react';
import { Button, TextField, Alert, Tab, Tabs, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, MenuItem, Select, Modal } from '@mui/material';

const MaterialUI = () => {
  const [alertVisible, setAlertVisible] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleAlertDismiss = () => {
    setAlertVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="material-ui-demo-component">
      <h2>Material-UI Demo Component</h2>

      {/* Button */}
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Primary Button
      </Button>

      {/* TextField */}
      <TextField label="Username" variant="outlined" margin="normal" fullWidth />

      {/* Alert */}
      {alertVisible && (
        <Alert severity="info" onClose={handleAlertDismiss}>
          This is an info alert!
        </Alert>
      )}

      {/* Tabs */}
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        Tab 1 Content
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        Tab 2 Content
      </TabPanel>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Column 1</TableCell>
              <TableCell>Column 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell>Data 4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dropdown */}
      <Select label="Select">
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </Select>

      {/* Modal */}
      <Modal open={modalVisible} onClose={toggleModal}>
        <div>
          <h2>Modal Title</h2>
          <p>Modal Content</p>
        </div>
      </Modal>
    </div>
  );
};

// Custom TabPanel component for handling tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

export default MaterialUI;
