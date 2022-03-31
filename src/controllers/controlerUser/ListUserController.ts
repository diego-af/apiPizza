import express,{Request, Response} from 'express'
import  prismaClient from '../../prisma/index'



class ListUserController{
  async handle(req:Request, res:Response){
    const users = await prismaClient.user.findMany()

    return res.json(users);
  }
}



export {ListUserController}