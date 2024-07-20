import React, { useState, useEffect } from "react";
import { Form, Input, Select, DatePicker, Button, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import api from "../services/api";
import { Person } from "../types/Person";
import { runes } from 'runes2';

const { Option } = Select;

const PersonForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchPerson(parseInt(id));
    }
  }, [id]);

  const fetchPerson = async (id: number) => {
    try {
      const response = await api.get(`/persons/${id}`);
      form.setFieldsValue({
        ...response.data,
        birthDate: moment(response.data.birthDate),
      });
    } catch (error) {
      message.error("Failed to fetch person");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const person: Person = {
        ...values,
        birthDate: values.birthDate.format("YYYY-MM-DD"),
      };
      if (id) {
        await api.put(`/persons/${id}`, person);
        message.success("Person updated successfully");
      } else {
        await api.post("/persons", person);
        message.success("Person created successfully");
      }
      navigate("/");
    } catch (error) {
      message.error("Failed to save person");
    }
    setLoading(false);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" className="p-4">
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input the name!" }]}
      >
        <Input
          className="md:w-[30rem] lg:w-[50rem]"
        />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please select the gender!" }]}
      >
        <Select>
          <Option value="MALE">Male</Option>
          <Option value="FEMALE">Female</Option>
          <Option value="OTHER">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="birthDate"
        label="Birth Date"
        rules={[{ required: true, message: "Please select the birth date!" }]}
      >
        <DatePicker className="w-full" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          { required: true, message: "Please input the phone number!" },
          { len: 11, message: "Phone number must be exactly 11 digits!" },
        ]}
      >
        <Input
        className="w-full"
        count={{
          show: true,
          max: 11,
          strategy: (txt) => runes(txt).length,
          exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join('')
        }} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please input the email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="block w-full mb-4" htmlType="submit" loading={loading}>
          {id ? "Update" : "Create"}
        </Button>

        <Button className="block w-full" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PersonForm;
