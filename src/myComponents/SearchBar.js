import { SearchIcon } from "@/components/ui/icon";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";

const SearchBar = () => {
  const [value, setValue] = React.useState("");
  return (
    <View style={styles.container}>
      <Input
        size={"xl"}
        variant={"rounded"}
        isInvalid={false}
        isDisabled={false}
        style={styles.input}
      >
        <InputField
          onChangeText={(text) => setValue(text)}
          style={styles.inputField}
          value={value}
          placeholder={"Where to? \n Anywhere · Any Week · Add Guests"}
        />
        <InputSlot>
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  input: {
    padding: 10,
  },
  inputField: {
    fontSize: 16,
  },
  container: {
    padding: 10,
  },
});
