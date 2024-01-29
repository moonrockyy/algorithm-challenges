#include <iostream>
#include <cmath>

using namespace std;

int reverse(int x) {
    int i = 2;
    int out = 0;
        
    while (i >= 0) {
        out += (x % 10) * (pow(10, i));
        x = x / 10;
        i--;
    }
    
    return out;
}

int main() {
    int a, b;
    
    cin >> a;
    cin >> b;
    
    if (reverse(a) > reverse(b)) {
        cout << b << " < " << a;
    } else if (reverse(b) > reverse(a)) {
        cout << a << " < " << b;
    } else {
        cout << a << " = " << b;
    }
    return 0;
}
