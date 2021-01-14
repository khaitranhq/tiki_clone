exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('Categories').insert([
        {
          icon: 'mobile-phone',
          categoryName: 'Điện Thoại - Máy Tính Bảng'
        },
        {
          icon: 'monitor',
          categoryName: 'Điện Tử - Điện Lạnh'
        },
        {
          icon: 'headphones',
          categoryName: 'Phụ Kiện - Thiết Bị Số'
        },
        {
          icon: 'laptop',
          categoryName: 'Laptop - Thiết bị IT'
        },
        {
          icon: 'photo-camera',
          categoryName: 'Máy Ảnh - Quay Phim'
        },
        {
          icon: 'washing-machine',
          categoryName: 'Điện Gia Dụng'
        },
        {
          icon: 'pot',
          categoryName: 'Nhà Cửa Đời Sống'
        },
        {
          icon: 'spray',
          categoryName: 'Hàng Tiêu Dùng - Thực Phẩm'
        },
        {
          icon: 'feeding-bottle',
          categoryName: 'Đồ chơi, Mẹ & Bé'
        },
        {
          icon: 'lipstick',
          categoryName: 'Làm Đẹp - Sức Khỏe'
        },
        {
          icon: 'tshirt',
          categoryName: 'Thời trang - Phụ kiện'
        },
        {
          icon: 'basketball-ball',
          categoryName: 'Thể Thao - Dã ngoại'
        },
        {
          icon: 'motorbike',
          categoryName: 'Xe Máy, Ô tô, Xe Đạp'
        },
        {
          icon: 'internet',
          categoryName: 'Hàng quốc tế'
        },
        {
          icon: 'book',
          categoryName: 'Sách, VPP & Quà Tặng'
        },
        {
          icon: 'gift-voucher',
          categoryName: 'Voucher - Dịch Vụ - Thẻ Cào'
        }
      ]);
    });
};
