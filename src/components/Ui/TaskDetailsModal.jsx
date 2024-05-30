import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/task/taskSlice";

const TaskDetailsModal = ({ closeModal }) => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addTask(data));
        closeModal();
    }

    return (
        <div>
            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-medium">What Is Your Task Title?</span>
                    </div>
                    <input type="text"  {...register("title")} placeholder="Type here Your Task Name" className="input input-bordered w-full bg-white " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-medium">Dead Line?</span>
                    </div>
                    <input type="date"  {...register("date")} placeholder="Type here Your Task Deadline" className="input input-bordered w-full bg-white " />
                </label>
                <label className="form-control w-full ">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Assign To</span>
                        </div>
                        <select {...register("assignedTo")} className="input input-bordered w-full bg-white">
                            <option value="">Assign To</option>
                            <option value="Md. Al Amin Mollik">Md. Al Amin Mollik</option>
                            <option value="Tahidul Bhai">Tahidul Bhai</option>
                            <option value="Tiger Mursa Bhai">Tiger Mursa Bhai</option>
                            <option value="Zaman Bhai">Zaman Bhai</option>
                        </select>
                    </label>
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-medium">Priority</span>
                    </div>
                    <select {...register("priority")} className="input input-bordered w-full bg-white">
                        <option value="">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-medium">What Is Your Task ?</span>
                    </div>
                    <textarea name='description'  {...register("description")} rows={4} className="textarea textarea-bordered bg-white"
                        placeholder="Write About your Task here..."></textarea>
                </label>
                <div>
                    <button type='submit' className='btn mt-5 w-full bg-[#3ac43aee] hover:bg-[#46ac46] text-white '>
                        Save Task
                    </button>
                    <button type="button" onClick={closeModal} className="btn mt-5 w-full bg-[#ff6464] hover:bg-[#ff6464] text-white">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskDetailsModal;
