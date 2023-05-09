import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
exam:any;

  constructor(private router:Router ,private http:HttpClient) { }

  back(){
    this.router.navigate(['Home'])
  }

  AadminInterface(){
    this.router.navigate(['AdminInterface'])
  }

  public GetAlllExams(): Observable<any[]>
  {
    return this.http.get<any[]>('http://localhost:8882/GetExams').pipe(catchError(this.handleHttpErrors))
  }

  public GetAllExamById(examId:number):Observable<any>{
    return this.http.get<any>('http://localhost:8882/GetExamById/'+examId).pipe(catchError(this.handleHttpErrors))
  }

  public AddExam(exam:any):Observable<any>{
    console.log(exam)
    return this.http.post<any>('http://localhost:8882/AddExam',exam).pipe(catchError(this.handleHttpErrors))
  }

  public DeleteExamById(examId:number):Observable<any>{
    console.log(examId)
    console.log("examdeleted")
    return this.http.delete<any>('http://localhost:8882/DeleteExamById/'+examId).pipe(catchError(this.handleHttpErrors))
  }

  public UpdateExamById(examId:number,exam:any):Observable<any>{
    console.log(examId)
    return this.http.put<any>('http://localhost:8882/UpdateExamById/'+examId,exam).pipe(catchError(this.handleHttpErrors))
  }

  public GetAllQuestions():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8882/GetQuestions').pipe(catchError(this.handleHttpErrors))
  }

  public GetQuestionById(questionid:any):Observable<any>{
    return this.http.get<any>('http://localhost:8882/GetQuestionById/'+questionid).pipe(catchError(this.handleHttpErrors))
  }

  public DeleteQuestion(questionId:number):Observable<any>{
    console.log(questionId)
    console.log("questiondeleted")
    return this.http.delete<any>('http://localhost:8882/DeleteQuestionById/'+questionId).pipe(catchError(this.handleHttpErrors))
   
  }

  public AddQuestion(question:any):Observable<any>{
    console.log(question)
    //console.log("detrails:"+question.exam.examId)
    return this.http.post<any>('http://localhost:8882/AddQuestion',question).pipe(catchError(this.handleHttpErrors))
  }

  public UpdateQuestionById(questionId:number,question:any){
    return this.http.put<any>('http://localhost:8882/UpdateQuestionById/'+questionId,question).pipe(catchError(this.handleHttpErrors))
  }

  public GetAllStudents():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8882/GetStudents').pipe(catchError(this.handleHttpErrors))
  }

  public GetStudentById(studentId:any):Observable<any>{
    return this.http.get<any>('http://localhost:8882/GetStudentById/'+studentId).pipe(catchError(this.handleHttpErrors))
  }

  public DeleteStudent(studentId:number):Observable<any>{
    console.log(studentId)
    return this.http.delete<any>('http://localhost:8882/DeleteStudentById/'+studentId).pipe(catchError(this.handleHttpErrors))
  }

 

  public AddStudent(student:any):Observable<any>{
    console.log(student)
    return this.http.post<any>('http://localhost:8882/AddStudent',student).pipe(catchError(this.handleHttpErrors))
  }

  public UpdateStudentById(studentId:number,student:any){
    console.log(student)
    return this.http.put<any>('http://localhost:8882/UpdateStudentById/'+studentId,student).pipe(catchError(this.handleHttpErrors))
  }

  public GetAllReports():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8882/GetReports').pipe(catchError(this.handleHttpErrors));
  }

  public GetReportById(reportid:any):Observable<any>{
    return this.http.get<any>('http://localhost:8882/GetReportById/'+reportid).pipe(catchError(this.handleHttpErrors))
  }

  public AddReport(report:any):Observable<any>{
    console.log(report)
    return this.http.post<any>('http://localhost:8882/AddReport',report).pipe(catchError(this.handleHttpErrors))
  }

  public GetQuestionsByExamId(examid:any):Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8882/questionbyexamid/'+examid).pipe(catchError(this.handleHttpErrors))
  }

  public SubmitAnswers(answers:any):Observable<any[]>{
    console.log("vinod")
    console.log(answers)
    return this.http.post<any[]>('http://localhost:8882/submitanswer',answers).pipe(catchError(this.handleHttpErrors))
  }

  private handleHttpErrors (http:HttpErrorResponse):Observable<any>{
    let ErrorMessage:string="";
    if(http.status==0){
      ErrorMessage="client seide error"
    }else{
      ErrorMessage="server side error"
    }
    return throwError(ErrorMessage);
}
}
