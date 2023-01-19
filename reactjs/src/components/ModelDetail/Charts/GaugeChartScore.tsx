import React from 'react';

import { useForgeStore } from '../../../store/forgeStore';

export default function GaugeChartScore() {
  const { scoreData } = useForgeStore();

  return (
    <div className='circle z-50 absolute px-2 ml-[40xp]'>
      <table>
        <tbody style={{ borderStyle: 'hidden' }}>
          <tr>
            <td>
              <div className='text-sm text-[#0575BC]'>
                <li>Score ({scoreData.score}% ) :</li>
              </div>
            </td>
            <td className='w-[57%] px-2'>
              <div className='w-[57%] bg-gray-200 rounded-full h-1 dark:bg-gray-700'>
                <div
                  className='bg-[#0575BC] h-1 rounded-full'
                  style={{ width: `${scoreData.score}%` }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='text-sm text-[#FF0000]'>
                <li>Levels ( {scoreData.totalLevels}% ) :</li>
              </div>
            </td>
            <td className='w-[57%] px-2'>
              <div className='w-[57%] bg-gray-200 rounded-full h-1 dark:bg-gray-700'>
                <div
                  className='bg-red-600 h-1 rounded-full dark:bg-red-500'
                  style={{ width: `${scoreData.totalLevels}%` }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='text-sm text-[#009C2B]'>
                <li>Assemblies ( {scoreData.totalAssembly}% ) :</li>
              </div>
            </td>
            <td className='w-[57%] px-2'>
              <div className='w-[57%] bg-gray-200 rounded-full h-1 dark:bg-gray-700'>
                <div
                  className='bg-green-600 h-1 rounded-full dark:bg-green-500'
                  style={{ width: `${scoreData.totalAssembly}%` }}
                ></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='text-sm text-[#FAB21E]'>
                <li>Struc Mtrl ( {scoreData.totalSTRMaterial}% ) :</li>
              </div>
            </td>
            <td className='w-[57%] px-2'>
              <div className='w-[57%] bg-gray-200 rounded-full h-1 dark:bg-gray-700'>
                <div
                  className='bg-yellow-400 h-1 rounded-full'
                  style={{ width: `${scoreData.totalSTRMaterial}%` }}
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
