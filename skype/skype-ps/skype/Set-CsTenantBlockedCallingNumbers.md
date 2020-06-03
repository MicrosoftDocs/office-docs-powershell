---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Set-CsTenantBlockedCallingNumbers
schema: 2.0.0
manager: roykuntz
author: junya
ms.author: junya
---

# Set-CsTenantBlockedCallingNumbers

## SYNOPSIS
Use the Set-CsTenantBlockedCallingNumbers cmdlet to set tenant blocked calling numbers setting.

## SYNTAX

```
Set-CsTenantBlockedCallingNumbers [-Force] [-Name <Object>] [-WhatIf] [-Confirm] [[-Identity] <Object>]
 [-InboundExemptNumberPatterns <Object>] [-Tenant <Object>] [-InboundBlockedNumberPatterns <Object>]
 [-Enabled <Object>] [-Instance <Object>]
```

## DESCRIPTION
Skype for Business Online Calling Plans now supports blocking of inbound calls from the public switched telephone network (PSTN). This feature allows a tenant-global list of number patterns to be defined so that the caller ID of every incoming PSTN call to the tenant can be checked against the list for a match. If a match is made, an incoming call is rejected.

The tenant blocked calling numbers includes a list of inbound blocked number patterns. Number patterns are managed through the CsInboundBlockedNumberPattern commands New, Get, Set, and Remove. You can manage a given pattern by using these cmdlets, including the ability to toggle the activation of a given pattern. 

The scope of tenant blocked calling numbers is global across the given tenant. This command-let can also turn on/off the blocked calling numbers setting in tenant level.

To get the current tenant blocked calling numbers setting, use Get-CsTenantBlockedCallingNumbers

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsTenantBlockedCallingNumbers -Enabled $false
```

This example turns off the tenant blocked calling numbers setting. No inbound number will be blocked from this feature.  

### -------------------------- Example 2 --------------------------
```
Set-CsTenantBlockedCallingNumbers -Enabled $true
```

This example turns on the tenant blocked calling numbers setting. Inbound calls will be blocked based on the list of blocked number patterns.

### -------------------------- Example 3 --------------------------
```
Set-CsTenantBlockedCallingNumbers -Name "MyCustomBlockedCallingNumbersName"
```

This example renames the current blocked calling numbers with "MyCustomBlockedCallingNumbersName". No change is made besides the Name field change.

### -------------------------- Example 4 --------------------------
```
Set-CsTenantBlockedCallingNumbers -InboundBlockedNumberPatterns @((New-CsInboundBlockedNumberPattern -Name "AnonymousBlockedPattern" -Enabled $true -Pattern "^(?!)Anonymous"))
```

This example sets the tenant blocked calling numbers with a new list of inbound blocked number patterns. There is a new InboundBlockedNumberPattern being created. The pattern name is "AnonymousBlockedPattern". The pattern is turned on. The pattern is a normalization rule which contains "Anonymous".

Note that if the current InboundBlockedNumberPatterns already contains a list of patterns while a new pattern needs to be created, this example will wipe out the existing patterns and only add the new one. Please save the current InboundBlockedNumberPatterns list before adding new patterns.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The switch to turn on or turn off the blocked calling numbers setting.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch overrides the confirmation prompt displayed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter is a unique identifier that designates the scope, and for per-user scope a name, which identifies the TenantBlockedCallingNumbers to set.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundBlockedNumberPatterns
The InboundBlockedNumberPatterns parameter contains the list of InboundBlockedNumberPatterns.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InboundExemptNumberPatterns
The InboundExemptNumberPatterns parameter contains the list of InboundExemptNumberPatterns.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
This parameter allows you to provide a name to the TenantBlockedCallingNumbers setting.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: -Tenant "38aad667-af54-4397-aaa7-e94c79ec2308".
You can find your tenant ID by running this command: Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
[Get-CsTenantBlockedCallingNumbers](Get-CsTenantBlockedCallingNumbers.md)
