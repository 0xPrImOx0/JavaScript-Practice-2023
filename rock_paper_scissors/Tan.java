import java.util.ArrayList;

public class Tan {
    public static void main(String[] args) {
        ArrayList<int[]> preDefinedNumbers = new ArrayList<>();

        int[] num1 = { 1, 2, 3 };
        int[] num2 = { 4, 5, 6 };
        int[] num3 = { 7, 8, 9 };

        preDefinedNumbers.add(num1);
        preDefinedNumbers.add(num2);
        preDefinedNumbers.add(num3);

        int accumulator;

        for (int i = preDefinedNumbers.size() - 1; i >= 0; i--) {
            accumulator = 0;
            for (int num : preDefinedNumbers.get(i)) {
                accumulator += num;
            }

            int[] array = preDefinedNumbers.get(i);

            for (int k = array.length - 1; k >= 0; k--) {
                System.out.print(array[k] + " ");
            }

            System.out.println(accumulator);
        }
    }
}