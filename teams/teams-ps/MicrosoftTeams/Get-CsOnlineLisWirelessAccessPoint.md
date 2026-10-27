---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlineliswirelessaccesspoint
schema: 2.0.0
title: Get-CsOnlineLisWirelessAccessPoint
---

# Get-CsOnlineLisWirelessAccessPoint

## SYNOPSIS
Retrieves one or more wireless access points (WAPs) from the location configuration database.

## SYNTAX

```
Get-CsOnlineLisWirelessAccessPoint [[-BSSID] <string>] [-Filter <string>] [-Force] [-IsDebug <bool>] [-NCSApiUrl <string>] [-TargetStore <string>] [<CommonParameters>]
```

## DESCRIPTION
Each WAP can be associated with a location. When you use this cmdlet, it retrieves the location information for the WAPs. Use this location association in an Enhanced 9-1-1 (E9-1-1) Enterprise Voice implementation to notify an emergency services operator of the caller's location.

Enhanced 9-1-1 allows an emergency operator to identify the location of a caller without asking the caller for that information. When a caller uses a Voice over Internet Protocol (VoIP) connection, the operator extracts location information based on various connection factors. The VoIP administrator configures a location map (called a wiremap) that determines a caller's location. This cmdlet retrieves information on associations between physical locations and the WAP through which the client is connected.

Use the BSSID (Basic Service Set Identifiers) to describe sections of a wireless local area network. It's the MAC of the 802.11 side of the access point. The BSSID parameter in this command supports the wildcard format to cover all BSSIDs in the range that share the same description and Location ID. The wildcard `*` can be on either the last one or two characters.

If a BSSID with a wildcard format exists, a location request with a WAP in this wildcard range returns the access point that you configured with the wildcard format.

Use the `Filter` parameter to retrieve access points that match a filter expression, such as a list of configured BSSIDs.

## EXAMPLES

### Example 1
```powershell
Get-CsOnlineLisWirelessAccessPoint
```
```output
BSSID             LocationId                           Description
-----             ----------                           -----------
AA-BB-CC-DD-EE-01 11111111-1111-1111-1111-111111111111 AccessPoint1
AA-BB-CC-DD-EE-02 22222222-2222-2222-2222-222222222222 AccessPoint2
AA-BB-CC-DD-EE-*  33333333-3333-3333-3333-333333333333 AccessPointGroup
```

This example retrieves all Location Information Server (LIS) wireless access points and any associated locations.

### Example 2
```powershell
Get-CsOnlineLisWirelessAccessPoint -BSSID AA-BB-CC-DD-EE-01
```
```output
BSSID             LocationId                           Description
-----             ----------                           -----------
AA-BB-CC-DD-EE-01 11111111-1111-1111-1111-111111111111 AccessPoint1
```

This example retrieves Location Information Server (LIS) wireless access point `AA-BB-CC-DD-EE-01` and associated location.

### Example 3
```powershell
Get-CsOnlineLisWirelessAccessPoint -BSSID AA-BB-CC-DD-EE-*
```
```output
BSSID             LocationId                           Description
-----             ----------                           -----------
AA-BB-CC-DD-EE-*  33333333-3333-3333-3333-333333333333 AccessPointGroup
```

Example 3 retrieves Location Information Server (LIS) wireless access point `AA-BB-CC-DD-EE-*` and associated location.

### Example 4
```powershell
Get-CsOnlineLisWirelessAccessPoint -BSSID AA-BB-CC-DD-EE-03
```
```output
BSSID             LocationId                           Description
-----             ----------                           -----------
AA-BB-CC-DD-EE-*  33333333-3333-3333-3333-333333333333 AccessPointGroup
```

Example 4 retrieves Location Information Server (LIS) wireless access point `AA-BB-CC-DD-EE-03` and associated location.

### Example 5: Filter by multiple BSSIDs
```powershell
Get-CsOnlineLisWirelessAccessPoint -Filter "BSSID -in ['AA-BB-CC-DD-EE-01', 'AA-BB-CC-DD-EE-*']"
```
```output
BSSID             LocationId                           Description
-----             ----------                           -----------
AA-BB-CC-DD-EE-01 11111111-1111-1111-1111-111111111111 AccessPoint1
AA-BB-CC-DD-EE-*  33333333-3333-3333-3333-333333333333 AccessPointGroup
```

This example returns access points whose BSSID matches either value in the filter, together with their associated location information.
The list includes both a specific BSSID and a configured wildcard BSSID.

## PARAMETERS

### -BSSID

> Applicable: Microsoft Teams

The Basic Service Set Identifier (BSSID) of the wireless access point. This value must be in the form `nn-nn-nn-nn-nn-nn`, such as `12-34-56-78-90-ab`. You can present it in wildcard format. The wildcard `*` can be on either the last one or two characters.

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

### -Filter

> Applicable: Microsoft Teams

Filters wireless access points by property values.
For example, use `BSSID -in ['AA-BB-CC-DD-EE-01', 'AA-BB-CC-DD-EE-*']` to retrieve the access points identified by either configured BSSID.

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

The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If you don't provide the Force switch in the command, the command prompts you for administrative input if required.

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

### System.String

## OUTPUTS

### System.Object

## NOTES

## Related links

[Set-CsOnlineLisWirelessAccessPoint](./Set-CsOnlineLisWirelessAccessPoint.md)

[Remove-CsOnlineLisWirelessAccessPoint](./Remove-CsOnlineLisWirelessAccessPoint.md)
