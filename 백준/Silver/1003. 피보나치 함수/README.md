# [Silver III] 피보나치 함수 - 1003 

[문제 링크](https://www.acmicpc.net/problem/1003) 

### 성능 요약

메모리: 9768 KB, 시간: 128 ms

### 분류

다이나믹 프로그래밍

### 제출 일자

2024년 7월 3일 13:45:26

### 문제 설명

<p>다음 소스는 N번째 피보나치 수를 구하는 C++ 함수이다.</p>

<pre>int fibonacci(int n) {
    if (n == 0) {
        printf("0");
        return 0;
    } else if (n == 1) {
        printf("1");
        return 1;
    } else {
        return fibonacci(n‐1) + fibonacci(n‐2);
    }
}
</pre>

<p><code>fibonacci(3)</code>을 호출하면 다음과 같은 일이 일어난다.</p>

<ul>
	<li><code>fibonacci(3)</code>은 <code>fibonacci(2)</code>와 <code>fibonacci(1)</code> (첫 번째 호출)을 호출한다.</li>
	<li><code>fibonacci(2)</code>는 <code>fibonacci(1)</code> (두 번째 호출)과 <code>fibonacci(0)</code>을 호출한다.</li>
	<li>두 번째 호출한 <code>fibonacci(1)</code>은 1을 출력하고 1을 리턴한다.</li>
	<li><code>fibonacci(0)</code>은 0을 출력하고, 0을 리턴한다.</li>
	<li><code>fibonacci(2)</code>는 <code>fibonacci(1)</code>과 <code>fibonacci(0)</code>의 결과를 얻고, 1을 리턴한다.</li>
	<li>첫 번째 호출한 <code>fibonacci(1)</code>은 1을 출력하고, 1을 리턴한다.</li>
	<li><code>fibonacci(3)</code>은 <code>fibonacci(2)</code>와 <code>fibonacci(1)</code>의 결과를 얻고, 2를 리턴한다.</li>
</ul>

<p>1은 2번 출력되고, 0은 1번 출력된다. N이 주어졌을 때, <code>fibonacci(N)</code>을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 테스트 케이스의 개수 T가 주어진다.</p>

<p>각 테스트 케이스는 한 줄로 이루어져 있고, N이 주어진다. N은 40보다 작거나 같은 자연수 또는 0이다.</p>

### 출력 

 <p>각 테스트 케이스마다 0이 출력되는 횟수와 1이 출력되는 횟수를 공백으로 구분해서 출력한다.</p>

<br /><br />

## 풀이

피보나치는 무조건 dp임!!

index 0과 1 부분은 0과 1로 초기화해 주고, 2부터 더하기 연산 수행
나의 경우 피보나치 연산 값만 출력해 주면 되기 때문에 
```
fibo[0] = 0;
fibo[1] = 1;  //로 초기화한 후
...
fibo[i] = fibo(i-2) + fibo(i-1);
```
로 연산한 후 결과값을 출력했는데 다른 사람들의 풀이를 보니

```
fibo[0] = [1, 0];
fibo[1] = [0, 1];
...
fibo[i] = [fibo[i-1][0] + fibo[i-2][0], fibo[i-1][1], fibo[i-2][1]];
```
이렇게 0번째 column끼리, 1번째 column끼리 더하는 풀이 방법이 많이 보였다.
내 풀이대로 해도 답은 나오긴 하지만 이게 좀 더 문제의 의도에 맞는 풀이인 것 같긴 하다. 
0과 1이 각각 몇 번 출력되는지 물어봤기 때문에!!
