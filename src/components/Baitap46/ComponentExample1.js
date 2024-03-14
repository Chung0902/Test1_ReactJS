import React from "react";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { useToast } from "../../utils/useToast";

const ComponentExample = () => {
  const toastRef = useToast();

  const handleToast = (severity, summary, detail) => {
    toastRef.current.show({ severity, summary, detail, life: 3000, sticky: false });
  };

  return (
    <div>
      <Toast ref={toastRef} />

      <Button label="Success" className="p-button-success" onClick={() => handleToast("success", "Success", "Operation completed successfully")}>
        Show Success Toast
      </Button>
      <Button label="Info" className="p-button-info" onClick={() => handleToast("info", "Info", "This is an informative message")}>
        Show Info Toast
      </Button>
      <Button label="Warn" className="p-button-warning" onClick={() => handleToast("warn", "Warning", "Be cautious with this action")}>
        Show Warning Toast
      </Button>
      <Button label="Error" className="p-button-danger" onClick={() => handleToast("error", "Error", "Something went wrong. Please try again")}>
        Show Error Toast
      </Button>
    </div>
  );
};

export default ComponentExample;
