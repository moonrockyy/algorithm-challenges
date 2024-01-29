#include <iostream>
#include <algorithm>
#include <iomanip>

using namespace std;

int main() {
    int a, b, c, d;
    cin >> a;
    cin >> b;
    cin >> c;
    cin >> d;
    
    cout << "Sum : " << fixed << setprecision(6) << float(a + b + c + d) << endl;
    cout << "Average : " << fixed << setprecision(6) << float(a + b + c + d) / 4.0 << endl;
    cout << "Product : " << fixed << setprecision(6) << float(a * b * c * d) << endl;
    cout << "Max : " << fixed << setprecision(6) << float(max({a, b, c, d})) << endl;
    cout << "Min : " << fixed << setprecision(6) << float(min({a, b, c, d})) << endl;
    
    return 0;
}
