import { Response } from 'express';

export const sendSuccess = <T>(res: Response, message: string, data?: T) => {
  res.status(200).send({
    status: 'success',
    message,
    data,
  });
};

export const sendCreated = <T>(res: Response, message: string, data?: T) => {
  res.status(201).send({
    status: 'success',
    message,
    data,
  });
};

export const sendUnauthorized = (res: Response, message: string) => {
  res.status(401).json({
    status: 'error',
    message,
  });
};

export const sendNotFound = (res: Response, message: string) => {
  res.status(404).json({
    status: 'error',
    message,
  });
};

export const sendInternalError = (
  res: Response,
  message: string,
  error?: unknown,
) => {
  res.status(500).json({
    status: 'error',
    message,
    error,
  });
};
