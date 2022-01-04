import React from 'react';
import { BugOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

export default function IconExample() {
  return (
    <>
      <BugOutlined />
      <Tooltip title='search'>
        <Button type='primary' shape='circle' icon={<BugOutlined />} />
      </Tooltip>
      <Button type='primary' shape='circle'>
        A
      </Button>
      <Button type='primary' icon={<BugOutlined />} loading>
        Search
      </Button>
      <Tooltip title='search'>
        <Button shape='circle' icon={<BugOutlined />} />
      </Tooltip>
      <Button icon={<BugOutlined />}>Search</Button>
      <br />
      <Tooltip title='search'>
        <Button shape='circle' icon={<BugOutlined />} />
      </Tooltip>
      <Button icon={<BugOutlined />}>Search</Button>
      <Tooltip title='search'>
        <Button type='dashed' shape='circle' icon={<BugOutlined />} />
      </Tooltip>
      <Button type='dashed' icon={<BugOutlined />}>
        Search
      </Button>
      <Button icon={<BugOutlined />} href='https://www.google.com' />
      <br />
      <br />
      <Tooltip title='search'>
        <Button
          type='primary'
          shape='circle'
          icon={<BugOutlined />}
          size='large'
        />
      </Tooltip>
      <Button type='primary' shape='circle' size='large'>
        A
      </Button>
      <Button type='primary' icon={<BugOutlined />} size='large'>
        Search
      </Button>
      <Tooltip title='search'>
        <Button shape='circle' icon={<BugOutlined />} size='large' />
      </Tooltip>
      <Button icon={<BugOutlined />} size='large'>
        Search
      </Button>
      <br />
      <Tooltip title='search'>
        <Button shape='circle' icon={<BugOutlined />} size='large' />
      </Tooltip>
      <Button icon={<BugOutlined />} size='large'>
        Search
      </Button>
      <Tooltip title='search'>
        <Button
          type='dashed'
          shape='circle'
          icon={<BugOutlined />}
          size='large'
        />
      </Tooltip>
      <Button type='dashed' icon={<BugOutlined />} size='large'>
        Search
      </Button>
      <Button
        icon={<BugOutlined />}
        size='large'
        href='https://www.google.com'
      />
    </>
  );
}
