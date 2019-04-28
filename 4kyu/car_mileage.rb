# https://www.codewars.com/kata/52c4dd683bfd3b434c000292

def is_interesting(number, awesome_phrases) 
  n = 2
  3.times do
    unless number < 100
      str = number.to_s
      return n if "1234567890".include?(str) or
                  "9876543210".include?(str) or
                  awesome_phrases.include?(number) or
                  str == str.reverse or
                  str.chars.uniq.size == 1 or
                  str[1..-1].chars.all? { |i| i == '0' }
    end
    number += 1
    n = 1
  end
  0
end