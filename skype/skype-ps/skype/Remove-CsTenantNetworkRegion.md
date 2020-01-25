---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/remove-cstenantnetworkregion
applicable: Skype for Business Online
title: Remove-CsTenantNetworkRegion
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Remove-CsTenantNetworkRegion

## SYNOPSIS
Use the `Remove-CsTenantNetworkRegion` cmdlet to remove a tenant network region.


## SYNTAX

```
Remove-CsTenantNetworkRegion [-Tenant <System.Guid>] [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-CsTenantNetworkRegion` cmdlet removes an existing tenant network region.

A network region contains a collection of network sites.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> Remove-CsTenantNetworkRegion -Identity "RedmondRegion"
```

The command shown in Example 1 removes 'RedmondRegion'.

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

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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
Unique identifier for the network region to be removed.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose network regions are being removed. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: System.Guid
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsGlobalRelativeIdentity

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
