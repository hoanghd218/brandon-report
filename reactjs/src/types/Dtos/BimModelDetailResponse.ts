import { BimModelInfo } from './BimModelInfo';

export type BimModelDetailResponse = {
  id: string;
  projectId: string;
  name: string;
  status: number;
  score: number;
  isHasMetaData?: boolean;
  currentForgeModel: BimModelInfo;
};
