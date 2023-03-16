import { registerBlockType } from "@wordpress/blocks";
import block from "./block.json";
import icons from "../../icons";

registerBlockType(block.name, {
    icon: icons.primary,
    edit() {
        return <h1>Testteeee</h1>;
    },
});
