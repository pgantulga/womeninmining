import { MenuService } from 'src/app/core/services/menu.service';
import { filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Article, ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  articles$: Observable<any>;
  types: any[];
  headerContent: any;
  type: string;
  selected: any;
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private menu: MenuService
  ) {
    this.headerContent = {
      title: 'Бичвэрүүд',
      style: 'primary',
      image: '/assets/images/story_nobg.png',
      description:
        'Сүүлийн үеийн мэдээ мэдээлэл, нийтлэл болон гайхамшигт түүхүүд ',
    };
    this.types = this.menu.topMenu[1].children;
  }
  ngOnInit(): void {
    const query$ = this.route.queryParams;
    this.articles$ = query$.pipe(
      switchMap((params) => {
        if (params.type) {
          this.selected = params.type;
          return this.articleService.getArticleByTypes(params.type);
        } else {
          this.selected = null;
          return this.articleService.getArticlesExclude('static', 10);
        }
      })
    );
  }
  select(item?): Promise<any> {
    if (!item) {
      return this.router.navigate(['/articles']);
    }
    this.selected = item;
    return this.router.navigate(['/articles'], {
      queryParams: item.queryParam,
    });
  }
}
