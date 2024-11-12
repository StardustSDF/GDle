import React, { useEffect, forwardRef, useState } from "react";
import { createUseStyles } from "react-jss";
import Container from "./Container";
import Move from "./Move";

interface TextProps {
    fontFamily?: string;
    letterSpacing?: string | number;
    children: React.ReactNode;
    color?: string;
    fontSize?: string | number;
    fontWeight?: "normal" | "bold" | "bolder" | "lighter";
    fontStyle?: "normal" | "italic" | "oblique";
    textJustification?: "left" | "center" | "right" | "justify";
    textDecoration?: "none" | "underline" | "overline" | "line-through";
    lineHeight?: string | number;
    containerWidth?: string | number;
    containerHeight?: string | number;
    outlineTransparent?: boolean;
    margin?: string;
    moveRight?: string;
    moveDown?: string;
    verticalAlign?: "top" | "middle" | "bottom";
    horizontalAlign?: "left" | "center" | "right";
    overflow?: "visible" | "hidden" | "scroll" | "auto";
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line" | "break-spaces";
    textOverflow?: "clip" | "ellipsis" | "string";
    textOutline?: string | number;
    gradientTop?: string;
    gradientBottom?: string;
    textShadow?: string;
    hoverInfoBox?: React.ReactNode; // Add this prop for hover content
}

const useStyles = createUseStyles({
    paragraph: (props: TextProps) => ({
        fontFamily: props.fontFamily || 'monospace',
        letterSpacing: props.letterSpacing || "normal",
        marginTop: props.margin || '1em',
        marginBottom: props.margin || '1em',
        fontSize: props.fontSize || "inherit",
        fontWeight: props.fontWeight || "normal",
        fontStyle: props.fontStyle || "normal",
        textAlign: props.textJustification || "left",
        textDecoration: props.textDecoration || "none",
        lineHeight: props.lineHeight || "1.5",
        overflow: props.overflow || "visible",
        whiteSpace: props.whiteSpace || "normal",
        textOverflow: props.textOverflow || "clip",
        WebkitTextStrokeWidth: props.textOutline || '2px',
        WebkitTextStrokeColor: 'black',
        background: props.gradientTop && props.gradientBottom
            ? `linear-gradient(${props.gradientTop}, ${props.gradientBottom})`
            : undefined,
        WebkitBackgroundClip: props.gradientTop && props.gradientBottom ? 'text' : undefined,
        color: props.gradientTop && props.gradientBottom ? 'transparent' : props.color || 'inherit',
        textShadow: props.textShadow || 'none',
        position: 'relative',
        cursor: props.hoverInfoBox ? 'pointer' : 'default',
    }),
    container: (props: TextProps) => ({
        display: 'flex',
        alignItems: (() => {
            switch (props.verticalAlign) {
                case 'middle':
                    return 'center';
                case 'bottom':
                    return 'flex-end';
                case 'top':
                default:
                    return 'flex-start';
            }
        })(),
        justifyContent: (() => {
            switch (props.horizontalAlign) {
                case 'center':
                    return 'center';
                case 'right':
                    return 'flex-end';
                case 'left':
                default:
                    return 'flex-start';
            }
        })(),
        height: '100%',
        width: '100%',
    }),
    hoverInfoBox: {
        position: 'absolute',
        top: '-1.5em', // adjust based on desired positioning
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#333',
        color: '#fff',
        padding: '0.5em',
        borderRadius: '5px',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 1000,
    },
});

const Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
    const classes = useStyles(props);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
    }, []);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const content = (
        <Move moveRight={props.moveRight} moveDown={props.moveDown}>
            <div
                className={classes.paragraph}
                ref={ref}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {props.children}
                {hovered && props.hoverInfoBox && (
                    <div className={classes.hoverInfoBox}>
                        {props.hoverInfoBox}
                    </div>
                )}
            </div>
        </Move>
    );

    return (
        <Container
            width={props.containerWidth}
            height={props.containerHeight}
            outlineTransparent={props.outlineTransparent}
            horizontalAlign={props.horizontalAlign}
            verticalAlign={props.verticalAlign}
        >
            <div className={classes.container}>
                {content}
            </div>
        </Container>
    );
});

export default Text;
