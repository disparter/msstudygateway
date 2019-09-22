import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IDemo, Demo } from 'app/shared/model/msstudy/demo.model';
import { DemoService } from './demo.service';

@Component({
  selector: 'jhi-demo-update',
  templateUrl: './demo-update.component.html'
})
export class DemoUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    demofield: []
  });

  constructor(protected demoService: DemoService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ demo }) => {
      this.updateForm(demo);
    });
  }

  updateForm(demo: IDemo) {
    this.editForm.patchValue({
      id: demo.id,
      demofield: demo.demofield
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const demo = this.createFromForm();
    if (demo.id !== undefined) {
      this.subscribeToSaveResponse(this.demoService.update(demo));
    } else {
      this.subscribeToSaveResponse(this.demoService.create(demo));
    }
  }

  private createFromForm(): IDemo {
    return {
      ...new Demo(),
      id: this.editForm.get(['id']).value,
      demofield: this.editForm.get(['demofield']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDemo>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
