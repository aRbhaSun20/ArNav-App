import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../../components/Background";
import Logo from "../../components/Logo";
import Header from "../../components/Header";

import { emailValidator, passwordValidator } from "../../core/utils";
import { Button, Center, Flex, Input, VStack } from "native-base";
import BackButton from "../../components/BackButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _onLoginPressed = () => {
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);

    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError });
    //   setPassword({ ...password, error: passwordError });
    //   return;
    // }

    navigation.navigate("Parent");
  };

  return (
    <Background space={4} style={{ gap: 10 }}>
      <BackButton goBack={() => navigation.navigate("Parent")} />

      <VStack space={2} style={{ width: "100%" }}>
        <Center>
          <Logo />
        </Center>

        <Header> Welcome back. to ARNAV</Header>

        <VStack space={2} style={{ width: "100%" }}>
          <Text style={{ fontWeight: "bold" }}>Email/User Name</Text>
          <Input
            mode="outlined"
            label="Email/User Name"
            style={{ width: "100%", height: 50 }}
            placeholder="Email/User Name"
          />
        </VStack>

        <VStack space={2} style={{ width: "100%" }}>
          <Text style={{ fontWeight: "bold" }}>Password</Text>
          <Input
            mode="outlined"
            label="Password"
            style={{ width: "100%", height: 50 }}
            placeholder="Password"
          />
        </VStack>

        <VStack space={1}>
          <Button onPress={() => _onLoginPressed()}>Login</Button>
          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
            >
              <Text style={styles.label}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </VStack>

        <Flex
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text>Don’t have an account? </Text>{" "}
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </Flex>
      </VStack>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    // color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    // color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
