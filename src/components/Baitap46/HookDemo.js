import React from "react"; 
import { Button } from "primereact/button";
import useToast from "../../Hooks/useToast";

export default function HookDemo() {
  // Sử dụng hook useToast để nhận một đối tượng toast chứa các phương thức hiển thị toast message
  const toast = useToast(); 

  return (
    <div className="card flex justify-content-center mt-5"> 
      <div className=" mx-auto " style={{ width: "auto" }}>
        <Button
          label="Success"
          className="p-button-success m-2" 
          onClick={() => toast.showSuccess("Added successfully!")} 
        />
      
        <Button
          label="Info"
          className="p-button-info m-2"
          onClick={() => toast.showInfo("Please note the following details.")} 
        />
       
        <Button
          label="Warn"
          className="p-button-warning m-2"
          onClick={() => toast.showWarn("Proceed with caution!!")} 
        />
      
        <Button
          label="Error"
          className="p-button-danger m-2"
          onClick={() => toast.showError("Failed to add data!")}
        />
      </div>
    </div>
  );
}
