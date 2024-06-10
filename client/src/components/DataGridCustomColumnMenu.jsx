import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  // Destructure the props to extract the necessary values
  const { hideMenu, currentColumn, open } = props;

  // Render the GridColumnMenuContainer
  return (
    <GridColumnMenuContainer
      // Set the hideMenu prop to hide the menu
      hideMenu={hideMenu}
      // Set the currentColumn prop to the current column
      currentColumn={currentColumn}
      // Set the open prop to the open state
      open={open}
    >
      // Render the GridFilterMenuItem
      <GridFilterMenuItem
        // Set the onClick prop to the hideMenu function
        onClick={hideMenu}
        // Set the column prop to the current column
        column={currentColumn}
      />
      // Render the HideGridColMenuItem
      <HideGridColMenuItem
        // Set the onClick prop to the hideMenu function
        onClick={hideMenu}
        // Set the column prop to the current column
        column={currentColumn}
      />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
