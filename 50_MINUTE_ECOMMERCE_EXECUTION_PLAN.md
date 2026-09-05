# KẾ HOẠCH TÁC CHIẾN 50 PHÚT: XÂY DỰNG WEBSITE E-COMMERCE CHUẨN ĐIỂM A+
**Vai trò:** Senior E-Commerce Builder & Project Manager  
**Mục tiêu:** Quét sạch điểm trên phiếu đánh giá (Rubric) trong đúng 50 phút.  
**Nguyên tắc vàng:** *Không làm website đẹp hoàn hảo – Làm website có đầy đủ bằng chứng (evidence) để giám khảo tick điểm tối đa từng mục.*

---

## ⚡ PHÂN LOẠI NHIỆM VỤ: MUST / SHOULD / SKIP

| Cấp độ | Nhiệm vụ | Lý do chiến thuật |
| :--- | :--- | :--- |
| **MUST HAVE** *(Bắt buộc - Quyết định điểm số)* | • Dùng template e-commerce có sẵn (Shop / Store template)<br>• Logo góc trên bên trái (Top-Left)<br>• 1 Font chữ duy nhất, 1 bộ màu thương hiệu thống nhất<br>• Trang chủ đủ 8 block chuẩn UX & Trust<br>• 3–4 Sản phẩm (trong đó **1 sản phẩm bắt buộc có biến thể Variant: Size hoặc Màu**)<br>• Luồng mua hàng: Add to Cart $\rightarrow$ Cart $\rightarrow$ Checkout $\rightarrow$ **Thanh toán COD/Test** $\rightarrow$ Trang Cảm ơn (Thank You Page)<br>• 1 Video nhúng (Youtube/Vimeo) hoặc Video Loop ăn điểm "Active/Interactive"<br>• Trang About Us + Trang Contact (kèm form)<br>• 1 Bài viết Tin tức (News/Blog) có chèn Link nội bộ trỏ về sản phẩm<br>• SEO: 1 thẻ H1 duy nhất, đổi tên file ảnh + Alt text, URL sạch, Title & Meta<br>• Kiểm tra hiển thị Mobile (không vỡ nút, không tràn chữ) | Giám khảo nhìn thấy hoặc click vào kiểm tra trực tiếp. Thiếu 1 mục là mất điểm ngay. |
| **SHOULD HAVE** *(Làm nếu còn 3–5 phút)* | • Thanh thông báo trên cùng (Announcement Bar: Giảm giá/Freeship)<br>• Khối đánh giá khách hàng (Testimonials / 5 sao)<br>• Huy hiệu tin cậy (Trust badges: Cam kết 100% tự nhiên, Đổi trả 30 ngày) dưới nút Mua | Tăng tính chuyên nghiệp, ăn điểm cộng nếu bài thi chấm cảm quan thẩm mỹ. |
| **SKIP** *(BẪY THỜI GIAN - Tuyệt đối không chạm vào)* | ❌ Tích hợp cổng thanh toán thật (Stripe, Paypal, VNPAY) $\rightarrow$ *Tốn 15–20 phút xác thực, dễ lỗi; dùng COD là được duyệt.*<br>❌ Viết code tùy chỉnh (Custom CSS/JS)<br>❌ Tạo hơn 4 sản phẩm $\rightarrow$ *Giám khảo chỉ chấm tính năng, không đếm số lượng.*<br>❌ Mua tên miền riêng / Cấu hình DNS<br>❌ Hệ thống tài khoản / Đăng nhập / Tích điểm / Wishlist phức tạp<br>❌ Viết bài blog dài lê thê $\rightarrow$ *Chỉ cần 1 bài 3 câu để chứng minh tính năng.* | Mất từ 15–30 phút nhưng điểm số nhận về bằng 0. |

---

## 1. SƠ ĐỒ WEBSITE (SITEMAP)

Cấu trúc phẳng 5 trang hiển thị trên Menu + Luồng giao dịch tự động:

```text
HEADER MENU:
├── Trang chủ (/)
├── Cửa hàng (/shop)
│   └── Chi tiết sản phẩm (/products/nen-thom-lavender-organic)
├── Giới thiệu (/about)
├── Tin tức (/blog)
│   └── Bài viết: Mẹo sử dụng (/blog/huong-dan-dung-nen-thom)
├── Liên hệ (/contact)
└── [Biểu tượng Giỏ hàng]

CHÂN TRANG (FOOTER):
├── Về chúng tôi (Tóm tắt + Địa chỉ + Hotline)
├── Chính sách (Đổi trả, Giao hàng, Bảo mật)
└── Kênh mạng xã hội (Facebook, Instagram, TikTok)
```

---

## 2. DANH SÁCH TRANG & NHIỆM VỤ CHI TIẾT

| Tên trang | Đường dẫn (URL) | Nhiệm vụ bắt buộc để lấy điểm |
| :--- | :--- | :--- |
| **Trang chủ** | `/` | Logo góc trái, Hero banner + CTA, Video nhúng, Grid 4 sản phẩm, 3 cột USP tin cậy, Teaser About, Footer. |
| **Cửa hàng (Shop)** | `/shop` | Grid sản phẩm đồng đều kích thước ảnh (tỷ lệ 1:1), có hiển thị giá bán và nhãn Sale (Giảm giá). |
| **Chi tiết sản phẩm** | `/products/[slug]` | 2 ảnh sản phẩm có zoom, giá gốc gạch ngang + giá khuyến mãi, **bộ chọn Biến thể (Size/Màu)**, mô tả ngắn gạch đầu dòng, nút "Thêm vào giỏ hàng". |
| **Giới thiệu** | `/about` | Câu chuyện thương hiệu (1 đoạn), Cam kết chất lượng (3 gạch đầu dòng), 1 ảnh xưởng/đội ngũ nhân sự. |
| **Tin tức / Blog** | `/blog` | **Tạo đúng 1 bài viết ngắn** (ăn điểm mục News/Content), bên trong chèn 1 link trỏ về sản phẩm (ăn điểm Internal Linking). |
| **Liên hệ** | `/contact` | Form liên hệ hoạt động (Họ tên, Email, Lời nhắn), SĐT, Email hỗ trợ, bản đồ Google Map nhúng. |
| **Giỏ hàng (Cart)** | `/cart` | Bảng tóm tắt sản phẩm, nút tăng giảm số lượng (+/-), tính tổng tiền, nút "Tiến hành thanh toán". |
| **Thanh toán (Checkout)** | `/checkout` | Form điền thông tin tối giản, chọn phương thức **"Thanh toán khi nhận hàng (COD)"**. |
| **Xác nhận đơn hàng** | `/order-received` | Trang Cảm ơn hiện mã đơn hàng, tổng tiền, xác nhận đặt hàng thành công. |

---

## 3. THỨ TỰ CÁC KHỐI TRANG CHỦ (TỪ TRÊN XUỐNG DƯỚI)

1. **Top Announcement Bar:** *"Miễn phí vận chuyển toàn quốc cho đơn từ 300k \| Mã: WELCOME10"*
2. **Header (Đầu trang):**
   * **Logo:** Bắt buộc nằm **góc trên bên trái (Top-Left)**.
   * **Menu:** Trang chủ \| Cửa hàng \| Giới thiệu \| Tin tức \| Liên hệ.
   * **Phải:** Icon Giỏ hàng kèm số lượng sản phẩm.
3. **Hero Section (Quyết định 3 giây đầu tiên):**
   * **Thẻ H1:** Tên sản phẩm + Lời hứa thương hiệu (Ví dụ: *"Nến Thơm Organic Thủ Công – Không Gian Sống Thư Giãn"*).
   * 1 câu mô tả ngắn nêu bật giá trị cốt lõi.
   * Nút bấm CTA nổi bật: *"Khám Phá Cửa Hàng"* (Link trỏ sang `/shop`).
4. **Active / Interactive Section (Ăn điểm Tiêu chí 1: Short video/interactive):**
   * Nhúng 1 đoạn video ngắn 15–30s từ Youtube (tìm clip quay cận cảnh rót sáp nến / pha cà phê / may áo) hoặc video loop chạy nền tự động.
5. **Sản phẩm nổi bật (Featured Products):**
   * Grid 4 sản phẩm (1 hàng 4 cột trên desktop, 2 cột trên mobile). Ảnh vuông đồng bộ, giá rõ ràng, có nút *"Thêm vào giỏ"*.
6. **Thanh bảo chứng niềm tin (Trust & USP Pillars - Ăn điểm Tiêu chí 2):**
   * 3–4 biểu tượng (Icon):
     * *100% Thành phần Tự Nhiên (Chứng nhận An Toàn)*
     * *Đổi trả miễn phí trong 30 ngày*
     * *Giao hàng hỏa tốc toàn quốc*
7. **Trích dẫn câu chuyện (About Teaser):**
   * 1 ảnh phong cách sống + 2 câu giới thiệu nguồn gốc thương hiệu + Nút *"Về chúng tôi"* (Link sang `/about`).
8. **Đánh giá khách hàng (Social Proof):**
   * 2–3 ô phản hồi của khách hàng kèm icon 5 sao (Tạo niềm tin và tính xác thực).
9. **Chân trang (Footer):**
   * Cột 1: Logo + Thông tin công ty (Địa chỉ, Hotline, Email hỗ trợ).
   * Cột 2: Liên kết nhanh (Chính sách giao hàng, Đổi trả, Bảo mật).
   * Cột 3: Icon mạng xã hội có gắn link (Facebook, Instagram, TikTok) $\rightarrow$ **Ăn điểm Cross-channel**.
   * Dưới cùng: Dòng chứng nhận bảo mật (SSL Secure, Visa/Mastercard icons).

---

## 4. TÍNH NĂNG E-COMMERCE BẮT BUỘC (MẸO XỬ LÝ NHANH)

* **Số lượng sản phẩm:** Tạo **3–4 sản phẩm** (Đừng làm 10–20 cái).
  * **Sản phẩm 1 (Flagship):** Làm cực kỳ chỉn chu: 2 ảnh, mô tả ngắn, giá gốc gạch ngang + giá sale.
  * **Cài đặt Biến thể (Variants):** Bắt buộc làm trên sản phẩm flagship (Ví dụ: Size: *Hũ 100g - 150.000đ* và *Hũ 250g - 280.000đ*). Điều này chứng minh bạn nắm vững kiến thức quản lý SKU/Biến thể.
  * **Sản phẩm 2, 3, 4:** Dùng tính năng **"Duplicate" (Nhân bản)** của WooCommerce/Wix, chỉ sửa lại tên, giá và thay ảnh để tiết kiệm 10 phút.
* **Thanh toán (Thủ thuật cứu sinh 50 phút):**
  * Vào cài đặt Payment $\rightarrow$ Bật duy nhất **"Cash on Delivery (COD)"** hoặc **"Manual / Offline Payment"**.
  * Đổi tên hiển thị thành: *"Thanh toán khi nhận hàng / Test đơn hàng (COD)"*.
  * *Tác dụng:* Giám khảo hoặc bạn có thể điền thử thông tin và bấm đặt hàng thành công ngay lập tức để kiểm tra trang Cảm ơn mà không cần nhập thẻ ngân hàng.
* **Quy trình thanh toán:** Bật chế độ *"Guest Checkout"* (Cho phép mua hàng không cần đăng ký tài khoản) để rút ngắn thời gian test.

---

## 5. CHECKLIST ON-SITE SEO (XONG TRONG 5 PHÚT)

- [ ] **Tiêu đề website (Site Title):** Cấu trúc: `[Tên thương hiệu] | [Từ khóa chính]`  
  *(Ví dụ: Aura Naturals \| Nến Thơm Tinh Dầu Organic Cao Cấp)*
- [ ] **Mô tả Meta (Meta Description):** 140–150 ký tự cho Trang chủ và Sản phẩm Flagship:  
  *"Mua nến thơm organic cao cấp tại Aura Naturals. 100% sáp đậu nành tự nhiên, tinh dầu nguyên chất, an toàn cho sức khỏe. Đổi trả 30 ngày, ship toàn quốc."*
- [ ] **Cấu trúc thẻ H1/H2:**  
  * Trang chủ: Duy nhất **1 thẻ H1** tại Hero Banner.  
  * Các tiêu đề mục ("Sản phẩm bán chạy", "Vì sao chọn chúng tôi"): Đặt là **H2**.
- [ ] **Đường dẫn thân thiện (SEO Friendly URLs):**  
  * WordPress: Vào *Settings > Permalinks* $\rightarrow$ Chọn **Post name** (ra dạng `/cua-hang/nen-thom-lavender/`).
  * Wix: Tự động tạo slug chuẩn.
- [ ] **Tên file ảnh (Image Filenames):** Đổi tên file trên máy tính TRƯỚC KHI tải lên:  
  `nen-thom-lavender-organic.jpg` *(Tuyệt đối không để `IMG_0023.jpg`)*.
- [ ] **Thẻ Alt cho ảnh (Alt text):** Bấm vào từng ảnh sản phẩm, điền mô tả:  
  *Alt: "Hũ nến thơm tinh dầu lavender organic Aura Naturals"*
- [ ] **Liên kết nội bộ (Internal Linking):**
  * Nút Hero trỏ sang `/shop`.
  * Trong bài viết Blog, bôi đen 1 từ khóa và gắn link trỏ về sản phẩm Flagship.
  * Footer trỏ về `/about` và `/contact`.

---

## 6. CHECKLIST UI/UX & TRUST

- [ ] **Logo:** Nằm ở góc trên bên trái Header.
- [ ] **Typography:** Dùng **tối đa 1–2 font chữ** chuẩn web (Inter, Roboto, hoặc Playfair Display cho Tiêu đề + Open Sans cho Nội dung).
- [ ] **Màu sắc 60-30-10:**
  * 60% Nền: Trắng / Be nhạt sáng sủa.
  * 30% Nhận diện: 1 màu thương hiệu (Xanh lá rừng đậm `#2E4A3D` hoặc Nâu gỗ ấm).
  * 10% Nút bấm CTA: 1 màu tương phản nổi bần bật (Cam cháy, Vàng đồng, hoặc Xanh navy) xuyên suốt mọi trang.
- [ ] **CTA rõ ràng:** Trang chủ có nút "Mua ngay", trang chi tiết có nút "Thêm vào giỏ", màu sắc đồng bộ, bo góc đồng đều.
- [ ] **Kiểm tra giao diện Mobile (Mobile Preview):**
  * Bấm nút xem giao diện điện thoại: Header thu gọn thành menu Hamburger.
  * Chữ Hero không bị tràn màn hình.
  * Lưới sản phẩm hiển thị 2 cột hoặc 1 cột gọn gàng.
  * Nút "Thêm vào giỏ" to, ngón tay dễ bấm trúng.

---

## 7. LỊCH TRÌNH 50 PHÚT CHÍNH XÁC (TÍNH GIỜ THEO TỪNG PHÚT)

```
[00:00 - 05:00]  PHẦN 1: Khởi tạo, Template & Nhận diện thương hiệu
[05:00 - 15:00]  PHẦN 2: Cỗ máy E-Commerce (Sản phẩm, Biến thể & Cổng COD)
[15:00 - 28:00]  PHẦN 3: Dựng Trang chủ chuẩn Rubric & Video nhúng
[28:00 - 37:00]  PHẦN 4: Bộ trang niềm tin (About, Contact Form, 1 Bài Blog)
[37:00 - 43:00]  PHẦN 5: Tối ưu nhanh On-site SEO & Alt Text
[43:00 - 47:00]  PHẦN 6: Kiểm tra UI Mobile & Tinh chỉnh thẩm mỹ
[47:00 - 50:00]  PHẦN 7: Chạy thử toàn bộ luồng mua hàng (End-to-End Test) & Nộp bài
```

### ⏱ Phút 00:00 – 05:00: Cài đặt nền & Nhận diện
* Tạo site trên **Wix** (chọn Online Store template) HOẶC nếu dùng **WordPress**: kích hoạt theme Astra / Kadence, import Starter Template Store có sẵn.
* Đổi Title trang thành `[Tên thương hiệu] | [Từ khóa]`.
* Tải ảnh Logo lên Header góc trên bên trái. Chọn 1 font chữ và 1 màu chủ đạo.
* Tạo Menu chính: **Trang chủ \| Cửa hàng \| Giới thiệu \| Tin tức \| Liên hệ**.

### ⏱ Phút 05:00 – 15:00: Nhập sản phẩm & Bật thanh toán (TRỌNG TÂM ĐIỂM SỐ)
* Vào danh mục Sản phẩm:
  * **Sản phẩm 1 (Flagship):** Đặt tên chuẩn SEO, giá bán (có giá giảm), 2 ảnh đẹp. Tạo **Biến thể (Variant)**: Dung tích/Size (100g / 250g).
  * **Sản phẩm 2, 3, 4:** Bấm **Duplicate (Nhân bản)**, sửa nhanh tên, giá, đổi 1 ảnh khác.
* Vào Cài đặt Thanh toán (Payment Settings):
  * Bật phương thức **Cash on Delivery (COD)** hoặc **Manual Payment**. Đặt tên: *"Thanh toán khi nhận hàng (COD)"*.
* Bật tính năng cho phép Khách mua hàng không cần tạo tài khoản (Guest Checkout).

### ⏱ Phút 15:00 – 28:00: Dựng Trang chủ chuẩn 8 Khối
* **Hero Banner:** Nhập tiêu đề H1 + 1 câu giá trị + nút CTA dẫn đến `/shop`.
* **Khối Video / Interactive:** Chèn 1 khối Video nhúng link Youtube (15–30s) hoặc bật chế độ video nền chạy lặp.
* **Featured Products Grid:** Chọn hiển thị 4 sản phẩm vừa tạo.
* **Khối 3 USP Tin cậy:** Chèn 3 icon (100% Tự nhiên, Miễn phí ship, Đổi trả 30 ngày).
* **Khối About Teaser & Testimonials:** 2 câu giới thiệu ngắn và 2 đánh giá giả định 5 sao.
* **Footer:** Điền địa chỉ, hotline, gắn link mạng xã hội (Facebook, Instagram, TikTok).

### ⏱ Phút 28:00 – 37:00: Dựng các trang Tín nhiệm & Nội dung
* **Trang Giới thiệu (/about):** 1 ảnh xưởng/đội ngũ + 2 đoạn ngắn về sứ mệnh và cam kết chất lượng sản phẩm.
* **Trang Liên hệ (/contact):** Chèn Form liên hệ (Tên, Email, Lời nhắn) + Số điện thoại + Nhúng 1 khung bản đồ Google Map.
* **Trang Tin tức (/blog):** Đăng **1 bài viết mẫu duy nhất** (Ví dụ: *"3 Mẹo Giúp Nến Thơm Tỏa Hương Lâu Hơn"*), chèn 1 link nội bộ trỏ về sản phẩm Flagship.

### ⏱ Phút 37:00 – 43:00: Tốc chiến SEO On-site
* Kiểm tra Trang chủ: Đảm bảo tiêu đề Hero là thẻ **H1** duy nhất; các mục bên dưới là thẻ **H2**.
* Điền **Meta Description** cho Trang chủ và Sản phẩm Flagship (140 ký tự).
* Kiểm tra 3 ảnh chính: Đổi tên file chuẩn và điền thẻ **Alt Text** chứa từ khóa.
* Kiểm tra URL: Đảm bảo link không chứa ký tự lạ (VD: `/cua-hang/nen-thom-lavender`).

### ⏱ Phút 43:00 – 47:00: Kiểm tra Mobile & Hoàn thiện UI/UX
* Mở chế độ xem **Mobile Preview**:
  * Kiểm tra Menu hamburger đóng mở mượt mà.
  * Cỡ chữ Hero không che mất ảnh, không tràn lề.
  * Nút "Mua ngay" và "Thêm vào giỏ" to rõ, dễ bấm trên điện thoại.
* Kiểm tra màu sắc: Đảm bảo tất cả các nút CTA đều có cùng 1 màu nổi bật.

### ⏱ Phút 47:00 – 50:00: Test luồng mua hàng thực tế & Xuất xưởng
* Bấm **Publish (Xuất bản)** website.
* Mở trình duyệt ở chế độ **Ẩn danh (Incognito)** đóng vai trò là giám khảo chấm bài:
  1. Vào Trang chủ $\rightarrow$ Bấm nút "Khám Phá Cửa Hàng" sang trang Shop.
  2. Bấm vào sản phẩm Flagship $\rightarrow$ Chọn biến thể (Size 250g) $\rightarrow$ Bấm "Thêm vào giỏ".
  3. Mở Giỏ hàng $\rightarrow$ Bấm "Tiến hành thanh toán".
  4. Điền thông tin khách hàng mẫu $\rightarrow$ Chọn "Thanh toán khi nhận hàng (COD)".
  5. Bấm "Đặt hàng" $\rightarrow$ **Đảm bảo trang Cảm ơn (Order Confirmation) hiển thị mã đơn hàng thành công.**
* Copy đường link website chính thức sẵn sàng nộp bài.

---

## 8. BỘ TÀI NGUYÊN "COPY - PASTE" CỨU SINH (DÙNG NGAY NẾU CHƯA CÓ NỘI DUNG)

Nếu bạn chưa kịp chuẩn bị nội dung, hãy copy ngay bộ mẫu này cho thương hiệu **Nến Thơm / Mỹ Phẩm Organic**:

* **Tên thương hiệu:** Aura Naturals
* **Site Title:** `Aura Naturals | Nến Thơm Organic & Tinh Dầu Thiên Nhiên`
* **Headline H1 (Trang chủ):** `Nến Thơm Organic Thủ Công – Đánh Thức Mọi Giác Quan`
* **Sub-headline:** `Được làm từ 100% sáp đậu nành nguyên chất và tinh dầu tự nhiên, mang lại không gian thư giãn tuyệt đối cho ngôi nhà của bạn.`
* **Nút CTA:** `Khám Phá Cửa Hàng`
* **3 Cột USP:**
  1. `100% Sáp Đậu Nành`: Không khói độc, thân thiện môi trường, an toàn cho trẻ nhỏ.
  2. `Giao Hàng Toàn Quốc`: Miễn phí vận chuyển cho đơn từ 300.000đ.
  3. `Cam Kết Hài Lòng`: Đổi trả 1-1 miễn phí trong 30 ngày nếu có lỗi sáp hoặc bể vỡ.
* **Sản phẩm Flagship:**
  * *Tên SP:* `Nến Thơm Sáp Đậu Nành Lavender Calm Aura Naturals`
  * *Giá:* Giá gốc `350.000đ` – Giá khuyến mãi `280.000đ`.
  * *Biến thể (Variant):* `Size Hũ 100g (Thời gian cháy 25h)` và `Size Hũ 250g (Thời gian cháy 60h) [+100.000đ]`.
  * *Mô tả ngắn:* `Nến thơm hương hoa oải hương dịu nhẹ kết hợp gỗ tuyết tùng. Giúp giảm căng thẳng sau ngày làm việc mệt mỏi, hỗ trợ giấc ngủ sâu.`
  * *Alt Text ảnh:* `Hũ nến thơm organic lavender calm Aura Naturals nguyên chất`
* **Bài viết Blog mẫu (1 bài 3 câu):**
  * *Tiêu đề:* `Cách Đốt Nến Thơm Đúng Cách Để Sử Dụng Được Lâu Nhất`
  * *Nội dung:* `Để nến thơm không bị lõm mặt sáp, hãy luôn đốt nến liên tục ít nhất 2 tiếng trong lần đầu tiên. Luôn cắt bấc nến còn khoảng 0.5cm trước khi châm lửa để hạn chế khói đen. Đừng quên trải nghiệm dòng nến thơm thư giãn [Nến Thơm Lavender Calm] bán chạy nhất của chúng tôi để cảm nhận sự khác biệt!` *(Gắn link sản phẩm vào cụm chữ trong ngoặc)*.
* **Nội dung Giới thiệu (About Us - 3 câu):**
  * `Aura Naturals khởi đầu từ tình yêu với liệu pháp mùi hương và lối sống thuận tự nhiên. Mỗi hũ nến của chúng tôi đều được rót thủ công từ sáp thực vật hữu cơ và tinh dầu thuần khiết nhất. Chúng tôi cam kết mang lại sự an lành, minh bạch về nguồn gốc và tôn trọng sức khỏe của gia đình bạn.`
* **Thông tin Liên hệ (Contact):**
  * *Địa chỉ:* Số 123 Đường Cầu Giấy, Hà Nội.
  * *Hotline:* 0987 654 321
  * *Email:* hotro@auranaturals.vn
  * *Mạng xã hội:* facebook.com/auranaturals | instagram.com/auranaturals
