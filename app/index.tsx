import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "../components/row";
import Button from "../components/button";
import calculator, { initialState } from "../util/calculator";

export default function Calculator() {

  const [currentValue, setCurrentValue] = useState<string>("");

  function showNumbers({value}: {value:string}) {
    setCurrentValue(currentValue + value);
  }

  
  function calculate({value} : {value:string}) {
    var operator = value.split("+-/*");
    
  }
  function clear() {
    setCurrentValue("");
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {currentValue}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              style={styles.btn}
              onPress={() => clear()}
            />
            <Button
              text="+/-"
              theme="secondary"
              style={styles.btn}
              onPress={() => showNumbers({ value : "+/-" })}
            />
            <Button
              text="%"
              theme="secondary"
              style={styles.btn}
              onPress={() => showNumbers({ value : "%" })}
            />
            <Button
              text="/"
              theme="accent"
              style={styles.btn}
              onPress={() => showNumbers({ value : "/" })}
            />
          </Row>

          <Row>
            <Button text="7" style={styles.btn} onPress={() => showNumbers({ value : "7" })} />
            <Button text="8" style={styles.btn} onPress={() => showNumbers({ value : "8" })} />
            <Button text="9" style={styles.btn} onPress={() => showNumbers({ value : "9" })} />
            <Button
              text="x"
              theme="accent"
              style={styles.btn}
              onPress={() => showNumbers({ value : "*" })}
            />
          </Row>

          <Row>
            <Button text="4" style={styles.btn} onPress={() => showNumbers({ value : "4" })} />
            <Button text="5" style={styles.btn} onPress={() => showNumbers({ value : "5" })} />
            <Button text="6" style={styles.btn} onPress={() => showNumbers({ value : "6" })} />
            <Button
              text="-"
              theme="accent"
              style={styles.btn}
              onPress={() => showNumbers({ value : "-" })}
            />
          </Row>

          <Row>
            <Button text="1" style={styles.btn} onPress={() => showNumbers({ value : "1" })} />
            <Button text="2" style={styles.btn} onPress={() => showNumbers({ value : "2" })} />
            <Button text="3" style={styles.btn} onPress={() => showNumbers({ value : "3" })} />
            <Button
              text="+"
              theme="accent"
              style={styles.btn}
              onPress={() => showNumbers({ value : "+" })}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              style={styles.btn}
              onPress={() => showNumbers({ value : "0" })}
            />
            <Button text="." onPress={() => showNumbers({ value : "." })} />
            <Button
              text="="
              theme="accent"
              style={styles.btn}
              onPress={() => calculate({ value : "=" })}
            />
          </Row>
        </SafeAreaView>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
  btn: {
  }
});