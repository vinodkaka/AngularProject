import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { StudentInterfaceComponent } from './student-interface/student-interface.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
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
import {HttpClientModule} from '@angular/common/http';
import { EnterExamIdComponent } from './enter-exam-id/enter-exam-id.component';
import { DisplayQuestionsComponent } from './display-questions/display-questions.component';
import { ResultComponent } from './result/result.component';
import { SubstringpipePipe } from './substringpipe.pipe'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    StudentComponent,
    CardComponent,
    StudentInterfaceComponent,
    AdminInterfaceComponent,
    AddQuestionsComponent,
    GetAllQuestinsComponent,
    GetQuestionByIdComponent,
    UpdateQuestionComponent,
    // DeleteQuestionComponent,
    AddExamsComponent,
    GetAllExamsComponent,
    GetExamByIdComponent,
    UpdateExamComponent,
    DeleteExamComponent,
    AddStudentComponent,
    GetAllStudentsComponent,
    GetStudentByIdComponent,
    UpdateStudentComponent,
    // DeleteStudentComponent,
    AddReportComponent,
    GetAllReportsComponent,
    GetReportByIdComponent,
    ExamIdComponent,
    QusestionIdComponent,
    StudentIdComponent,
    ReportIdComponent,
    EnterExamIdComponent,
    DisplayQuestionsComponent,
    ResultComponent,
    SubstringpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
