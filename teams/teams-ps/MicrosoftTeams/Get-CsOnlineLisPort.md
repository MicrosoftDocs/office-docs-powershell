---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinelisport
schema: 2.0.0
title: Get-CsOnlineLisPort
---

# Get-CsOnlineLisPort

## SYNOPSIS
Retrieves one or more ports from the location configuration database.

## SYNTAX

```
Get-CsOnlineLisPort [[-ChassisID] <string>] [-Filter <string>] [-Force] [-IsDebug <bool>] [-NCSApiUrl <string>] [-PortID <string>] [-TargetStore <string>] [<CommonParameters>]
```

## DESCRIPTION
Each port can be associated with a location. This cmdlet retrieves the location information for the ports. Use this location association in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without asking the caller for that information. When a caller uses a Voice over Internet Protocol (VoIP) connection, the operator extracts location information based on various connection factors. The VoIP administrator configures a location map (called a wiremap) that determines a caller's location. This cmdlet retrieves information on associations between physical locations and the port through which the client is connected.

Use the Filter parameter to retrieve ports that match a filter expression, such as ports on a list of switches identified by their chassis IDs.

## EXAMPLES

### Example 1
```powershell
Get-CsOnlineLisPort
```
```output
PortID  ChassisID         LocationId                           Description
------  ---------         ----------                           -----------
Port1   AA-BB-CC-DD-EE-01 11111111-1111-1111-1111-111111111111
Port2   AA-BB-CC-DD-EE-02 22222222-2222-2222-2222-222222222222
```

Example 1 retrieves all Location Information Server (LIS) ports and any associated locations.

### Example 2
```powershell
Get-CsOnlineLisPort -ChassisID 'AA-BB-CC-DD-EE-01' -PortID 'Port1'
```
```output
PortID  ChassisID         LocationId                           Description
------  ---------         ----------                           -----------
Port1   AA-BB-CC-DD-EE-01 11111111-1111-1111-1111-111111111111
```

Example 2 retrieves the location information for Port1 with ChassisID AA-BB-CC-DD-EE-01.

### Example 3: Filter by multiple chassis IDs
```powershell
Get-CsOnlineLisPort -Filter "ChassisID -in ['AA-BB-CC-DD-EE-01', 'AA-BB-CC-DD-EE-02']"
```
```output
PortID  ChassisID         LocationId                           Description
------  ---------         ----------                           -----------
Port1   AA-BB-CC-DD-EE-01 11111111-1111-1111-1111-111111111111
Port2   AA-BB-CC-DD-EE-02 22222222-2222-2222-2222-222222222222
```

This example returns ports whose ChassisID matches either value in the filter, together with their associated location information.

## PARAMETERS

### -ChassisID

> Applicable: Microsoft Teams

The Media Access Control (MAC) address of the port's switch. This value is in the form `nn-nn-nn-nn-nn-nn`, such as `12-34-56-78-90-ab`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Filter

> Applicable: Microsoft Teams

Filters ports by property values.
For example, use `ChassisID -in ['AA-BB-CC-DD-EE-01', 'AA-BB-CC-DD-EE-02']` to retrieve ports on either switch.

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

### -PortID

> Applicable: Microsoft Teams

This parameter identifies the ID of the port.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Guid

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsOnlineLisPort](./Set-CsOnlineLisPort.md)

[Remove-CsOnlineLisPort](./Remove-CsOnlineLisPort.md)
