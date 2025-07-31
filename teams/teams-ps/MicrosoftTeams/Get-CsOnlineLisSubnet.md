---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinelissubnet
schema: 2.0.0
title: Get-CsOnlineLisSubnet
---

# Get-CsOnlineLisSubnet

## SYNOPSIS
Retrieves one or more subnets from the location configuration database.

## SYNTAX

```
Get-CsOnlineLisSubnet [[-TenantId] <Guid>] [[-Subnet] <String>] [-IsDebug <Boolean>] [-TargetStore <String>]
 [-NCSApiUrl <String>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Each subnet can be associated with a location, in which case this cmdlet will also retrieve the location information of the subnets. This location association is used in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without having to ask the caller for that information. In the case where a caller is calling from a Voice over Internet Protocol (VoIP) connection, that information must be extracted based on various connection factors. The VoIP administrator must configure a location map (called a wiremap) that will determine a caller's location. This cmdlet retrieves information on associations between physical locations and the subnet through which calls are routed.

The location ID which is associating with the subnet is not required to be the existing location.

## EXAMPLES

### Example 1
```
Get-CsOnlineLisSubnet
```

Example 1 retrieves all Location Information Server (LIS) subnets.

### Example 2
```
Get-CsOnlineLisSubnet -Subnet 10.106.89.12
```

Example 2 retrieves the Location Information Server (LIS) subnet for Subnet ID "10.106.89.12".

### Example 3
```
Get-CsOnlineLisSubnet -Subnet 2001:4898:e8:6c:90d2:28d4:76a4:ec5e
```

Example 2 retrieves the Location Information Server (LIS) subnet for Subnet ID "2001:4898:e8:6c:90d2:28d4:76a4:ec5e".

## PARAMETERS

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

Required: False
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Guid

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
