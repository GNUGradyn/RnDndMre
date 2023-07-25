import { useDraggable } from "@mgcrea/react-native-dnd";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";

const DraggableComponent = ({ id, data, disabled }) => {
  const { offset, setNodeRef, activeId, setNodeLayout, draggableState } = useDraggable({
    id,
    data,
    disabled,
  });

  return (
    <Animated.View ref={setNodeRef} onLayout={setNodeLayout}>
      <View style={{width: 50, height: 50, backgroundColor:"green"}}>
      <Text>DRAG</Text>
      </View>
    </Animated.View>
  );
};

export default DraggableComponent;