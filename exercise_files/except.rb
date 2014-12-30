options.except(:locals).each do |key, value|
  if value.is_a?(Hash)
    if value.has_key?(:value)
      value[:value] = gflash_text(key, value[:value], value[:locals])
    else
      value[:value] = gflash_translation(key, value[:locals])
    end
  else
    value = gflash_text(key, value, options[:locals])
  end
  gflash_push(key, value, flash_now)
end