interface GanttTask {
  id: string;
  parentId: string | null;
  name: string;
  startDateString: string;
  startDate: Date;
  endDateString: string;
  endDate: Date;
  duration: number;
  left: number;
  top: number;
  width: number;
  revitId: string;
  isExpanded?: boolean;
  treePath?: Array<string>;
  childrenIds: Array<string> | null;
}

export default GanttTask;
