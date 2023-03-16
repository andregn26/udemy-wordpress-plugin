import { registerBlockType } from "@wordpress/blocks";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import block from "./block.json";
import "./main.css";

registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { content } = attributes;
        const blockProps = useBlockProps();
        // console.log("🚀 ~ file: index.js:11 ~ edit ~ blockProps:", blockProps);

        return (
            <div {...blockProps}>
                <RichText
                    className="fancy-header"
                    tagName="h2"
                    placeholder={__("Enter Heading", "udemy-plus")}
                    value={content}
                    onChange={(newVal) => setAttributes({ content: newVal })}
                    allowedFormats={["core/bold", "core/italic"]}
                />
            </div>
        );
    },
    save({ attributes }) {
        const { content } = attributes;
        const blockProps = useBlockProps.save({
            className: "fancy-header",
        });
        return (
            <RichText.Content {...blockProps} tagName="h2" value={content} />
        );
    },
});
