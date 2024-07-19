export interface Person {
    id?: number;
    name: string;
    gender: 'MALE' | 'FEMALE' | 'OTHER';
    birthDate: string;
    phone: string;
    email: string;
  }