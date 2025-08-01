---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenanttrustedipaddress
schema: 2.0.0
title: Set-CsTenantTrustedIPAddress
---

# Set-CsTenantTrustedIPAddress

## SYNOPSIS
Changes the definition of network IP addresses.

## SYNTAX

### Identity (Default)
```
Set-CsTenantTrustedIPAddress [-Tenant <System.Guid>] [-MaskBits <System.Int32>] [-Description <String>]
 [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTenantTrustedIPAddress [-Tenant <System.Guid>] [-MaskBits <System.Int32>] [-Description <String>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
External trusted IPs are the Internet external IPs of the enterprise network and are used to determine if the user's endpoint is inside the corporate network before checking for a specific site match. If the user's external IP matches one defined in the trusted list, then Location-Based Routing will check to determine which internal subnet the user's endpoint is located. If the user's external IP doesn't match one defined in the trusted list, the endpoint will be classified as being at an unknown and any PSTN calls to/from an LBR enabled user are blocked.

Both IPv4 and IPv6 trusted IP addresses are supported.

When the client is sending the trusted IP address, please make sure we have already whitelisted the IP address by running this command-let, otherwise the request will be rejected. If you are only adding the IPv4 address by running this command-let, but your client are only sending and IPv6 address, it will be rejected.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> Set-CsTenantTrustedIPAddress -Identity "192.168.0.1" -Description "External IP 192.168.0.1"
```

The command shown in Example 1 created the IP address '192.168.0.1' with description 'External IP 192.168.0.1'.

###-------------------------- Example 2 --------------------------
```powershell
PS C:\> Set-CsTenantTrustedIPAddress -Identity "192.168.0.2" -MaskBits "24"
```

The command shown in Example 2 set the IP address '192.168.0.2'. The IP address is in IPv4 format, and the maskbits is set to 24.

IPv4 format IP address accepts maskbits from 0 to 32 inclusive.

###-------------------------- Example 3 --------------------------
```powershell
PS C:\> Set-CsTenantTrustedIPAddress -Identity "2001:4898:e8:25:844e:926f:85ad:dd8e" -Description "IPv6 IP address"
```

The command shown in Example 3 set the IP address '2001:4898:e8:25:844e:926f:85ad:dd8e' with description 'IPv6 IP address'.

IPv6 format IP address accepts maskbits from 0 to 128 inclusive.

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

### -Description
Provide a description of the network site to identify purpose of creating it.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

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
Unique identifier for the IP address to be set.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
The Instance parameter allows you to pass a reference to an object to the cmdlet, rather than set individual parameter values.
You can retrieve this object reference by calling the `Get-CsTenantTrustedIPAddress` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MaskBits
This parameter determines the length of bits to mask to the subnet.

IPv4 format IP address accepts maskbits from 0 to 32 inclusive. IPv6 format IP address accepts maskbits from 0 to 128 inclusive.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose IP addresses are being created. For example:

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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
