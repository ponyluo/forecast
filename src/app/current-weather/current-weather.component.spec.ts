import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { injectSpy } from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { WeatherService } from '../weather/weather.service'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let weatherServiceMock: jasmine.SpyObj<WeatherService>
  let fixture: ComponentFixture<CurrentWeatherComponent>

  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getCurrentWeather',
    ])

    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [
        {
          provide: WeatherService,
          useValue: weatherServiceSpy,
        },
      ],
    }).compileComponents()
    weatherServiceMock = injectSpy(WeatherService)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    //fixture.detectChanges();
  })

  it('should create', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of())
    // Act
    fixture.detectChanges() // triggers ngOnInit
    // Assert
    expect(component).toBeTruthy()
  })
  it('should get currentWeather from weatherService', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of())
    // Act
    fixture.detectChanges() // triggers ngOnInit()
    // Assert
    expect(weatherServiceMock.getCurrentWeather).toHaveBeenCalledTimes(1)
  })
})
