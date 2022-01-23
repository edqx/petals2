import { Block } from "../..";
import { ValueField } from "../../field/value";

export class KeyOptions extends Block {
  constructor(keyOption: string) {
    super("sensing_keyoptions");

    this.setKeyOption(keyOption);
  }

  setKeyOption(keyOption: string): this {
    this.setField("KEY_OPTION", new ValueField(keyOption));

    return this;
  }

  getKeyOption(): string {
    const field = this.getField("KEY_OPTION")!;

    if (!(field instanceof ValueField)) {
      throw new Error("KeyOptions KEY_OPTION field is not a value field");
    }

    return field.getValue() as string;
  }
}
