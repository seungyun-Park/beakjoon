def merge_sort(A, left, right):
    # 배열 A의 left부터 right까지를 병합 정렬하는 함수
    if left < right:
        mid = (left + right) // 2  # 중간 인덱스 계산
        merge_sort(A, left, mid)   # 왼쪽 절반 정렬
        merge_sort(A, mid + 1, right)  # 오른쪽 절반 정렬
        merge(A, left, mid, right)  # 두 정렬된 절반을 병합

def merge(A, left, mid, right):
    # 두 부분 배열 A[left..mid]와 A[mid+1..right]를 병합하는 함수
    
    # 왼쪽 부분 배열 L과 오른쪽 부분 배열 R 생성
    L = A[left:mid + 1]     # A의 왼쪽 절반
    R = A[mid + 1:right + 1] # A의 오른쪽 절반

    # L, R의 인덱스 초기화
    i = 0  # L의 인덱스
    j = 0  # R의 인덱스
    k = left  # 병합된 결과를 저장할 A의 인덱스

    # 두 배열을 비교하면서 병합
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:  # L의 현재 값이 더 작거나 같으면
            A[k] = L[i]   # A의 k번째 위치에 L의 값을 넣음
            i += 1        # L의 인덱스를 증가
        else:
            A[k] = R[j]   # 그렇지 않으면 R의 값을 넣음
            j += 1        # R의 인덱스를 증가
        k += 1            # 병합된 배열의 다음 위치로 이동

    # L에 남아있는 요소를 A에 복사
    while i < len(L):
        A[k] = L[i]
        i += 1
        k += 1

    # R에 남아있는 요소를 A에 복사
    while j < len(R):
        A[k] = R[j]
        j += 1
        k += 1

# 테스트
A = [12, 11, 13, 5, 6, 7]
print("before sort: ", A)
merge_sort(A, 0, len(A) - 1)
print("after sort: " , A)
