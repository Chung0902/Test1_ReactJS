import React, { useState } from 'react';
import {
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CAlert,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTable,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CModal,
  CModalHeader,
  CModalBody,
  CPagination,
} from '@coreui/react';

const CoreUI = () => {
  const [alertVisible, setAlertVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAlertDismiss = () => {
    setAlertVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="coreui-demo-component">
      <h2>CoreUI Demo Component</h2>

      {/* Button */}
      <CButton color="primary">Primary Button</CButton>

      {/* Form */}
      <CForm>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Tên người dùng</label>
          <input type="text" className="form-control" id="username" placeholder="Nhập tên người dùng" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mật khẩu</label>
          <input type="password" className="form-control" id="password" placeholder="Nhập mật khẩu" />
        </div>

        <CButton color="primary">Đăng nhập</CButton>
      </CForm>

      {/* Alert */}
      {alertVisible && (
        <CAlert color="info" onDismiss={handleAlertDismiss}>
          This is an info alert!
        </CAlert>
      )}

      {/* Tabs */}
      <CNav>
        <CNavItem>
          <CNavLink active>Tab 1</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink>Tab 2</CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane>Tab 1 Content</CTabPane>
        <CTabPane>Tab 2 Content</CTabPane>
      </CTabContent>

      {/* Table */}
      <CTable striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Data 3</td>
            <td>Data 4</td>
          </tr>
        </tbody>
      </CTable>

      {/* Dropdown */}
      <CDropdown>
        <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem>Action</CDropdownItem>
          <CDropdownItem>Another action</CDropdownItem>
          <CDropdownItem>Something else here</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>

      {/* Modal */}
      <CButton color="info" onClick={toggleModal}>
        Open Modal
      </CButton>
      <CModal show={modalVisible} onClose={toggleModal}>
        <CModalHeader closeButton>Modal Title</CModalHeader>
        <CModalBody>Modal Content</CModalBody>
      </CModal>

      {/* Pagination */}
      <CPagination
        activePage={1}
        pages={5}
        onActivePageChange={() => {}}
        align="center"
      />
    </div>
  );
};

export default CoreUI;
