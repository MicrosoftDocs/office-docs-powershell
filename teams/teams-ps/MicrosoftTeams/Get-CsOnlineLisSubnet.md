---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinelissubnet
schema: 2.0.0
title: Get-CsOnlineLisSubnet
---

# Get-CsOnlineLisSubnet

## SYNOPSIS
Retrieves one or more subnets from the location configuration database.

## SYNTAX

```
Get-CsOnlineLisSubnet [[-TenantId] <Guid>] [[-Subnet] <String>] [-Filter <String>] [-IsDebug <Boolean>] [-TargetStore <String>]
 [-NCSApiUrl <String>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Each subnet can be associated with a location. When you use this cmdlet, it retrieves the location information for the subnets. In an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation, this location association notifies an emergency services operator of the caller's location.

By using Enhanced 9-1-1, an emergency operator can identify the location of a caller without asking for that information. When a caller uses a Voice over Internet Protocol (VoIP) connection, you need to extract that information based on various connection factors. The VoIP administrator configures a location map (called a wiremap) that determines a caller's location. This cmdlet retrieves information on associations between physical locations and the subnet through which calls are routed.

The location ID that you associate with the subnet doesn't need to be an existing location.

Use the `Filter` parameter to retrieve subnets that match a filter expression, such as an exact subnet address or a list of subnet addresses.

## EXAMPLES

### Example 1
```powershell
Get-CsOnlineLisSubnet
```

This example retrieves all Location Information Server (LIS) subnets.

### Example 2
```powershell
Get-CsOnlineLisSubnet -Subnet 192.0.2.0
```

This example retrieves the Location Information Server (LIS) subnet for Subnet ID `192.0.2.0`.

### Example 3
```powershell
Get-CsOnlineLisSubnet -Subnet 2001:db8:1234::
```

Example 3 retrieves the Location Information Server (LIS) subnet for Subnet ID `2001:db8:1234::`.

### Example 4: Filter by an exact subnet address
```powershell
Get-CsOnlineLisSubnet -Filter "Subnet -eq '192.0.2.0'"
```

This example returns the LIS subnet whose Subnet value is `192.0.2.0`.
The `-eq` operator matches the specified value.

### Example 5: Filter by multiple subnet addresses
```powershell
Get-CsOnlineLisSubnet -Filter "Subnet -in ['192.0.2.0', '2001:db8:1234::']"
```

This example returns LIS subnets whose Subnet values match either the IPv4 address or the IPv6 address in the filter.

## PARAMETERS

### -Filter

> Applicable: Microsoft Teams

Filters subnets by property values.
Use `Subnet -eq '192.0.2.0'` to match a single address, or `Subnet -in ['192.0.2.0', '2001:db8:1234::']` to match any address in a list.

Pass the filter expression as a string, with double quotation marks around the expression and single quotation marks around string values.
For `-in`, enclose the comma-separated values in square brackets.

> [!NOTE]
> The `-Filter` parameter is available in Teams PowerShell module 8.0.0 or later.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Microsoft Teams

The `-Force` switch suppresses warning and confirmation messages.  
It can be useful in scripting to suppress interactive prompts.
If you don't include the `-Force` switch in the command, the command prompts you for administrative input if required.

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

### -IsDebug

> Applicable: Microsoft Teams

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NCSApiUrl

> Applicable: Microsoft Teams

This parameter is reserved for internal Microsoft use.

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

### -Subnet

> Applicable: Microsoft Teams

The IP address of the subnet. This value can be either IPv4 or IPv6 format.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetStore

> Applicable: Microsoft Teams

This parameter is reserved for internal Microsoft use.

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

### -TenantId

> Applicable: Microsoft Teams

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

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

## Related links
