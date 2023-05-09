import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaseServiceService } from '../Service/base-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('BaseServiceService', () => {
  let service: BaseServiceService;
  let httpMock: HttpTestingController;
  let router: Router;
  

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule,RouterTestingModule],providers: [BaseServiceService]});
    service = TestBed.inject(BaseServiceService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
  });

  

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should retrieve exam by id', () => {
    const dummyExam = { id: 1, name: 'Maths Exam' };

    service.GetAllExamById(1).subscribe(exam => {
      expect(exam).toEqual(dummyExam);
    });

    const request = httpMock.expectOne(`http://localhost:8882/GetExamById/1`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyExam);
  });

  
  it('should navigate to Home', () => {
    spyOn(router, 'navigate');

    service.back();

    expect(router.navigate).toHaveBeenCalledWith(['Home']);
  });

  it('should navigate to AdminInterface', () => {
    spyOn(router, 'navigate');

    service.AadminInterface();

    expect(router.navigate).toHaveBeenCalledWith(['AdminInterface']);
  });


  it('should retrieve all exams', () => {
    const mockExams = [{ id: 1, name: 'Exam 1' }, { id: 2, name: 'Exam 2' }];

    service.GetAlllExams().subscribe((exams) => {
      expect(exams).toEqual(mockExams);
    });


    const req = httpMock.expectOne('http://localhost:8882/GetExams');
    expect(req.request.method).toBe('GET');
    req.flush(mockExams);
  });

  
  it('should retrieve an exam by ID', () => {
    const mockExamId = 1;
    const mockExam = { id: 1, name: 'Exam 1' };

    service.GetAllExamById(mockExamId).subscribe((exam) => {
      expect(exam).toEqual(mockExam);
    });

    const req = httpMock.expectOne(`http://localhost:8882/GetExamById/${mockExamId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockExam);
  });

  it('should add an exam', () => {
    const mockExam = { name: 'Exam 1' };

    service.AddExam(mockExam).subscribe((response) => {
      expect(response).toEqual(mockExam);
    });

    const req = httpMock.expectOne('http://localhost:8882/AddExam');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockExam);
    req.flush(mockExam);
  });

});
