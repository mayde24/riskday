import {Component, HostListener, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hauteur: number;
  largeur: number;
  scrollData: number;
  flag: boolean = false;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mayde24/ck60z7gez07k71inx6bqaisv0';
  lat = 48.8573568;
  lng = 2.3047562;
  constructor() { }

  @HostListener('window:scroll', ['onScroll()'])
  ngOnInit() {
    this.hauteur = window.innerHeight;
    this.largeur = window.innerWidth;
    this.scrollData = window.pageYOffset;

    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoibWF5ZGUyNCIsImEiOiJjanl0eXZjZnMwNjQwM2RueWQwYzZ2NGw4In0.OuuJ8vXCOEqpm5jtApUJrw';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 17,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.AttributionControl(), 'top-left');
  }
  onScroll() {
    this.scrollData = window.pageYOffset;
    if (this.scrollData > 800) {
      this.flag = true;
    }
  }
}
