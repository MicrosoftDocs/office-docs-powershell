---
external help file: 
title: Search-CsOnlineTelephoneNumberInventory
schema: 2.0.0
---

# Search-CsOnlineTelephoneNumberInventory

## SYNOPSIS
Use the `Search-CsOnlineTelephoneNumberInventory` cmdlet to reserve a telephone numbers that are in inventory and available to be acquired.

## SYNTAX

```
Search-CsOnlineTelephoneNumberInventory [-Area <Object>] [-CapitalOrMajorCity <Object>]
 [-CountryOrRegion <Object>] [-InventoryType <Object>] [-Quantity <Object>] [-RegionalGroup <Object>]
 [-AreaCode <Object>] [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force]
 [-TelephoneNumber <Object>] [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Acquiring tenant telephone numbers is a two step process.

+12127539059 +1 (212) 753 9059

`Select-CsOnlineTelephoneNumberInventory -ReservationId 76ce711f-9da4-46d9-b81d-471172450443 -TelephoneNumbers 12127539058,12127539059 -Region NOAM -Country US -Area NY -City NY`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Search-CsOnlineTelephoneNumberInventory -InventoryType Service -Region NOAM -Country US -Area NY -City NY -Quantity 10
```

This example reserves 10 Service type telephone numbers in New York, New York.


## PARAMETERS

### -Area
Specifies the target geographical area for the cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CapitalOrMajorCity
Specifies the target geographical city for the cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: City
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegion
Specifies the target country for the cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: Country
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InventoryType
Specifies the target telephone number type for the cmdlet.
Acceptable values are:

"Service" for numbers assigned to conferencing support.

"Subscriber" for numbers supporting public switched telephone network (PSTN) functions.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Quantity
Specifies the quantity of telephone numbers to reserve.
The maximum value is 500.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegionalGroup
Specifies the target geographical region for the cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: Region
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AreaCode
Specifies the area code to search for telephone numbers.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumber
Specifies either an individual telephone number to reserve, or multiple telephone numbers can be entered separated by a comma.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies your tenant identifier.
To find your tenant id use the command: `Get-CsTenant | fl objectid`.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None

## OUTPUTS

###  
This cmdlets returns an Microsoft.Rtc.Management.Hosted.Bvd.Types.NumberReservationResponse object.

## NOTES

## RELATED LINKS

