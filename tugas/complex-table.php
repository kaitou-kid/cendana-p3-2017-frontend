<html>
    <head></head>
    <body>
        
        <?php 
        	$input = 5;
        	$input2 = 6;
        ?>
        <?php $special_number = round($input/2); ?>
        
        <table border=1 cellpadding="15">
            <?php for($i=1; $i<=$input; $i++): ?>
            <tr>
                <?php for($j=1; $j<=$input; $j++): ?>
                    <?php $eliminasi = $special_number-$i ?>
                    <?php $eliminasi2 = $special_number + $i ; ?>
                    <?php $eliminasi3 = $i-$special_number; ?>
                    <?php $eliminasi4 = $input - ($i - $special_number);?>
                    <?php if($j > $eliminasi && $j < $eliminasi2 && $j > $eliminasi3 && $j <= $eliminasi4): ?>
                        <td>
                            <?php echo $i ?>
                        </td>
                    <?php else: ?>
                        <td>&nbsp;</td>
                    <?php endif; ?>
                <?php endfor; ?>
            </tr>
            <?php endfor; ?>
        </table>

        <table border="1" cellpadding="15">
        <?php for($i=1;$i <= $input2;$i++): ?>
        	<tr>
        	<?php for($j=$input2;$j >= 1 ;$j-2): ?>
        		<?php if($j == $input2): ?>
        			<td rowspan=<?php echo $input2;?>>&nbsp;</td>
        			<td colspan=<?php echo $input2;?>>&nbsp;</td>
        		<?php else: ?>
        			<td>&nbsp;</td>
        		<?php endif ?>
        	<?php endfor; ?>
        	</tr>
        <?php endfor; ?>
        </table>
    </body>
</html>

<!-- 
algoritma 

input = 5
spesial number = 3 -> round(5/2)
baris 1 - 1 2 * 4 5
baris 2 - 1 * * * 5
baris 3 - * * * * * 
baris 4 - 1 * * * 5
baris 5 - 1 2 * 4 5

NB : baris yang berisi kolom angka harus kosong
 -->

 <!-- 
	IMPOSIBLE TABLE DENGAN LOOPING
 -->