import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-abinesh-dating',
  standalone: true,
  imports: [],
  templateUrl: './abinesh-dating.component.html',
  styleUrl: './abinesh-dating.component.css'
})
export class AbineshDatingComponent {
  @Input({required:true}) name! : string;
  @Input({required:true}) age! : string;
  @Input({required:true}) status! : string;
  @Input({required:true}) location! : string;
}
