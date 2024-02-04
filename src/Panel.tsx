import React, { ReactElement } from "react";
import { useStorybookApi, addons } from "@storybook/manager-api";
import { AddonPanel } from "@storybook/components";
import { RTLPanelContainer } from "./components/RTLPanelContainer/RTLPanelContainer";
interface PanelProps {
  active: boolean;
}

// export const Panel = (props: PanelProps): ReactElement => {
//   const oldChannel = addons.getChannel();
//   const api = useStorybookApi();

//   return (
//     <AddonPanel {...props}>
//       <RTLPanelContainer channel={oldChannel} api={api} />
//     </AddonPanel>
//   );
// };
