import hyRequest from "..";
// 获得订单数据
export const getOrderInfo = (pageSize = 4, pageNum = 1, userId = 7) => {
  return hyRequest.get({
    url: "/resume-order/order",
    params: {
      pageNum,
      serveId: 0,
      pageSize,
      userId,
    },
  });
};
// 创建订单
export const createOrderInfo = (values) => {
  return hyRequest.post({
    url: "/resume-order/order",
    data: {
      ...values,
    },
  });
};
// 修改订单
export const patchOrderInfo = (values) => {
  return hyRequest.put({
    url: "/resume-order/order",
    data: {
      ...values,
    },
  });
};
// 删除订单
export const deleteOrder = (id) => {
  return hyRequest.delete({
    url: `/resume-order/order/${id}`,
  });
};
