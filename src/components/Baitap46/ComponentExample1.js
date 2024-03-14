import React from "react";
import { useToast } from "../../Hooks/useToast";
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 

const ExampleComponent = () => {
  const { showSuccessToast, showInfoToast, showWarningToast, showErrorToast } = useToast();

  const handleSuccess = () => {
    showSuccessToast("Success", "Operation completed successfully");
  };

  const handleInfo = () => {
    showInfoToast("Info", "This is an informative message");
  };

  const handleWarning = () => {
    showWarningToast("Warning", "Be cautious with this action");
  };

  const handleError = () => {
    showErrorToast("Error", "Something went wrong. Please try again");
  };

  return (
    <div>
      <Button onClick={handleSuccess} className="p-button-success">Show Success Toast</Button>
      <Button onClick={handleInfo} className="p-button-info">Show Info Toast</Button>
      <Button onClick={handleWarning} className="p-button-warning">Show Warning Toast</Button>
      <Button onClick={handleError} className="p-button-danger">Show Error Toast</Button>
    </div>
  );
};

export default ExampleComponent;
