## Để chạy một project ReactJS trên một port khác mà không cần tắt project ReactJS hiện tại đang chạy trên port 3000, bạn có thể thực hiện các bước sau:

### 1. Mở terminal hoặc command prompt và di chuyển đến thư mục gốc của project ReactJS hiện tại.

### 2. Tìm và mở file package.json trong thư mục gốc của project ReactJS bằng trình soạn thảo văn bản.

### 3. Trong file package.json, tìm đến phần "scripts".

### 4. Tìm dòng "start": "react-scripts start" và sửa thành "start": "react-scripts start --port 3008".

 Đoạn mã sau --port xác định port mới mà bạn muốn sử dụng. Trong trường hợp này, chúng ta sử dụng port 3008. Bạn có thể thay đổi số port thành bất kỳ số nào khác mà bạn muốn.

### 5. Lưu và đóng file package.json.

### 6. Trở lại terminal hoặc command prompt, và chạy lệnh npm start để bắt đầu chạy project ReactJS trên port mới đã chỉ định.

Project ReactJS của bạn sẽ bắt đầu chạy trên port 3008 và không tương tác hoặc ghi đè lên project ReactJS khác đang chạy trên port 3000. Bạn có thể truy cập vào project ReactJS mới qua địa chỉ `http://localhost:3008`.