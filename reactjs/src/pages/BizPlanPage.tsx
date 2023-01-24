import { Card, Tabs, TabsProps } from "antd";
import BizPlanTable2 from "../components/BizPlans/BussinessPlan/BizPlanTable2";
import SFRStart from "../components/BizPlans/SRF-Starts/SFRStart";
export default function BizPlanPage() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Business Plan`,
      children: <BizPlanTable2 />,
    },
    {
      key: "2",
      label: `SFR Starts`,
      children: <SFRStart />,
    },
    {
      key: "3",
      label: `Expenses`,
      children: `Content of Tab Pane 3`,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="p-4 w-full">
      <Card className="w-full">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Card>
    </div>
  );
}
