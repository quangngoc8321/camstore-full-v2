import { notification } from "antd";


export const notificationError = (error) => {
   return notification.error({
        message: <strong> Error</strong>,
        duration: 3,
        description: error.response.data.message,
        style: {
          width: 400,
          textTransform: 'capitalize'
        }
    });    
}