import { Icon } from '@iconify/react';
import GanttTask from '../../../types/GanttTask';

type TaskItemProps = {
  item: GanttTask;
  rowHeight: number;
  index: number;
  topOffset: number;
  visible: boolean;
};

const defaultProps = {
  rowHeight: 40,
  topOffset: 0,
  visible: true,
};

const TaskItem = (props: TaskItemProps) => {
  function getLeftOffsetForTreeTaskName(task: GanttTask) {
    if (task.treePath) {
      return (task.treePath.length - 1) * 16;
    }
    return 0;
  }

  return (
    <tr className='row flex' style={{ height: props.rowHeight }}>
      <td className='border border-slate-300 flex-auto w-[260px] h-full'>
        <div
          className='flex flex-row justify-between items-center flex-auto h-full'
          style={{
            paddingLeft: `${getLeftOffsetForTreeTaskName(
              props.item
            )}px !important;`,
          }}
        >
          <div className='flex flex-row items-center'>
            <div className='w-[24px]'>
              <Icon
                onClick={() => {}}
                v-if='item.childrenIds'
                className='cursor-pointer'
                icon='ic:outline-expand-more'
                color='#2f84c4'
                width='24'
                height='24'
                //   :rotate="item.isExpanded == true ? 0 : 3"
              />
            </div>
            <p className='truncate cursor-pointer'> {props.item.name}</p>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <Icon
              icon='material-symbols:add-box'
              width='18'
              inline={true}
              color='#2F84C4'
              className='cursor-pointer'
            />
            <button>
              <Icon
                icon='ri:delete-bin-2-fill'
                width='18'
                inline={true}
                color='#EF4444'
                className='cursor-pointer'
              />
            </button>
          </div>
        </div>
      </td>
      <td
        className='border border-slate-300 flex-none'
        style={{ width: '120px', textAlign: 'center' }}
      >
        {props.item.startDateString}
      </td>
      <td
        className='border border-slate-300 flex-none'
        style={{ width: '70px', textAlign: 'center' }}
      >
        {props.item.duration}
      </td>
    </tr>
  );
};

TaskItem.defaultProps = defaultProps;

export default TaskItem;
