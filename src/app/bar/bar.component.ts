import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  private data = [
    [
      {
        "id": "3852407",
        "custId": "30047",
        "custName": "Hevra Kadisha Bet Shean",
        "cemeteryId": "141",
        "cemeteryName": "בית שאן חדש",
        "blockId": "11000",
        "blockName": "ב",
        "sectionId": "56795",
        "sectionName": "12",
        "rowId": 1304870,
        "rowCode": "327",
        "rowNum": 1,
        "rowName": "1",
        "floor": 0,
        "placeId": 1,
        "placeName": "1                               ",
        "firstName": "שלמה ארמונד",
        "lastName": "בן ברוך",
        "gender": "ז    ",
        "fatherName": "יצחק",
        "motherName": "חנינה",
        "birthDate": "13/11/1945",
        "deceasedDate": "",
        "burialDate": "",
        "deceasedAfterSunset": "",
        "burialAfterSunset": "",
        "funeralTime": "",
        "title": "",
        "personalId": "067592469",
        "tombTypeId": 1,
        "tombTypeName": "שדה",
        "building": "",
        "idf": "",
        "eiva": "",
        "vip": "",
        "tombStatusId": 2,
        "tombStatusName": "נרכש בחיים",
        "remarks": "",
        "coridoRemarks": null,
        "fileNumber": "21256",
        "lat": 32.501338583306,
        "lon": 35.511825016567,
        "tombImage": null,
        "exception": 0,
        "kadishaExceptionId": "0",
        "kadishaExceptionName": null,
        "externalComapny": 0,
        "employeeId": "5",
        "employeeName": "שי מזוז",
        "custTombId": "1 -   ב -  12 -   1 -   1",
        "checked": 0,
        "manualEdit": 0,
        "hebDeceasedDate": "",
        "hebBurialDate": "",
        "tombText": null,
        "publish": 1,
        "token": "E67A149D-29BE-43A3-8AC1-278D7314DB8C",
        "floorId": null
      },
      {
        "id": "3852406",
        "custId": "30047",
        "custName": "Hevra Kadisha Bet Shean",
        "cemeteryId": "141",
        "cemeteryName": "בית שאן חדש",
        "blockId": "11000",
        "blockName": "ב",
        "sectionId": "56795",
        "sectionName": "12",
        "rowId": 1304870,
        "rowCode": "327",
        "rowNum": 1,
        "rowName": "1",
        "floor": 0,
        "placeId": 2,
        "placeName": "2                               ",
        "firstName": "רנה",
        "lastName": "בן ברוך",
        "gender": "נ    ",
        "fatherName": "יצחק",
        "motherName": "חנינה",
        "birthDate": "12/04/1949",
        "deceasedDate": "",
        "burialDate": "",
        "deceasedAfterSunset": "",
        "burialAfterSunset": "",
        "funeralTime": "",
        "title": "",
        "personalId": "068583624",
        "tombTypeId": 1,
        "tombTypeName": "שדה",
        "building": "",
        "idf": "",
        "eiva": "",
        "vip": "",
        "tombStatusId": 2,
        "tombStatusName": "נרכש בחיים",
        "remarks": "",
        "coridoRemarks": null,
        "fileNumber": "21255",
        "lat": 32.501344567111,
        "lon": 35.511832735462,
        "tombImage": null,
        "exception": 0,
        "kadishaExceptionId": "0",
        "kadishaExceptionName": null,
        "externalComapny": 0,
        "employeeId": "5",
        "employeeName": "שי מזוז",
        "custTombId": "1 -   ב -  12 -   1 -   2",
        "checked": 0,
        "manualEdit": 0,
        "hebDeceasedDate": "",
        "hebBurialDate": "",
        "tombText": null,
        "publish": 1,
        "token": "176E4621-B0A1-47C8-B515-C928F42ADF20",
        "floorId": null
      },
      {
        "id": "3849645",
        "custId": "30047",
        "custName": "Hevra Kadisha Bet Shean",
        "cemeteryId": "141",
        "cemeteryName": "בית שאן חדש",
        "blockId": "11000",
        "blockName": "ב",
        "sectionId": "56795",
        "sectionName": "12",
        "rowId": 1313805,
        "rowCode": "327",
        "rowNum": 1,
        "rowName": "1",
        "floor": 0,
        "placeId": 3,
        "placeName": "3                               ",
        "firstName": "לואיזה",
        "lastName": "בוכריס",
        "gender": "נ    ",
        "fatherName": "",
        "motherName": "שלביה",
        "birthDate": "",
        "deceasedDate": "01/04/1957",
        "burialDate": "02/06/2002",
        "deceasedAfterSunset": "",
        "burialAfterSunset": "",
        "funeralTime": "",
        "title": "",
        "personalId": "",
        "tombTypeId": 1,
        "tombTypeName": "שדה",
        "building": "",
        "idf": "",
        "eiva": "",
        "vip": "",
        "tombStatusId": 1,
        "tombStatusName": "נפטר",
        "remarks": "Image Uploaded!!",
        "coridoRemarks": null,
        "fileNumber": "823",
        "lat": 32.501351540592,
        "lon": 35.511842466013,
        "tombImage": "https://s3-eu-west-1.amazonaws.com/coridotombimages/Medium/EE/EEC61D85-22EE-4596-88F9-FF0DEF8206A8.jpg",
        "exception": 0,
        "kadishaExceptionId": "0",
        "kadishaExceptionName": null,
        "externalComapny": 0,
        "employeeId": "5",
        "employeeName": "שי מזוז",
        "custTombId": "1 -   ב -  12 -   1 -   3",
        "checked": 0,
        "manualEdit": 0,
        "hebDeceasedDate": "א' בניסן תשי\"ז",
        "hebBurialDate": "",
        "tombText": null,
        "publish": 1,
        "token": "EEC61D85-22EE-4596-88F9-FF0DEF8206A8",
        "floorId": null
      },
      {
        "id": "3849648",
        "custId": "30047",
        "custName": "Hevra Kadisha Bet Shean",
        "cemeteryId": "141",
        "cemeteryName": "בית שאן חדש",
        "blockId": "11000",
        "blockName": "ב",
        "sectionId": "56795",
        "sectionName": "12",
        "rowId": 1313805,
        "rowCode": "327",
        "rowNum": 1,
        "rowName": "1",
        "floor": 0,
        "placeId": 4,
        "placeName": "4                               ",
        "firstName": "אלגריה",
        "lastName": "מדלסי",
        "gender": "נ    ",
        "fatherName": "",
        "motherName": "מרסדס",
        "birthDate": "",
        "deceasedDate": "30/12/2011",
        "burialDate": "",
        "deceasedAfterSunset": "",
        "burialAfterSunset": "",
        "funeralTime": "",
        "title": "",
        "personalId": "064759194",
        "tombTypeId": 1,
        "tombTypeName": "שדה",
        "building": "",
        "idf": "",
        "eiva": "",
        "vip": "",
        "tombStatusId": 1,
        "tombStatusName": "נפטר",
        "remarks": "Image Uploaded!!",
        "coridoRemarks": null,
        "fileNumber": "824",
        "lat": 32.501359282613,
        "lon": 35.511853129319,
        "tombImage": "https://s3-eu-west-1.amazonaws.com/coridotombimages/Medium/E8/E809E023-3899-448C-B3DF-C38A95F536DB.jpg",
        "exception": 0,
        "kadishaExceptionId": "0",
        "kadishaExceptionName": null,
        "externalComapny": 0,
        "employeeId": "5",
        "employeeName": "שי מזוז",
        "custTombId": "1 -   ב -  12 -   1 -   4",
        "checked": 0,
        "manualEdit": 0,
        "hebDeceasedDate": "ד' בטבת תשע\"ב",
        "hebBurialDate": "",
        "tombText": null,
        "publish": 1,
        "token": "E809E023-3899-448C-B3DF-C38A95F536DB",
        "floorId": null
      },
      {
        "id": "3849650",
        "custId": "30047",
        "custName": "Hevra Kadisha Bet Shean",
        "cemeteryId": "141",
        "cemeteryName": "בית שאן חדש",
        "blockId": "11000",
        "blockName": "ב",
        "sectionId": "56795",
        "sectionName": "12",
        "rowId": 1313805,
        "rowCode": "327",
        "rowNum": 1,
        "rowName": "1",
        "floor": 0,
        "placeId": 5,
        "placeName": "5                               ",
        "firstName": "יום טוב",
        "lastName": "מדלסי",
        "gender": "ז    ",
        "fatherName": "",
        "motherName": "זוהרה",
        "birthDate": "",
        "deceasedDate": "05/12/1996",
        "burialDate": "",
        "deceasedAfterSunset": "",
        "burialAfterSunset": "",
        "funeralTime": "",
        "title": "",
        "personalId": "6134321",
        "tombTypeId": 1,
        "tombTypeName": "שדה",
        "building": "",
        "idf": "",
        "eiva": "",
        "vip": "",
        "tombStatusId": 1,
        "tombStatusName": "נפטר",
        "remarks": "Image Uploaded!!",
        "coridoRemarks": null,
        "fileNumber": "825",
        "lat": 32.501364196987,
        "lon": 35.511862116245,
        "tombImage": "https://s3-eu-west-1.amazonaws.com/coridotombimages/Medium/E5/E5E6110F-9400-4320-B589-55130A7901D9.jpg",
        "exception": 0,
        "kadishaExceptionId": "0",
        "kadishaExceptionName": null,
        "externalComapny": 0,
        "employeeId": "5",
        "employeeName": "שי מזוז",
        "custTombId": "1 -   ב -  12 -   1 -   5",
        "checked": 0,
        "manualEdit": 0,
        "hebDeceasedDate": "כ\"ד בכסלו תשנ\"ז",
        "hebBurialDate": "",
        "tombText": null,
        "publish": 1,
        "token": "E5E6110F-9400-4320-B589-55130A7901D9",
        "floorId": null
      },
      {
        "id": "3849655",
        "custId": "30047",
        "custName": "Hevra Kadisha Bet Shean",
        "cemeteryId": "141",
        "cemeteryName": "בית שאן חדש",
        "blockId": "11000",
        "blockName": "ב",
        "sectionId": "56795",
        "sectionName": "12",
        "rowId": 1313805,
        "rowCode": "327",
        "rowNum": 1,
        "rowName": "1",
        "floor": 0,
        "placeId": 6,
        "placeName": "6                               ",
        "firstName": "גרמן",
        "lastName": "פיזיבין",
        "gender": "ז    ",
        "fatherName": "מויסיי",
        "motherName": "",
        "birthDate": "",
        "deceasedDate": "12/04/1996",
        "burialDate": "",
        "deceasedAfterSunset": "",
        "burialAfterSunset": "",
        "funeralTime": "",
        "title": "",
        "personalId": "31432446",
        "tombTypeId": 1,
        "tombTypeName": "שדה",
        "building": "",
        "idf": "",
        "eiva": "",
        "vip": "",
        "tombStatusId": 1,
        "tombStatusName": "נפטר",
        "remarks": "Image Uploaded!!",
        "coridoRemarks": null,
        "fileNumber": "828",
        "lat": 32.501372221774,
        "lon": 35.51187294719,
        "tombImage": "https://s3-eu-west-1.amazonaws.com/coridotombimages/Medium/B6/B6A77B84-4781-4CE8-8F69-489FBFDADCBC.jpg",
        "exception": 0,
        "kadishaExceptionId": "0",
        "kadishaExceptionName": null,
        "externalComapny": 0,
        "employeeId": "5",
        "employeeName": "שי מזוז",
        "custTombId": "1 -   ב -  12 -   1 -   6",
        "checked": 0,
        "manualEdit": 0,
        "hebDeceasedDate": "כ\"ג בניסן תשנ\"ו",
        "hebBurialDate": "",
        "tombText": null,
        "publish": 1,
        "token": "B6A77B84-4781-4CE8-8F69-489FBFDADCBC",
        "floorId": null
      }
    ]
  ];
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() {
  }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 10])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.Framework))
      .attr("y", (d: any) => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.Stars))
      .attr("fill", "#d04a35");
  }

  latLongToCanvasPoint(lat: number, lng: number, canvasWidth: number, canvasHeight: number,
                       minLat: number, maxLat:number, minLng: number, maxLng: number) {
    let x = (lng - minLng) * (canvasWidth / (maxLng - minLng));
    let y = (maxLat - lat) * (canvasHeight / (maxLat - minLat));
    return [x, y];
  }
}
