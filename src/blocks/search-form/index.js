import { registerBlockType } from "@wordpress/blocks";
import {
    useBlockProps,
    PanelColorSettings,
    InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import block from "./block.json";
import "./main.css";
import icons from "../../icons";

registerBlockType(block.name, {
    icon: icons.primary,
    edit({ attributes, setAttributes }) {
        const blockProps = useBlockProps();
        const { bgColor, textColor } = attributes;

        return (
            <>
                <InspectorControls>
                    <PanelColorSettings
                        title={__("Colors", "udemy-plus")}
                        colorSettings={[
                            {
                                label: __("Background Color", "udemy-plus"),
                                value: bgColor,
                                onChange: (newValue) =>
                                    setAttributes({ bgColor: newValue }),
                            },
                            {
                                label: __("Text Color", "udemy-plus"),
                                value: textColor,
                                onChange: (newValue) =>
                                    setAttributes({ textColor: newValue }),
                            },
                        ]}
                    />
                </InspectorControls>
                <div {...blockProps}>
                    <h1>Search: Your search term here</h1>
                    <form>
                        <input type="text" placeholder="Search" />

                        <div className="btn-wrapper">
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </>
        );
    },
});
