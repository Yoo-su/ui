import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Modal Component

Compound Component 패턴으로 구현된 유연한 Modal 컴포넌트입니다.

## 구조
- **Modal**: Root 컴포넌트. 상태 관리 및 Context 제공.
- **Modal.Trigger**: 모달을 여는 버튼.
- **Modal.Content**: 모달 오버레이 및 컨텐츠 컨테이너 (Portal 렌더링).
- **Modal.Close**: 모달을 닫는 버튼.

## 주요 기능
- **유연한 컨텐츠**: 내부 구조를 자유롭게 정의할 수 있습니다.
- **Portal 렌더링**: \`document.body\` 레벨에 렌더링되어 z-index 문제를 방지합니다.
- **접근성(A11y)**:
  - \`role="dialog"\`, \`aria-modal="true"\` 지원.
  - ESC 키로 닫기 지원.
  - 오버레이 클릭 시 닫기 지원.
  - 포커스 관리 (자동 포커스 트랩은 추가 구현 필요).
`,
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "모달 열림 상태 (Controlled)",
    },
    defaultOpen: {
      control: "boolean",
      description: "초기 열림 상태 (Uncontrolled)",
    },
    onOpenChange: {
      action: "changed",
      description: "열림 상태 변경 시 호출되는 콜백",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

/**
 * 가장 기본적인 사용 예시입니다.
 * Trigger를 클릭하면 모달이 열리고, 내부의 Close 버튼이나 오버레이를 클릭하면 닫힙니다.
 */
export const Default: Story = {
  render: () => {
    return (
      <Modal>
        <Modal.Trigger className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
          모달 열기
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Close />
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">기본 모달</h2>
            <p className="text-sm text-gray-500">
              이곳에 원하는 컨텐츠를 자유롭게 구성할 수 있습니다.
            </p>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
              onClick={() => alert("확인 버튼 클릭")}
            >
              확인
            </button>
          </div>
        </Modal.Content>
      </Modal>
    );
  },
};
