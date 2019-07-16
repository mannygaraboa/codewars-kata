def adjacent_element_product(array)
  product_array = []
  i = 0
  while i < array.length - 1 
    product = array[i] * array[i+1]
    product_array.push(product)
    i += 1
  end

  product_array.sort! do |a, b|
    b <=> a
  end

  puts product_array
  return product_array[0]
end
adjacent_element_product ([1,4,3,2,6])

=begin
  Other Solution:

  def adjacent_element_product(array)
    array.each_cons(2).map { |a,b| a * b }.max
  end
=end