import { useState } from "react";

const AppTextExpander = () => {
  return (
    <div className="px-20">
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
};

const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#0000ff",
  expanded = false,
  children,
}) => {
  const [isExpandedText, setIsExpandedText] = useState(true);
  const styleBox = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "7px",
    backgroundColor: "#f7f7f7",
  };

  const styleButton = {
    color: buttonColor,
    cursor: "pointer",
  };

  const displayText = isExpandedText
    ? `${children.split(" ", collapsedNumWords).join(" ")}...  `
    : children;
  return (
    // <div className="p-[10px] border-[10px] border-solid rounded-sm bg-slate-300">
    <div style={expanded ? styleBox : {}}>
      {displayText + "   "}
      <span
        style={styleButton}
        onClick={() => setIsExpandedText(!isExpandedText)}
      >
        {isExpandedText ? expandButtonText : collapseButtonText}
      </span>{" "}
    </div>

    // </div>
  );
};

export default AppTextExpander;
