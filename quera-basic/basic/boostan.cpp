#include <iostream>
using namespace std;
int main() {
    int x, y, x1, y1;
    
    cin >> x >> y;
    cin >> x1 >> y1;
    
    if (x1 > x) {
        cout << "Right";
    } else {
        cout << "Left";
    }
    
    return 0;
}
