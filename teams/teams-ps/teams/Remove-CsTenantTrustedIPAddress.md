---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-cstenanttrustedipaddress
applicable: Microsoft Teams
title: Remove-CsTenantTrustedIPAddress
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Remove-CsTenantTrustedIPAddress

## SYNOPSIS
Use the `Remove-CsTenantTrustedIPAddress` cmdlet to remove a tenant trusted IP address.

## SYNTAX

```
Remove-CsTenantTrustedIPAddress [-Tenant <System.Guid>] [-Identity] <XdsGlobalRelativeIdentity> [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-CsTenantTrustedIPAddress` cmdlet removes an existing tenant trusted IP address.

External trusted IPs are the Internet external IPs of the enterprise network and are used to determine if the user's endpoint is inside the corporate network before checking for a specific site match. If the user's external IP matches one defined in the trusted list, then Location-Based Routing will check to determine which internal subnet the user's endpoint is located. If the user's external IP doesn't match one defined in the trusted list, the endpoint will be classified as being at an unknown and any PSTN calls to/from an LBR enabled user are blocked.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> Remove-CsTenantTrustedIPAddress -Identity "192.168.0.1"
```

The command shown in Example 1 removes '192.168.0.1'.

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
Unique identifier for the trusted IP address to be removed.

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
Globally unique identifier (GUID) of the tenant account whose trusted IP address are being removed. For example:

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsGlobalRelativeIdentity

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
