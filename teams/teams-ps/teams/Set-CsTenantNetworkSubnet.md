---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-cstenantnetworksubnet
applicable: Microsoft Teams
title: Set-CsTenantNetworkSubnet
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-CsTenantNetworkSubnet

## SYNOPSIS
As an admin, you can use the Teams PowerShell command, Set-CsTenantNetworkSubnet to define network subnets and assign them to network sites. Each internal subnet may only be associated with one site. The organization's network subnet is used for Location-Based Routing.

## SYNTAX

### Identity (Default)
```
Set-CsTenantNetworkSubnet [[-Identity] <string>] [-Description <string>]
 [-MaskBits <int>] [-NetworkSiteID <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
IP subnets at the location where Teams endpoints can connect to the network must be defined and associated to a defined network in order to enforce toll bypass. Multiple subnets may be associated with the same network site, but multiple sites may not be associated with a same subnet. This association of subnets enables Location-Based Routing to locate the endpoints geographically to determine if a given PSTN call should be allowed. Both IPv4 and IPv6 subnets are supported. When determining if a Teams endpoint is located at a site an IPv6 address will be checked for a match first.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTenantNetworkSubnet -Identity "192.168.0.1" -MaskBits "24" -NetworkSiteID "site1"
```

The command shown in Example 1 set the network subnet '192.168.0.1'. The subnet is in IPv4 format, and the subnet is assigned to network site 'site1'. The maskbits is set to 24.

IPv4 format subnet accepts maskbits from 0 to 32 inclusive.

### Example 2
```powershell
PS C:\> Set-CsTenantNetworkSubnet -Identity "2001:4898:e8:25:844e:926f:85ad:dd8e" -MaskBits "120" -NetworkSiteID "site1" -Description "Subnet 2001:4898:e8:25:844e:926f:85ad:dd8e"
```

The command shown in Example 2 set the network subnet '2001:4898:e8:25:844e:926f:85ad:dd8e' with description 'Subnet 2001:4898:e8:25:844e:926f:85ad:dd8e'. The subnet is in IPv6 format, and the subnet is assigned to network site 'site1'. The maskbits is set to 120.

IPv6 format subnet accepts maskbits from 0 to 128 inclusive.

## PARAMETERS

### -Identity
Unique identifier for the network subnet to be set.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Provide a description of the network subnet to identify purpose of setting it.

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

### -MaskBits
This parameter determines the length of bits to mask to the subnet.

IPv4 format subnet accepts maskbits from 0 to 32 inclusive. IPv6 format subnet accepts maskbits from 0 to 128 inclusive.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkSiteID
NetworkSiteID is the identifier for the network site which the current network subnet is associating to.

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

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

## OUTPUTS

## NOTES

## RELATED LINKS
[New-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/teams/new-cstenantnetworksubnet)

[Remove-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/teams/remove-cstenantnetworksubnet)

[Get-CsTenantNetworkSubnet](https://learn.microsoft.com/powershell/module/teams/get-cstenantnetworksubnet)
