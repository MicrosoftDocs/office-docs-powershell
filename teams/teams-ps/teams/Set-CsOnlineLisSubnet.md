---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinelissubnet
applicable: Microsoft Teams
title: Set-CsOnlineLisSubnet
schema: 2.0.0
author: kaishuipinggai
ms.author: serdars
ms.reviewer:
---

# Set-CsOnlineLisSubnet

## SYNOPSIS
Creates a Location Information Server (LIS) subnet, creates an association between a subnet and a location, or modifies an existing subnet and its associated location. The association between a subnet and location is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

## SYNTAX

```
Set-CsOnlineLisSubnet [[-TenantId] <Guid>] [-Subnet] <String> -LocationId <Guid> [-Description <String>]
 [-IsDebug <Boolean>] [-TargetStore <String>] [-NCSApiUrl <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet allows the administrator to map physical locations to the subnet through which the client is connected.

The location ID which is associating with the subnet is not required to be the existing location.

LIS subnets must be defined by the Network ID matching the subnet IP range assigned to clients. For example, the network ID for a client IP/mask of 10.10.10.150/25 is 10.10.10.128. For more information, see [Understand TCP/IP addressing and subnetting basics](https://learn.microsoft.com/troubleshoot/windows-client/networking/tcpip-addressing-and-subnetting).

## EXAMPLES

### Example 1
```
Set-CsOnlineLisSubnet -Subnet 10.10.10.128 -LocationId f037a9ad-4334-455a-a1c5-3838ec0f5d02 -Description "Subnet 10.10.10.128"
```

Example 1 creates the Location Information Service subnet "10.10.10.128" associated to Location ID "f037a9ad-4334-455a-a1c5-3838ec0f5d02".

### Example 2
```
Set-CsOnlineLisSubnet -Subnet 2001:4898:e8:6c:90d2:28d4:76a4:ec5e -LocationId f037a9ad-4334-455a-a1c5-3838ec0f5d02 -Description "Subnet 2001:4898:e8:6c:90d2:28d4:76a4:ec5e"
```

Example 2 creates the Location Information Service subnet in IPv6 format "2001:4898:e8:6c:90d2:28d4:76a4:ec5e" associated to Location ID "f037a9ad-4334-455a-a1c5-3838ec0f5d02".

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Specifies the administrator defined description of the Location Information Service subnet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDebug
This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationId
Specifies the unique identifier of the location to be modified.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -NCSApiUrl
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Subnet
The IP address of the subnet. This value can be either IPv4 or IPv6 format.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetStore
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 0
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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Guid

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
