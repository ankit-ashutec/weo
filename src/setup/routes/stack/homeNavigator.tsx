// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import {
//   Notifications,
//   EditProfile,
//   NewGroup,
//   Chat,
//   GroupDetails,
//   EditGroupDetails,
//   AddGroupMembers,
//   ForwardMessage,
//   Search,
// } from "@screens";
// import { NavigationNames } from "@utils/routeNames";
// import BottomTabStack from "../bottomTab/bottomTab";
// import { HomeNavigatorParamsList } from "../routes.types";
// import { TransitionPresets } from "@react-navigation/stack";
// import { Platform } from "react-native";

// const Stack = createStackNavigator<HomeNavigatorParamsList>();

// const HomeNavigator: React.FC = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName={NavigationNames.BottomTabStack}
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen
//         name={NavigationNames.BottomTabStack}
//         component={BottomTabStack}
//         options={{ headerShown: false, title: "" }}
//       />
//       <Stack.Screen
//         name={NavigationNames.Notifications}
//         component={Notifications}
//       />
//       <Stack.Screen
//         name={NavigationNames.EditProfile}
//         component={EditProfile}
//       />
//       <Stack.Screen name={NavigationNames.NewGroup} component={NewGroup} />
//       <Stack.Screen
//         name={NavigationNames.GroupDetails}
//         component={GroupDetails}
//       />
//       <Stack.Screen
//         name={NavigationNames.EditGroupDetails}
//         component={EditGroupDetails}
//       />
//       <Stack.Screen name={NavigationNames.ChatScreen} component={Chat} />
//       <Stack.Screen
//         name={NavigationNames.AddGroupMembers}
//         component={AddGroupMembers}
//       />
//       <Stack.Screen
//         name={NavigationNames.ForwardMessage}
//         component={ForwardMessage}
//       />
//       <Stack.Screen
//         name={NavigationNames.Search}
//         component={Search}
//         options={{
//           ...(Platform.OS === "ios"
//             ? TransitionPresets.ModalSlideFromBottomIOS
//             : TransitionPresets.BottomSheetAndroid),
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default HomeNavigator;
