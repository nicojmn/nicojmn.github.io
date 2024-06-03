import lm from "./lightmode.svg";
import dm from "./darkmode.svg";
import gl from "./gitlab.svg";
import gh from "./github.svg";
import ghlight from "./github-light.svg";
import linkedin from "./linkedin.svg";


export const theme = {
    mode : {
        light_icon: lm,
        dark_icon: dm
    },
    icons: {
        gitlab: gl,
        github: {
            light: ghlight,
            dark: gh
        },
        linkedin: linkedin
    }
}
