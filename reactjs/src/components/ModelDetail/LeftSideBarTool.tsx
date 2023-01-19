import React from 'react';
import { Icon } from '@iconify/react';
import ButtonIcon from '../commons/ButtonIcon';

import { useModelDetailStore } from '../../store/detailModelStore';
import ModelDetailHelper from './ModelDetailHelper';

export default function LeftSideBarTool() {
  const setBottomPartVisible = useModelDetailStore(
    (x) => x.setBottomPartVisible
  );

  const setRightPartVisible = useModelDetailStore((x) => x.setRightPartVisible);

  const bottomPartVisible = useModelDetailStore((x) => x.bottomPartVisible);
  const rightPartVisible = useModelDetailStore((x) => x.rightPartVisible);

  return (
    <div className=' z-[10] absolute left-0 top-0 w-[40px]  border-r border-gray-400 h-full flex flex-col items-center '>
      <ButtonIcon
        title='Tables'
        isSelected={rightPartVisible}
        onClick={() => {
          setRightPartVisible(!rightPartVisible);
          ModelDetailHelper.resizeForgeViewer();
        
        }}
      >
        <Icon
          icon='material-symbols:table'
          width='20'
          rotate={3}
          inline={true}
          color='#2F84C4'
          className='cursor-pointer'
        />
      </ButtonIcon>

      <ButtonIcon
        isSelected={bottomPartVisible}
        title='Gantt Chart'
        onClick={() => {
          setBottomPartVisible(!bottomPartVisible);
        }}
      >
        <Icon
          icon='material-symbols:insert-chart-outline-sharp'
          width='20'
          inline={true}
          color='#2F84C4'
          className='cursor-pointer'
        />
      </ButtonIcon>

      <ButtonIcon
        isSelected={bottomPartVisible}
        title='Add'
        onClick={() => {
          setBottomPartVisible(!bottomPartVisible);
        }}
      >
        <Icon
          icon='material-symbols:add'
          width='20'
          rotate={3}
          inline={true}
          color='#2F84C4'
          className='cursor-pointer'
        />
      </ButtonIcon>

      <ButtonIcon>
        <Icon
          icon='material-symbols:table-view'
          width='20'
          rotate={3}
          inline={true}
          color='#2F84C4'
          className='cursor-pointer'
        />
      </ButtonIcon>

      <ButtonIcon>
        <Icon
          icon='material-symbols:table-view'
          width='20'
          rotate={3}
          inline={true}
          color='#2F84C4'
          className='cursor-pointer'
        />
      </ButtonIcon>
    </div>
  );
}
