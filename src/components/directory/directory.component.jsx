import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
            {
                // CÚ PHÁP 1
                // this.state.sections.map(section => (
                //     <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
                // ))

                // Do các thuộc tính truyền cho component MenuItem được đặt tên trùng
                // với tên các thuộc tính trong đối tượng section nên có thể sử dụng
                // cú pháp 2 dựa trên Spread operator như sau:
                // CÚ PHÁP 2: Với cú pháp này, các property được tạo ra có cùng tên
                // với các thuộc tính trong từng phần tử của mảng sections
                this.state.sections.map(({id, ...otherSectionProperties}) => (
                    <MenuItem key={id} { ...otherSectionProperties } />
                ))
            }
            </div>
        );
    }
}

export default Directory;