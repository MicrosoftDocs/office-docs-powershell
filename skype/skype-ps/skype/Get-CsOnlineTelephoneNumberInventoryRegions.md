---
external help file: 
applicable: Skype for Business Online
title: Get-CsOnlineTelephoneNumberInventoryRegions
schema: 2.0.0
---

# Get-CsOnlineTelephoneNumberInventoryRegions

## SYNOPSIS
Use the `Get-CsOnlineTelephoneNumberInventoryRegions` cmdlet to retrieve the regions where specified inventory types are supported.

## SYNTAX

```
Get-CsOnlineTelephoneNumberInventoryRegions [-InventoryType <Object>] [-BypassDualWrite <Object>]
 [-DomainController <Object>] [-Force] [-RegionalGroup <Object>] [-Tenant <Object>] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
Following is an example of the `Get-CsOnlineTelephoneNumberInventoryRegions` cmdlet's console output.

RunspaceId : f90303a9-c6a8-483c-b3b3-a5b8cdbab19c

Id : NOAM

DefaultName : North America

Countries : {}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineTelephoneNumberInventoryRegions -InventoryType Service
```

This example returns the region where the inventory type of "Service" is supported.

### -------------------------- Example 2 --------------------------
```
Get-CsOnlineTelephoneNumberInventoryRegions -InventoryType Subscriber
```

This example returns the region where the inventory type of "Subscriber" is supported.

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

### None

## OUTPUTS

### Deserialized.Microsoft.Skype.EnterpriseVoice.BVDClient.Region
Instance or array of the object.

## NOTES

## RELATED LINKS

