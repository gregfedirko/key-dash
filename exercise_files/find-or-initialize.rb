def find_or_initialize_with_errors(required_attributes, attributes, error=:invalid)
  attributes = attributes.slice(*required_attributes).with_indifferent_access
  attributes.delete_if { |key, value| value.blank? }

  if attributes.size == required_attributes.size
    record = find_first_by_auth_conditions(attributes)
  end

  unless record
    record = new

    required_attributes.each do |key|
      value = attributes[key]
      record.send("#{key}=", value)
      record.errors.add(key, value.present? ? error : :blank)
    end
  end

  record
end