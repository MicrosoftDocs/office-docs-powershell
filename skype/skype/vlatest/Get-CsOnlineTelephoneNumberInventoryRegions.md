---
applicable: Skype for Business Online
schema: 2.0.0
---

# Get-CsOnlineTelephoneNumberInventoryRegions

## SYNOPSIS
Use the Get-CsOnlineTelephoneNumberInventoryRegions cmdlet to retrieve the regions where specified inventory types are supported.

## SYNTAX

```
Get-CsOnlineTelephoneNumberInventoryRegions [-InventoryType <Object>] [-BypassDualWrite <Object>]
 [-DomainController <Object>] [-Force] [-RegionalGroup <Object>] [-Tenant <Object>] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
Following is an example of the Get-CsOnlineTelephoneNumberInventoryRegions cmdlet's console output.

RunspaceId : f90303a9-c6a8-483c-b3b3-a5b8cdbab19c

Id : NOAM

DefaultName : North America

Countries : {}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

This example returns the region where the inventory type of "Service" is supported.

Get-CsOnlineTelephoneNumberInventoryRegions -InventoryType Service

### -------------------------- Example 2 -------------------------- (Skype for Business Online)
```

```

This example returns the region where the inventory type of "Subscriber" is supported.

Get-CsOnlineTelephoneNumberInventoryRegions -InventoryType Subscriber

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
Returns an instance, or an array of Deserialized.Microsoft.Skype.EnterpriseVoice.BVDClient.Region objects.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/fe898907-a83f-4f60-9ca5-7e4ef0dd326d(OCS.15).aspx)

