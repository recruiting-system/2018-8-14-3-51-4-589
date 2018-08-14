let {generateHtml} = require('../main/4-main');

describe('string-test4', () => {

  it('generate html with English movies', () => {
    let shows = {
      "shows": [
        {
          "category": "children",
          "description": "<a href='#'>A show</a> about a cake",
          "title": "Strawberry Shortcake",
          "video": "none"
        },
        {
          "category": "children",
          "description": "A show about a ice",
          "title": "Vanilla Ice",
          "video": "none"
        }
      ]
    };
    let result = generateHtml(shows);
    let expected = `
<div data-template-chosen="a">
    <div>
        <h1>Upcoming Shows</h1>
        <ul>
            <li><strong>Title:</strong> Strawberry Shortcake</li>
            <li><strong>Description:</strong> <a href="#">A show</a> about a cake</li>
            <li><strong>Video:</strong> none</li>
            <li><strong>Category:</strong> children</li>
        </ul>
        <ul>
            <li><strong>Title:</strong> Vanilla Ice</li>
            <li><strong>Description:</strong> A show about a ice</li>
            <li><strong>Video:</strong> none</li>
            <li><strong>Category:</strong> children</li>
        </ul>
    </div>
</div>
`;
    expect(result).toEqual(expected);
  });

  it('generate html with Chinese movies', ()=> {
    let shows = {
      "shows": [
        {
          "category": "武侠",
          "description": "全是对话",
          "title": "大唐双龙传",
          "video": "http://video.com/dtslz.mp4"
        },
        {
          "category": "玄幻",
          "description": "千夜自困苦中崛起，在背叛中坠落。自此一个人，一把枪，行在永夜与黎明之间，却走出一段传奇。若永夜注定是他的命运，那他也要成为主宰的王。",
          "title": "永夜君王",
          "video": "none"
        }
      ]
    };
    let result = generateHtml(shows);
    let expected = `
<div data-template-chosen="a">
    <div>
        <h1>Upcoming Shows</h1>
        <ul>
            <li><strong>Title:</strong> 大唐双龙传</li>
            <li><strong>Description:</strong> 全是对话</li>
            <li><strong>Video:</strong> http://video.com/dtslz.mp4</li>
            <li><strong>Category:</strong> 武侠</li>
        </ul>
        <ul>
            <li><strong>Title:</strong> 永夜君王</li>
            <li><strong>Description:</strong> 千夜自困苦中崛起，在背叛中坠落。自此一个人，一把枪，行在永夜与黎明之间，却走出一段传奇。若永夜注定是他的命运，那他也要成为主宰的王。</li>
            <li><strong>Video:</strong> none</li>
            <li><strong>Category:</strong> 玄幻</li>
        </ul>
    </div>
</div>
`;
    expect(result).toEqual(expected);
  });

});