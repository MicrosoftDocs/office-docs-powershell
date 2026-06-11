---
author: tomkau
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-cstenanttrustedipaddress
schema: 2.0.0
title: New-CsTenantTrustedIPAddress
---

# New-CsTenantTrustedIPAddress

## SYNOPSIS
Creates a new IP address.

## SYNTAX

### Identity (Default)
```
New-CsTenantTrustedIPAddress [-Tenant <System.Guid>] [-MaskBits <System.Int32>] [-Description <String>]
 [-Identity] <XdsGlobalRelativeIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTenantTrustedIPAddress [-Tenant <System.Guid>] -IPAddress <String> [-MaskBits <System.Int32>]
 [-Description <String>] [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
External trusted IPs are the Internet external IPs of the enterprise network and are used to determine if the user's endpoint is inside the corporate network before checking for a specific site match. If the user's external IP matches one defined in the trusted list, then Location-Based Routing will check to determine which internal subnet the user's endpoint is located. If the user's external IP doesn't match one defined in the trusted list, the endpoint will be classified as being at an unknown and any PSTN calls to/from an LBR enabled user are blocked.

Both IPv4 and IPv6 trusted IP addresses are supported. You can define an unlimited number of external subnets for a tenant.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> New-CsTenantTrustedIPAddress -IPAddress "192.168.0.1"
```

The command shown in Example 1 created the IP address '192.168.0.1' with no description. The IP address is in IPv4 format, and the maskbits is set to 32 by default.

###-------------------------- Example 2 --------------------------
```powershell
PS C:\> New-CsTenantTrustedIPAddress -IPAddress "192.168.2.0" -MaskBits "24"
```

The command shown in Example 2 created the IP address '192.168.2.0' with no description. The IP address is in IPv4 format, and the maskbits is set to 24.

IPv4 format IP address accepts maskbits from 0 to 32 inclusive.

###-------------------------- Example 3 --------------------------
```powershell
PS C:\> New-CsTenantTrustedIPAddress -IPAddress "2001:4898:e8:25:844e:926f:85ad:dd8e" -Description "IPv6 IP address"
```

The command shown in Example 3 created the IP address '2001:4898:e8:25:844e:926f:85ad:dd8e' with description. The IP address is in IPv6 format, and the maskbits is set to 128 by default.

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
Provide a description of the trusted IP address to identify purpose of creating it.

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
Unique identifier for the IP address to be created.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
PARAMVALUE: SwitchParameter

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

### -IPAddress
The name of the IP address. This must be a unique and valid IPv4 or IPv6 address. You cannot specify an IP address and an Identity at the same time.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaskBits
This parameter determines the length of bits to mask to the subnet.

IPv4 format IP address accepts maskbits from 0 to 32 inclusive. If not provided, the value is set to 32.

IPv6 format IP address accepts maskbits from 0 to 128 inclusive. If not provided, the value is set to 128.

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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
