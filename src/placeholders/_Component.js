module.exports = name => `// =============================================================================
// ${name}を表します。
// =============================================================================

.c-${name} {
  // Abstractions
  // ===========================================================================

  $_BlockName: &;
  $_fontSize: a-px2rem(16px);
  $_elementName-fontSize: a-px2rem(16px);
  $_elementName--elementModifierName-fontSize: a-px2rem(16px);
  $_--blockModifierName-bgColor: $a-color-primary;
  $_--blockModifierName-elementName-bgColor: $a-color-primary;
  content: "ここはこのファイル内のみで使用する変数・関数・ミックスインを定義します。プレフィックスとしてアンダースコアを付与してください。";

  // Block
  // ===========================================================================

  content: "ここはBEMのBlockに相当するスタイルを定義します。";

  // Elements
  // ===========================================================================

  &-elementName {
    content: "ここはBEMのElementに相当するスタイルを定義します。";

    &--elementModifierName {
      content: "ここはBEMのElementのModifierに相当するスタイルを定義します。";
    }
  }

  // Modifiers
  // ===========================================================================

  &--blockModifierName {
    content: "ここはBEMのBlockのModifierに相当するスタイルを定義します。";

    #{$_BlockName} {
      &-elementName {
        content: "ここはBEMのBlockのModifierのElementに相当するスタイルを定義します。";
      }
    }
  }
}
`;
