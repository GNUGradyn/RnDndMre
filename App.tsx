import { DndProvider, DndProviderProps, Draggable, Droppable } from "@mgcrea/react-native-dnd";
import type { FunctionComponent } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { GestureHandlerRootView, State } from "react-native-gesture-handler";
import DraggableComponent from "./UseDraggableTest";

const App: FunctionComponent = () => {
  const handleDragEnd: DndProviderProps["onDragEnd"] = ({ active, over }) => {
    "worklet";
    if (over) {
      console.log("onDragEnd", { active, over });
    }
  };

  const handleBegin: DndProviderProps["onBegin"] = () => {
    "worklet";
    console.log("onBegin");
  };

  const handleFinalize: DndProviderProps["onFinalize"] = ({ state }) => {
    "worklet";
    console.log("onFinalize");
    if (state !== State.FAILED) {
      console.log("onFinalize");
    }
  };

  return (
    <SafeAreaView>
      <GestureHandlerRootView>
        <DndProvider onBegin={handleBegin} onFinalize={handleFinalize} onDragEnd={handleDragEnd}>
          <Droppable id="drop" style={styles.box}>
            <Text>DROP</Text>
          </Droppable>
          <DraggableComponent id="test"/>
        </DndProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 24,
    padding: 24,
    height: 128,
    width: 128,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkseagreen",
  },
});

export default App;