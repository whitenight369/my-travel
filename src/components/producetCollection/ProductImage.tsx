import { Image, Typography } from 'antd';
import * as React from 'react';

interface IProductImageProps {
    id:string|number;
    size:'large'|'small',
    imageSrc:string;
    price:number|string;
    title:string
}

export const ProductImage: React.FunctionComponent<IProductImageProps> = ({id,imageSrc,price,title,size}) => {
  return <>
    {size=="large"?(<Image src={imageSrc} height={285} width={490}/>):
    <Image src={imageSrc} height={120} width={240}/>
    }
    <div>
        <Typography.Text type='secondary' >
            {title.slice(0,25)}
        </Typography.Text>
        <Typography.Text>
            ${price}起
        </Typography.Text>
    </div>
  </>;
};

