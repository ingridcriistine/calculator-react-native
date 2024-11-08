import React, { useState } from "react";
import { StyleSheet, Image, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";

import Row from "../components/row";
import Button from "../components/button";
import calculator, { initialState } from "../util/calculator";

export default function Calculator() {

  const [currentValue, setCurrentValue] = useState<string>("");
  const [cientificCalculator, setCientificCalculator] = useState<boolean>(false);

  function showNumbers({value}: {value:string}) {
    setCurrentValue(currentValue + value);
  }

  function handleCalculator(cientificCalculator : boolean) {
    if(cientificCalculator === false) {
      setCientificCalculator(true);
    }

    if(cientificCalculator === true) {
      setCientificCalculator(false);
    }
  }

  function calculate() {
    if (currentValue.includes("+")) {
      var operator = currentValue.split("+");
      // sum(operator);
    }
  }
  
  function sum({value} : {value:string}) {
    var operator = value.split("+");

    console.log(operator);
    
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
            {cientificCalculator ? (
              <Button
                text="x²"
                theme="accent"
                onPress={() => showNumbers({ value : "/" })}
              />
            ) : null}
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
            {cientificCalculator ? (
              <Button
                text="x³"
                theme="accent"
                onPress={() => showNumbers({ value : "/" })}
              />
            ) : null}
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
            {cientificCalculator ? (
              <Button
                text="√"
                theme="accent"
                style={styles.btn}
                onPress={() => showNumbers({ value : "/" })}
              />
            ) : null}
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
            {cientificCalculator ? (
              <Button
                text="π"
                theme="accent"
                style={{ display: cientificCalculator ? 'flex' : 'none' }}
                onPress={() => showNumbers({ value : "/" })}
              />
            ) : null}
          </Row>

          <Row>
            <TouchableOpacity style={styles.calculator} onPress={() => handleCalculator(cientificCalculator)}>
              <Image source={require("../assets/images/calculator.svg")} style={styles.img}/>
            </TouchableOpacity>
            <Button
              text="0"
              size="accent"
              style={styles.btn}
              onPress={() => showNumbers({ value : "0" })}
            />
            <Button text="." onPress={() => showNumbers({ value : "." })} />
            <Button
              text="="
              theme="accent"
              style={styles.btn}
              onPress={() => calculate()}
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
    width: 20,
    height: 20
  },
  img: {
    width: 50,
    height: 50,
  },
  calculator: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(50 + 30),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(50),
    margin: 5
  },
  btnC: {
    width: 20,
    height: 20
  }
});