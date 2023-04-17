import {
  useEffect,
  useState
} from "react";

import {
  ParamsContainer,
  FilterTypeButton
} from "./styles";

interface FilterProps {
  onclick: (e: string) => void;
}

interface CategoryProps {
  name: string;
  id: string;
}

export function Filter({ onclick }: FilterProps) {
  const [isChecked, setIsChecked] = useState(false)
  const [categories, setCategories] = useState<CategoryProps[]>([])

  function handleSelectFilter(filter: string) {
    setIsChecked(!isChecked);
    onclick(filter)
  }

  async function getCategories() {
    event?.preventDefault()
    try {
      const response = await fetch('/api/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const categories = await response.json();
      setCategories(categories.data);
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (

    <ParamsContainer>
      {categories.map((category) => (
        <FilterTypeButton
          key={category.id}
          value={category.name}
          variant="checked"
          onClick={() => handleSelectFilter(category.id)}
        >
          {category.name}
        </FilterTypeButton>
      ))}

    </ParamsContainer >
  )
}