### Để thay đổi cổng mà project ReactJS hiện tại chạy, bạn có thể sử dụng file .env để cấu hình. Theo cách này, bạn không cần phải tắt project ReactJS khác đang chạy trên cổng 3000.

#### Dưới đây là các bước để cấu hình project ReactJS để chạy trên cổng 3008:

##### 1. Tạo hoặc mở file .env trong thư mục gốc của project ReactJS (cùng cấp với file package.json).

##### 2. Trong file .env, thêm dòng sau:

`PORT=3008`

Điều này đặt biến môi trường `PORT` thành giá trị 3008.

##### 3. Lưu file .env.

##### 4. Khởi động lại project ReactJS.

Sau khi hoàn tất các bước trên, project ReactJS của bạn sẽ chạy trên cổng 3008 thay vì cổng mặc định 3000.