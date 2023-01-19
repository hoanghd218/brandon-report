
export default function PriceRenderer(props: any){
  const dataCost = {
    EquipmentCost: 0,
    LaborCost: 0,
    MaterialCost: 0,
    TotalCost: 0,
  };
  const data = props.BaseCodes ?? dataCost;
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
      <span className="text-sm">T.EQPMNT Cost :{data.EquipmentCost}</span>
      <span className="text-sm">T.MTRL Cost:{data.MaterialCost}</span>
      <span className="text-sm">T.LBR Cost :{data.LaborCost}</span>
      <span className="font-bold text-[#025F9A] text-sm">
        {" "}
        Total Cost :{data.TotalCost}{" "}
      </span>
    </div>
  );
}
