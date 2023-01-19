import { BimModelInfo } from './BimModelInfo';

export type AddBimModelRequest = {
  id?: string;
  projectId: string;
  name: string;
  status: number;
  isHasMetaData?: boolean;
  currentForgeModel: BimModelInfo;
};
