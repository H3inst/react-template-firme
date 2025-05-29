import { createTheme, Modal, rem } from "@mantine/core";

const theme = createTheme({
  activeClassName: "",
  primaryColor: "orange",
  primaryShade: 8,
  defaultRadius: "md",
  black: "#212121",

  components: {
    Modal: Modal.extend({
      styles: {
        title: {
          fontWeight: "bold",
          fontSize: rem(22),
        },
      },
    }),
  },
});

export default theme;
