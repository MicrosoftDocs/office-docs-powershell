---
external help file: 
applicable: Skype for Business Online
title: Get-CsOnlineTelephoneNumberInventoryTypes
schema: 2.0.0
---

# Get-CsOnlineTelephoneNumberInventoryTypes

## SYNOPSIS
Use the Get-CsOnlineTelephoneNumberInventoryTypes cmdlet to retrieve the telephone number inventory types that are defined.

## SYNTAX

```
Get-CsOnlineTelephoneNumberInventoryTypes [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
This is an example of Get-CsOnlineTelephoneNumberInventoryTypes cmdlet's console output.

RunspaceId : af39ca40-06a7-473b-8963-668865d15e87

Id : Service

Description : Inventory of service telephone numbers

Regions : {}

Reservations : {}

RunspaceId : af39ca40-06a7-473b-8963-668865d15e87

Id : Subscriber

Description : Inventory of subscriber telephone numbers

Regions : {}

Reservations : {}

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsOnlineTelephoneNumberInventoryTypes
```

This example retrieves all the telephone number types for your organization.


## PARAMETERS

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

### Deserialized.Microsoft.Skype.EnterpriseVoice.BVDClient.Inventory
Instance or array of the object.

## NOTES

## RELATED LINKS

