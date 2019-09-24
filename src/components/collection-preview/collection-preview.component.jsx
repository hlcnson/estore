import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';


// Component dạng hàm.
// Mỗi lần component được render, annonymous function sẽ được kích hoạt,
// nếu trong component có thao tác nạp lượng dữ liệu lớn sẽ làm ảnh hưởng
// đến tốc độ thực thi của ứng dụng.

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                // Lọc mảng items lấy 4 phần tử (collection).
                // Tiếp theo dùng toán tử hàm map để duyệt từng phần tử.
                // Sử dụng spread operator để tạo các thuộc tính cho component
                // con (CollectionItem)
                items.filter((item, index) => index<4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} { ...otherItemProps } />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;