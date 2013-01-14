/*

   Get the pixel 'row height' (or predefine)
   Divide the viewport height by 2 to get the 'center of the viewport'
   Divide the viewport height by 4 to get the scroll 'threshold'

   Divide the 'row height' by the 'viewport height' plus the 'threshold' then divide by 'row height' to get the number of loadable rows in a view
   

   ---------------------------  <-- viewport top
  
   - - - - - - - - - - - - - -  <-- threshold

    - - - - - - - - - - - - -   <-- center of viewport

   - - - - - - - - - - - - - -  <-- threshold

   ---------------------------  <-- viewport bottom

   init():
     height_of_viewport = 600px
     row_height = 20px
     center_of_viewport = (height_of_viewport / 2) # 300px 
     threshold = (height_of_viewport / 4) # 150px
     height_of_rows = threshold + height_of_viewport
     row_offset = 0
     movement = 0

     // Load X number of rows starting at row_offset zero
     drawRows(row_offset, height_of_rows / row_height)


   onScrollEvent(scrollChange):
     movement = scrollChange + movement
     if movement >= threshold:
       scroll(movement)
       movement = center_of_viewport


   scroll(moved):
     new_offset = (moved * row_height) + row_offset
     drawRows(offset_adjustment, height_of_rows / row_height)
   
   drawRows(offset_adjustment, rows):
     // The max number of rows we should keep around
     max_rows = (rows / 4) + rows

     // If the number of rows currently loaded is less then max_rows
     if loaded_rows < max_rows:
        rows = loaded_rows + offset_adjustment
        row_offset = row_offset + offset_adjustment
        new_rows = getRows(row_offset, rows)
        // Append the new rows to the end of the table



     


        Humana - 5,000  232.00 month
        Humana - 2,500  336.00 month
        
        Wednsday 10:30 - 11707 Orsinger lane, 78230

