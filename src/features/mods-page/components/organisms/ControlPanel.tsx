import ControlPanelButton from "@/components/molecules/ControlPanelButton";

export default function ControlPanel() {
  return (
    <div className="flex flex-col first:mt-2 px-1">
      <ControlPanelButton onClick={() => {console.log("Add mod!")}}>
        Add mod
      </ControlPanelButton>
      <ControlPanelButton onClick={() => {console.log("Add mod!")}}>
        Remove mod
      </ControlPanelButton>
    </div>
  );
}
