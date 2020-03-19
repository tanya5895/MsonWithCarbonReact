import React from "react";
import attach from "mson-react/lib/attach";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";
import { settings } from "carbon-components";

import { Grid } from "carbon-components-react-grid";
import "carbon-components-react-grid/build/grid.css";
import {
  Button,
  TextInput,
  FormLabel,
  Form,
  FormGroup,
  TextArea,
  SelectItem,
  Select,
  SelectItemGroup
} from "carbon-components-react";
import "./carbon-components.css";
import { Fragment } from "react";
import { display, width } from "@material-ui/system";
const { prefix } = settings;

class ReactText2 extends React.PureComponent {
  getDisplayStyle(item) {
    var display = item["visible"];
    console.log("display", display);
    return display;
  }

  render() {
    const buttonStyle = {
      width: "100px",
      align: "center"
    };

    const labelStyle = {
      width: "100px",
      align: "center",
      fontSize: "15px"
    };

    const inputStyle = {
      align: "center",
      fontSize: "15px"
    };

    const { text } = this.props;
    console.log("sdhvchjsvdkhfsvb", text);
    // const Form = <div></div>;
    var form = "";
    Object.keys(text).forEach(function(key) {
      console.log("element", text[key]);

      var temp = (
        <Form>
          <FormGroup style={{ backgroundColor: "#F5F1F1" }}>
            <FormLabel>{text[key]["FormLabel1"]["value"]}</FormLabel>

            <FormLabel style={{ marginLeft: "300px" }}>
              {text[key]["FormLabel3"]["value"]}
            </FormLabel>
            <Button
              style={{
                marginLeft: 100,
                marginRight: 30,
                backgroundColor: "#D5CECC",
                borderRadius: 20,

                width: "10px",
                fontSize: "12px",
                color: "black"
              }}
            >
              {text[key]["Button"]["value"]}
            </Button>
            <br></br>
            <FormLabel style={{ fontSize: "10px", color: "grey" }}>
              {text[key]["FormLabel2"]["value"]}
            </FormLabel>
          </FormGroup>
        </Form>
      );
      console.log("temp", temp);
      form = (
        <div>
          {form}
          {temp}
        </div>
      );
    });

    form = (
      <Form>
        {form}
        <Button kind="primary" tabIndex={0} type="submit">
          Submit
        </Button>
      </Form>
    );

    return <Fragment>{form}</Fragment>;
  }
}

ReactText2 = attach(["text"])(ReactText2);
export default ReactText2;
