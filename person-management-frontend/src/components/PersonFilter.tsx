import React from "react";
import { Form, Input, Button } from "antd";

interface PersonFilterProps {
  onFilter: (values: { name: string; email: string }) => void;
}

const PersonFilter: React.FC<PersonFilterProps> = ({ onFilter }) => {
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    onFilter(values);
  };

  return (
    <div className="mb-4 w-full flex flex-col items-center justify-center">
      <Form form={form} onFinish={onFinish} className="flex flex-col md:flex-row md:space-x-4">
        <Form.Item name="name" className="flex-grow">
          <Input placeholder="Filter by name" />
        </Form.Item>
        <Form.Item name="email" className="flex-grow">
          <Input placeholder="Filter by email" />
        </Form.Item>
        <Form.Item className="flex-shrink-0">
          <Button type="primary" className="w-full" htmlType="submit">
            Filter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonFilter;
