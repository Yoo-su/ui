import { useState } from "react";
import { Select } from "./ui/select";
import { Modal } from "./ui/modal";

function App() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">UI 컴포넌트 샘플</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Select 컴포넌트</h2>
          <div className="space-y-4">
            <div className="w-[300px]">
              <Select value={val1} onChange={setVal1}>
                <Select.Label>Select 샘플1</Select.Label>
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="apple">item-1</Select.Item>
                  <Select.Item value="banana">item-2</Select.Item>
                  <Select.Item value="orange">item-3</Select.Item>
                  <Select.Item value="melon">item-4</Select.Item>
                  <Select.Item value="grape">item-5</Select.Item>
                </Select.Content>
              </Select>
            </div>

            <div className="w-[300px]">
              <Select value={val2} onChange={setVal2}>
                <Select.Label>Select 샘플2</Select.Label>
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="apple">item-1</Select.Item>
                  <Select.Item value="banana">item-2</Select.Item>
                  <Select.Item value="orange">item-3</Select.Item>
                </Select.Content>
              </Select>
            </div>

            <div className="w-[300px]">
              <Select value={val3} onChange={setVal3}>
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="apple">no label item-1</Select.Item>
                  <Select.Item value="banana">no label item-2</Select.Item>
                </Select.Content>
              </Select>
            </div>

            <div className="w-[300px]">
              <Select value="" onChange={() => {}} disabled>
                <Select.Label>Disabled Select</Select.Label>
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="1">Option 1</Select.Item>
                </Select.Content>
              </Select>
            </div>
          </div>
        </div>

        {/* 모달 섹션 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Modal 컴포넌트</h2>
          <div className="space-y-4 space-x-2">
            <Modal>
              <Modal.Trigger className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                모달 트리거
              </Modal.Trigger>
              <Modal.Content>
                <Modal.Close />
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    모달 제목
                  </h2>
                </div>
                <div className="py-4 text-gray-600">
                  <p>모달 본문</p>
                  <input type="text" />
                </div>
                <div className="mt-6 flex justify-end space-x-2">
                  <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    onClick={() => alert("확인")}
                  >
                    확인
                  </button>
                </div>
              </Modal.Content>
            </Modal>

            <Modal>
              <Modal.Trigger>
                <button className="flex items-center justify-center bg-yellow-100 size-[50px] p-2 rounded-full">
                  M
                </button>
              </Modal.Trigger>
              <Modal.Content>
                <Modal.Close />
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    동그란 트리거 모달
                  </h2>
                </div>
                <div className="py-4 text-gray-600">
                  <p>모달 내용</p>
                  <input type="text" />
                </div>
              </Modal.Content>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
