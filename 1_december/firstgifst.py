def prepare_gifts(gifts):
    # Filtrar y eliminar duplicados en una sola pasada, preservando el orden
    seen = set()
    valid_gifts = []
    for gift in gifts:
        if isinstance(gift, int) and gift not in seen:
            seen.add(gift)
            valid_gifts.append(gift)
    # Ordenar la lista
    return sorted(valid_gifts)

# Ejemplo
my_list = [3, 1, 2, 3, 4, 0, 0, 1, 2, 3, 4, 5]
new_list = prepare_gifts(my_list)
print("Ordenada:", new_list)