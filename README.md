## 1. 설계

### Compound Component Pattern

모든 컴포넌트는 **Compound Component 패턴**을 사용하여 설계되었습니다.

- **유연성**: 사용자가 서브 컴포넌트(`Trigger`, `Content`, `Item` 등)를 자유롭게 배치하고 구성할 수 있습니다.
- **가독성**: 관련된 컴포넌트들이 명시적으로 드러나며, Props Drilling을 최소화합니다.

## 2. 컴포넌트 구현 상세

### Select 컴포넌트

- **키보드 네비게이션**:
  - `ArrowUp` / `ArrowDown`: 옵션 이동
  - `Enter` / `Space`: 옵션 선택
  - `Escape`: 메뉴 닫기
- **포커스 관리**: 메뉴가 열릴 때 현재 선택된 항목이나 첫 번째 항목으로 자동으로 포커스를 이동시킵니다.
- **ARIA 준수**:
  - **Trigger**: `role="combobox"`, `aria-expanded`, `aria-controls`, `aria-haspopup="listbox"`
  - **Content**: `role="listbox"`
  - **Item**: `role="option"`, `aria-selected`
  - `aria-activedescendant`를 사용하여 현재 포커스된 아이템을 스크린 리더에 알립니다.

### Modal 컴포넌트

- **React Portal**: `createPortal`을 사용하여 `document.body` 레벨에 렌더링함으로써 `z-index` 스택킹 컨텍스트 문제를 원천적으로 해결했습니다.
- **Scroll Lock**: 모달이 열려있는 동안 배경(`body`)의 스크롤을 막아 사용자 경험을 해치지 않도록 했습니다.
- **인터랙션**:
  - **Click Outside**: 모달 컨텐츠 외부(오버레이)를 클릭하면 닫힙니다.
  - **ESC Key**: ESC 키를 누르면 모달이 닫힙니다.
- **ARIA 준수**:
  - **Trigger**: `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls`
  - **Content**: `role="dialog"`, `aria-modal="true"`
  - `useId`를 활용하여 Trigger와 Content 간의 명확한 연결 고리(`aria-controls`, `id`)를 형성했습니다.

## 3. 프로젝트 실행 (How to Run)

### 개발 서버 실행

데모 페이지(`App.tsx`)를 통해 컴포넌트의 동작을 확인할 수 있습니다.

```bash
npm install
npm run dev
```

### Storybook 실행

각 컴포넌트의 다양한 스토리와 문서를 확인할 수 있습니다.

```bash
npm run storybook
```
