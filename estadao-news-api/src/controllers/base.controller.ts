import { Response } from "express";
import { BaseEndpointResponseModel } from "../models/news";

export default class BaseController {
    dataResult<T>(res: Response, result: T) {
        if (result instanceof Error){
            res.status(400);
            const dataResult = {
                status: res.statusCode,
                description: result.message.toString()
            } as BaseEndpointResponseModel;
            return res.json(dataResult);
        } 
        return res.json({
            status: res.statusCode,
            data: result,
        } as BaseEndpointResponseModel);
    }
}