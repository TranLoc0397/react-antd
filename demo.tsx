import React from 'react';
import './index.css';
import { InputNumber, Space } from 'antd';

const onChange = (value: number | string) => {
  console.log('changed', value);
};

const App: React.FC = () => (
  <Space>
    <InputNumber
      defaultValue={1000}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => parseFloat(value!.replace(/\$\s?|(,*)/g, ''))}
      onChange={onChange}
      style={{ width: 200 }}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={(value) => `${value}%`}
      parser={(value) => value!.replace('%', '')}
      onChange={onChange}
    />
  </Space>
);

export default App;
