
# imports
```
import pandas as pandas
import numpy as np
```

# Basics

**Create dataframe**
```
df = pandas.DataFrame
```

**Create Dataframe for testing**
```
df = pandas.DataFrame.from_dict({
  "name": ["John", "Alice"],
  "age":  [    38,     43 ]
  })
```

# Reading / Writing

```
dataframe = pd.read_csv ("myfile.csv")
dataframe = pd.read_csv ("myfile.csv", usecols=["mycolumn1", "mycolumn2"]
                                     , skiprows=1)
            pd.read_excel (...)
            pd.readjson (...)

df = dataframe

df.to_csv("outfile.csv", index=False)
```

# Handling

**Show first 5 rows**
```
  df.head ()
```

**Get number of rows**
```
  len(df)
```

**Show dimensions of table (rows * columns)**
```
df.shape
```

**SELECT price, value FROM df**
```
  df[["price","value"]]
```

**SELECT DISTINCT COUNT ("mycol1");**
**Number of different values in "mycol1"**
```
  df["mycol1"].nunique ()
```

**rename columns**
```
  df.columns = ["col1", "col2", "col3", ...]
```


# Prepare data

**SELECT * FROM df WHERE cut = "Ideal"**
```
  df.loc[df["cut"] == "Ideal"]
  df[df["cut"] == "Ideal"]

  # `df["cut"] == "Ideal"` => [True, True, False, True, ....]
  # df.loc[...] selects every row where ... is `True`
```

**delete column:**
```
  df = df.drop(columns=["mycolumn"])
```

**remove duplicates:**
```
  df = df.drop_duplicates ()
```
**INNER JOIN:**
```
pd.merge(df1,df1, left_on = "df1_key_column", right_on="df2_key_column", how="inner")
```

**SORT BY**
```
  df.sort_values(by=["price"])
```
**set datatype of column explicitly**
```
  df["year"].astype("int64")
```

**Change shape of table:**
```
  new_df = pd.melt (df, id_vars=["color", "shape"])
```
  example:
```
  # before:
  #     key-column | 1990 | 1991 | 1992 | 1993 | ...
  #      key1      | val1 | val2 | val3 | val4 | ...
  #      key2      | val5 | val6 | val7 | val8 | ...
  #
  # after:
  #     key-column | variable  |  value
  #       key1     |   1990    |   val1
  #       key1     |   1991    |   val2
  #       key1     |   1992    |   val3
  #       key1     |   1993    |   val4
```

**SELECT SUM(price) FROM df GROUP BY age**
```
df.groupby(["age"])["price"].sum().reset_index()
#                       This is crutial! ↑
```

**SELECT SUM(*) FROM df GROUP BY age**<br/>
Sum up every number and group by *age*.
```
df.groupby(["age"]).sum().reset_index()
#                       This is crutial! ↑
```


# Analyzing


**show: count, mean, min value, quartil 25/50/75, max value**
```
  df.describe ()
  df.["mycolumn"].describe
```


**Add column**
```
  df["newColumn"] = df["price"] / df["value"]
```

**Columns with conditional content**
```
  df["newColumn"] = np.where(df["price"] > 3500, 1, 0)
```
**Convert all values to numbers**
```
df['col'] = pd.to_numeric(df['col'], errors='coerce').fillna(0)
```

**Apply functions to every row**
```
  df["price"].apply (math.ceil) # <-- round all prices
  df["price"].apply (lambda x: x+100)  # mit lambda
```


**Apply a function, that uses multiple columns:**
```
  def is_desired (row):
     return row["price"] / row["carat"] > 3500

  df.apply(is_desired, axis=1)
                      #  ↑ this is crutial
```


