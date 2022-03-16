import ListView from './views/ListView.js';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스나 컴포넌트 옵션들이 들어갈 자리
        name: name,
        render(createElement) {
            return createElement(ListView);
        }
    }
}