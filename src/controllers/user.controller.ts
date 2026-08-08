import type { Request, Response } from "express";
import * as userService from "../services/user.service.js";

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Failed to get users:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get users",
    });
  }
};

export const createUser = async (
  req: Request<{ name: string; email: string }>,
  res: Response,
): Promise<void> => {
  try {
    const { name, email } = req.body;

    await userService.createUser(name, email);

    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
};

export const updateUser = async (
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    await userService.updateUser(id, name, email);

    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Failed to update user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update user",
    });
  }
};
