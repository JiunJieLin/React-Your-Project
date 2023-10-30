import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

//按下Save的時候要擷取所有input的value，再把value往父層傳
//在這一層下ref，用props的方式傳給Input來接收下層的value，Input層下forwardRef
const NewProject = ({ onAdd }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const date = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-2xl font-bold text-gray-800">Invalid Input</h2>
        <p>請輸入正確資訊</p>
        <p>確保每個欄位輸入資訊正確</p>
      </Modal>
      <div className="mt-16 flex justify-end">
        <button className="rounded-lg px-8 py-4 text-gray-400 hover:bg-slate-300">
          Cancel
        </button>
        <button
          className="rounded-lg bg-gray-800 px-8 py-4 text-white hover:bg-gray-700"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div>
        <Input ref={title} label="Title" type="text" />
        <Input ref={description} label="Description" textarea />
        <Input ref={date} label="Due Date" type="date" />
      </div>
    </>
  );
};

export default NewProject;
