import React from "react";
import { Table, Button, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { Person } from "../types/Person";

import edit from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import type { ColumnsType } from "antd/es/table";
import type { Breakpoint } from "antd";

interface PersonTableProps {
  persons: Person[];
  loading: boolean;
  pagination: {
    current: number;
    pageSize: number;
    total: number;
  };
  onDelete: (id: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onTableChange: (pagination: any) => void;
}

const PersonTable: React.FC<PersonTableProps> = ({
  persons,
  loading,
  pagination,
  onDelete,
  onTableChange,
}) => {
  const columns: ColumnsType<Person> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      responsive: ['md'] as Breakpoint[], 
    },
    {
      title: "Birth Date",
      dataIndex: "birthDate",
      key: "birthDate",
      responsive: ['md'] as Breakpoint[], 
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      responsive: ['md'] as Breakpoint[], 
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ['md'] as Breakpoint[], 
    },
    {
      title: "Actions",
      key: "actions",
      render: (_text: string, record: Person) => (
        <span className="flex space-x-2">
          <Link to={`/edit/${record.id}`}>
            <Button type="link">
              <img src={edit} alt="Edit" width={24} height={24} />
            </Button>
          </Link>
          <Popconfirm
            title="Are you sure you want to delete this person?"
            onConfirm={() => onDelete(record.id!)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link">
              <img src={deleteIcon} alt="Delete" width={24} height={24} />
            </Button>
          </Popconfirm>
        </span>
      ),
      responsive: ['md'] as Breakpoint[], 
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={persons}
      rowKey="id"
      pagination={pagination}
      loading={loading}
      onChange={onTableChange}
      className="w-full"
      expandable={{
        expandedRowRender: record => (
          <div className="text-sm space-y-2">
            <p><strong>Gender:</strong> {record.gender}</p>
            <p><strong>Birth Date:</strong> {record.birthDate}</p>
            <p><strong>Phone:</strong> {record.phone}</p>
            <p><strong>Email:</strong> {record.email}</p>
            <div className="flex space-x-2">
              <Link to={`/edit/${record.id}`}>
                <Button type="link">
                  <img src={edit} alt="Edit" width={24} height={24} />
                </Button>
              </Link>
              <Popconfirm
                title="Are you sure you want to delete this person?"
                onConfirm={() => onDelete(record.id!)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="link">
                  <img src={deleteIcon} alt="Delete" width={24} height={24} />
                </Button>
              </Popconfirm>
            </div>
          </div>
        ),
      }}
    />
  );
};

export default PersonTable;
