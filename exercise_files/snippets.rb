def find_for_authentication(tainted_conditions)
  find_first_by_auth_conditions(tainted_conditions)
end

def find_first_by_auth_conditions(tainted_conditions, opts={})
  to_adapter.find_first(devise_parameter_filter.filter(tainted_conditions).merge(opts))
end

# Find or initialize a record setting an error if it can't be found.
def find_or_initialize_with_error_by(attribute, value, error=:invalid) #:nodoc:
  find_or_initialize_with_errors([attribute], { attribute => value }, error)
end