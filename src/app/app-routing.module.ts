import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { StudentInterfaceComponent } from './student-interface/student-interface.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { GetAllQuestinsComponent } from './get-all-questins/get-all-questins.component';
import { GetQuestionByIdComponent } from './get-question-by-id/get-question-by-id.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
// import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { AddExamsComponent } from './add-exams/add-exams.component';
import { GetAllExamsComponent } from './get-all-exams/get-all-exams.component';
import { GetExamByIdComponent } from './get-exam-by-id/get-exam-by-id.component';
import { UpdateExamComponent } from './update-exam/update-exam.component';
import { DeleteExamComponent } from './Invalid.component/delete-exam.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { GetAllStudentsComponent } from './get-all-students/get-all-students.component';
import { GetStudentByIdComponent } from './get-student-by-id/get-student-by-id.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
// import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AddReportComponent } from './add-report/add-report.component';
import { GetAllReportsComponent } from './get-all-reports/get-all-reports.component';
import { GetReportByIdComponent } from './get-report-by-id/get-report-by-id.component';
import { ExamIdComponent } from './exam-id/exam-id.component';
import { QusestionIdComponent } from './qusestion-id/qusestion-id.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { ReportIdComponent } from './report-id/report-id.component';
import { EnterExamIdComponent } from './enter-exam-id/enter-exam-id.component';
import { DisplayQuestionsComponent } from './display-questions/display-questions.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Admin",component:AdminComponent},
  {path:"Student",component:StudentComponent},
  {path:"AdminInterface",component:AdminInterfaceComponent},
  {path:"StudentInterface",component:StudentInterfaceComponent},
  {path:"AddQuestion",component:AddQuestionsComponent},
  {path:"GetAllQuestions",component:GetAllQuestinsComponent},
  // children:[{path:"/GetQuestionById",component:GetQuestionByIdComponent},
  // ]},
  {path:"GetQuestionById",component:GetQuestionByIdComponent},
  {path:"UpdateQuestion/:questionid",component:UpdateQuestionComponent},
  // {path:"DeleteQuestion",component:DeleteQuestionComponent},
  {path:"AddExam",component:AddExamsComponent},
  {path:"GetAllExams",component:GetAllExamsComponent},
  {path:"GetExamById",component:GetExamByIdComponent},
  {path:"UpdateExam/:examid",component:UpdateExamComponent},
  {path:"AddStudent",component:AddStudentComponent},
  {path:"GetAllStudents",component:GetAllStudentsComponent},
  {path:"GetStudentById",component:GetStudentByIdComponent},
  {path:"UpdateStudent/:studentid",component:UpdateStudentComponent},
  // {path:"DeleteStudent",component:DeleteStudentComponent},
  {path:"AddReport",component:AddReportComponent},
  {path:"GetAllReports",component:GetAllReportsComponent},
  {path:"GetReportById",component:GetReportByIdComponent},
  {path:"examid/:examid",component:ExamIdComponent},
  {path:"questionid/:questionid",component:QusestionIdComponent},
  {path:"studentid/:studentid",component:StudentIdComponent},
  {path:"reportid/:reportid",component:ReportIdComponent},
  {path:"EnterExamId",component:EnterExamIdComponent},
  {path:"ExamId/:ExamId",component:DisplayQuestionsComponent},
  {path:"Result",component:ResultComponent},
  {path:"**",component:DeleteExamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
