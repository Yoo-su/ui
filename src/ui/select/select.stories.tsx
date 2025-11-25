/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "./index";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Select Component

Compound Component 패턴으로 구현된 Select 컴포넌트입니다.

## 구조
- **Select**: Root 컴포넌트. 상태 관리 및 Context 제공.
- **Select.Trigger**: 드롭다운을 여는 버튼. 선택된 값을 표시.
- **Select.Content**: 옵션 목록을 담는 컨테이너.
- **Select.Item**: 개별 옵션 항목.
- **Select.Label**: 접근성을 위한 라벨.

## 주요 기능
- **키보드 네비게이션**: 방향키(위/아래)로 이동, Enter/Space로 선택, ESC로 닫기.
- **접근성(A11y)**: ARIA 속성(role, aria-expanded, aria-activedescendant 등) 지원.
- **자동 포커스**: 메뉴 열림 시 현재 선택된 항목 또는 첫 번째 항목으로 포커스 이동.
- **외부 클릭 감지**: 메뉴 외부 클릭 시 닫힘.
`,
      },
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "컴포넌트 비활성화 여부",
    },
    value: {
      control: "text",
      description: "현재 선택된 값 (Controlled)",
    },
    onChange: {
      action: "changed",
      description: "값 변경 시 호출되는 콜백",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/**
 * 기본 사용 예시입니다.
 */
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="size-[300px]">
        <Select {...args} value={value} onChange={setValue}>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="apple">사과</Select.Item>
            <Select.Item value="banana">바나나</Select.Item>
            <Select.Item value="orange">오렌지</Select.Item>
            <Select.Item value="grape">포도</Select.Item>
          </Select.Content>
        </Select>
      </div>
    );
  },
};

/**
 * 라벨이 있는 경우의 예시입니다.
 */
export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div className="size-[300px]">
        <Select {...args} value={value} onChange={setValue}>
          <Select.Label>좋아하는 과일</Select.Label>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="apple">사과</Select.Item>
            <Select.Item value="banana">바나나</Select.Item>
            <Select.Item value="orange">오렌지</Select.Item>
          </Select.Content>
        </Select>
      </div>
    );
  },
};

/**
 * 미리 선택된 값이 있는 경우입니다.
 */
export const PreSelected: Story = {
  render: (args) => {
    const [value, setValue] = useState("banana");
    return (
      <div className="size-[300px]">
        <Select {...args} value={value} onChange={setValue}>
          <Select.Label>좋아하는 과일</Select.Label>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="apple">사과</Select.Item>
            <Select.Item value="banana">바나나</Select.Item>
            <Select.Item value="orange">오렌지</Select.Item>
          </Select.Content>
        </Select>
        <div className="mt-4 text-sm text-gray-500">
          현재 선택된 값: {value}
        </div>
      </div>
    );
  },
};

/**
 * 비활성화된 상태입니다.
 */
export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState("apple");
    return (
      <div className="w-[300px]">
        <Select
          {...args}
          value={value}
          onChange={setValue}
          disabled={args.disabled ?? true}
        >
          <Select.Label>비활성화된 선택</Select.Label>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="apple">사과</Select.Item>
            <Select.Item value="banana">바나나</Select.Item>
          </Select.Content>
        </Select>
      </div>
    );
  },
};
