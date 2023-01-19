import { Radio } from 'antd';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useForgeStore } from '../../../store/forgeStore';
import { Pie3D } from 'react-pie3d';
import colorList from '../../../utils/colorsList';
import ModelDetailHelper from '../ModelDetailHelper';

type CostBreakDownProps = {
  highlightElements: Function;
};

export default function CostChart(props: CostBreakDownProps) {
  const { revitElements } = useForgeStore();
  const [dicKeyIds, setDicKeyIds] = useState<any>();
  const [selectedType, setSelectedType] = useState<string>('material');
  const [dataChart, setDataChart] = useState<Array<any>>(new Array<any>());
  useEffect(() => {
    group();
  }, [selectedType]);

  const group = () => {
    let group = _.groupBy(revitElements, selectedType);
    let dicIdsByKey = {} as any;
    let datas = Object.keys(group).map((key, index) => {
      let name =
        _.isEmpty(key) || _.isNull(key) || key == 'undefined' || key == 'null'
          ? 'None'
          : key;

      dicIdsByKey[name] = group[key].map((x) => x.revitId.toString());

      let item = {
        value: group[key].length,
        label: name,
        color: colorList[index],
      };
      return item;
    });

    setDicKeyIds(dicIdsByKey);
    setDataChart(datas);
  };

  return (
    <div className=''>
      <div className='flex flex-row gap-8 items-center mb-2'>
        <p className='text-[#015990]'>Choose Group Type :</p>
        <div className='field-radiobutton mt-1 flex items-center justify-between'>
          <Radio.Group
            onChange={(e) => {
              setSelectedType(e.target.value);
            }}
            value={selectedType}
          >
            <Radio value='material'>Material</Radio>
            <Radio value='category'>Category</Radio>
            <Radio value='level'>Level</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className='  h-[calc(100vh-300px)]'>
        <Pie3D
          config={{
            angle: 60,
            height: 20,
            strokeWidth: 1,
            showTooltips: true,
            showLabels: true,
            showLabelPercentage: true,
            onClick: (e) => {
              let revitIds = dicKeyIds[dataChart[e].label];

              ModelDetailHelper.highlightItemsByIds(revitIds, true);
            },
          }}
          data={dataChart}
        />
      </div>
    </div>
  );
}
