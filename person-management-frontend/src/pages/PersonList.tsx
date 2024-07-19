import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { Person } from '../types/Person';
import PersonFilter from '../components/PersonFilter';
import PersonTable from '../components/PersonTable';

const PersonList: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });
  const [filters, setFilters] = useState({ name: '', email: '' });

  const fetchPersons = async (page: number = 1, pageSize: number = 10) => {
    setLoading(true);
    try {
      const response = await api.get('/persons', {
        params: {
          page: page - 1,
          size: pageSize,
          name: filters.name,
          email: filters.email
        }
      });
      setPersons(response.data.content);
      setPagination({
        ...pagination,
        current: page,
        total: response.data.totalElements
      });
    } catch (error) {
      message.error('Failed to fetch persons');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPersons();
  }, [filters]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTableChange = (pagination: any) => {
    fetchPersons(pagination.current, pagination.pageSize);
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/persons/${id}`);
      message.success('Person deleted successfully');
      fetchPersons(pagination.current, pagination.pageSize);
    } catch (error) {
      message.error('Failed to delete person');
    }
  };

  return (
    <div className="w-full flex flex-col items-center p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Person List</h1>
      <Link to="/create">
        <Button type="primary" className="mb-4">Create New Person</Button>
      </Link>
      <PersonFilter onFilter={setFilters} />
      <PersonTable
        persons={persons}
        loading={loading}
        pagination={pagination}
        onDelete={handleDelete}
        onTableChange={handleTableChange}
      />
    </div>
  );
};

export default PersonList;
