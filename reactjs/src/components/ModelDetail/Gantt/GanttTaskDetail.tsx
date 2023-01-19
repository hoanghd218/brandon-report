import React from 'react';
import PropTypes from 'prop-types';
import { Input, DatePicker, InputNumber } from 'antd';

type GanttTaskDetailProps = {};

function GanttTaskDetail(props: GanttTaskDetailProps) {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div className='w-full'>
          <h5>Name :</h5>
          <Input type='text' v-model='task.name' className='w-full mt-1' />
        </div>

        <div className='w-full'>
          <h5>Start Date :</h5>
          <DatePicker v-model='task.startDate' className='w-full mt-1' />
        </div>

        <div className='w-full'>
          <h5>End Date :</h5>
          <DatePicker v-model='task.endDate' className='w-full mt-1' />
        </div>

        <div className='w-full'>
          <h5>Duration :</h5>
          <InputNumber className='w-full mt-1' />
        </div>
      </div>
    </div>
  );
}

GanttTaskDetail.propTypes = {};

export default GanttTaskDetail;
