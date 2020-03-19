export const customTextPage = {
  name: "app.CustomTextPage",
  component: "CustomText",
  text: {
    0: {
      FormLabel: { value: "First name", style: { visibility: "visible" } },
      TextInput: {
        value: "Eg:jhon",
        style: { visibility: "visible", width: "500px" }
      }
    },
    1: {
      FormLabel: { value: "Last name", style: { visibility: "visible" } },
      TextInput: {
        value: "Eg:Smith",
        style: { visibility: "visible", width: "500px" }
      }
    },
    2: {
      FormLabel: { value: "City", style: { visibility: "visible" } },
      TextInput: {
        value: "Eg:Bengaluru",
        style: { visibility: "visible", width: "500px" }
      }
    },
    3: {
      FormLabel: { value: "Phone number", style: { visibility: "visible" } },
      TextInput: {
        value: "Eg:+91 989355",
        style: { visibility: "visible", width: "500px" }
      }
    },
    4: {
      FormLabel: { value: "Email", style: { visibility: "visible" } },
      TextInput: {
        value: "Eg:jsmith@in.ibm.com",
        style: { visibility: "visible", width: "500px" }
      }
    },
    5: {
      FormLabel: { value: "address", style: { visibility: "visible" } },
      TextInput: {
        value: "egl",
        style: { visibility: "visible", width: "500px" }
      }
    }
  }
};

export const customRoute = {
  name: "app.CustomRoute",
  component: "CustomRoute",
  text: {
    0: {
      FormLabel1: {
        value: "Configure Passcode Policy",
        style: { visibility: "visible" }
      },
      FormLabel2: {
        value:
          "Select this option to enforce the use of a Passcode before using the mobile device.",
        style: { visibility: "visible" }
      },
      FormLabel3: { value: "Yes", style: { visibility: "visible" } },
      Button: { value: "Android 4.1+", style: { visibility: "visible" } }
    },
    1: {
      FormLabel1: {
        value: "Minimum Passcode Quality",
        style: { visibility: "visible" }
      },
      FormLabel2: {
        value:
          "Requires Android 5.0+ and Android App 6.05+ for restricting passcode quality to Numeric complex.",
        style: { visibility: "visible" }
      },
      FormLabel3: { value: "Numeric", style: { visibility: "visible" } },
      Button: { value: "Android 4.1+", style: { visibility: "visible" } }
    }
  }
};

// The main app component and the menu option
export const app = {
  name: "app.App",
  component: "App",
  menu: {
    component: "Menu",
    items: [
      {
        // The route to the custom text page
        path: "/custom-text",
        label: "Policy Form",
        heading: "Custom Components in MSON",
        content: {
          component: "app.CustomTextPage"
        }
      },
      {
        // The route to the custom text page
        path: "/custom-route",
        label: "Policy",
        heading: "Custom Components in MSON",
        content: {
          component: "app.CustomRoute"
        }
      }
    ]
  }
};
