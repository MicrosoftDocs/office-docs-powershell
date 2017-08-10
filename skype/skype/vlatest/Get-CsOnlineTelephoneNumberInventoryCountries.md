---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Get-CsOnlineTelephoneNumberInventoryCountries

## SYNOPSIS
Use the Get-CsOnlineTelephoneNumberInventoryCountries cmdlet to retrieve a list of countries with telephone number inventories by specified region and telephone number inventory types.

## SYNTAX

```
Get-CsOnlineTelephoneNumberInventoryCountries [-InventoryType <Object>] [-RegionalGroup <Object>]
 [-BypassDualWrite <Object>] [-CountryOrRegion <Object>] [-DomainController <Object>] [-Force]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Following is an example of the Get-CsOnlineTelephoneNumberInventoryCountries cmdlet's console output.

RunspaceId : af39ca40-06a7-473b-8963-668865d15e87

Id : US

DefaultName : United States

Areas : {}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

This example returns the countries in the north American region that contain service type telephone numbers.

Get-CsOnlineTelephoneNumberInventoryCountries -InventoryType Service -RegionalGroup NOAM

## PARAMETERS

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

### -RegionalGroup
Specifies the target geographical region for the cmdlet.
For a list of geographical codes see Skype for Business geographical codes (http://go.microsoft.com/fwlink/?LinkId=615951).

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

### -CountryOrRegion
Specifies the target country for the cmdlet.
For a list of geographical codes see Skype for Business geographical codes (http://go.microsoft.com/fwlink/?LinkId=615951).

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

### -Tenant
This parameter is reserved for internal Microsoft use.

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
This cmdlet returns an instance, or an array of Deserialized.Microsoft.Skype.EnterpriseVoice.BVDClient.Country objects.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d30e5654-edac-449d-b5a7-c64210d5cedf(OCS.15).aspx)

