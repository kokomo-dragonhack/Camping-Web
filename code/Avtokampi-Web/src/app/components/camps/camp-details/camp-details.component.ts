import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Avtokamp, Slika, Storitev, Mnenje } from '../../../models';
import { AvtokampiService, StoritveKampaService, MnenjaService } from '../../../services';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-camp-details',
    templateUrl: './camp-details.component.html',
    styleUrls: ['./camp-details.component.css']
})
export class CampDetailsComponent implements OnInit, OnDestroy {
    private _onDestroy = new Subject<void>();
    campId: number;
    campImg: Observable<Slika[]>;
    camp: Observable<Avtokamp>;
    storitve: Observable<Storitev[]>;
    mnenja: Observable<Mnenje[]>;

    constructor(
        private route: ActivatedRoute,
        private avtokampiService: AvtokampiService,
        private storitveService: StoritveKampaService,
        private mnenjaService: MnenjaService,
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.route.paramMap.pipe(takeUntil(this._onDestroy)).subscribe((params: ParamMap) => {
            this.campId = parseInt(params.get('avtokampId'));
        });

        this.camp = this.avtokampiService.get(this.campId);

        this.campImg = this.avtokampiService.getSlike(this.campId);

        this.storitve = this.storitveService.get(this.campId);

        this.mnenja = this.mnenjaService.getMnenjaByAvtokamp(this.campId);
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    getFirstImg() {
        return this.campImg && this.campImg[0] && this.campImg[0].slika ? this.campImg[0].slika : '';
    }

    getImage(image: any) {
        const preparedImg = image ? this.domSanitizer.bypassSecurityTrustStyle(`url('data:image/jpg;base64,${image}')`) :
            `url('assets/images/destination-1.jpg')`;
        return preparedImg;
    }

    getImageGallery(image: any) {
        const preparedImg = image ? `data:image/jpg;base64,${image}` :
            `assets/images/destination-1.jpg`;
        return preparedImg;
    }

    getRange() {
        return [...Array(5).keys()].map(i => i + 1);
    }

    trackByImgId(index, img) {
        return img.slikaId;
    }

    trackByServiceId(index, storitev) {
        return storitev.storitevId;
    }

    trackByCommentId(index, comment) {
        return comment.mnenjeId;
    }
}
