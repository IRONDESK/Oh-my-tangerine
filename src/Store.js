const store = {
    // 상태 (변할 수 있는 데이터) - 메뉴명
        setLocalStorage(myUserData) {
        // stringify : 오브젝트를 문자열 형태로 변환
        localStorage.setItem("myUserData", JSON.stringify(myUserData));
        },
        getLocalStorage() {
        return JSON.parse(localStorage.getItem("myUserData"));
        // 기존 값은 local storage를 문자열로 불러온 것이므로
        // 이를 JSON 배열로 만들어줘야, 렌더링이 가능하다.
        }
    }
    
    export default store;