import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { all } from "../../screenshot-options";

const LoremList = props => {
  return (
    <ul className={`c-List ${props.modifiers}`}>
      <li className="c-List-item">
        Tempor iaculis et neque imperdiet bibendum aliquam blandit at lobortis,
        quisque lacinia ligula fringilla hendrerit condimentum primis justo
        ornare, fermentum ac dictumst ipsum facilisis auctor tellus elit.
      </li>
      <li className="c-List-item">
        Litora adipiscing lectus sodales massa at diam facilisis maecenas eros
        vestibulum aliquam, posuere sed magna phasellus integer eleifend vitae
        gravida cras proin porttitor, suscipit dictumst ligula amet morbi risus
        cursus natoque nascetur luctus.
      </li>
      <li className="c-List-item">
        Lacinia tempus sociosqu per platea mattis tincidunt bibendum diam,
        sociis mollis libero dignissim accumsan fringilla natoque, nisl duis
        suscipit odio auctor viverra sed.
      </li>
      <li className="c-List-item">
        Diam feugiat platea fermentum lacus integer quisque torquent enim, lorem
        molestie rhoncus per laoreet tristique massa, placerat himenaeos luctus
        vehicula cum etiam semper.
      </li>
      <li className="c-List-item">
        Tempus sem conubia metus dignissim dictumst semper lacus ad, posuere
        class adipiscing felis ac elementum pretium vehicula, risus magnis
        tellus curabitur morbi justo eros.
      </li>
      <li className="c-List-item">
        Aliquam feugiat platea consectetur sodales suspendisse sociosqu
        curabitur dignissim, egestas dis risus eros pulvinar integer porttitor,
        blandit vivamus tellus massa eleifend potenti hendrerit.
      </li>
    </ul>
  );
};

storiesOf("Components/Atoms/List", module)
  .addDecorator(withScreenshot(all))
  .add("List", () => <LoremList modifiers="" />)
  .add("List--circled", () => <LoremList modifiers="c-List--circled" />)
  .add("List--circledNumbers", () => (
    <LoremList modifiers="c-List--circledNumbers" />
  ));
