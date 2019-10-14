---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: New-CsTenantNetworkSubnet
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsTenantNetworkSubnet

## SYNOPSIS
As an Admin, you can use the Windows PowerShell command, New-CsTenantNetworkSubnet to define network subnets and assign them to network sites. Each internal subnet may only be associated with one site. Tenant network subnet is used for Location Based Routing.

## SYNTAX

### Identity (Default)
```
New-CsTenantNetworkSubnet [-Tenant <System.Guid>] [-Description <String>] [-NetworkSiteID <String>]
 -MaskBits <Int32> [-Identity] <XdsGlobalRelativeIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTenantNetworkSubnet [-Tenant <System.Guid>] -SubnetID <String> [-Description <String>]
 [-NetworkSiteID <String>] -MaskBits <Int32> [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
IP subnets at the location where Teams endpoints can connect to the network must be defined and associated to a defined network in order to enforce toll bypass. Multiple subnets may be associated with the same network site, but multiple sites may not be associated with a same subnet. This association of subnets enables Location-Based routing to locate the endpoints geographically to determine if a given PSTN call should be allowed. Both IPv4 and IPv6 subnets are supported. When determining if a Teams endpoint is located at a site an IPv6 address will be checked for a match first.

When the client is sending the network subnet, please make sure we have already whitelisted the IP address by running this command-let, otherwise the request will be rejected. If you are only adding the IPv4 address by running this command-let, but your client are only sending and IPv6 address, it will be rejected.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> New-CsTenantNetworkSubnet -SubnetID "192.168.0.1" -MaskBits "24" -NetworkSiteID "site1"
```

The command shown in Example 1 created the network subnet '192.168.0.1' with no description. The subnet is IPv4 format, and the subnet is assigned to network site 'site1'. The maskbits is set to 24.

IPv4 format subnet accepts maskbits from 0 to 32 inclusive.

###-------------------------- Example 2 --------------------------
```powershell
PS C:\> New-CsTenantNetworkSubnet -SubnetID "2001:4898:e8:25:844e:926f:85ad:dd8e" -MaskBits "120" -NetworkSiteID "site1"
```

The command shown in Example 2 created the network subnet '2001:4898:e8:25:844e:926f:85ad:dd8e' with no description. The subnet is IPv6 format, and the subnet is assigned to network site 'site1'. The maskbits is set to 120.

IPv6 format subnet accepts maskbits from 0 to 128 inclusive.

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
Provide a description of the network subnet to identify purpose of creating it.

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
Unique identifier for the network subnet to be created.

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

### -MaskBits
This parameter determines the length of bits to mask to the subnet.

IPv4 format subnet accepts maskbits from 0 to 32 inclusive. IPv6 format subnet accepts maskbits from 0 to 128 inclusive.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
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

### -SubnetID
The name of the network subnet. This must be a unique and valid IPv4 or IPv6 address. You cannot specify an NetworkSubnetID and an Identity at the same time.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose network subnets are being created. For example:

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

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
