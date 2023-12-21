/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { userServices } from '../services/user.service'
import sendSuccessResponse from '../utils/sendResponse'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userDate = req.body
    const result = await userServices.createUser(userDate)

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'User created successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.getAllUsers()

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await userServices.getSingleUser(id)

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'Single User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userDate = req.body
    const id = req.params.id
    const result = await userServices.updateUser(id, userDate)

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'User updated successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    await userServices.deleteUser(id)

    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'User deleted successfully',
      data: null,
    })
  } catch (error: any) {
    next(error)
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
