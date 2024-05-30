import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTasks, updateStatus, } from '../../redux/features/task/taskSlice';

const MyTasks = ({ openModal }) => {
  const { task, userSpecificTasks } = useSelector((state) => state.TaskSlice);
  const { name: userName } = useSelector((state) => state.UserSlice);
  const dispatch = useDispatch();



  useEffect(() => {

    dispatch(setUserTasks(userName));

  }, [dispatch, userName, task])


  return (
    <div className=''>

      <h1 className="text-xl my-3">My Tasks</h1>

      <div className=" h-[750px] overflow-auto space-y-3">
        {

          userSpecificTasks.map((item) =>
            <div
              key={item.id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
              <h1>{item.title}</h1>
              <div className="flex gap-3">
                <button onClick={openModal} className="grid place-content-center" title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button onClick={() => dispatch(updateStatus({ id: item.id, status: "done" }))} className="grid place-content-center" title="Done">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          )
        }

      </div>
    </div>
  );
};

export default MyTasks;
