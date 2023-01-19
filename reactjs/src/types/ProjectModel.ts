import { AddBimModelRequest } from './Dtos/BimModelRequest';
export type ProjectModel = {
  id: string;
  name: string;
  projectType: string;
  laborType: number;
  zipCode: number;
  bimModelEntities: Array<AddBimModelRequest>;
};
