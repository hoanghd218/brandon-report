import { Icon } from '@iconify/react';
import { Button } from 'antd';
import _, { xor } from 'lodash';
import moment from 'moment';
import { useEffect, useState, WheelEventHandler } from 'react';
import GanttTask from '../../../types/GanttTask';
import TaskItem from './TaskItem';
import BimGantt from '../../gantt/BimGantt';
import { gantt } from 'dhtmlx-gantt';

let isStop = true;
let indexTask = 0;

const BimModelGantt = (props: any) => {
  //effects

  const [currentZoom, setCurrentzoom] = useState('Days');
  const [messages, setMessages] = useState<Array<any>>([]);
  const [tasks, setTasks] = useState<Array<any>>([]);
  const [isRunningAnimation, setIsRunningAnimation] = useState(false);

  useEffect(() => {
    let datas = props.tasks.map((task: GanttTask) => ({
      id: task.id,
      text: task.name,
      start_date: task.startDate,
      duration: task.duration,
      progress: 0.6,
    }));

    setTasks(datas);
  }, [props.tasks]);

  async function handleAnimation() {
    setIsRunningAnimation(true);

    for (let index = indexTask; index < tasks.length; index++) {
      const task = tasks[index];
      indexTask = index;
      console.log('isStop in handle', isStop);
      if (isStop) {
        break;
      }

      gantt.selectTask(task.id);

      await timer(500);
    }
  }

  function timer(ms: any) {
    return new Promise((res) => setTimeout(res, ms));
  }

  const logDataUpdate = (type: any, action: any, item: any, id: any) => {
    let text = item && item.text ? ` (${item.text})` : '';
    let message = `${type} ${action}: ${id} ${text}`;
    if (type === 'link' && action !== 'delete') {
      message += ` ( source: ${item.source}, target: ${item.target} )`;
    }

    console.log('message', message);
    console.log('item', item);

    addMessage(message);
  };

  function addMessage(message: any) {
    const maxLogLength = 5;
    const newMessage = { message };
    const messages = [newMessage, ...this.state.messages];

    if (messages.length > maxLogLength) {
      messages.length = maxLogLength;
    }
    this.setState({ messages });
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='h-[60px] flex flex-row items-center justify-between ml-0 gap-2 bg-slate-200 flex-none'>
        <div className='flex flex-row items-center justify-start'>
          <div className='bg-white ml-2'>
            <Button
              type='text'
              className='h-full'
              onClick={() => {
                if (!gantt.getState().fullscreen) {
                  gantt.expand();
                } else {
                  gantt.collapse();
                }
              }}
            >
              <Icon
                icon='mdi:arrow-collapse-all'
                width={30}
                inline={true}
                color='#2F84C4'
                className='cursor-pointer'
              />
            </Button>

            <Button type='text' className='h-full'>
              <Icon
                icon='bi:zoom-in'
                width={30}
                inline={true}
                color='#2F84C4'
                className='cursor-pointer'
              />
            </Button>

            <Button type='text' className='h-full'>
              <Icon
                icon='bi:zoom-out'
                width={30}
                inline={true}
                color='#2F84C4'
                className='cursor-pointer'
              />
            </Button>
          </div>
          <Icon
            icon='radix-icons:divider-vertical'
            height='30'
            inline={true}
            color='#2F84C4'
            className='cursor-pointer'
          />
          <div className='bg-white'>
            <Button
              className='h-full'
              type='text'
              onClick={() => {
                console.log('isStop be for', isStop);
                isStop = !isStop;
                console.log('isStop after', isStop);

                if (isStop) {
                  setIsRunningAnimation(false);
                } else {
                  handleAnimation();
                }
              }}
            >
              <Icon
                icon={isRunningAnimation ? 'mdi:pause-box' : 'mdi:play-circle'}
                width={30}
                inline={true}
                color='#2F84C4'
                className='cursor-pointer'
              />
            </Button>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div className='bg-white mr-2 pb-0'>
            <Button type='text' className='h-full'>
              <Icon
                icon='material-symbols:auto-schedule'
                width={30}
                inline={true}
                color='#2F84C4'
                className='cursor-pointer'
              />
            </Button>

            <Button type='text' className='h-full'>
              <Icon
                icon='mdi:application-export'
                width={30}
                inline={true}
                color='#2F84C4'
                className='cursor-pointer'
              />
            </Button>
            <Button type='text' className='h-full'>
              <Icon
                icon='ion:duplicate'
                width={30}
                inline={true}
                color='#2F84C4'
                className='cursor-pointer'
              />
            </Button>

            <Button type='text' className='h-full'>
              <Icon
                icon='mdi:content-save'
                width={30}
                inline={true}
                color='#2F84C4'
                className='cursor-pointer'
              />
            </Button>

            <Button
              type='text'
              className='h-full'
              onClick={() => {
                gantt.scrollTo(2000, 2000);

                console.log('gantt', gantt);
                gantt.eachTask(function (task) {
                  console.log('task)', task);
                });
              }}
            >
              <Icon
                icon='material-symbols:settings'
                width={30}
                inline={true}
                color='#2F84C4'
                className='cursor-pointer'
              />
            </Button>
          </div>
        </div>
      </div>
      <div className=' grow'>
        <BimGantt
          onDataUpdated={logDataUpdate}
          zoom={currentZoom}
          tasks={tasks}
        />
      </div>
    </div>
  );
};

export default BimModelGantt;
