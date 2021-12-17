import {HbluxArticleService} from 'src/app/services/hblux-article.service';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  reactiveFormContact: FormGroup | null = null
  message: string | null = null

  constructor(private fb: FormBuilder, private hbluxService: HbluxArticleService) {
  }

  ngOnInit(): void {
    this.initreactiveFormContact()
    console.log(this.reactiveFormContact)
  }

  initreactiveFormContact() {
    this.reactiveFormContact = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      unmot: ['', [Validators.required]]
    })
  }

  onCreerNewCompte() {
    console.log("Informations Obtenues :", this.reactiveFormContact?.value)
    if (this.reactiveFormContact?.valid) {
      console.log(this.reactiveFormContact)
      console.log("Informations Obtenues :", this.reactiveFormContact?.value)
      this.message = "Bienvenue " + this.reactiveFormContact.value.email
    } else {
      this.message = "Veiller remplir le formulaire"
      setTimeout(() => {
        this.message = null
      }, (3000));
    }
  }
}
