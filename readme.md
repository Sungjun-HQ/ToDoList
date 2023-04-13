### 1. To-Do List 만들기
![Honeycam 2023-04-14 01-12-15](https://user-images.githubusercontent.com/31733276/231820911-16ce7084-9565-478a-8c6e-e1f6df9e36b8.gif)

### 3. DATE - SQL
[전제 조건]

테이블명 : product_order 이며, 컬럼명 'date' 아래에 Datetime으로 데이터가 입력되어 있습니다.

1. 특정 선택일자(예 2023년 7월 7일) 데이터만 선택해서 내림차순으로 보여준다고 할 경우의 SQL 를 작성해 주세요
```SQL
SELECT date
FROM product_order
WHERE DATE(date) = "2023-07-07"
ORDER BY date DESC;
```
2. 금일 날짜의 데이터만 선택하여 오름차순으로 보여야 할 경우의 SQL를 작성해 주세요.
```SQL
SELECT date
FROM product_order
WHERE DATE(date) = CURDATE()
ORDER BY date ASC;
```
---------------------------
### 4. 주문량 많은 메뉴명 조회
![캡처](https://user-images.githubusercontent.com/31733276/231668348-98d018a3-1ae1-43aa-8d23-bd75a8f6f8b1.PNG)