# BMI Calculator

BMI Calculator là một ứng dụng tính chỉ số BMI (Body Mass Index) sử dụng Capacitor, Vite và Yarn. Ứng dụng hỗ trợ các tính năng:

- Tính toán chỉ số BMI.
- Hiển thị thông báo cục bộ.
- Chia sẻ kết quả BMI.
- Chụp ảnh (tính năng bổ sung).

## Yêu cầu

- **Node.js**: v16 hoặc cao hơn
- **Yarn**: v1.22 hoặc cao hơn
- **Android Studio**: Để chạy trên Android (hoặc Xcode cho iOS)
- **Thiết bị thật hoặc giả lập Android/iOS**

## Cài đặt

### Clone repository

```bash
git clone <repository-url>
cd bmi-calculator
```

### Cài đặt dependency

```bash
yarn install
```

## Chạy ứng dụng

### Build dự án

```bash
yarn build
```

### Đồng bộ với Capacitor

```bash
npx cap sync
```

### Mở và chạy trên Android

```bash
npx cap open android
```

Sau đó, trong Android Studio, chọn thiết bị (giả lập hoặc thiết bị thật) và nhấn **Run**.

## Sử dụng

1. Nhập **chiều cao (cm)** và **cân nặng (kg)**.
2. Nhấn **"Tính BMI"** để xem kết quả.
3. Sử dụng **"Chia sẻ kết quả"** hoặc **"Chụp ảnh"** (nếu muốn).
