import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dog-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-gallery.component.html',
  styleUrl: './dog-gallery.component.scss'
})
export class DogGalleryComponent {
  dogImages: string[] = []; // Array to hold image URLs
  isLoading = false;       // Loading state

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDogImages();
  }

  loadDogImages(): void {
    this.isLoading = true;

    const requests = Array.from({ length: 10 }, () => 
      this.http.get<{ message: string }>('https://dog.ceo/api/breeds/image/random')
    );

    Promise.all(requests.map(request => request.toPromise()))
      .then((responses) => {
        this.dogImages = responses.map((response: any) => response?.message ?? '');
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Failed to load dog images:', error);
        this.isLoading = false;
      });
  }
}
