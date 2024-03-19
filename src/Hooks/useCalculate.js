import { useContext } from 'react';
import { CalculateContext } from '../components/Baitap47/CalculateProvider';


const useCalculate = () => {
  // Sử dụng useContext để lấy giá trị từ CalculateContext
  const calculate = useContext(CalculateContext);

  // Kiểm tra nếu không có giá trị được trả về từ CalculateContext, ném ra lỗi
  if (!calculate) {
    throw new Error('useCalculate must be used within a CalculateProvider');
  }

  return calculate;
};

export default useCalculate;
