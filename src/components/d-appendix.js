import { Template } from '../mixins/template';
import { body } from '../helpers/layout';

const T = Template('d-appendix', `
<style>

d-appendix {
  contain: content;
  font-size: 13px;
  line-height: 1.7em;
  margin-bottom: 0;
  border-top: 1px solid rgba(0,0,0,0.1);
  color: rgba(0,0,0,0.5);
  padding-top: 36px;
  padding-bottom: 48px;
}

d-appendix h3 {
  grid-column: page-start / text-start;
  font-size: 15px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 0;
  color: rgba(0,0,0,0.65);
  line-height: 1em;
}

d-appendix ol {
  margin-top: 15px;
  padding: 0 0 0 30px;
  margin-left: -30px;
}

d-appendix li {
  margin-bottom: 1em;
}

d-appendix a {
  color: rgba(0, 0, 0, 0.6);
}

d-appendix > * {
  grid-column: text;
}

d-appendix > d-footnote-list,
d-appendix > d-citation-list,
d-appendix > distill-appendix {
  grid-column: screen;
}

</style>

`, false);

export class Appendix extends T(HTMLElement) {

}
