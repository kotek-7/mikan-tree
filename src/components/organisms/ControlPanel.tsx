import ControlPanelButton from "../molecules/ControlPanelButton";

export default function ControlPanel() {
  return (
    <div className="flex flex-col h-[80vh]">
      <ControlPanelButton>Create New</ControlPanelButton>
      <ControlPanelButton>Edit</ControlPanelButton>
      <div className="flex-grow"/>
      <ControlPanelButton>Change</ControlPanelButton>
      <ControlPanelButton>Remove</ControlPanelButton>
    </div>
  );
}
