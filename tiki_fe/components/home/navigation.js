import { Box } from '@material-ui/core';
import React from 'react';

const categories = [
  {
    title: 'Điện Thoại - Máy Tính Bảng',
    icon: 'mobile-phone'
  },
  {
    title: 'Điện Tử - Điện Lạnh',
    icon: 'monitor'
  },
  {
    title: 'Phụ Kiện - Thiết Bị Số',
    icon: 'headphones'
  },
  {
    title: 'Laptop - Thiết bị IT',
    icon: 'laptop'
  },
  {
    title: 'Máy Ảnh - Quay Phim',
    icon: 'photo-camera'
  },
  {
    title: 'Điện Gia Dụng',
    icon: 'washing-machine'
  },
  {
    title: 'Nhà Cửa Đời Sống',
    icon: 'pot'
  },
  {
    title: 'Hàng Tiêu Dùng - Thực Phẩm',
    icon: 'spray'
  },
  {
    title: 'Đồ chơi, Mẹ & Bé',
    icon: 'feeding-bottle'
  },
  {
    title: 'Làm Đẹp - Sức Khỏe',
    icon: 'lipstick'
  },
  {
    title: 'Thời trang - Phụ kiện',
    icon: 'tshirt'
  },
  {
    title: 'Thể Thao - Dã ngoại',
    icon: 'basketball-ball'
  },
  {
    title: 'Xe Máy, Ô tô, Xe Đạp',
    icon: 'motorbike'
  },
  {
    title: 'Hàng quốc tế',
    icon: 'internet'
  },
  {
    title: 'Sách, VPP & Quà Tặng',
    icon: 'book'
  },
  {
    title: 'Voucher - Dịch Vụ - Thẻ Cào',
    icon: 'gift-voucher'
  }
];

const Navigation = () => {
  const openSubCategories = () => {
    console.log('open');
  };

  return (
    <Box>
      {categories.map((category, key) => (
        <Box
          key={key}
          style={{ margin: '5px 0px', display: 'flex', flexDirection: 'row' }}
          onMouseOver={() => openSubCategories()}
        >
          <span
            className={`flaticon-${category.icon}`}
            style={{ marginRight: 10, fontSize: 20 }}
          ></span>
          <Box style={{ fontSize: 13, display: 'flex', alignItems: 'center' }}>
            {category.title}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
