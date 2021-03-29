import { Request, Response } from 'express';

import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response){

    CreateCourseService.execute({
        name: "NodeJ", duration: 10, educator:"Marlon"
    })

    return res.send();

}