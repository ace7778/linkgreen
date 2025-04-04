import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 設定 JWT Token
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// 使用者登入
export const loginUser = (data) => api.post('/auth/login', data);

// 使用者註冊
export const registerUser = (data) => api.post('/auth/register', data);

// 重設密碼
export const resetPassword = (data) => api.post('/auth/reset-password', data);

// 取得顧問列表
export const getConsultants = (params) => api.get('/consultants/search', { params });

// 取得顧問詳細資料
export const getConsultantProfile = (id) => api.get(`/consultants/${id}`);

// 建立預約
export const createBooking = (data) => api.post('/bookings', data);

// 取得所有預約
export const getBookings = () => api.get('/bookings');

// 更新預約狀態
export const updateBookingStatus = (id, status) => api.put(`/bookings/${id}`, { status });

// 取消預約
export const cancelBooking = (id) => api.delete(`/bookings/${id}`);

export default api; 