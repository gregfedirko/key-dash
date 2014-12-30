def _open_file(file_like, appendmat):
    ''' Open `file_like` and return as file-like object '''
    if isinstance(file_like, string_types):
        try:
            return open(file_like, 'rb')
        except IOError as e:
            if appendmat and not file_like.endswith('.mat'):
                file_like += '.mat'
                try:
                    return open(file_like, 'rb')
                except IOError:
                    pass  # Rethrow the original exception.
            raise
    # not a string - maybe file-like object
    try:
        file_like.read(0)
    except AttributeError:
        raise IOError('Reader needs file name or open file-like object')
    return file_like

