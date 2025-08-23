import orderService from "../services/orderService.js";

// get all
const getAllOrder = async (req, res) => {
  try {
    const data = await orderService.getAllOrder();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get by id
const getOrderById = async (req, res) => {
  try {
    const data = await orderService.getOrderById(req.params.id);
    if (!data) return res.status(404).json({ message: "Order not found" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// create
const createOrder = async (req, res) => {
  try {
    const data = await orderService.createOrder(req.body, req.user);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// delete
const deleteOrder = async (req, res) => {
  try {
    const data = await orderService.deleteOrder(req.params.id);
    if (!data) return res.status(404).json({ message: "Order not found" });
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update
const updateOrder = async (req, res) => {
  try {
    const data = await orderService.updateOrder(req.body, req.params.id);
    if (!data) return res.status(404).json({ message: "Order not found" });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default {
  getAllOrder,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
