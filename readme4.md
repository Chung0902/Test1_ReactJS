# Tìm Hiểu về Favicon trong Dự Án React

## Kích Thước Favicon:

Favicon thường có các kích thước tiêu chuẩn như sau:

- 16x16 pixels (đối với tabs của trình duyệt)
- 32x32 pixels (đối với bookmarks hoặc đánh dấu yêu thích)
- 48x48 pixels (có thể được sử dụng cho desktop shortcuts)
- 64x64, 128x128, 256x256 (được hỗ trợ bởi một số trình duyệt hiện đại cho các mục đích khác nhau)

## Kiểu File Favicon:

Favicon thường được lưu dưới dạng các kiểu file sau:

- .ico – Đây là định dạng truyền thống và được hỗ trợ bởi tất cả trình duyệt.
- .png hoặc .gif – Cũng được hỗ trợ bởi hầu hết các trình duyệt hiện đại và có thể hỗ trợ hiển thị hình ảnh trong suốt.
- .svg – Định dạng vector, ngày càng được nhiều trình duyệt hỗ trợ.

## Trong Dự Án React:

Trong một dự án React tạo ra bằng công cụ như Create React App, bạn thường sẽ thấy một file `favicon.ico` trong thư mục `public`. Để thay đổi favicon của dự án React của bạn, bạn có thể thực hiện theo các bước sau:

1. **Chuẩn Bị File Icon:**
   - Chuẩn bị một file icon với kích thước và kiểu file phù hợp, ví dụ `your-favicon.ico`.

2. **Đặt File Icon vào Thư Mục `public`:**
   - Đặt file icon vào thư mục `public` của dự án React.

3. **Cập Nhật Thẻ `<link>` trong `public/index.html`:**
   - Mở file `public/index.html` và cập nhật thẻ `<link>` như sau:

     ```html
     <link rel="icon" href="%PUBLIC_URL%/your-favicon.ico" />
     ```

     `%PUBLIC_URL%` là biến môi trường sử dụng để chỉ định URL công cộng của thư mục `public`.

4. **Khởi Động Lại Máy Chủ Phát Triển React:**
   - Khởi động lại máy chủ phát triển React (nếu đang chạy) để thay đổi có hiệu lực.

Lưu ý rằng việc cập nhật favicon có thể không ngay lập tức được phản ánh trong trình duyệt do cache. Bạn có thể cần xoá cache hoặc mở trang web trong chế độ ẩn danh (incognito mode) để xem thay đổi.
