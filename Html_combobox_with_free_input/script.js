function _ComboBoxText_init(ComboBoxText_element)
{
  let p = ComboBoxText_element;

  let text = p.children[0];
  let list = p.children[1].children[0];

  // =================================
  // === setup helper functions ===
  // =================================

  const _dom_removeChildren = function(domElement)
  {
    while (domElement.lastChild) {
        domElement.removeChild(domElement.lastChild);
    }
  }

  // =================================
  // === setup interface functions ===
  // =================================
  {
    p.value = function()
    {
      return text.value;
    }

    p.values_clear = function()
    {
      _dom_removeChildren (list);
    }

    p.values_add = function(value)
    {
      let option = document.createElement("option");
      option.value = value;
      option.text = value;
      list.appendChild (option);
    }

    p.setValues = function(valueList)
    {
      p.values_clear();
      for (i=0;i<valueList.length;++i)
      {
        value = valueList[i];
        p.values_add(value);
      }
    }
  }


  // =============================
  // === setup event listeners ===
  // =============================
  {
    text.addEventListener("keydown", e =>
    {
      if ("ArrowDown" == e.key){
        e.preventDefault ();
        list.focus ();
      }
    });


    text.addEventListener("change", e =>
    {
      p.dispatchEvent(e);
    });



    list.addEventListener("change", e =>
    {
      text.value = list.value;
    });



    list.addEventListener("keydown", e =>
    {
      if (
        ( "ArrowUp" == e.key && 0 == list.selectedIndex )
        || "Escape" == e.key
        || "Enter" == e.key
        ) {
        e.preventDefault ();
        text.focus ();
      }
    });
  }
}

function ComboBoxText_init_all()
{
  elems = document.getElementsByClassName("ComboBoxText");
  for (let i = 0; i<elems.length; ++i)
  {
    let elem = elems[i];
    _ComboBoxText_init(elem);
  }
}