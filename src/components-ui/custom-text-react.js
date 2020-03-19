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

class ReactText extends React.PureComponent {
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
      var temp = (
        <FormGroup>
          <FormLabel style={text[key]["FormLabel"]["style"]}>
            {text[key]["FormLabel"]["value"]}
          </FormLabel>
          <TextInput
            style={text[key]["TextInput"]["style"]}
            placeholder={text[key]["TextInput"]["value"]}
          />
        </FormGroup>
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

ReactText = attach(["text"])(ReactText);
export default ReactText;
